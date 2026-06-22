import cloudinary from "./cloudinary";
import type { UploadApiResponse } from "cloudinary";
import { ImageType } from "@/types/image";

const getFolder = (type: ImageType) => {
  switch (type) {
    case "profile": return "apprelix/profile";
    case "logo": return "apprelix/logo";
    case "product": return "apprelix/product";
    case "banner":  return "apprelix/banner";
    default:        return "apprelix/others";
  }
};

// old image delete functiopn function
export const deleteImage = async (publicId: string): Promise<void> => {
  await cloudinary.uploader.destroy(publicId);
};

export const uploadImage = async (
  file: File,
  type: ImageType,
  oldPublicId?: string, 
): Promise<UploadApiResponse> => {

  // delete old image
  if (oldPublicId) {
    await deleteImage(oldPublicId);
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  return new Promise<UploadApiResponse>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: getFolder(type),
        transformation: [{ quality: "auto:good", fetch_format: "auto" }],
        resource_type: "image",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result as UploadApiResponse);
      },
    );

    stream.end(buffer);
  });
};