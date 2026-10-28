import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { InfrastructurePageContent } from "@/models/InfrastructurePageContent";
import { DEFAULT_INFRASTRUCTURE_DATA } from "@/data/defaultInfrastructure";
import { getCurrentAdmin } from "@/lib/auth";

export async function GET() {
  try {
    await connectDB();

    let content = await InfrastructurePageContent.findOne().lean();

    if (!content) {
      const created = await InfrastructurePageContent.create(DEFAULT_INFRASTRUCTURE_DATA);
      return NextResponse.json({ success: true, data: created });
    }

    // Auto-migration check: If any missing top-level section, merge with default
    let modified = false;
    const requiredSections = [
      "hero",
      "facilityOverview",
      "cnc",
      "edm",
      "mouldAssembly",
      "qualityInspection",
      "testingValidation",
      "warehouseLogistics",
      "engineeringDesign",
      "faqs",
      "cta",
    ];

    for (const sec of requiredSections) {
      if (!(content as any)[sec] || Object.keys((content as any)[sec] || {}).length === 0) {
        (content as any)[sec] = (DEFAULT_INFRASTRUCTURE_DATA as any)[sec];
        modified = true;
      }
    }

    if (modified) {
      await InfrastructurePageContent.updateOne({}, { $set: content });
    }

    return NextResponse.json({ success: true, data: content });
  } catch (error: any) {
    console.error("GET /api/infrastructure error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch infrastructure content" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const body = await req.json();

    const updated = await InfrastructurePageContent.findOneAndUpdate(
      {},
      { $set: body },
      { new: true, upsert: true }
    );

    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    console.error("PUT /api/infrastructure error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to update infrastructure content" },
      { status: 500 }
    );
  }
}
