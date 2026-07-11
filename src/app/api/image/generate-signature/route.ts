// app/api/image/generate-signature/route.ts (সঠিক এবং সম্পূর্ণ ভার্সন)

import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

type CloudinarySignatureParams = {
  timestamp: number;
  transformation: string;
  folder?: string;
  public_id?: string;
  invalidate?: boolean;
};

export async function POST(req: Request) {
  try {
    const { folder, public_id } = await req.json();

    if (!folder && !public_id) {
      return NextResponse.json(
        { success: false, message: "Folder or public_id is required." },
        { status: 400 },
      );
    }

    const timestamp = Math.round(new Date().getTime() / 1000);

    const paramsToSign: CloudinarySignatureParams = {
      timestamp: timestamp,
      transformation: "q_auto:good,f_auto",
    };

    if (public_id) {
      paramsToSign.public_id = public_id;
      paramsToSign.invalidate = true;
    } else if (folder) {
      paramsToSign.folder = folder;
    }

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_API_SECRET!,
    );

    return NextResponse.json({
      success: true,
      data: {
        signature,
        timestamp,
        apiKey: process.env.CLOUDINARY_API_KEY,
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      },
    });
  } catch (error) {
    console.error("Error generating signature:", error);
    return NextResponse.json(
      { success: false, message: "Error generating signature." },
      { status: 500 },
    );
  }
}
