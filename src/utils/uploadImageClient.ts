import { ImageType } from "@/types/image";

export const uploadImageClient = async (file: File, type: ImageType) => {
  const formData = new FormData();

  console.log("Uploading file:", file);

  formData.append("file", file);
  formData.append("type", type);

  const res = await fetch("/api/image/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  console.log("Upload response:", res.status, data);

  return data;
};
