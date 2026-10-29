import mongoose, { Schema, Document } from "mongoose";
import {
  GalleryHeroBannerData,
  GalleryIntroData,
  FeaturedCollectionItem,
  GalleryItem,
} from "../data/defaultGallery";

export interface IGalleryPageContent extends Document {
  heroBanner: GalleryHeroBannerData;
  intro: GalleryIntroData;
  featuredCollections: FeaturedCollectionItem[];
  items: GalleryItem[];
  updatedAt: Date;
}

const GalleryHeroBannerSchema = new Schema(
  {
    titlePart1: { type: String, default: "Our" },
    titleHighlight: { type: String, default: "Gallery" },
    breadcrumbHome: { type: String, default: "Home" },
    breadcrumbCurrent: { type: String, default: "Gallery" },
    bannerImage: { type: String, default: "/gallery-banner.jpg" },
  },
  { _id: false }
);

const GalleryIntroSchema = new Schema(
  {
    badge: { type: String, default: "COMPLETE VISUAL ARCHIVE" },
    headingPart1: { type: String, default: "Explore Our" },
    headingHighlight: { type: String, default: "Precision Portfolio" },
    description: {
      type: String,
      default:
        "Explore the Patel Mould Industries manufacturing facility, high-speed 5-axis CNC machinery, spark EDM toolroom, precision PET preform molds, and Zeiss 3D CMM quality inspection in Gujarat, India.",
    },
  },
  { _id: false }
);

const FeaturedCollectionItemSchema = new Schema(
  {
    title: { type: String, required: true },
    tagline: { type: String, default: "" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    category: { type: String, default: "Manufacturing Facility" },
    badge: { type: String, default: "" },
  },
  { _id: false }
);

const GallerySpecificationSchema = new Schema(
  {
    label: { type: String, default: "" },
    value: { type: String, default: "" },
  },
  { _id: false }
);

const GalleryItemSchema = new Schema(
  {
    id: { type: String, required: true },
    slug: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    alt: { type: String, default: "" },
    badge: { type: String, default: "" },
    shortDescription: { type: String, default: "" },
    fullDescription: { type: String, default: "" },
    aspectRatio: {
      type: String,
      enum: ["landscape", "portrait", "square", "wide"],
      default: "landscape",
    },
    featured: { type: Boolean, default: false },
    featuredCollection: { type: String, default: "" },
    keyHighlights: [{ type: String }],
    specifications: [GallerySpecificationSchema],
    applicationContext: { type: String, default: "" },
    relatedCategoryLink: { type: String, default: "" },
  },
  { _id: false }
);

const GalleryPageContentSchema = new Schema<IGalleryPageContent>(
  {
    heroBanner: { type: GalleryHeroBannerSchema, default: () => ({}) },
    intro: { type: GalleryIntroSchema, default: () => ({}) },
    featuredCollections: [FeaturedCollectionItemSchema],
    items: [GalleryItemSchema],
  },
  {
    timestamps: true,
  }
);

export const GalleryPageContent =
  mongoose.models.GalleryPageContent ||
  mongoose.model<IGalleryPageContent>("GalleryPageContent", GalleryPageContentSchema);

export default GalleryPageContent;
