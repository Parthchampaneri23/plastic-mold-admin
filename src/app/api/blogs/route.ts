import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import { BlogPageContent } from "@/models/BlogPageContent";
import { defaultBlogPageContent } from "@/data/defaultBlogs";

export async function GET() {
  try {
    await connectDB();

    if (mongoose.models.BlogPageContent) {
      delete mongoose.models.BlogPageContent;
    }
    const FreshBlogModel = mongoose.model(
      "BlogPageContent",
      BlogPageContent.schema
    );

    let content = await FreshBlogModel.findOne().lean();

    if (!content) {
      console.log("No blog content found in DB, seeding defaults...");
      const created = await FreshBlogModel.create(defaultBlogPageContent as any);
      return NextResponse.json({ success: true, data: created });
    }

    // Auto-migrate: check if existing posts in DB lack faqs, and populate from defaultBlogPageContent
    let modified = false;
    if (content.posts && Array.isArray(content.posts)) {
      const defaultPostMap = new Map<string, any>(
        (defaultBlogPageContent.posts || []).map((p: any) => [p.slug, p])
      );

      content.posts = content.posts.map((post: any) => {
        if (!post.faqs || post.faqs.length === 0) {
          const defaultPost = defaultPostMap.get(post.slug);
          if (defaultPost && defaultPost.faqs && defaultPost.faqs.length > 0) {
            post.faqs = defaultPost.faqs;
            modified = true;
          }
        }
        return post;
      });

      if (modified) {
        await FreshBlogModel.updateOne(
          {},
          { $set: { posts: content.posts, updatedAt: new Date() } }
        );
      }
    }

    return NextResponse.json({ success: true, data: content });
  } catch (error: any) {
    console.error("GET /api/blogs error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch blogs content" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    await connectDB();

    if (mongoose.models.BlogPageContent) {
      delete mongoose.models.BlogPageContent;
    }
    const FreshBlogModel = mongoose.model(
      "BlogPageContent",
      BlogPageContent.schema
    );

    const body = await request.json();

    const updated = await FreshBlogModel.findOneAndUpdate(
      {},
      {
        heroBanner: body.heroBanner,
        intro: body.intro,
        categories: body.categories,
        posts: body.posts,
        updatedAt: new Date(),
      },
      { new: true, upsert: true, runValidators: true }
    );

    return NextResponse.json({
      success: true,
      message: "Blogs page content saved successfully",
      data: updated,
    });
  } catch (error: any) {
    console.error("PUT /api/blogs error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update blogs content" },
      { status: 500 }
    );
  }
}

