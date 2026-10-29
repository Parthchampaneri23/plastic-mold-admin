import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { QualityPageContent } from "@/models/QualityPageContent";
import { DEFAULT_QUALITY_PAGE_DATA } from "@/data/defaultQuality";
import { getCurrentAdmin } from "@/lib/auth";

// Public GET endpoint: used by plastic-mold-website & admin panel
export async function GET() {
  try {
    await connectDB();

    let content = await QualityPageContent.findOne().lean();

    if (!content) {
      // Auto initialize with default data
      const created = await QualityPageContent.create(DEFAULT_QUALITY_PAGE_DATA);
      return NextResponse.json({ success: true, data: created });
    }

    // Auto-migration check: If any major section is missing, fill it from defaults
    let modified = false;
    const requiredSections = [
      "heroBanner",
      "overview",
      "policy",
      "process",
      "rawMaterial",
      "inProcess",
      "finalInspection",
      "moldTesting",
      "measurementEquipment",
      "standards",
    ];

    for (const sec of requiredSections) {
      if (!(content as any)[sec] || Object.keys((content as any)[sec] || {}).length === 0) {
        (content as any)[sec] = (DEFAULT_QUALITY_PAGE_DATA as any)[sec];
        modified = true;
      }
    }

    if (modified) {
      await QualityPageContent.updateOne({}, { $set: content });
    }

    return NextResponse.json({ success: true, data: content });
  } catch (error: any) {
    console.error("GET /api/quality error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch quality page content" },
      { status: 500 }
    );
  }
}

// Protected PUT endpoint: save updated content from admin
export async function PUT(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const body = await req.json();

    const updated = await QualityPageContent.findOneAndUpdate(
      {},
      { $set: body },
      { new: true, upsert: true }
    );

    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    console.error("PUT /api/quality error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to update quality page content" },
      { status: 500 }
    );
  }
}

