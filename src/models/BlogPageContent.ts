import mongoose, { Schema, Document } from "mongoose";
import {
  BlogHeroBannerData,
  BlogIntroSectionData,
  BlogCategoryFilterItem,
  BlogPost,
} from "../data/defaultBlogs";

export interface IBlogPageContent extends Document {
  heroBanner: BlogHeroBannerData;
  intro: BlogIntroSectionData;
  categories: BlogCategoryFilterItem[];
  posts: BlogPost[];
  updatedAt: Date;
}

const BlogHeroBannerSchema = new Schema(
  {
    titlePart1: { type: String, default: "Insights &" },
    titleHighlight: { type: String, default: "Articles" },
    breadcrumbHome: { type: String, default: "Home" },
    breadcrumbCurrent: { type: String, default: "Blogs" },
    bannerImage: { type: String, default: "/blogs/blog-banner.jpg" },
  },
  { _id: false }
);

const BlogIntroSectionSchema = new Schema(
  {
    badge: { type: String, default: "Mould Engineering Knowledge Base" },
    headingPart1: { type: String, default: "Technical Insights from Our" },
    headingHighlight: { type: String, default: "Gujarat Toolroom" },
    description: {
      type: String,
      default:
        "Authoritative, deeply technical articles written by our senior mold engineers and toolmakers on cycle time optimization, tool steels, pharmaceutical ISBM tooling, and extrusion blow mold engineering.",
    },
  },
  { _id: false }
);

const BlogCategoryFilterItemSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
  },
  { _id: false }
);

const BlogCalloutSchema = new Schema(
  {
    title: { type: String, default: "" },
    text: { type: String, default: "" },
    type: { type: String, enum: ["tip", "info", "important"], default: "tip" },
  },
  { _id: false }
);

const BlogSpecsTableSchema = new Schema(
  {
    parameter: { type: String, default: "" },
    recommendation: { type: String, default: "" },
    impact: { type: String, default: "" },
  },
  { _id: false }
);

const BlogSectionSchema = new Schema(
  {
    heading: { type: String, required: true },
    subheading: { type: String, default: "" },
    body: [{ type: String }],
    bulletPoints: [{ type: String }],
    callout: { type: BlogCalloutSchema, default: null },
    specsTable: [BlogSpecsTableSchema],
  },
  { _id: false }
);

const BlogFAQItemSchema = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false }
);

const BlogPostSchema = new Schema(
  {
    id: { type: String, required: true },
    slug: { type: String, required: true },
    title: { type: String, required: true },
    shortTitle: { type: String, default: "" },
    category: { type: String, required: true },
    categorySlug: {
      type: String,
      enum: ["engineering", "materials", "pharmaceutical", "manufacturing"],
      default: "engineering",
    },
    date: { type: String, default: "" },
    readTime: { type: String, default: "5 min read" },
    author: {
      name: { type: String, default: "Patel Mould Technical Team" },
      role: { type: String, default: "Chief Tooling Specialist" },
      avatar: { type: String, default: "" },
    },
    summary: { type: String, default: "" },
    image: { type: String, required: true },
    featured: { type: Boolean, default: false },
    tags: [{ type: String }],
    tableOfContents: [
      {
        id: { type: String, default: "" },
        label: { type: String, default: "" },
        _id: false,
      },
    ],
    content: {
      introduction: [{ type: String }],
      keyTakeaways: [{ type: String }],
      sections: [BlogSectionSchema],
      conclusion: [{ type: String }],
    },
    relatedProductSlugs: [{ type: String }],
    faqs: [BlogFAQItemSchema],
  },
  { _id: false }
);

const BlogPageContentSchema = new Schema<IBlogPageContent>(
  {
    heroBanner: { type: BlogHeroBannerSchema, default: () => ({}) },
    intro: { type: BlogIntroSectionSchema, default: () => ({}) },
    categories: [BlogCategoryFilterItemSchema],
    posts: [BlogPostSchema],
  },
  {
    timestamps: true,
  }
);

export const BlogPageContent =
  mongoose.models.BlogPageContent ||
  mongoose.model<IBlogPageContent>("BlogPageContent", BlogPageContentSchema);

export default BlogPageContent;

