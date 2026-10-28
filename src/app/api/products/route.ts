import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ProductPageContent } from "@/models/ProductPageContent";
import { getCurrentAdmin } from "@/lib/auth";
import {
  DEFAULT_PRODUCT_HERO,
  DEFAULT_PRODUCT_CATEGORIES,
  DEFAULT_PRODUCTS,
} from "@/data/defaultProducts";

// Public GET endpoint: used by plastic-mold-website & admin panel
export async function GET() {
  try {
    await connectDB();
    let content = await ProductPageContent.findOne();
    if (!content) {
      // Auto initialize with default data
      content = await ProductPageContent.create({
        hero: DEFAULT_PRODUCT_HERO,
        categories: DEFAULT_PRODUCT_CATEGORIES,
        products: DEFAULT_PRODUCTS,
      });
    } else if (content.categories && content.categories.length > 0) {
      // Sync description from DEFAULT_PRODUCT_CATEGORIES if it's the old default
      let needsSave = false;
      content.categories.forEach((cat) => {
        const matchingDefault = DEFAULT_PRODUCT_CATEGORIES.find(
          (d) => d.slug === cat.slug || d.id === cat.id
        );
        if (
          matchingDefault &&
          (!cat.description ||
            cat.description.includes("High cavitation, precision hot-runner") ||
            cat.description.includes("Single-stage Injection Stretch Blow") ||
            cat.description.includes("Durable extrusion blow moulds engineered for HDPE"))
        ) {
          cat.description = matchingDefault.description;
          needsSave = true;
        }
      });

      // Sync FAQs from DEFAULT_PRODUCTS if product has empty faqs
      if (content.products && content.products.length > 0) {
        content.products.forEach((prod: any) => {
          if (!prod.faqs || prod.faqs.length === 0) {
            const matchingDefaultProd = DEFAULT_PRODUCTS.find(
              (p) => p.slug === prod.slug || p.id === prod.id
            );
            if (matchingDefaultProd && matchingDefaultProd.faqs && matchingDefaultProd.faqs.length > 0) {
              prod.faqs = matchingDefaultProd.faqs;
              needsSave = true;
            }
          }
        });
        if (needsSave) {
          content.markModified("products");
        }
      }

      if (needsSave) {
        await content.save();
      }
    }
    return NextResponse.json({ success: true, data: content });
  } catch (error: any) {
    console.error("Products GET error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to load products page content" },
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

    let content = await ProductPageContent.findOne();
    if (!content) {
      content = new ProductPageContent(body);
    } else {
      if (body.hero !== undefined) content.hero = body.hero;
      if (body.categories !== undefined) content.categories = body.categories;
      if (body.products !== undefined) content.products = body.products;
    }

    await content.save();

    return NextResponse.json({
      success: true,
      message: "Products content updated successfully!",
      data: content,
    });
  } catch (error: any) {
    console.error("Products PUT error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to update products content" },
      { status: 500 }
    );
  }
}
