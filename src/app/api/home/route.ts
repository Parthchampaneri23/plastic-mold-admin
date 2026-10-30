import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { HomePageContent } from "@/models/HomePageContent";
import { getCurrentAdmin } from "@/lib/auth";

// Public GET endpoint: used by plastic-mold-website & admin panel
export async function GET() {
  try {
    await connectDB();
    let content = await HomePageContent.findOne();
    if (!content) {
      // Trigger auto-initialization from seed
      const seedRes = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001"}/api/seed`);
      content = await HomePageContent.findOne();
    }
    return NextResponse.json({ success: true, data: content });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to load home page content" },
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

    let content = await HomePageContent.findOne();
    if (!content) {
      content = new HomePageContent(body);
    } else {
      // Update fields if provided
      if (body.heroSlides !== undefined) content.heroSlides = body.heroSlides;
      if (body.companyStats !== undefined) content.companyStats = body.companyStats;
      if (body.productCategories !== undefined) content.productCategories = body.productCategories;
      if (body.capabilities !== undefined) content.capabilities = body.capabilities;
      if (body.whyChooseUs !== undefined) content.whyChooseUs = body.whyChooseUs;
      if (body.facilities !== undefined) content.facilities = body.facilities;
      if (body.industries !== undefined) content.industries = body.industries;
      if (body.qualityStandards !== undefined) content.qualityStandards = body.qualityStandards;
      if (body.featuredProducts !== undefined) content.featuredProducts = body.featuredProducts;
      if (body.clientLogoImages !== undefined) content.clientLogoImages = body.clientLogoImages;
      if (body.indianClientLogos !== undefined) content.indianClientLogos = body.indianClientLogos;
      if (body.indianTestimonials !== undefined) content.indianTestimonials = body.indianTestimonials;
      if (body.companyIntro !== undefined) content.companyIntro = body.companyIntro;
      if (body.inquiryCta !== undefined) content.inquiryCta = body.inquiryCta;
      if (body.topBar !== undefined) content.topBar = body.topBar;
      if (body.navbar !== undefined) content.navbar = body.navbar;
      if (body.brandIdentity !== undefined) content.brandIdentity = body.brandIdentity;
      if (body.footer !== undefined) content.footer = body.footer;
    }

    await content.save();

    return NextResponse.json({
      success: true,
      message: "Home page content updated successfully!",
      data: content,
    });
  } catch (error: any) {
    console.error("Home update error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to update home page content" },
      { status: 500 }
    );
  }
}
