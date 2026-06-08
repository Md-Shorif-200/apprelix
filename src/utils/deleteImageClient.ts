export const deleteImageClient = async (public_id: string) => {
  const res = await fetch("/api/image/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ public_id }),
  });

  return res.json();
};