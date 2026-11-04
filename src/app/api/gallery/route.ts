import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import { GalleryPageContent } from "@/models/GalleryPageContent";
import { defaultGalleryPageContent } from "@/data/defaultGallery";

export async function GET() {
  try {
    await connectDB();

    // Ensure model freshness
    if (mongoose.models.GalleryPageContent) {
      delete mongoose.models.GalleryPageContent;
    }
    const FreshGalleryModel = mongoose.model(
      "GalleryPageContent",
      GalleryPageContent.schema
    );

    let content: any = await FreshGalleryModel.findOne().lean();

    if (!content) {
      console.log("No gallery content found in DB, seeding defaults...");
      const created = await FreshGalleryModel.create(defaultGalleryPageContent as any);
      return NextResponse.json({ success: true, data: created });
    }

    // Ensure categories exists for legacy databases
    if (!content.categories || content.categories.length === 0) {
      content.categories = defaultGalleryPageContent.categories;
    }

    return NextResponse.json({ success: true, data: content });
  } catch (error: any) {
    console.error("GET /api/gallery error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch gallery page content" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    await connectDB();

    if (mongoose.models.GalleryPageContent) {
      delete mongoose.models.GalleryPageContent;
    }
    const FreshGalleryModel = mongoose.model(
      "GalleryPageContent",
      GalleryPageContent.schema
    );

    const body = await request.json();

    // Server-side validation: prevent blank or duplicate category names
    if (Array.isArray(body.categories)) {
      for (let i = 0; i < body.categories.length; i++) {
        const cat = body.categories[i];
        if (!cat.name || !cat.name.trim()) {
          return NextResponse.json(
            { success: false, error: `Category #${i + 1} Name cannot be blank.` },
            { status: 400 }
          );
        }
      }

      const names = body.categories.map((c: any) => (c.name || "").trim().toLowerCase()).filter(Boolean);
      const duplicate = names.find((name: string, idx: number) => names.indexOf(name) !== idx);
      if (duplicate) {
        return NextResponse.json(
          {
            success: false,
            error: "Category already exists. Category names must be unique.",
          },
          { status: 400 }
        );
      }
    }

    const updated = await FreshGalleryModel.findOneAndUpdate(
      {},
      {
        heroBanner: body.heroBanner,
        intro: body.intro,
        categories: body.categories,
        featuredCollections: body.featuredCollections,
        items: body.items,
        updatedAt: new Date(),
      },
      { new: true, upsert: true, runValidators: true }
    );

    return NextResponse.json({
      success: true,
      message: "Gallery page content saved successfully",
      data: updated,
    });
  } catch (error: any) {
    console.error("PUT /api/gallery error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update gallery page content" },
      { status: 500 }
    );
  }
}
