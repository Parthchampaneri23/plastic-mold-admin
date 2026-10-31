import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import { put } from "@vercel/blob";
import path from "path";
import fs from "fs/promises";

export async function POST(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ success: false, message: "No file provided" }, { status: 400 });
    }

    // 1. IF VERCEL BLOB STORAGE TOKEN IS AVAILABLE (On Vercel Live or Local .env)
    const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
    if (blobToken) {
      const safeFilename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const blob = await put(safeFilename, file, {
        access: "public",
        token: blobToken,
      });

      return NextResponse.json({
        success: true,
        url: blob.url,
        name: file.name,
        size: file.size,
      });
    }

    // 2. FALLBACK FOR LOCAL OFFLINE DEVELOPMENT (Save to disk)
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, safeName);
    await fs.writeFile(filePath, buffer);

    try {
      const websiteUploadDir = path.join(process.cwd(), "..", "plastic-mold-website", "public", "uploads");
      await fs.mkdir(websiteUploadDir, { recursive: true });
      await fs.writeFile(path.join(websiteUploadDir, safeName), buffer);
    } catch {
      // Ignored if website folder has different permissions
    }

    const publicUrl = `/uploads/${safeName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      name: file.name,
      size: file.size,
    });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to upload file" },
      { status: 500 }
    );
  }
}
