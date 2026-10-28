import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ManufacturingPageContent } from "@/models/ManufacturingPageContent";
import { DEFAULT_MANUFACTURING_CONTENT } from "@/data/defaultManufacturing";
import { getCurrentAdmin } from "@/lib/auth";

export async function GET() {
  try {
    await connectDB();

    let content = await ManufacturingPageContent.findOne();

    if (!content) {
      content = await ManufacturingPageContent.create(DEFAULT_MANUFACTURING_CONTENT);
    } else {
      let needsSave = false;

      // Auto-sync missing quality fields
      if (content.quality) {
        if (!content.quality.stripItems || content.quality.stripItems.length === 0) {
          content.quality.stripItems = DEFAULT_MANUFACTURING_CONTENT.quality.stripItems;
          needsSave = true;
        }
        if (!content.quality.image) {
          content.quality.image = DEFAULT_MANUFACTURING_CONTENT.quality.image;
          needsSave = true;
        }
        if (!content.quality.processTitle) {
          content.quality.processTitle = DEFAULT_MANUFACTURING_CONTENT.quality.processTitle;
          needsSave = true;
        }
        if (!content.quality.processDescription) {
          content.quality.processDescription = DEFAULT_MANUFACTURING_CONTENT.quality.processDescription;
          needsSave = true;
        }
        if (!content.quality.guaranteeTitle) {
          content.quality.guaranteeBadge = DEFAULT_MANUFACTURING_CONTENT.quality.guaranteeBadge;
          content.quality.guaranteeTitle = DEFAULT_MANUFACTURING_CONTENT.quality.guaranteeTitle;
          content.quality.guaranteeDescription = DEFAULT_MANUFACTURING_CONTENT.quality.guaranteeDescription;
          content.quality.guaranteePrecision = DEFAULT_MANUFACTURING_CONTENT.quality.guaranteePrecision;
          content.quality.guaranteeIso = DEFAULT_MANUFACTURING_CONTENT.quality.guaranteeIso;
          needsSave = true;
        }
        if (!content.quality.stripBadge) {
          content.quality.stripBadge = DEFAULT_MANUFACTURING_CONTENT.quality.stripBadge;
          needsSave = true;
        }
        if (needsSave) {
          content.markModified("quality");
        }
      }

      // Auto-sync missing capacity fields
      if (content.capacity) {
        let capNeedsSave = false;
        if (!content.capacity.facilityTitle) {
          content.capacity.facilityBadge = DEFAULT_MANUFACTURING_CONTENT.capacity.facilityBadge;
          content.capacity.facilitySubheading = DEFAULT_MANUFACTURING_CONTENT.capacity.facilitySubheading;
          content.capacity.facilityTitle = DEFAULT_MANUFACTURING_CONTENT.capacity.facilityTitle;
          content.capacity.facilityDescription = DEFAULT_MANUFACTURING_CONTENT.capacity.facilityDescription;
          content.capacity.facilityImage = DEFAULT_MANUFACTURING_CONTENT.capacity.facilityImage;
          capNeedsSave = true;
        }
        if (!content.capacity.capabilitiesBadge) {
          content.capacity.capabilitiesBadge = DEFAULT_MANUFACTURING_CONTENT.capacity.capabilitiesBadge;
          content.capacity.capabilitiesHeading = DEFAULT_MANUFACTURING_CONTENT.capacity.capabilitiesHeading;
          capNeedsSave = true;
        }
        if (!content.capacity.statsBadge) {
          content.capacity.statsBadge = DEFAULT_MANUFACTURING_CONTENT.capacity.statsBadge;
          content.capacity.statsHeading = DEFAULT_MANUFACTURING_CONTENT.capacity.statsHeading;
          capNeedsSave = true;
        }
        if (capNeedsSave) {
          content.markModified("capacity");
          needsSave = true;
        }
      }

      // Auto-sync missing customSolutions fields
      if (content.customSolutions) {
        let solNeedsSave = false;
        if (!content.customSolutions.image) {
          content.customSolutions.image = DEFAULT_MANUFACTURING_CONTENT.customSolutions.image;
          solNeedsSave = true;
        }
        if (!content.customSolutions.solutionProcessTitle) {
          content.customSolutions.solutionProcessTitle = DEFAULT_MANUFACTURING_CONTENT.customSolutions.solutionProcessTitle;
          content.customSolutions.solutionProcessDescription = DEFAULT_MANUFACTURING_CONTENT.customSolutions.solutionProcessDescription;
          solNeedsSave = true;
        }
        if (!content.customSolutions.confidentialityTitle) {
          content.customSolutions.confidentialityBadge = DEFAULT_MANUFACTURING_CONTENT.customSolutions.confidentialityBadge;
          content.customSolutions.confidentialityTitle = DEFAULT_MANUFACTURING_CONTENT.customSolutions.confidentialityTitle;
          content.customSolutions.confidentialityDescription = DEFAULT_MANUFACTURING_CONTENT.customSolutions.confidentialityDescription;
          content.customSolutions.confidentialityNda = DEFAULT_MANUFACTURING_CONTENT.customSolutions.confidentialityNda;
          content.customSolutions.confidentialityDfm = DEFAULT_MANUFACTURING_CONTENT.customSolutions.confidentialityDfm;
          solNeedsSave = true;
        }
        if (!content.customSolutions.ctaTitle) {
          content.customSolutions.ctaBadge = DEFAULT_MANUFACTURING_CONTENT.customSolutions.ctaBadge;
          content.customSolutions.ctaTitle = DEFAULT_MANUFACTURING_CONTENT.customSolutions.ctaTitle;
          content.customSolutions.ctaDescription = DEFAULT_MANUFACTURING_CONTENT.customSolutions.ctaDescription;
          content.customSolutions.ctaButtonText = DEFAULT_MANUFACTURING_CONTENT.customSolutions.ctaButtonText;
          content.customSolutions.ctaButtonLink = DEFAULT_MANUFACTURING_CONTENT.customSolutions.ctaButtonLink;
          solNeedsSave = true;
        }
        if (solNeedsSave) {
          content.markModified("customSolutions");
          needsSave = true;
        }
      }

      if (needsSave) {
        await content.save();
      }
    }

    return NextResponse.json(
      {
        success: true,
        data: content,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (error: any) {
    console.error("GET /api/manufacturing error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch manufacturing page content",
        data: DEFAULT_MANUFACTURING_CONTENT,
      },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const body = await request.json();

    let content = await ManufacturingPageContent.findOne();

    if (!content) {
      content = await ManufacturingPageContent.create({
        ...DEFAULT_MANUFACTURING_CONTENT,
        ...body,
      });
    } else {
      if (body.hero) content.hero = { ...content.hero, ...body.hero };
      if (body.overview) content.overview = { ...content.overview, ...body.overview };
      if (body.designDevelopment)
        content.designDevelopment = { ...content.designDevelopment, ...body.designDevelopment };
      if (body.precisionMachining)
        content.precisionMachining = { ...content.precisionMachining, ...body.precisionMachining };
      if (body.process) content.process = { ...content.process, ...body.process };
      if (body.machinery) content.machinery = { ...content.machinery, ...body.machinery };
      if (body.capacity) content.capacity = { ...content.capacity, ...body.capacity };
      if (body.quality) content.quality = { ...content.quality, ...body.quality };
      if (body.customSolutions)
        content.customSolutions = { ...content.customSolutions, ...body.customSolutions };

      content.markModified("hero");
      content.markModified("overview");
      content.markModified("designDevelopment");
      content.markModified("precisionMachining");
      content.markModified("process");
      content.markModified("machinery");
      content.markModified("capacity");
      content.markModified("quality");
      content.markModified("customSolutions");

      await content.save();
    }

    return NextResponse.json({
      success: true,
      message: "Manufacturing page content updated successfully",
      data: content,
    });
  } catch (error: any) {
    console.error("PUT /api/manufacturing error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to update manufacturing content",
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
