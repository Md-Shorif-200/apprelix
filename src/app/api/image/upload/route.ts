import { NextResponse } from "next/server";

import { ImageType } from "@/types/image";
import { uploadImage } from "@/lib/cloudinary/uploadImage";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const type = formData.get("type") as ImageType;

    if (!file) {
      return NextResponse.json({ error: "File missing" }, { status: 400 });
    }

    //  2MB validation (your requirement)
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File must be under 2MB" },
        { status: 400 },
      );
    }

    const result = await uploadImage(file, type);

    return NextResponse.json({
      url: result.secure_url,
      public_id: result.public_id,
      type,
    });
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
