import mongoose, { Schema, Document } from "mongoose";

export interface IInfraHighlight {
  label?: string;
  title: string;
  description: string;
}

export interface IInfraTechnicalDetail {
  label: string;
  value: string;
}

export interface IInfraWorkflowStage {
  step: string;
  title: string;
  description?: string;
}

export interface IInfraSection {
  id: string;
  badge: string;
  heading: string;
  subheading?: string;
  stepsHeading?: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  highlights: IInfraHighlight[];
  technicalDetails?: IInfraTechnicalDetail[];
  stages?: IInfraWorkflowStage[];
}

export interface IInfraHero {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
}

export interface IFacilityOverviewItem {
  title: string;
  description: string;
}

export interface IFacilityOverview {
  badge: string;
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  capabilities: IFacilityOverviewItem[];
}

export interface IInfraFaq {
  question: string;
  answer: string;
}

export interface IInfraFaqSection {
  badge: string;
  title: string;
  subtitle: string;
  faqs: IInfraFaq[];
}

export interface IInfraCta {
  badge: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  boxTitle: string;
  boxBadge: string;
  boxDescription: string;
  buttonText: string;
  buttonLink: string;
}

export interface IInfrastructurePageContent extends Document {
  hero: IInfraHero;
  facilityOverview: IFacilityOverview;
  cnc: IInfraSection;
  edm: IInfraSection;
  mouldAssembly: IInfraSection;
  qualityInspection: IInfraSection;
  testingValidation: IInfraSection;
  warehouseLogistics: IInfraSection;
  engineeringDesign: IInfraSection;
  faqs: IInfraFaqSection;
  cta: IInfraCta;
  updatedAt: Date;
  createdAt: Date;
}

const InfraHighlightSchema = new Schema(
  {
    label: { type: String, default: "" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
  },
  { _id: false }
);

const InfraTechnicalDetailSchema = new Schema(
  {
    label: { type: String, default: "" },
    value: { type: String, default: "" },
  },
  { _id: false }
);

const InfraWorkflowStageSchema = new Schema(
  {
    step: { type: String, default: "" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
  },
  { _id: false }
);

const InfraSectionSchema = new Schema(
  {
    id: { type: String, default: "" },
    badge: { type: String, default: "" },
    heading: { type: String, default: "" },
    subheading: { type: String, default: "" },
    stepsHeading: { type: String, default: "" },
    description: [{ type: String }],
    imageSrc: { type: String, default: "" },
    imageAlt: { type: String, default: "" },
    highlights: [InfraHighlightSchema],
    technicalDetails: [InfraTechnicalDetailSchema],
    stages: [InfraWorkflowStageSchema],
  },
  { _id: false }
);

const InfrastructurePageContentSchema = new Schema<IInfrastructurePageContent>(
  {
    hero: {
      eyebrow: { type: String, default: "OUR INFRASTRUCTURE" },
      title: { type: String, default: "Built on Precision. Powered by Infrastructure." },
      description: {
        type: String,
        default:
          "Our manufacturing infrastructure brings together precision machining, mould assembly, inspection, testing and engineering design in a coordinated production environment.",
      },
      imageSrc: { type: String, default: "/infrastructure/facility-hero.jpg" },
      imageAlt: { type: String, default: "Patel Mould Industries Precision Manufacturing Facility" },
      breadcrumbHome: { type: String, default: "Home" },
      breadcrumbCurrent: { type: String, default: "Infrastructure" },
    },
    facilityOverview: {
      badge: { type: String, default: "FACILITY WORKFLOW" },
      heading: { type: String, default: "A Facility Designed for Precision" },
      description: {
        type: String,
        default:
          "Our facility integrates CAD design, CNC machining, EDM, toolroom operations, and precision inspection in an organized workspace.",
      },
      imageSrc: { type: String, default: "/infrastructure/facility-hero.jpg" },
      imageAlt: { type: String, default: "Patel Mould Industries Main Toolroom Facility Layout" },
      capabilities: [
        {
          title: { type: String, default: "" },
          description: { type: String, default: "" },
        },
      ],
    },
    cnc: { type: InfraSectionSchema, default: () => ({}) },
    edm: { type: InfraSectionSchema, default: () => ({}) },
    mouldAssembly: { type: InfraSectionSchema, default: () => ({}) },
    qualityInspection: { type: InfraSectionSchema, default: () => ({}) },
    testingValidation: { type: InfraSectionSchema, default: () => ({}) },
    warehouseLogistics: { type: InfraSectionSchema, default: () => ({}) },
    engineeringDesign: { type: InfraSectionSchema, default: () => ({}) },
    faqs: {
      badge: { type: String, default: "TOOLROOM & PLANT CAPABILITIES" },
      title: { type: String, default: "Facility & Infrastructure FAQs" },
      subtitle: {
        type: String,
        default:
          "Explore technical details regarding our precision CNC centers, EDM die-sinking, metrology inspection protocols, and mold trial machines.",
      },
      faqs: [
        {
          question: { type: String, default: "" },
          answer: { type: String, default: "" },
        },
      ],
    },
    cta: {
      badge: { type: String, default: "MANUFACTURING PARTNERSHIP" },
      title: { type: String, default: "Looking for the Right Mould Manufacturing Partner?" },
      description: {
        type: String,
        default:
          "Discuss your tooling and mould requirements with our engineering team. Explore how our precision machining, assembly, metrology, and testing infrastructure can support your product goals.",
      },
      location: { type: String, default: "GIDC, Gujarat, India" },
      email: { type: String, default: "sales@patelmould.com" },
      phone: { type: String, default: "Direct Technical Inquiries" },
      boxTitle: { type: String, default: "Infrastructure Consultation" },
      boxBadge: { type: String, default: "Direct Team" },
      boxDescription: {
        type: String,
        default:
          "Connect directly with our tooling engineers for feasibility reviews, cycle analysis, and application-specific mould development.",
      },
      buttonText: { type: String, default: "Request a Quote" },
      buttonLink: { type: String, default: "/contact#inquiry-form-section" },
    },
  },
  { timestamps: true }
);

export const InfrastructurePageContent =
  mongoose.models.InfrastructurePageContent ||
  mongoose.model<IInfrastructurePageContent>(
    "InfrastructurePageContent",
    InfrastructurePageContentSchema
  );
