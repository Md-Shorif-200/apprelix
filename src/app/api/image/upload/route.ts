import { NextResponse } from "next/server";
import { ImageType } from "@/types/image";
import { uploadImage } from "@/lib/cloudinary/uploadImage";

const getMaxSize = (type: ImageType): number => {
  switch (type) {
    case "profile":
      return 5 * 1024 * 1024; // 5MB
    case "logo":
      return 5 * 1024 * 1024; // 5MB
    case "product":
      return 8 * 1024 * 1024; // 8MB
    case "banner":
      return 10 * 1024 * 1024; // 10MB
    default:
      return 5 * 1024 * 1024; // 5MB
  }
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const type = formData.get("type") as ImageType;
    const oldPublicId = formData.get("oldPublicId") as string | null;

    if (!file) {
      return NextResponse.json({ error: "File missing" }, { status: 400 });
    }

    const maxSize = getMaxSize(type);
    if (file.size > maxSize) {
      const limitMB = maxSize / (1024 * 1024);
      return NextResponse.json(
        { error: `File must be under ${limitMB}MB` },
        { status: 400 },
      );
    }

    const result = await uploadImage(file, type, oldPublicId ?? undefined);

    return NextResponse.json({
      url: result.secure_url,
      public_id: result.public_id,
      type,
    });
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
