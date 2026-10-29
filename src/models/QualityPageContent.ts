import mongoose, { Schema, Document, Model } from "mongoose";

export interface IQualityHeroBanner {
  titlePart1: string;
  titleHighlight: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bannerImage: string;
}

export interface IQualityOverviewPillar {
  label: string;
  title: string;
  description: string;
  iconName: string;
}

export interface IQualityOverview {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  image: string;
  pillars: IQualityOverviewPillar[];
}

export interface IQualityCommitment {
  title: string;
  description: string;
  iconName: string;
}

export interface IQualityPolicy {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  image: string;
  commitments: IQualityCommitment[];
}

export interface IQualityProcessStage {
  step: string;
  title: string;
  description: string;
  iconName: string;
  detail: string;
}

export interface IQualityProcess {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  stages: IQualityProcessStage[];
}

export interface IMaterialInspectionCheck {
  title: string;
  scope: string;
  criteria: string;
  iconName: string;
}

export interface IRawMaterialSection {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  image: string;
  checksHeading: string;
  checks: IMaterialInspectionCheck[];
}

export interface IInProcessCheckpoint {
  id: string;
  title: string;
  stage: string;
  focus: string;
  method: string;
  iconName: string;
}

export interface IInProcessSection {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  checkpointsTitle: string;
  checkpointsSubtitle: string;
  checkpoints: IInProcessCheckpoint[];
}

export interface IFinalChecklistItem {
  id: string;
  label: string;
  description: string;
  verificationScope: string;
}

export interface IFinalInspectionSection {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  image: string;
  checklistHeading: string;
  items: IFinalChecklistItem[];
}

export interface IMoldTestingStep {
  step: string;
  phase: string;
  title: string;
  description: string;
  keyAction: string;
  iconName: string;
}

export interface IMoldTestingSection {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  steps: IMoldTestingStep[];
}

export interface IMeasurementEquipmentItem {
  id: string;
  name: string;
  category: string;
  purpose: string;
  resolutionOrApplication: string;
  iconName: string;
}

export interface IMeasurementEquipmentSection {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  items: IMeasurementEquipmentItem[];
}

export interface IQualityStandardBlock {
  title: string;
  tagline: string;
  description: string;
  points: string[];
  iconName: string;
}

export interface IQualityStandardsSection {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  blocks: IQualityStandardBlock[];
}

export interface IQualityPageContent extends Document {
  heroBanner: IQualityHeroBanner;
  overview: IQualityOverview;
  policy: IQualityPolicy;
  process: IQualityProcess;
  rawMaterial: IRawMaterialSection;
  inProcess: IInProcessSection;
  finalInspection: IFinalInspectionSection;
  moldTesting: IMoldTestingSection;
  measurementEquipment: IMeasurementEquipmentSection;
  standards: IQualityStandardsSection;
  updatedAt: Date;
  createdAt: Date;
}

const QualityHeroBannerSchema = new Schema(
  {
    titlePart1: { type: String, default: "Quality &" },
    titleHighlight: { type: String, default: "Testing" },
    breadcrumbHome: { type: String, default: "Home" },
    breadcrumbCurrent: { type: String, default: "Quality & Testing" },
    bannerImage: { type: String, default: "/quality/quality-banner.jpg" },
  },
  { _id: false }
);

const QualityOverviewPillarSchema = new Schema(
  {
    label: { type: String, default: "" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    iconName: { type: String, default: "CheckCircle2" },
  },
  { _id: false }
);

const QualityOverviewSchema = new Schema(
  {
    badge: { type: String, default: "METROLOGY & INSPECTION OVERVIEW" },
    headingPart1: { type: String, default: "Precision Checked." },
    headingHighlight: { type: String, default: "Quality Assured." },
    description: { type: String, default: "" },
    image: { type: String, default: "/quality/quality-inspection-metrology.jpg" },
    pillars: [QualityOverviewPillarSchema],
  },
  { _id: false }
);

const QualityCommitmentSchema = new Schema(
  {
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    iconName: { type: String, default: "CheckCircle" },
  },
  { _id: false }
);

const QualityPolicySchema = new Schema(
  {
    badge: { type: String, default: "QUALITY POLICY" },
    headingPart1: { type: String, default: "Quality Is Built Into" },
    headingHighlight: { type: String, default: "Every Stage." },
    description: { type: String, default: "" },
    image: { type: String, default: "/quality/quality-policy-alignment.jpg" },
    commitments: [QualityCommitmentSchema],
  },
  { _id: false }
);

const QualityProcessStageSchema = new Schema(
  {
    step: { type: String, default: "" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    iconName: { type: String, default: "CheckCircle2" },
    detail: { type: String, default: "" },
  },
  { _id: false }
);

const QualityProcessSchema = new Schema(
  {
    badge: { type: String, default: "QUALITY CONTROL PROCESS" },
    headingPart1: { type: String, default: "Structured From" },
    headingHighlight: { type: String, default: "Ingot To Trial." },
    description: { type: String, default: "" },
    stages: [QualityProcessStageSchema],
  },
  { _id: false }
);

const MaterialInspectionCheckSchema = new Schema(
  {
    title: { type: String, default: "" },
    scope: { type: String, default: "" },
    criteria: { type: String, default: "" },
    iconName: { type: String, default: "Tag" },
  },
  { _id: false }
);

const RawMaterialSectionSchema = new Schema(
  {
    badge: { type: String, default: "RAW MATERIAL VERIFICATION" },
    headingPart1: { type: String, default: "Quality Starts With" },
    headingHighlight: { type: String, default: "The Material." },
    description: { type: String, default: "" },
    image: { type: String, default: "/quality/raw-material-steel-inspection.jpg" },
    checksHeading: { type: String, default: "Raw Material Verification Gateways" },
    checks: [MaterialInspectionCheckSchema],
  },
  { _id: false }
);

const InProcessCheckpointSchema = new Schema(
  {
    id: { type: String, default: "" },
    title: { type: String, default: "" },
    stage: { type: String, default: "" },
    focus: { type: String, default: "" },
    method: { type: String, default: "" },
    iconName: { type: String, default: "Crosshair" },
  },
  { _id: false }
);

const InProcessSectionSchema = new Schema(
  {
    badge: { type: String, default: "IN-PROCESS QUALITY DASHBOARD" },
    headingPart1: { type: String, default: "Inspection Throughout" },
    headingHighlight: { type: String, default: "Production." },
    description: { type: String, default: "" },
    checkpointsTitle: { type: String, default: "Production Quality Checkpoints" },
    checkpointsSubtitle: { type: String, default: "Key inspection stages during mould manufacturing" },
    checkpoints: [InProcessCheckpointSchema],
  },
  { _id: false }
);

const FinalChecklistItemSchema = new Schema(
  {
    id: { type: String, default: "" },
    label: { type: String, default: "" },
    description: { type: String, default: "" },
    verificationScope: { type: String, default: "" },
  },
  { _id: false }
);

const FinalInspectionSectionSchema = new Schema(
  {
    badge: { type: String, default: "PRE-DISPATCH VERIFICATION" },
    headingPart1: { type: String, default: "Every Detail Matters" },
    headingHighlight: { type: String, default: "Before Delivery." },
    description: { type: String, default: "" },
    image: { type: String, default: "/quality/final-inspection-check.jpg" },
    checklistHeading: { type: String, default: "Pre-Dispatch Verification Checklist" },
    items: [FinalChecklistItemSchema],
  },
  { _id: false }
);

const MoldTestingStepSchema = new Schema(
  {
    step: { type: String, default: "" },
    phase: { type: String, default: "" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    keyAction: { type: String, default: "" },
    iconName: { type: String, default: "Activity" },
  },
  { _id: false }
);

const MoldTestingSectionSchema = new Schema(
  {
    badge: { type: String, default: "MOULD TESTING JOURNEY" },
    headingPart1: { type: String, default: "From Initial Dry Cycle To" },
    headingHighlight: { type: String, default: "Trial Validation." },
    description: { type: String, default: "" },
    steps: [MoldTestingStepSchema],
  },
  { _id: false }
);

const MeasurementEquipmentItemSchema = new Schema(
  {
    id: { type: String, default: "" },
    name: { type: String, default: "" },
    category: { type: String, default: "" },
    purpose: { type: String, default: "" },
    resolutionOrApplication: { type: String, default: "" },
    iconName: { type: String, default: "Wrench" },
  },
  { _id: false }
);

const MeasurementEquipmentSectionSchema = new Schema(
  {
    badge: { type: String, default: "METROLOGY INSTRUMENTS" },
    headingPart1: { type: String, default: "Precision Measurement" },
    headingHighlight: { type: String, default: "Instruments." },
    description: { type: String, default: "" },
    items: [MeasurementEquipmentItemSchema],
  },
  { _id: false }
);

const QualityStandardBlockSchema = new Schema(
  {
    title: { type: String, default: "" },
    tagline: { type: String, default: "" },
    description: { type: String, default: "" },
    points: [{ type: String }],
    iconName: { type: String, default: "ShieldCheck" },
  },
  { _id: false }
);

const QualityStandardsSectionSchema = new Schema(
  {
    badge: { type: String, default: "QUALITY STANDARDS & CERTIFICATIONS" },
    headingPart1: { type: String, default: "Quality Standards &" },
    headingHighlight: { type: String, default: "Certifications." },
    description: { type: String, default: "" },
    blocks: [QualityStandardBlockSchema],
  },
  { _id: false }
);

const QualityPageContentSchema = new Schema<IQualityPageContent>(
  {
    heroBanner: { type: QualityHeroBannerSchema, default: () => ({}) },
    overview: { type: QualityOverviewSchema, default: () => ({}) },
    policy: { type: QualityPolicySchema, default: () => ({}) },
    process: { type: QualityProcessSchema, default: () => ({}) },
    rawMaterial: { type: RawMaterialSectionSchema, default: () => ({}) },
    inProcess: { type: InProcessSectionSchema, default: () => ({}) },
    finalInspection: { type: FinalInspectionSectionSchema, default: () => ({}) },
    moldTesting: { type: MoldTestingSectionSchema, default: () => ({}) },
    measurementEquipment: { type: MeasurementEquipmentSectionSchema, default: () => ({}) },
    standards: { type: QualityStandardsSectionSchema, default: () => ({}) },
  },
  {
    timestamps: true,
  }
);

if (mongoose.models.QualityPageContent) {
  delete mongoose.models.QualityPageContent;
}

export const QualityPageContent: Model<IQualityPageContent> =
  mongoose.model<IQualityPageContent>("QualityPageContent", QualityPageContentSchema);

