import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import { LegalPageContent } from "@/models/LegalPageContent";
import {
  defaultPrivacyPolicyContent,
  defaultTermsAndConditionsContent,
  LegalPageContentData,
} from "@/data/defaultLegal";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type"); // "privacy-policy" or "terms-and-conditions"

    await connectDB();

    if (mongoose.models.LegalPageContent) {
      delete mongoose.models.LegalPageContent;
    }
    const FreshLegalModel = mongoose.model(
      "LegalPageContent",
      LegalPageContent.schema
    );

    // If a specific type requested, return that page
    if (type === "privacy-policy" || type === "terms-and-conditions") {
      let content = await FreshLegalModel.findOne({ pageType: type }).lean();

      if (!content) {
        console.log(`Seeding legal content for ${type}...`);
        const defaultData =
          type === "privacy-policy"
            ? defaultPrivacyPolicyContent
            : defaultTermsAndConditionsContent;

        const created = await FreshLegalModel.create({
          pageType: type,
          ...defaultData,
        });
        return NextResponse.json({ success: true, data: created });
      }

      return NextResponse.json({ success: true, data: content });
    }

    // Otherwise return both pages
    let privacy: any = await FreshLegalModel.findOne({
      pageType: "privacy-policy",
    }).lean();
    let terms: any = await FreshLegalModel.findOne({
      pageType: "terms-and-conditions",
    }).lean();

    if (!privacy) {
      privacy = await FreshLegalModel.create({
        pageType: "privacy-policy",
        ...defaultPrivacyPolicyContent,
      });
    }

    if (!terms) {
      terms = await FreshLegalModel.create({
        pageType: "terms-and-conditions",
        ...defaultTermsAndConditionsContent,
      });
    }

    return NextResponse.json({
      success: true,
      data: {
        privacyPolicy: privacy,
        termsAndConditions: terms,
      },
    });
  } catch (error: any) {
    console.error("GET /api/legal error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch legal page content",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    await connectDB();

    if (mongoose.models.LegalPageContent) {
      delete mongoose.models.LegalPageContent;
    }
    const FreshLegalModel = mongoose.model(
      "LegalPageContent",
      LegalPageContent.schema
    );

    const body = await request.json();
    const { pageType, hero, noticeBanner, sidebarCard, sections, bottomLink } =
      body;

    if (!pageType || !["privacy-policy", "terms-and-conditions"].includes(pageType)) {
      return NextResponse.json(
        { success: false, error: "Invalid or missing pageType parameter" },
        { status: 400 }
      );
    }

    const updated = await FreshLegalModel.findOneAndUpdate(
      { pageType },
      {
        $set: {
          hero,
          noticeBanner,
          sidebarCard,
          sections,
          bottomLink,
          updatedAt: new Date(),
        },
      },
      { upsert: true, new: true, runValidators: true }
    );

    return NextResponse.json({
      success: true,
      message: `Saved ${pageType} content successfully`,
      data: updated,
    });
  } catch (error: any) {
    console.error("PUT /api/legal error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to update legal content",
      },
      { status: 500 }
    );
  }
}
