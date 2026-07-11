import { RfqFileType } from "@/types/image";
import { deleteImageClient } from "@/utils/deleteImageClient";
import { uploadImageClient } from "@/utils/uploadImageClient";
import { UploadedFile } from "../types/rfq-form.types";
import { RfqItem } from "../types/rfq-list.type";

export type RemovedRfqFiles = {
  referenceImages: UploadedFile[];
  techSheet: UploadedFile | null;
  otherAttachments: UploadedFile[];
};

export const emptyRemovedRfqFiles = (): RemovedRfqFiles => ({
  referenceImages: [],
  techSheet: null,
  otherAttachments: [],
});

export function collectRfqPublicIds(rfq: RfqItem): string[] {
  const publicIds: string[] = [];

  const referenceImages = (rfq.referenceImages as UploadedFile[]) || [];
  referenceImages.forEach((file) => {
    if (file.publicId) publicIds.push(file.publicId);
  });

  const techSheet = rfq.techSheet as UploadedFile | null;
  if (techSheet?.publicId) publicIds.push(techSheet.publicId);

  const otherAttachments = (rfq.otherAttachments as UploadedFile[]) || [];
  otherAttachments.forEach((file) => {
    if (file.publicId) publicIds.push(file.publicId);
  });

  return publicIds;
}

export async function deleteCloudinaryFiles(publicIds: string[]): Promise<void> {
  const uniqueIds = [...new Set(publicIds.filter(Boolean))];
  if (uniqueIds.length === 0) return;

  const results = await Promise.allSettled(
    uniqueIds.map((publicId) => deleteImageClient(publicId)),
  );

  const failed = results.filter((result) => result.status === "rejected");
  if (failed.length > 0) {
    throw new Error("Failed to delete some files from Cloudinary.");
  }
}

export async function deleteRfqCloudinaryAssets(rfq: RfqItem): Promise<void> {
  await deleteCloudinaryFiles(collectRfqPublicIds(rfq));
}

export async function uploadRfqFilesWithReplace(
  files: File[],
  type: RfqFileType,
  replacePublicIds: string[] = [],
): Promise<UploadedFile[]> {
  if (!files || files.length === 0) return [];

  const uploadPromises = files.map((file, index) =>
    uploadImageClient(file, type, replacePublicIds[index]),
  );

  const results = await Promise.allSettled(uploadPromises);
  const successfulUploads: UploadedFile[] = [];
  const failedUploads: PromiseRejectedResult[] = [];

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      successfulUploads.push({
        url: result.value.url,
        publicId: result.value.public_id,
      });
    } else {
      failedUploads.push(result);
      console.error(`Failed to upload ${files[index].name}:`, result.reason);
    }
  });

  if (failedUploads.length > 0) {
    const errorMessage =
      failedUploads[0].reason?.message ||
      "Some files failed to upload. Please try again.";
    throw new Error(errorMessage);
  }

  return successfulUploads;
}

export async function resolveRfqFileUpdates({
  newReferenceImages,
  newTechSheet,
  newOtherAttachments,
  existingFiles,
  removedFiles,
}: {
  newReferenceImages: File[];
  newTechSheet?: File;
  newOtherAttachments: File[];
  existingFiles: {
    referenceImages: UploadedFile[];
    techSheet: UploadedFile | null;
    otherAttachments: UploadedFile[];
  };
  removedFiles: RemovedRfqFiles;
}) {
  const referenceReplaceIds = removedFiles.referenceImages.map(
    (file) => file.publicId,
  );
  const uploadedReferenceImages = await uploadRfqFilesWithReplace(
    newReferenceImages,
    "referenceImage",
    referenceReplaceIds,
  );

  const unreplacedReferenceRemovals = removedFiles.referenceImages.slice(
    uploadedReferenceImages.length,
  );

  let techSheet = existingFiles.techSheet;
  if (newTechSheet) {
    const replacePublicId =
      existingFiles.techSheet?.publicId ?? removedFiles.techSheet?.publicId;
    const [uploadedTechSheet] = await uploadRfqFilesWithReplace(
      [newTechSheet],
      "techSheet",
      replacePublicId ? [replacePublicId] : [],
    );
    techSheet = uploadedTechSheet;
  } else if (removedFiles.techSheet) {
    techSheet = null;
  }

  const attachmentReplaceIds = removedFiles.otherAttachments.map(
    (file) => file.publicId,
  );
  const uploadedOtherAttachments = await uploadRfqFilesWithReplace(
    newOtherAttachments,
    "otherAttachment",
    attachmentReplaceIds,
  );

  const unreplacedAttachmentRemovals = removedFiles.otherAttachments.slice(
    uploadedOtherAttachments.length,
  );

  await deleteCloudinaryFiles([
    ...unreplacedReferenceRemovals.map((file) => file.publicId),
    ...(removedFiles.techSheet && newTechSheet ? [] : removedFiles.techSheet
      ? [removedFiles.techSheet.publicId]
      : []),
    ...unreplacedAttachmentRemovals.map((file) => file.publicId),
  ]);

  return {
    referenceImages: [...existingFiles.referenceImages, ...uploadedReferenceImages],
    techSheet,
    otherAttachments: [
      ...existingFiles.otherAttachments,
      ...uploadedOtherAttachments,
    ],
  };
}
