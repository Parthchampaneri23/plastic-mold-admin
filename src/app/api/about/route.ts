import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { AboutPageContent } from "@/models/AboutPageContent";
import { getCurrentAdmin } from "@/lib/auth";
import { DEFAULT_ABOUT_CONTENT } from "@/data/defaultAbout";

// Public GET endpoint: used by plastic-mold-website & admin panel
export async function GET() {
  try {
    await connectDB();
    let content = await AboutPageContent.findOne();
    if (!content) {
      // Auto initialize with default data
      content = await AboutPageContent.create(DEFAULT_ABOUT_CONTENT);
    }
    return NextResponse.json({ success: true, data: content });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to load about page content" },
      { status: 500 }
    );
  }
}

// Protected PUT endpoint: update sections from Admin Panel
export async function PUT(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized. Please login as admin." },
        { status: 401 }
      );
    }

    const body = await req.json();
    await connectDB();

    let content = await AboutPageContent.findOne();
    if (!content) {
      content = new AboutPageContent(body);
    } else {
      if (body.hero !== undefined) content.hero = body.hero;
      if (body.companyIntro !== undefined) content.companyIntro = body.companyIntro;
      if (body.visionMission !== undefined) content.visionMission = body.visionMission;
      if (body.companyStrength !== undefined) content.companyStrength = body.companyStrength;
      if (body.infrastructure !== undefined) content.infrastructure = body.infrastructure;
      if (body.qualityCommitment !== undefined) content.qualityCommitment = body.qualityCommitment;
      if (body.faqsSection !== undefined) content.faqsSection = body.faqsSection;
    }

    await content.save();

    return NextResponse.json({
      success: true,
      message: "About page content updated successfully!",
      data: content,
    });
  } catch (error: any) {
    console.error("About update error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to update about page content" },
      { status: 500 }
    );
  }
}
