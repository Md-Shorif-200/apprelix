import { ImageType } from "@/types/image";

export const uploadImageClient = async (
  file: File,
  type: ImageType,
  oldPublicId?: string, 
) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("type", type);

  if (oldPublicId) {
    formData.append("oldPublicId", oldPublicId);
  }

  const res  = await fetch("/api/image/upload", { method: "POST", body: formData });
  const data = await res.json();

  return data;
};