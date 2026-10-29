import mongoose, { Schema, Document, Model } from "mongoose";

export interface IIndustryApplicationDetail {
  title: string;
  description: string;
  typicalProducts: string[];
}

export interface IIndustryKeyRequirement {
  label: string;
  description: string;
}

export interface IIndustryFaq {
  question: string;
  answer: string;
}

export interface IIndustryItem {
  id: string;
  slug: string;
  name: string;
  badge: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  overviewParagraphs: string[];
  image: string;
  keyRequirements: IIndustryKeyRequirement[];
  applications: IIndustryApplicationDetail[];
  relatedProductSlugs: string[];
  faqs?: IIndustryFaq[];
  order?: number;
}

export interface IIndustriesHero {
  titlePart1: string;
  titleHighlight: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bannerImage: string;
}

export interface IIndustriesGridSection {
  badge: string;
  heading: string;
  headingHighlight: string;
  description: string;
}

export interface IIndustryPageContent extends Document {
  hero: IIndustriesHero;
  gridSection: IIndustriesGridSection;
  industries: IIndustryItem[];
  updatedAt: Date;
  createdAt: Date;
}

const IndustryApplicationDetailSchema = new Schema(
  {
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    typicalProducts: [{ type: String }],
  },
  { _id: false }
);

const IndustryKeyRequirementSchema = new Schema(
  {
    label: { type: String, default: "" },
    description: { type: String, default: "" },
  },
  { _id: false }
);

const IndustryFaqSchema = new Schema(
  {
    question: { type: String, default: "" },
    answer: { type: String, default: "" },
  },
  { _id: false }
);

const IndustryItemSchema = new Schema(
  {
    id: { type: String, required: true },
    slug: { type: String, required: true },
    name: { type: String, required: true },
    badge: { type: String, default: "" },
    shortDescription: { type: String, default: "" },
    heroHeadline: { type: String, default: "" },
    heroSubheadline: { type: String, default: "" },
    overviewParagraphs: [{ type: String }],
    image: { type: String, default: "" },
    keyRequirements: [IndustryKeyRequirementSchema],
    applications: [IndustryApplicationDetailSchema],
    relatedProductSlugs: [{ type: String }],
    faqs: [IndustryFaqSchema],
    order: { type: Number, default: 0 },
  },
  { _id: false }
);

const IndustriesHeroSchema = new Schema(
  {
    titlePart1: { type: String, default: "Industries We" },
    titleHighlight: { type: String, default: "Serve" },
    breadcrumbHome: { type: String, default: "Home" },
    breadcrumbCurrent: { type: String, default: "Industries" },
    bannerImage: { type: String, default: "/industries/industries-banner.jpg" },
  },
  { _id: false }
);

const IndustriesGridSectionSchema = new Schema(
  {
    badge: { type: String, default: "APPLICATION SECTORS" },
    heading: { type: String, default: "Precision Mould Solutions for" },
    headingHighlight: { type: String, default: "Critical Sectors" },
    description: {
      type: String,
      default:
        "From high-speed beverage bottling preforms to leak-proof chemical drums and cleanroom pharmaceutical containers, Patel Mould Industries engineers tailored tooling systems meeting the exacting standards of Indian and global manufacturers.",
    },
  },
  { _id: false }
);

const IndustryPageContentSchema = new Schema<IIndustryPageContent>(
  {
    hero: { type: IndustriesHeroSchema, default: () => ({}) },
    gridSection: { type: IndustriesGridSectionSchema, default: () => ({}) },
    industries: [IndustryItemSchema],
  },
  {
    timestamps: true,
  }
);

if (mongoose.models.IndustryPageContent) {
  delete mongoose.models.IndustryPageContent;
}

export const IndustryPageContent: Model<IIndustryPageContent> =
  mongoose.model<IIndustryPageContent>("IndustryPageContent", IndustryPageContentSchema);

