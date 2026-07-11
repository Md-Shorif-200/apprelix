// utils/uploadImageClient.ts (Reusable Version)

import { UploadFileType, RfqFileType, ImageType } from "@/types/image";

const getUploadFolder = (type: UploadFileType): string => {
  const rfqFolders: Partial<Record<RfqFileType, string>> = {
    referenceImage: "apprelix/rfq/reference-images",
    techSheet: "apprelix/rfq/tech-sheets",
    otherAttachment: "apprelix/rfq/other-attachments",
  };

  const imageFolders: Record<ImageType, string> = {
    profile: "apprelix/profile",
    logo: "apprelix/logo",
    product: "apprelix/product",
    banner: "apprelix/banner",
  };

  return (
    rfqFolders[type as RfqFileType] ??
    imageFolders[type as ImageType] ??
    "apprelix/others"
  );
};

// getUploadFolder অপরিবর্তিত...

export const uploadImageClient = async (
  file: File,
  type: UploadFileType,
  oldPublicId?: string,
) => {
  const folder = getUploadFolder(type);

  const signatureBody: { folder?: string; public_id?: string } = {};

  if (oldPublicId) {
    signatureBody.public_id = oldPublicId;
  } else {
    signatureBody.folder = folder;
  }

  const signatureRes = await fetch("/api/image/generate-signature", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signatureBody),
  });

  if (!signatureRes.ok) {
    const errorData = await signatureRes.json();
    throw new Error(errorData.message || "Failed to get upload signature.");
  }

  const { data: signatureData } = await signatureRes.json();
  const { signature, timestamp, apiKey, cloudName } = signatureData;

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("signature", signature);
  formData.append("timestamp", timestamp);
  formData.append("api_key", apiKey);
  formData.append("transformation", "q_auto:good,f_auto");

  if (oldPublicId) {
    formData.append("public_id", oldPublicId);
    formData.append("invalidate", "true");
  } else {
    formData.append("folder", folder);
  }

  const uploadRes = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!uploadRes.ok) {
    const errorData = await uploadRes.json();
    throw new Error(errorData.error.message || "Cloudinary upload failed.");
  }

  const uploadData = await uploadRes.json();

  return {
    url: uploadData.secure_url,
    public_id: uploadData.public_id,
  };
};
