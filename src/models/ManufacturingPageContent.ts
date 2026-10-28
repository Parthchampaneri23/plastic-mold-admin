import mongoose, { Schema, Document, Model } from "mongoose";

export interface IManufacturingHero {
  bannerImage: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
}

export interface IOverviewStat {
  value: string;
  label: string;
  detail: string;
}

export interface ICapabilityHighlight {
  id: string;
  title: string;
  cardDesc: string;
  panelDesc: string;
}

export interface IManufacturingOverview {
  badge: string;
  heading: string;
  highlightHeading: string;
  summary: string;
  facilityImage: string;
  facilityLocation: string;
  facilityTag: string;
  infrastructureTitle: string;
  infrastructureDesc: string;
  stats: IOverviewStat[];
  capabilities: ICapabilityHighlight[];
}

export interface IDesignCapabilityItem {
  id: string;
  number: string;
  title: string;
  panelTitle: string;
  panelDesc: string;
  cardDesc: string;
  points: string[];
}

export interface IDesignWorkflowStep {
  step: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverable: string;
}

export interface IMoldDesignDevelopment {
  badge: string;
  heading: string;
  highlightHeading: string;
  description: string;
  image: string;
  overlayBadge: string;
  overlayTitle: string;
  overlayTag: string;
  workflowTitle: string;
  workflowDesc: string;
  capabilities: IDesignCapabilityItem[];
  workflowSteps: IDesignWorkflowStep[];
}

export interface IProcessTabSpec {
  label: string;
  value: string;
}

export interface IProcessTab {
  id: string;
  tabLabel: string;
  badge: string;
  heading: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  specs: IProcessTabSpec[];
}

export interface IPrecisionMachining {
  badge: string;
  heading: string;
  highlightHeading: string;
  description: string;
  tabs: IProcessTab[];
}

export interface IManufacturingStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  deliverable: string;
  toolingAspect: string;
  tag: string;
}

export interface IMoldManufacturingProcess {
  badge: string;
  heading: string;
  highlightHeading: string;
  description: string;
  stages: IManufacturingStage[];
}

export interface IMachineryItem {
  id: string;
  slug: string;
  name: string;
  manufacturer?: string;
  model?: string;
  category: "CNC" | "EDM" | "CMM" | "Grinding" | "Trial" | string;
  badge: string;
  image: string;
  specifications: string;
  capacity: string;
  application: string;
  shortDescription?: string;
}

export interface IMachineryEquipment {
  badge: string;
  heading: string;
  highlightHeading: string;
  description: string;
  machines: IMachineryItem[];
}

export interface IProductionStatItem {
  id: string;
  metric: string;
  isNumeric: boolean;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export interface ICapacityHighlightItem {
  title: string;
  description: string;
}

export interface IMouldProductionCapability {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  link: string;
  points: string[];
}

export interface IProductionCapacity {
  badge: string;
  heading: string;
  highlightHeading: string;
  description: string;
  facilityBadge?: string;
  facilityTitle?: string;
  facilitySubheading?: string;
  facilityDescription?: string;
  facilityImage?: string;
  highlights: ICapacityHighlightItem[];
  capabilitiesBadge?: string;
  capabilitiesHeading?: string;
  capabilities: IMouldProductionCapability[];
  statsBadge?: string;
  statsHeading?: string;
  stats: IProductionStatItem[];
}

export interface IQualityCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  detailTitle: string;
  detailItems: string[];
}

export interface IQualityStripItem {
  number?: string;
  label: string;
  shortDesc?: string;
  fullDesc: string;
}

export interface IQualityInspection {
  badge: string;
  heading: string;
  highlightHeading: string;
  description: string;
  image?: string;
  processTitle?: string;
  processDescription?: string;
  cards: IQualityCardItem[];
  guaranteeBadge?: string;
  guaranteeTitle?: string;
  guaranteeDescription?: string;
  guaranteePrecision?: string;
  guaranteeIso?: string;
  stripBadge?: string;
  stripItems?: IQualityStripItem[];
}

export interface ICustomSolutionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
  highlights: string[];
}

export interface ICustomMoldSolutions {
  badge: string;
  heading: string;
  highlightHeading: string;
  description: string;
  image?: string;
  solutionProcessTitle?: string;
  solutionProcessDescription?: string;
  solutions: ICustomSolutionItem[];
  confidentialityBadge?: string;
  confidentialityTitle?: string;
  confidentialityDescription?: string;
  confidentialityNda?: string;
  confidentialityDfm?: string;
  ctaBadge?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
}

export interface IManufacturingPageContent extends Document {
  hero: IManufacturingHero;
  overview: IManufacturingOverview;
  designDevelopment: IMoldDesignDevelopment;
  precisionMachining: IPrecisionMachining;
  process: IMoldManufacturingProcess;
  machinery: IMachineryEquipment;
  capacity: IProductionCapacity;
  quality: IQualityInspection;
  customSolutions: ICustomMoldSolutions;
  updatedAt: Date;
}

const ManufacturingPageContentSchema = new Schema<IManufacturingPageContent>(
  {
    hero: {
      bannerImage: { type: String, default: "/manufacturing/manufacturing banner.png" },
      badge: { type: String, default: "MANUFACTURING CAPABILITIES" },
      titlePrefix: { type: String, default: "Manufacturing " },
      titleHighlight: { type: String, default: "Capabilities" },
      breadcrumbHome: { type: String, default: "Home" },
      breadcrumbCurrent: { type: String, default: "Manufacturing" },
    },
    overview: {
      badge: { type: String, default: "MANUFACTURING OVERVIEW" },
      heading: { type: String, default: "Precision Engineering." },
      highlightHeading: { type: String, default: "Manufacturing Excellence." },
      summary: {
        type: String,
        default:
          "Every tooling phase—from metallurgical steel verification and parametric 3D CAD design to finish machining, optical assembly, and in-house press trials—is managed under one roof to assure complete dimensional integrity and on-schedule execution.",
      },
      facilityImage: { type: String, default: "/About/FACILITY.png" },
      facilityLocation: { type: String, default: "Precision Mould Park, Phase-IV GIDC, Gujarat" },
      facilityTag: { type: String, default: "15,000 m² Plant" },
      infrastructureTitle: { type: String, default: "End-to-End Toolroom Infrastructure" },
      infrastructureDesc: {
        type: String,
        default:
          "Our plant integrates dedicated machining cells and metrology labs to support demanding mould builds. Synchronized toolpaths and strict in-process checkpoints ensure zero accumulated tolerance errors across all cavities.",
      },
      stats: [
        {
          value: { type: String, default: "" },
          label: { type: String, default: "" },
          detail: { type: String, default: "" },
        },
      ],
      capabilities: [
        {
          id: { type: String, default: "" },
          title: { type: String, default: "" },
          cardDesc: { type: String, default: "" },
          panelDesc: { type: String, default: "" },
        },
      ],
    },
    designDevelopment: {
      badge: { type: String, default: "MOLD DESIGN & DEVELOPMENT" },
      heading: { type: String, default: "Engineering Design &" },
      highlightHeading: { type: String, default: "Simulation R&D" },
      description: {
        type: String,
        default:
          "Our engineering team develops mould designs around product requirements, tooling geometry and manufacturability, helping prepare designs for reliable production.",
      },
      image: { type: String, default: "/manufacturing/mfg_cad.jpg" },
      overlayBadge: { type: String, default: "IN-HOUSE R&D DESIGN" },
      overlayTitle: { type: String, default: "CAD Design & Engineering" },
      overlayTag: { type: String, default: "Design-led mould development" },
      workflowTitle: { type: String, default: "From Concept to Manufacturing" },
      workflowDesc: {
        type: String,
        default:
          "A structured four-stage design methodology ensuring every tool is fully assessed before shop floor release.",
      },
      capabilities: [
        {
          id: { type: String, default: "" },
          number: { type: String, default: "" },
          title: { type: String, default: "" },
          panelTitle: { type: String, default: "" },
          panelDesc: { type: String, default: "" },
          cardDesc: { type: String, default: "" },
          points: [{ type: String }],
        },
      ],
      workflowSteps: [
        {
          step: { type: String, default: "" },
          title: { type: String, default: "" },
          shortDesc: { type: String, default: "" },
          fullDesc: { type: String, default: "" },
          deliverable: { type: String, default: "" },
        },
      ],
    },
    precisionMachining: {
      badge: { type: String, default: "PRECISION MACHINING" },
      heading: { type: String, default: "CNC & EDM" },
      highlightHeading: { type: String, default: "High-Accuracy Manufacturing" },
      description: {
        type: String,
        default:
          "Explore the machining processes used to manufacture mould cavities, cores and precision tooling elements with high dimensional accuracy.",
      },
      tabs: [
        {
          id: { type: String, default: "" },
          tabLabel: { type: String, default: "" },
          badge: { type: String, default: "" },
          heading: { type: String, default: "" },
          subtitle: { type: String, default: "" },
          description: { type: String, default: "" },
          image: { type: String, default: "" },
          imageAlt: { type: String, default: "" },
          features: [{ type: String }],
          specs: [
            {
              label: { type: String, default: "" },
              value: { type: String, default: "" },
            },
          ],
        },
      ],
    },
    process: {
      badge: { type: String, default: "9-STAGE MANUFACTURING PROCESS" },
      heading: { type: String, default: "Our Step-by-Step" },
      highlightHeading: { type: String, default: "Mould Making Process" },
      description: {
        type: String,
        default:
          "A transparent, milestone-driven toolroom workflow from product engineering drawing through CMM inspection and full in-house press trial validation.",
      },
      stages: [
        {
          step: { type: String, default: "" },
          title: { type: String, default: "" },
          subtitle: { type: String, default: "" },
          description: { type: String, default: "" },
          activities: [{ type: String }],
          deliverable: { type: String, default: "" },
          toolingAspect: { type: String, default: "" },
          tag: { type: String, default: "" },
        },
      ],
    },
    machinery: {
      badge: { type: String, default: "MACHINERY & EQUIPMENT" },
      heading: { type: String, default: "Our Machinery." },
      highlightHeading: { type: String, default: "Your Manufacturing Confidence." },
      description: {
        type: String,
        default:
          "Explore the machining, inspection and mould-trial equipment supporting our tooling and manufacturing capabilities.",
      },
      machines: [
        {
          id: { type: String, default: "" },
          slug: { type: String, default: "" },
          name: { type: String, default: "" },
          manufacturer: { type: String, default: "" },
          model: { type: String, default: "" },
          category: { type: String, default: "CNC" },
          badge: { type: String, default: "" },
          image: { type: String, default: "" },
          specifications: { type: String, default: "" },
          capacity: { type: String, default: "" },
          application: { type: String, default: "" },
          shortDescription: { type: String, default: "" },
        },
      ],
    },
    capacity: {
      badge: { type: String, default: "PRODUCTION CAPACITY" },
      heading: { type: String, default: "Scale, Precision &" },
      highlightHeading: { type: String, default: "Toolroom Capacity" },
      description: {
        type: String,
        default:
          "Engineered toolroom infrastructure capable of delivering high-volume multi-cavity stack tooling with synchronized machining shifts.",
      },
      facilityBadge: { type: String, default: "MANUFACTURING CAPACITY" },
      facilitySubheading: { type: String, default: "INFRASTRUCTURE & RESOURCES" },
      facilityTitle: {
        type: String,
        default: "Integrated Facilities Designed for Production Consistency",
      },
      facilityDescription: {
        type: String,
        default:
          "Operating from Phase-IV GIDC Gujarat, our toolroom combines high-speed 5-axis CNC machining centers, mirror spark EDMs, precision wire-cut cells, and dedicated assembly bays under one roof. Synchronized workflows eliminate cumulative tolerance build-up across complex multi-cavity tooling.",
      },
      facilityImage: { type: String, default: "/About/FACILITY.png" },
      highlights: [
        {
          title: { type: String, default: "" },
          description: { type: String, default: "" },
        },
      ],
      capabilitiesBadge: { type: String, default: "MOULD PRODUCTION CAPABILITY" },
      capabilitiesHeading: { type: String, default: "Mould Production Capabilities" },
      capabilities: [
        {
          id: { type: String, default: "" },
          title: { type: String, default: "" },
          badge: { type: String, default: "" },
          description: { type: String, default: "" },
          image: { type: String, default: "" },
          link: { type: String, default: "" },
          points: [{ type: String }],
        },
      ],
      statsBadge: { type: String, default: "PRODUCTION STATISTICS" },
      statsHeading: { type: String, default: "Verified Manufacturing Metrics" },
      stats: [
        {
          id: { type: String, default: "" },
          metric: { type: String, default: "" },
          isNumeric: { type: Boolean, default: true },
          prefix: { type: String, default: "" },
          suffix: { type: String, default: "" },
          label: { type: String, default: "" },
          sublabel: { type: String, default: "" },
        },
      ],
    },
    quality: {
      badge: { type: String, default: "QUALITY & INSPECTION" },
      heading: { type: String, default: "Built for Precision." },
      highlightHeading: { type: String, default: "Verified for Performance." },
      description: {
        type: String,
        default:
          "Discover the measurement and quality practices applied across each stage of mould manufacturing to maintain dimensional control.",
      },
      image: { type: String, default: "/manufacturing/mfg_quality_clean.jpg" },
      processTitle: {
        type: String,
        default: "A Structured Approach to Quality Control",
      },
      processDescription: {
        type: String,
        default:
          "Click any stage below to inspect verified measurement activities and in-process checkpoints in the panel on the left.",
      },
      cards: [
        {
          id: { type: String, default: "" },
          number: { type: String, default: "" },
          title: { type: String, default: "" },
          description: { type: String, default: "" },
          detailTitle: { type: String, default: "" },
          detailItems: [{ type: String }],
        },
      ],
      guaranteeBadge: {
        type: String,
        default: "QUALITY ASSURANCE GUARANTEE",
      },
      guaranteeTitle: {
        type: String,
        default: "Zeiss 3D CMM & Sub-Micron Inspection Verification",
      },
      guaranteeDescription: {
        type: String,
        default:
          "Every mould stack undergoes full coordinate verification (±0.002 mm tolerance), 10–12 bar hydrostatic cooling circuit testing, and certified inspection reports.",
      },
      guaranteePrecision: { type: String, default: "±0.002 mm Precision" },
      guaranteeIso: { type: String, default: "ISO 9001 Process" },
      stripBadge: {
        type: String,
        default: "Precision Measurement & Verification",
      },
      stripItems: [
        {
          number: { type: String, default: "" },
          label: { type: String, default: "" },
          shortDesc: { type: String, default: "" },
          fullDesc: { type: String, default: "" },
        },
      ],
    },
    customSolutions: {
      badge: { type: String, default: "CUSTOM MOLD SOLUTIONS" },
      heading: { type: String, default: "Customized Solutions for" },
      highlightHeading: { type: String, default: "Demanding Mould Requirements" },
      description: {
        type: String,
        default:
          "We coordinate mould requirements with customer specifications, machine configurations and application goals to deliver tailored tooling solutions.",
      },
      image: { type: String, default: "/manufacturing/mfg_custom.jpg" },
      solutionProcessTitle: {
        type: String,
        default: "Engineering Tailored Around Your Production",
      },
      solutionProcessDescription: {
        type: String,
        default:
          "Click any solution below to inspect engineering coordination and technical activities in the panel on the left.",
      },
      solutions: [
        {
          id: { type: String, default: "" },
          number: { type: String, default: "" },
          title: { type: String, default: "" },
          description: { type: String, default: "" },
          detail: { type: String, default: "" },
          highlights: [{ type: String }],
        },
      ],
      confidentialityBadge: {
        type: String,
        default: "CONFIDENTIALITY & ENGINEERING INTEGRITY",
      },
      confidentialityTitle: {
        type: String,
        default: "Protected Development & Technical Coordination",
      },
      confidentialityDescription: {
        type: String,
        default:
          "Custom mould developments are safeguarded under strict NDA agreements with proprietary CAD design security, pre-trial validation, and direct engineering review.",
      },
      confidentialityNda: { type: String, default: "Strict NDA Protection" },
      confidentialityDfm: { type: String, default: "Free DFM Review" },
      ctaBadge: {
        type: String,
        default: "TECHNICAL CONSULTATION & FEASIBILITY",
      },
      ctaTitle: {
        type: String,
        default: "Let's Discuss Your Custom Mould Requirements",
      },
      ctaDescription: {
        type: String,
        default:
          "Share your product concept, specifications or tooling requirements with our team to start a technical discussion.",
      },
      ctaButtonText: { type: String, default: "Discuss Your Mould Project" },
      ctaButtonLink: {
        type: String,
        default: "/contact?subject=Custom+Mould+Solutions",
      },
    },
  },
  { timestamps: true }
);

if (mongoose.models && mongoose.models.ManufacturingPageContent) {
  delete (mongoose.models as any).ManufacturingPageContent;
}

export const ManufacturingPageContent: Model<IManufacturingPageContent> =
  mongoose.models.ManufacturingPageContent ||
  mongoose.model<IManufacturingPageContent>("ManufacturingPageContent", ManufacturingPageContentSchema);
