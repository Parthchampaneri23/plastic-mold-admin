import mongoose, { Schema, Document } from "mongoose";
import {
  ContactHeroBannerData,
  ContactIntroSectionData,
  ContactInquirySectionData,
  ContactDirectSectionData,
} from "../data/defaultContact";

export interface IContactPageContent extends Document {
  heroBanner: ContactHeroBannerData;
  intro: ContactIntroSectionData;
  inquiry: ContactInquirySectionData;
  direct: ContactDirectSectionData;
  updatedAt: Date;
}

const ContactHeroBannerSchema = new Schema(
  {
    titlePart1: { type: String, default: "Contact" },
    titleHighlight: { type: String, default: "Our Team" },
    breadcrumbHome: { type: String, default: "Home" },
    breadcrumbCurrent: { type: String, default: "Contact Us" },
    bannerImage: { type: String, default: "/contact/contact-banner.jpg" },
  },
  { _id: false }
);

const ContactIntroBadgeItemSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },
    iconName: { type: String, default: "ShieldCheck" },
  },
  { _id: false }
);

const ContactIntroSectionSchema = new Schema(
  {
    badge: { type: String, default: "DIRECT TOOLROOM CONSULTATION" },
    headingPart1: { type: String, default: "Let’s Engineer Your Next" },
    headingHighlight: { type: String, default: "Precision Mould" },
    leadParagraph: { type: String, default: "" },
    secondaryParagraph: { type: String, default: "" },
    image: { type: String, default: "/contact/contact-office.jpg" },
    trustBadges: [ContactIntroBadgeItemSchema],
  },
  { _id: false }
);

const ContactInquirySectionSchema = new Schema(
  {
    badge: { type: String, default: "TECHNICAL RFQ & PROPOSAL DESK" },
    headingPart1: { type: String, default: "Request a Technical Quotation &" },
    headingHighlight: { type: String, default: "Project Assessment" },
    description: { type: String, default: "" },
    formTitle: {
      type: String,
      default: "Project Brief & Tooling Parameter Specifications",
    },
    formSubtitle: {
      type: String,
      default:
        "Complete the 3-stage tooling profile below. All CAD components and technical data are protected under our mutual NDA.",
    },
    successTitle: {
      type: String,
      default: "Quotation Request Submitted Successfully!",
    },
    successMessage: {
      type: String,
      default:
        "Our engineering division in Gujarat has received your tooling requirements and attached files. A dedicated mold project engineer will review your CAD parameters and issue a preliminary DFM report within 24 business hours.",
    },
    supportPhone: { type: String, default: "+91 77847 58347" },
    responseWindow: { type: String, default: "Under 24 Business Hours" },
    fileUploadNote: {
      type: String,
      default: "Accepted: STEP, STP, IGES, DXF, DWG, PDF (Max 25MB)",
    },
    requirementOptions: [{ type: String }],
  },
  { _id: false }
);

const ContactChannelCardSchema = new Schema(
  {
    title: { type: String, required: true },
    lines: [{ type: String }],
    actionLabel: { type: String, default: "" },
    actionUrl: { type: String, default: "" },
    iconType: {
      type: String,
      enum: ["location", "phone", "email", "whatsapp"],
      default: "phone",
    },
  },
  { _id: false }
);

const ContactDirectFormConfigSchema = new Schema(
  {
    formBadge: { type: String, default: "DIRECT MESSAGE DESK" },
    formTitle: { type: String, default: "Send Us a Direct Message" },
    formSubtitle: {
      type: String,
      default:
        "For factory visit requests, distributor partnerships, or administrative communications.",
    },
    submitButtonText: { type: String, default: "Send Direct Message" },
    successTitle: {
      type: String,
      default: "Thank You! Your message is sent.",
    },
    successMessage: {
      type: String,
      default:
        "Your message has been securely delivered to our plant coordination desk in Gujarat.",
    },
    supportPhone: { type: String, default: "+91 77847 58347" },
    responseWindow: { type: String, default: "Within 4 to 8 hours" },
  },
  { _id: false }
);

const ContactDirectSectionSchema = new Schema(
  {
    badge: { type: String, default: "REACH OUR FACILITY" },
    headingPart1: { type: String, default: "Corporate Campus &" },
    headingHighlight: { type: String, default: "Contact Information" },
    description: { type: String, default: "" },
    channels: [ContactChannelCardSchema],
    mapEmbedUrl: { type: String, default: "" },
    mapAddressTitle: { type: String, default: "" },
    mapAddressDetail: { type: String, default: "" },
    mapCoordinates: { type: String, default: "" },
    mapDirectionUrl: { type: String, default: "" },
    socialLinkedIn: { type: String, default: "" },
    socialFacebook: { type: String, default: "" },
    socialYouTube: { type: String, default: "" },
    socialInstagram: { type: String, default: "" },
    quickForm: { type: ContactDirectFormConfigSchema, default: () => ({}) },
  },
  { _id: false }
);

const ContactPageContentSchema = new Schema<IContactPageContent>(
  {
    heroBanner: { type: ContactHeroBannerSchema, default: () => ({}) },
    intro: { type: ContactIntroSectionSchema, default: () => ({}) },
    inquiry: { type: ContactInquirySectionSchema, default: () => ({}) },
    direct: { type: ContactDirectSectionSchema, default: () => ({}) },
  },
  {
    timestamps: true,
  }
);

export const ContactPageContent =
  mongoose.models.ContactPageContent ||
  mongoose.model<IContactPageContent>(
    "ContactPageContent",
    ContactPageContentSchema
  );

export default ContactPageContent;

