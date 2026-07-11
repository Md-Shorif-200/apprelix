export const deleteImageClient = async (public_id: string) => {
  const res = await fetch("/api/image/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ public_id }),
  });

  const data = await res.json();

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Failed to delete file from Cloudinary.");
  }

  return data;
};
