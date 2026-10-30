import mongoose, { Schema, Document } from "mongoose";
import {
  LegalHeroData,
  LegalNoticeBannerData,
  LegalSidebarCardData,
  LegalSectionItem,
  LegalBottomLinkData,
} from "../data/defaultLegal";

export interface ILegalPageContent extends Document {
  pageType: "privacy-policy" | "terms-and-conditions";
  hero: LegalHeroData;
  noticeBanner: LegalNoticeBannerData;
  sidebarCard: LegalSidebarCardData;
  sections: LegalSectionItem[];
  bottomLink: LegalBottomLinkData;
  updatedAt: Date;
}

const LegalHeroSchema = new Schema(
  {
    titlePrimary: { type: String, required: true },
    titleHighlight: { type: String, required: true },
    breadcrumbLabel: { type: String, required: true },
    badgeLabel: { type: String, default: "Corporate Governance" },
    lastUpdated: { type: String, default: "March 2026" },
    bannerImage: { type: String, default: "/About/about banner.png" },
  },
  { _id: false }
);

const LegalNoticeBannerSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { _id: false }
);

const LegalSidebarCardSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, default: "sales@patelmould.com" },
    phone: { type: String, default: "+91 77847 58347" },
    address: { type: String, default: "Phase-IV GIDC, Gujarat, India" },
    buttonLabel: { type: String, default: "Contact Legal & Engineering" },
    buttonUrl: { type: String, default: "/contact" },
  },
  { _id: false }
);

const LegalHighlightBoxSchema = new Schema(
  {
    title: { type: String, default: "" },
    text: { type: String, required: true },
    type: { type: String, enum: ["info", "warning", "success"], default: "info" },
  },
  { _id: false }
);

const LegalSectionItemSchema = new Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    iconName: { type: String, default: "ShieldCheck" },
    paragraphs: [{ type: String }],
    bulletPoints: [{ type: String }],
    highlightBox: { type: LegalHighlightBoxSchema, default: null },
  },
  { _id: false }
);

const LegalBottomLinkSchema = new Schema(
  {
    promptText: { type: String, default: "" },
    linkText: { type: String, default: "" },
    linkUrl: { type: String, default: "" },
  },
  { _id: false }
);

const LegalPageContentSchema = new Schema<ILegalPageContent>(
  {
    pageType: {
      type: String,
      required: true,
      unique: true,
      enum: ["privacy-policy", "terms-and-conditions"],
    },
    hero: { type: LegalHeroSchema, required: true },
    noticeBanner: { type: LegalNoticeBannerSchema, required: true },
    sidebarCard: { type: LegalSidebarCardSchema, required: true },
    sections: [LegalSectionItemSchema],
    bottomLink: { type: LegalBottomLinkSchema, required: true },
  },
  {
    timestamps: true,
  }
);

export const LegalPageContent =
  mongoose.models.LegalPageContent ||
  mongoose.model<ILegalPageContent>("LegalPageContent", LegalPageContentSchema);

