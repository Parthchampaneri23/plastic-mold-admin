import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAboutHero {
  badge?: string;
  title: string;
  highlightText: string;
  backgroundImage: string;
  breadcrumbHomeText?: string;
  breadcrumbCurrentText?: string;
}

export interface IAboutCompanyIntro {
  eyebrowBadge: string;
  heading: string;
  highlightHeading: string;
  paragraph1: string;
  paragraph2: string;
  mainImage: string;
  facilityAddressBadgeTitle?: string;
  facilityAddressBadgeSub?: string;
  isoBadgeText?: string;
  keyStats: Array<{
    id: string;
    value: string;
    label: string;
    subtext: string;
    detail: string;
    badgeText: string;
    tagColor: string;
  }>;
  journeyEyebrow?: string;
  journeyHeading?: string;
  journeyHighlight?: string;
  journeyDescription?: string;
  timelineMilestones: Array<{
    year: string;
    title: string;
    description: string;
    accent?: boolean;
  }>;
  capabilitiesHeading?: string;
  capabilitiesHighlight?: string;
  capabilitiesImage?: string;
  coreExpertiseItems: Array<{
    num: string;
    title: string;
    machineBadge: string;
    description: string;
  }>;
}

export interface IVisionMission {
  badge: string;
  heading: string;
  highlightHeading: string;
  description: string;
  visionTitle: string;
  visionQuote: string;
  visionDescription: string;
  visionTags: string[];
  missionTitle: string;
  missionQuote: string;
  missionDescription: string;
  missionTags: string[];
  valuesHeading?: string;
  valuesHighlight?: string;
  valuesDescription?: string;
  coreValues: Array<{
    num: string;
    title: string;
    description: string;
  }>;
}

export interface ICompanyStrength {
  badge: string;
  heading: string;
  highlightHeading: string;
  description: string;
  image?: string;
  centralMetric?: string;
  centralMetricLabel?: string;
  centralTagline?: string;
  strengths: Array<{
    id: string;
    num: string;
    title: string;
    shortDesc: string;
    metric: string;
    metricLabel: string;
    description: string;
    accent: string;
  }>;
}

export interface IAboutInfrastructure {
  badge: string;
  heading: string;
  highlightHeading: string;
  description: string;
  image?: string;
  items: Array<{
    id: string;
    num: string;
    navTitle: string;
    subtitle: string;
    description: string;
    tag: string;
    image?: string;
  }>;
  departments?: Array<{
    id: string;
    num: string;
    navTitle: string;
    subtitle: string;
    description: string;
    tag: string;
    image?: string;
  }>;
}

export interface IQualityCommitment {
  badge: string;
  heading: string;
  highlightHeading: string;
  description: string;
  stages: Array<{
    id: string;
    num: string;
    title: string;
    tagline: string;
    description: string;
    metrics: string[];
    equipment: string;
  }>;
}

export interface IAboutFAQ {
  question: string;
  answer: string;
}

export interface IAboutFaqSection {
  badge: string;
  title: string;
  subtitle: string;
  faqs: IAboutFAQ[];
}

export interface IAboutPageContent extends Document {
  hero: IAboutHero;
  companyIntro: IAboutCompanyIntro;
  visionMission: IVisionMission;
  companyStrength: ICompanyStrength;
  infrastructure: IAboutInfrastructure;
  qualityCommitment: IQualityCommitment;
  faqsSection: IAboutFaqSection;
  updatedAt: Date;
}

const AboutPageContentSchema = new Schema<IAboutPageContent>(
  {
    hero: { type: Schema.Types.Mixed },
    companyIntro: { type: Schema.Types.Mixed },
    visionMission: { type: Schema.Types.Mixed },
    companyStrength: { type: Schema.Types.Mixed },
    infrastructure: { type: Schema.Types.Mixed },
    qualityCommitment: { type: Schema.Types.Mixed },
    faqsSection: { type: Schema.Types.Mixed },
  },
  { timestamps: true, collection: "aboutpage_content" }
);

export const AboutPageContent: Model<IAboutPageContent> =
  mongoose.models.AboutPageContent ||
  mongoose.model<IAboutPageContent>("AboutPageContent", AboutPageContentSchema);
