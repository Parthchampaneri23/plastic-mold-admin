import mongoose, { Schema, Document, Model } from "mongoose";

export interface IHeroSlide {
  id: string;
  title: string;
  highlightText?: string;
  subtitle: string;
  description: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  badge?: string;
  features?: { title: string; subtitle: string; icon: string }[];
}

export interface IStatItem {
  value: string;
  label: string;
  subtext: string;
}

export interface IProductCategory {
  id: string;
  anchorId: string;
  name: string;
  shortDesc: string;
  fullDesc?: string;
  image: string;
  features: string[];
  productCount: number;
}

export interface ICapability {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  machineBadge: string;
  specifications: string[];
  image?: string;
}

export interface IWhyChooseUsFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface IFacilityHighlight {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  equipmentCount: string;
  link?: string;
}

export interface IIndustryApplication {
  id: string;
  name: string;
  description: string;
  image: string;
  badge: string;
  link?: string;
}

export interface IQualityBenchmark {
  id: string;
  label: string;
  value: string;
  percentage: number;
}

export interface IInspectionStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  badge: string;
}

export interface ITestingFacilityPoint {
  id: string;
  text: string;
}

export interface ITestingFacilityStat {
  id: string;
  value: string;
  label: string;
}

export interface ITechHighlightCard {
  id: string;
  title: string;
  description: string;
  badge: string;
  accentColor: string;
}

export interface IQualitySection {
  eyebrowBadge: string;
  headlineMain: string;
  headlineHighlight: string;
  description: string;
  standardsTab: {
    tabBadge: string;
    heading: string;
    description: string;
    features: string[];
    benchmarkSubtitle: string;
    benchmarks: IQualityBenchmark[];
  };
  inspectionTab: {
    heading: string;
    description: string;
    steps: IInspectionStep[];
  };
  testingTab: {
    tabBadge: string;
    heading: string;
    description: string;
    points: ITestingFacilityPoint[];
    stats: ITestingFacilityStat[];
  };
  technologyTab: {
    cards: ITechHighlightCard[];
  };
}

export interface IQualityStandard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  spec: string;
}

export interface IFeaturedProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  tag?: string;
  shortDesc: string;
  link?: string;
  specifications?: { label: string; value: string }[];
}

export interface IFeaturedProductsSection {
  eyebrowBadge: string;
  headlineMain: string;
  headlineHighlight: string;
  description: string;
}

export interface IClientLogo {
  id: string;
  name: string;
  location: string;
  state: string;
  industry: string;
  logoBg: string;
}

export interface IClientLogoImage {
  id: string;
  name: string;
  image: string;
}

export interface IClientsSection {
  eyebrowBadge: string;
  headlineMain: string;
  headlineHighlight: string;
  description: string;
  pill1Text: string;
  pill2Text: string;
}

export interface ITestimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  location: string;
  rating: number;
}

export interface IHomePageContent extends Document {
  heroSlides: IHeroSlide[];
  companyStats: IStatItem[];
  productCategories: IProductCategory[];
  capabilities: ICapability[];
  whyChooseUs: IWhyChooseUsFeature[];
  facilities: IFacilityHighlight[];
  industries: IIndustryApplication[];
  qualityStandards: IQualityStandard[];
  qualitySection?: IQualitySection;
  featuredProductsSection?: IFeaturedProductsSection;
  featuredProducts: IFeaturedProduct[];
  clientsSection?: IClientsSection;
  clientLogoImages: IClientLogoImage[];
  indianClientLogos: IClientLogo[];
  indianTestimonials: ITestimonial[];
  companyIntro: {
    badge: string;
    heading: string;
    highlightHeading: string;
    paragraph1: string;
    paragraph2: string;
    statNumber: string;
    statText: string;
  };
  inquiryCta: {
    badge: string;
    title: string;
    highlightTitle?: string;
    description: string;
    features?: string[];
    phone: string;
    email: string;
    address?: string;
    formTitle?: string;
    buttonText?: string;
  };
  topBar?: {
    phone: string;
    email: string;
    address: string;
    mapsUrl: string;
  };
  navbar?: {
    logoImage: string;
    logoAlt: string;
    ctaButtonText: string;
    ctaButtonLink: string;
    menuLinks: { label: string; href: string; isMegaMenu?: boolean }[];
  };
  brandIdentity?: {
    logoImage: string;
    logoAlt: string;
    footerLogoImage?: string;
    faviconUrl: string;
    appleTouchIconUrl?: string;
    siteTitle?: string;
    siteTagline?: string;
  };
  footer?: {
    logoImage: string;
    companyBio: string;
    phone: string;
    email: string;
    address: string;
    mapsUrl: string;
    copyrightText: string;
    socialLinks: {
      linkedin?: string;
      facebook?: string;
      twitter?: string;
      instagram?: string;
      youtube?: string;
    };
  };
  updatedAt: Date;
}

const HomePageContentSchema = new Schema<IHomePageContent>(
  {
    heroSlides: [{ type: Schema.Types.Mixed }],
    companyStats: [{ type: Schema.Types.Mixed }],
    productCategories: [{ type: Schema.Types.Mixed }],
    capabilities: [{ type: Schema.Types.Mixed }],
    whyChooseUs: [{ type: Schema.Types.Mixed }],
    facilities: [{ type: Schema.Types.Mixed }],
    industries: [{ type: Schema.Types.Mixed }],
    qualityStandards: [{ type: Schema.Types.Mixed }],
    qualitySection: { type: Schema.Types.Mixed },
    featuredProductsSection: { type: Schema.Types.Mixed },
    featuredProducts: [{ type: Schema.Types.Mixed }],
    clientsSection: { type: Schema.Types.Mixed },
    clientLogoImages: [{ type: Schema.Types.Mixed }],
    indianClientLogos: [{ type: Schema.Types.Mixed }],
    indianTestimonials: [{ type: Schema.Types.Mixed }],
    topBar: { type: Schema.Types.Mixed },
    navbar: { type: Schema.Types.Mixed },
    brandIdentity: { type: Schema.Types.Mixed },
    footer: { type: Schema.Types.Mixed },
    companyIntro: {
      badge: { type: String, default: "PRECISION TOOLING LEADERSHIP" },
      heading: { type: String, default: "Over 3 Decades of Excellence in" },
      highlightHeading: { type: String, default: "High-Precision Mold Manufacturing" },
      paragraph1: { type: String, default: "Founded in 1994, Patel Mould Industries has emerged as a premier manufacturer of high-cavitation PET preform molds, single-stage ISBM molds, and extrusion blow molds (EBM) in India." },
      paragraph2: { type: String, default: "With state-of-the-art 5-axis CNC machining, Makino mirror spark erosion EDM, and Japanese high-speed milling, we guarantee sub-micron cavity accuracy and multi-million shot mold longevity." },
      statNumber: { type: String, default: "30+" },
      statText: { type: String, default: "Years of Engineering Expertise" },
    },
    inquiryCta: {
      badge: { type: String, default: "READY TO ELEVATE YOUR TOOLING?" },
      title: { type: String, default: "Let's Engineer Your Next" },
      highlightTitle: { type: String, default: "High-Performance Mold" },
      description: { type: String, default: "Whether you need a 96-cavity PET preform mold, custom ISBM container tooling, or high-volume EBM molds, our engineering specialists are ready to discuss your specifications." },
      phone: { type: String, default: "+91 98250 12345" },
      email: { type: String, default: "info@patelmould.com" },
      address: { type: String, default: "GIDC Industrial Estate, Phase 4, Vatva, Ahmedabad, Gujarat 382445, India" },
    },
  },
  { timestamps: true, collection: "homepage_content" }
);

export const HomePageContent: Model<IHomePageContent> =
  mongoose.models.HomePageContent ||
  mongoose.model<IHomePageContent>("HomePageContent", HomePageContentSchema);
