import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { HomePageContent } from "@/models/HomePageContent";
import { ProductPageContent } from "@/models/ProductPageContent";
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

    // Validate duplicate product categories if updating home categories
    if (body.productCategories && Array.isArray(body.productCategories)) {
      const trimmedNames = body.productCategories
        .map((c: any) => (typeof c.name === "string" ? c.name.trim().toLowerCase() : ""))
        .filter(Boolean);

      const seen = new Set<string>();
      let duplicateName: string | null = null;
      for (const name of trimmedNames) {
        if (seen.has(name)) {
          duplicateName = name;
          break;
        }
        seen.add(name);
      }

      if (duplicateName) {
        return NextResponse.json(
          {
            success: false,
            message: "Category already exists. Category names must be unique.",
          },
          { status: 400 }
        );
      }
    }

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

    // Synchronize productCategories with ProductPageContent.categories
    if (body.productCategories !== undefined && Array.isArray(body.productCategories)) {
      try {
        let productPage = await ProductPageContent.findOne();
        if (productPage) {
          const existingProductCats = productPage.categories || [];
          const updatedProductCats = body.productCategories.map((homeCat: any) => {
            const existing = existingProductCats.find(
              (p: any) => p.id === homeCat.id || p.slug === homeCat.id || p.name === homeCat.name
            );
            const derivedSlug = (homeCat.id || homeCat.name || "category")
              .toLowerCase()
              .replace(/-mold$|-mould$/, "")
              .replace(/\s+/g, "-");
            return {
              id: existing?.id || homeCat.id,
              slug: existing?.slug || derivedSlug,
              name: homeCat.name,
              label: existing?.label || homeCat.name.toUpperCase(),
              description: homeCat.shortDesc || existing?.description || "",
              image: homeCat.image || existing?.image || "/product/pet-preform-mold.png",
              isActive: homeCat.isActive !== undefined ? homeCat.isActive : (existing?.isActive !== undefined ? existing.isActive : true),
              order: homeCat.order !== undefined ? homeCat.order : (existing?.order !== undefined ? existing.order : 0),
              seo: homeCat.seo || existing?.seo || {},
            };
          });
          productPage.categories = updatedProductCats;
          await productPage.save();
        }
      } catch (syncErr) {
        console.warn("Could not sync categories to ProductPageContent:", syncErr);
      }
    }

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
