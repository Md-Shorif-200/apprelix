// app/api/image/delete/route.ts (আপডেটেড এবং নিরাপদ ভার্সন)

import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/authOptions";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized: Please log in." },
      { status: 401 },
    );
  }

  try {
    const { public_id } = await req.json();

    if (!public_id) {
      return NextResponse.json(
        { success: false, message: "public_id is required" },
        { status: 400 },
      );
    }

    const result = await cloudinary.uploader.destroy(public_id);

    if (result.result !== "ok" && result.result !== "not found") {
      console.error("Cloudinary delete failed:", result);
      throw new Error("Failed to delete the file from storage.");
    }

    return NextResponse.json({
      success: true,
      message: "File deleted successfully.",
    });
  } catch (error) {
    console.error("Delete failed error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 },
    );
  }
}
