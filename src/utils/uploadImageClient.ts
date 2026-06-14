import { ImageType } from "@/types/image";

export const uploadImageClient = async (file: File, type: ImageType) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("type", type);

  const res = await fetch("/api/image/upload", {
    method: "POST",
    body: formData,
  });

  return res.json();
};
