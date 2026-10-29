import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import { ContactPageContent } from "@/models/ContactPageContent";
import { defaultContactPageContent } from "@/data/defaultContact";

export async function GET() {
  try {
    await connectDB();

    if (mongoose.models.ContactPageContent) {
      delete mongoose.models.ContactPageContent;
    }
    const FreshContactModel = mongoose.model(
      "ContactPageContent",
      ContactPageContent.schema
    );

    let content = (await FreshContactModel.findOne().lean()) as any;

    if (!content) {
      console.log("No contact content found in DB, seeding defaults...");
      const created = await FreshContactModel.create(defaultContactPageContent as any);
      return NextResponse.json({ success: true, data: created });
    }

    // Auto-migrate: check if inquiry or direct need newer form fields
    let modified = false;
    if (content.inquiry && (!content.inquiry.formTitle || !content.inquiry.requirementOptions || content.inquiry.requirementOptions.length === 0)) {
      content.inquiry = {
        ...defaultContactPageContent.inquiry,
        ...content.inquiry,
        formTitle: content.inquiry.formTitle || defaultContactPageContent.inquiry.formTitle,
        formSubtitle: content.inquiry.formSubtitle || defaultContactPageContent.inquiry.formSubtitle,
        successTitle: content.inquiry.successTitle || defaultContactPageContent.inquiry.successTitle,
        successMessage: content.inquiry.successMessage || defaultContactPageContent.inquiry.successMessage,
        supportPhone: content.inquiry.supportPhone || defaultContactPageContent.inquiry.supportPhone,
        responseWindow: content.inquiry.responseWindow || defaultContactPageContent.inquiry.responseWindow,
        fileUploadNote: content.inquiry.fileUploadNote || defaultContactPageContent.inquiry.fileUploadNote,
        requirementOptions: content.inquiry.requirementOptions?.length ? content.inquiry.requirementOptions : defaultContactPageContent.inquiry.requirementOptions,
      };
      modified = true;
    }

    if (content.direct && (!content.direct.quickForm || !content.direct.mapDirectionUrl)) {
      content.direct = {
        ...defaultContactPageContent.direct,
        ...content.direct,
        mapDirectionUrl: content.direct.mapDirectionUrl || defaultContactPageContent.direct.mapDirectionUrl,
        socialLinkedIn: content.direct.socialLinkedIn || defaultContactPageContent.direct.socialLinkedIn,
        socialFacebook: content.direct.socialFacebook || defaultContactPageContent.direct.socialFacebook,
        socialYouTube: content.direct.socialYouTube || defaultContactPageContent.direct.socialYouTube,
        socialInstagram: content.direct.socialInstagram || defaultContactPageContent.direct.socialInstagram,
        quickForm: {
          ...defaultContactPageContent.direct.quickForm,
          ...(content.direct.quickForm || {}),
        },
      };
      modified = true;
    }

    if (modified) {
      await FreshContactModel.updateOne(
        {},
        {
          $set: {
            inquiry: content.inquiry,
            direct: content.direct,
            updatedAt: new Date(),
          },
        }
      );
    }

    return NextResponse.json({ success: true, data: content });
  } catch (error: any) {
    console.error("GET /api/contact error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch contact content" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    await connectDB();

    if (mongoose.models.ContactPageContent) {
      delete mongoose.models.ContactPageContent;
    }
    const FreshContactModel = mongoose.model(
      "ContactPageContent",
      ContactPageContent.schema
    );

    const body = await request.json();

    const updated = await FreshContactModel.findOneAndUpdate(
      {},
      {
        heroBanner: body.heroBanner,
        intro: body.intro,
        inquiry: body.inquiry,
        direct: body.direct,
        updatedAt: new Date(),
      },
      { new: true, upsert: true, runValidators: true }
    );

    return NextResponse.json({
      success: true,
      message: "Contact page content saved successfully",
      data: updated,
    });
  } catch (error: any) {
    console.error("PUT /api/contact error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update contact content" },
      { status: 500 }
    );
  }
}

