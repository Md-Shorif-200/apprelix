import cloudinary from "./cloudinary";
import type { UploadApiResponse } from "cloudinary";
import { ImageType } from "@/types/image";

const getFolder = (type: ImageType) => {
  switch (type) {
    case "profile":
      return "apprelix/profile";
    case "product":
      return "apprelix/product";
    case "banner":
      return "apprelix/banner";
    default:
      return "apprelix/others";
  }
};

export const uploadImage = async (
  file: File,
  type: ImageType
): Promise<UploadApiResponse> => {
  const buffer = Buffer.from(await file.arrayBuffer());

  return new Promise<UploadApiResponse>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: getFolder(type),

        // 🔥 Auto compression + quality control
        transformation: [
          {
            quality: "auto:good",
            fetch_format: "auto",
          },
        ],

        // optional max size control (Cloudinary handles compression automatically)
        resource_type: "image",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result as UploadApiResponse);
      }
    );

    stream.end(buffer);
  });
};