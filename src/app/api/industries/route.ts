import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { IndustryPageContent } from "@/models/IndustryPageContent";
import { DEFAULT_INDUSTRIES_PAGE_DATA } from "@/data/defaultIndustries";
import { getCurrentAdmin } from "@/lib/auth";

// Public GET endpoint: used by plastic-mold-website & admin panel
export async function GET() {
  try {
    await connectDB();

    let content = await IndustryPageContent.findOne().lean();

    if (!content) {
      // Auto initialize with default data
      const created = await IndustryPageContent.create(DEFAULT_INDUSTRIES_PAGE_DATA);
      return NextResponse.json({ success: true, data: created });
    }

    // Auto-migration check: If hero or gridSection or industries are missing, fill them in
    let modified = false;
    if (!content.hero || Object.keys(content.hero).length === 0) {
      content.hero = DEFAULT_INDUSTRIES_PAGE_DATA.hero;
      modified = true;
    }
    if (!content.gridSection || Object.keys(content.gridSection).length === 0) {
      content.gridSection = DEFAULT_INDUSTRIES_PAGE_DATA.gridSection;
      modified = true;
    }
    if (!content.industries || content.industries.length === 0) {
      content.industries = DEFAULT_INDUSTRIES_PAGE_DATA.industries;
      modified = true;
    } else {
      // Ensure each industry has FAQs if empty
      content.industries.forEach((ind: any) => {
        if (!ind.faqs || ind.faqs.length === 0) {
          const matchingDefault = DEFAULT_INDUSTRIES_PAGE_DATA.industries.find(
            (d) => d.slug === ind.slug || d.id === ind.id
          );
          if (matchingDefault && matchingDefault.faqs && matchingDefault.faqs.length > 0) {
            ind.faqs = matchingDefault.faqs;
            modified = true;
          }
        }
      });
    }

    if (modified) {
      await IndustryPageContent.updateOne({}, { $set: content });
    }

    return NextResponse.json({ success: true, data: content });
  } catch (error: any) {
    console.error("GET /api/industries error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch industries content" },
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

    const updated = await IndustryPageContent.findOneAndUpdate(
      {},
      { $set: body },
      { new: true, upsert: true }
    );

    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    console.error("PUT /api/industries error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to update industries content" },
      { status: 500 }
    );
  }
}

