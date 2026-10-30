export interface LegalHeroData {
  titlePrimary: string;
  titleHighlight: string;
  breadcrumbLabel: string;
  badgeLabel: string;
  lastUpdated: string;
  bannerImage: string;
}

export interface LegalNoticeBannerData {
  title: string;
  description: string;
}

export interface LegalSidebarCardData {
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  buttonLabel: string;
  buttonUrl: string;
}

export interface LegalSectionItem {
  id: string;
  title: string;
  iconName?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  highlightBox?: {
    title?: string;
    text: string;
    type?: "info" | "warning" | "success";
  };
}

export interface LegalBottomLinkData {
  promptText: string;
  linkText: string;
  linkUrl: string;
}

export interface LegalPageContentData {
  hero: LegalHeroData;
  noticeBanner: LegalNoticeBannerData;
  sidebarCard: LegalSidebarCardData;
  sections: LegalSectionItem[];
  bottomLink: LegalBottomLinkData;
}

export const defaultPrivacyPolicyContent: LegalPageContentData = {
  hero: {
    titlePrimary: "Privacy",
    titleHighlight: "Policy",
    breadcrumbLabel: "Privacy Policy",
    badgeLabel: "Data Protection & NDA",
    lastUpdated: "March 2026",
    bannerImage: "/About/about banner.png",
  },
  noticeBanner: {
    title: "Corporate Commitment to Customer Privacy",
    description:
      "This document establishes our transparent data practices across all digital and technical interactions. By accessing our website or engaging Patel Mould Industries for tooling services, you acknowledge the terms outlined below.",
  },
  sidebarCard: {
    title: "Require an NDA First?",
    description:
      "We execute strict mutual Non-Disclosure Agreements before reviewing confidential CAD files and bottle drawings.",
    email: "sales@patelmould.com",
    phone: "+91 77847 58347",
    address: "Phase-IV GIDC, Gujarat, India",
    buttonLabel: "Contact Legal & Engineering",
    buttonUrl: "/contact",
  },
  sections: [
    {
      id: "introduction",
      title: "1. Introduction & Overview",
      iconName: "ShieldCheck",
      paragraphs: [
        "Welcome to Patel Mould Industries (\"we\", \"our\", \"us\"). We are a leading precision plastic mould manufacturing enterprise headquartered at GIDC Industrial Estate, Gujarat, India. We specialize in the design, engineering, CNC machining, and fabrication of high-cavitation PET Preform moulds, Injection Stretch Blow Moulds (ISBM), and Extrusion Blow Moulds (EBM).",
        "This Privacy Policy describes our practices regarding the collection, use, maintenance, protection, and disclosure of information gathered when you visit our website (patelmould.com), contact our sales engineering desks, submit Request for Quotations (RFQs), or exchange technical drawings (CAD / 3D models).",
      ],
      highlightBox: {
        title: "Industrial Confidentiality Guarantee",
        text: "We treat all client technical specifications, bottle designs, neck finish geometry, and preform drawings with strict non-disclosure safeguards.",
        type: "info",
      },
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      iconName: "Database",
      paragraphs: [
        "We collect information that identifies or relates to you and your enterprise in several distinct contexts:",
        "Additionally, like most commercial websites, our servers automatically log technical metadata including your browser type, device information, IP address, referral URLs, and pages accessed to ensure website stability and defense against cyber risks.",
      ],
      bulletPoints: [
        "Direct Inquiry Information: Full name, official designation, company name, corporate email address, telephone/WhatsApp numbers, plant location, and billing / GSTIN details.",
        "Technical & Engineering Specs: PET preform weight, neck profile (e.g., PCO 1810, 1881, 29/25, 30/25), 3D CAD/CAM models (STEP, IGES, Parasolid, DXF), cavitation target, and hot runner preferences.",
      ],
    },
    {
      id: "use-of-information",
      title: "3. How We Use Your Information",
      iconName: "FileCheck2",
      paragraphs: [
        "We deploy your data exclusively for legitimate commercial, engineering, and contractual objectives:",
      ],
      bulletPoints: [
        "Quotation & Feasibility Assessment: Evaluating mold tooling design, calculating cycle times, tooling steel selection (e.g., DIN 1.2083 / 1.2316), and issuing commercial cost estimates.",
        "Order Execution & Quality Reporting: Providing stage-wise in-process inspection milestones, CMM dimensional verification certificates, and mold trial sample video reports.",
        "After-Sales Technical Assistance: Tracking mold serial numbers, warranty support, spare parts dispatch (nozzles, tips, core inserts), and refurbishment scheduling.",
        "Legal & Statutory Compliance: Meeting Indian GST filing, customs dispatch protocols for international exports, and commercial trade compliance.",
      ],
    },
    {
      id: "confidentiality-cad",
      title: "4. CAD & Proprietary Tooling Confidentiality",
      iconName: "Lock",
      paragraphs: [
        "At Patel Mould Industries, we understand that mold drawings and container designs represent vital proprietary trade secrets of our beverage, pharmaceutical, cosmetic, and FMCG clients.",
      ],
      bulletPoints: [
        "Bilateral NDAs: We routinely execute formal mutual Non-Disclosure Agreements prior to receiving proprietary bottle models or technical 2D/3D drawings.",
        "Encrypted CAD Storage: Customer CAD files are stored on isolated, encrypted internal servers protected by multi-tier firewalls.",
        "Role-Based Access: Access is restricted strictly to authorized tool designers and CAM programmers directly assigned to your tooling project.",
        "Zero Third-Party Sharing: We do not distribute, replicate, or share customer tooling geometries, cavity layouts, or blow profiles with any unauthorized third parties.",
      ],
    },
    {
      id: "information-sharing",
      title: "5. Information Sharing & Third Parties",
      iconName: "Share2",
      paragraphs: [
        "We do not sell, rent, lease, or trade your contact or enterprise information to third-party marketing companies. We only disclose necessary information in limited industrial circumstances:",
      ],
      bulletPoints: [
        "Freight & Logistics Partners: Providing shipping consignee name, factory address, contact person, and phone numbers to accredited sea/air freight carriers and inland road logistics operators for mold delivery.",
        "Sub-Supplier Components: Exchanging dimensional interfacing specs with verified hot runner or temperature controller partners upon your express engineering approval.",
        "Regulatory & Law Enforcement: If mandated by applicable Indian or international statutes, court summons, or regulatory authorities for taxation and customs declarations.",
      ],
    },
    {
      id: "data-security",
      title: "6. Data Security & Retention",
      iconName: "Eye",
      paragraphs: [
        "We implement comprehensive organizational, physical, and technological security measures designed to safeguard your corporate data from unauthorized destruction, loss, alteration, or disclosure.",
        "We retain mold build documentation and design archives for the operative life of the mould (typically 8–15 years) to ensure seamless supply of interchangeable spare cores, cavities, neck rings, and wear plates whenever re-ordered.",
      ],
      bulletPoints: [
        "SSL / TLS 256-bit Encryption: All data transmissions and interactions across our digital platforms are protected by industry-standard HTTPS encryption.",
        "Air-Gapped CAD & Toolroom Network: Internal CAM machining networks and proprietary client design repositories are secured behind dedicated industrial firewalls.",
        "Long-Term Spares Archive (10+ Years): We archive mold build specifications for the entire tooling service life (8–15 years) to ensure rapid supply of interchangeable replacement components.",
      ],
    },
    {
      id: "your-rights",
      title: "7. Your Rights & Data Choices",
      iconName: "CheckCircle2",
      paragraphs: [
        "Depending on your jurisdiction and commercial relationship with Patel Mould Industries, you possess the right to:",
      ],
      bulletPoints: [
        "Request access to the personal contact data we maintain about you.",
        "Correct inaccurate, outdated, or incomplete corporate records.",
        "Request the deletion of non-contractual engineering inquiries and marketing communications.",
        "Request execution or renewal of our formal mutual Non-Disclosure Agreement (NDA).",
      ],
    },
    {
      id: "policy-updates",
      title: "8. Policy Revisions & Updates",
      iconName: "Clock",
      paragraphs: [
        "Patel Mould Industries reserves the right to amend or update this Privacy Policy periodically to reflect evolving legal standards, industrial regulations, or enhanced factory technology. The effective date at the top of this document indicates when changes were last implemented. Continued utilization of our website and services following updates constitutes acceptance.",
      ],
    },
  ],
  bottomLink: {
    promptText: "Looking for our commercial terms & manufacturing conditions?",
    linkText: "View Terms & Conditions",
    linkUrl: "/terms",
  },
};

export const defaultTermsAndConditionsContent: LegalPageContentData = {
  hero: {
    titlePrimary: "Terms &",
    titleHighlight: "Conditions",
    breadcrumbLabel: "Terms & Conditions",
    badgeLabel: "Commercial & Engineering Contract",
    lastUpdated: "March 2026",
    bannerImage: "/About/about banner.png",
  },
  noticeBanner: {
    title: "Standard Industrial Manufacturing Terms",
    description:
      "These contractual terms ensure rigorous engineering clarity, delivery schedules, and warranty protection for all custom plastic mould manufacturing contracts executed by Patel Mould Industries.",
  },
  sidebarCard: {
    title: "Commercial Inquiries",
    description:
      "Questions regarding specific project milestones, payment schedules, or custom tooling contracts?",
    email: "sales@patelmould.com",
    phone: "+91 77847 58347",
    address: "Phase-IV GIDC, Gujarat, India",
    buttonLabel: "Request Contract Clarification",
    buttonUrl: "/contact",
  },
  sections: [
    {
      id: "scope-acceptance",
      title: "1. Scope & Acceptance of Terms",
      iconName: "Scale",
      paragraphs: [
        "These Terms and Conditions (\"Terms\") govern all commercial quotations, purchase orders (POs), manufacturing contracts, technical trial services, and deliveries executed by Patel Mould Industries (\"Manufacturer\", \"Company\", \"we\", \"us\") to our domestic and international clients (\"Buyer\", \"Customer\").",
        "Placement of a purchase order, remittance of an advance tooling deposit, or written approval of a tooling design drawing constitutes unconditional acceptance of these Terms. Any conflicting terms proposed by the Buyer on standard purchase order sheets are expressly excluded unless formally executed in writing and signed by an authorized director of Patel Mould Industries.",
      ],
      highlightBox: {
        title: "Binding Technical Agreement",
        text: "Every mold manufacturing project is accompanied by a technical specification sheet defining cavitation, pitch, machine tonnage interface, and resin shrinkage factors.",
        type: "info",
      },
    },
    {
      id: "design-approval",
      title: "2. CAD Design Approval & Engineering Freezes",
      iconName: "Cpu",
      paragraphs: [
        "Tooling production commences strictly upon receipt of formal 2D/3D design approval from the Buyer:",
      ],
      bulletPoints: [
        "Design Freeze Sign-off: The Buyer is responsible for verifying bottle geometry, preform neck finish dimensions (e.g. 28mm PCO, 38mm Bericap, 29/25), thread starts, and product volumes prior to signing the General Arrangement (GA) drawing.",
        "Engineering Change Orders (ECO): Any modifications requested after design freeze and commencement of rough CNC machining or heat treatment will be subject to technical feasibility review, supplementary costs, and lead-time extension.",
        "Shrinkage Calculation: Tooling cavity dimensions are engineered based on standard virgin PET/PP/HDPE resin shrinkage coefficients specified in the approved GA drawing. Variations resulting from recycled resin content or additives remain the Buyer's responsibility.",
      ],
    },
    {
      id: "toolroom-manufacturing",
      title: "3. Toolroom Manufacturing & Materials",
      iconName: "Wrench",
      paragraphs: [
        "Patel Mould Industries builds tooling conforming to international standards and specified steel chemistries:",
      ],
      bulletPoints: [
        "Certified Tool Steels: Core, cavity, and neck ring inserts are fabricated from genuine pre-hardened and vacuum-hardened European/Japanese tool steels (e.g. DIN 1.2083, 1.2316, Stavax) with Mill Test Certificates (MTC).",
        "Sub-Micron Machining: Machining tolerances on high-speed CNC milling, wire EDM, and cylindrical grinding conform to ±0.005 mm to assure complete interchangeability of individual cavity components.",
      ],
    },
    {
      id: "mold-trials",
      title: "4. Mold Trials, Sampling & Acceptance (T0 / T1)",
      iconName: "FileText",
      paragraphs: [
        "Prior to commercial dispatch, all moulds undergo rigorous trial runs in our testing facility:",
      ],
      bulletPoints: [
        "Trial Samples: We provide comprehensive trial reports (T0/T1) including preform/bottle samples, wall thickness concentricity data, weight consistency charts, and operational video logs.",
        "Physical Inspection: The Buyer or their authorized technical representative is welcomed to witness the trial run in person at our Gujarat tooling campus.",
        "Dispatch Clearance: Dispatch is initiated only upon receipt of formal written sample acceptance and dimensional approval from the Buyer.",
      ],
    },
    {
      id: "pricing-payment",
      title: "5. Pricing, Taxes & Payment Schedules",
      iconName: "CreditCard",
      paragraphs: [
        "Unless explicitly modified in an authorized proforma invoice, standard industrial commercial milestones apply:",
        "All prices quoted are Ex-Works Gujarat, exclusive of applicable Goods and Services Tax (GST), customs duties, port handling fees, or international shipping tariffs unless explicitly contracted as CIF / CFR.",
      ],
      bulletPoints: [
        "40% Advance Deposit: Remitted with formal Purchase Order to initiate certified tool steel procurement and 3D CAD/CAM engineering.",
        "40% Progress Stage: Payable upon completion of CNC machining and readiness for vacuum heat treatment and mold assembly.",
        "20% Balance Milestone: Released upon successful T1 trial sample approval and CMM dimensional sign-off prior to factory dispatch.",
      ],
    },
    {
      id: "delivery-shipping",
      title: "6. Delivery, Packaging & Title Transfer",
      iconName: "Truck",
      paragraphs: [
        "Moulds are packaged in heavy-duty, anti-corrosive treated wooden export crates designed to withstand harsh maritime and long-haul overland transit:",
      ],
      bulletPoints: [
        "Rust Prevention: All mold surfaces and water channels are purged, dried, coated with heavy-duty anti-rust protective oil, and vacuum-sealed in heavy gauge polythene lining.",
        "Lead Times: Quoted lead times are calculated from the date of final GA design sign-off and receipt of advance payment. Delays caused by Buyer design revisions or force majeure events adjust delivery dates accordingly.",
        "Transfer of Risk: Risk of loss or transit damage transfers to the Buyer upon hand-over of crated goods to the nominated freight carrier at our factory gates (Ex-Works). Transit insurance is strongly recommended.",
      ],
    },
    {
      id: "warranty-claims",
      title: "7. Tooling Warranty & Quality Guarantees",
      iconName: "ShieldCheck",
      paragraphs: [
        "Patel Mould Industries provides an industry-leading warranty for workmanship, material integrity, and shot-life performance:",
        "Warranty Exclusions: This warranty does not cover defects arising from improper mold clamping, operating with unconditioned or contaminated chilled water leading to scale buildup, raw resin contamination (e.g. metal debris), failure to maintain proper lubrication, or unauthorized unauthorized modifications by third-party toolmakers.",
      ],
      highlightBox: {
        title: "12-Month / Specified Shot-Life Mechanical Warranty",
        text: "We warrant our molds against manufacturing defects in steel, machining, and internal assembly for a period of 12 months from the date of dispatch or up to 3–5 million shots (whichever occurs first, depending on agreed tooling grade).",
        type: "success",
      },
    },
    {
      id: "limitation-liability",
      title: "8. Limitation of Liability & Force Majeure",
      iconName: "AlertTriangle",
      paragraphs: [
        "Under no circumstances shall Patel Mould Industries be liable for indirect, incidental, punitive, or consequential damages, including loss of production profits, factory downtime, or raw polymer waste. Our aggregate liability arising out of any order shall strictly not exceed the total contract price paid for the specific mold tooling.",
        "Neither party shall be held accountable for non-performance or delays caused by events beyond reasonable human control (Force Majeure), including natural catastrophes, grid power blackouts, epidemics, import embargoes, or government sanctions.",
      ],
    },
    {
      id: "jurisdiction",
      title: "9. Governing Law & Dispute Resolution",
      iconName: "Scale",
      paragraphs: [
        "These Terms and any agreement entered with Patel Mould Industries shall be construed and governed in accordance with the laws of the Republic of India. In the event of any commercial or technical dispute that cannot be resolved amicably through mutual executive dialogue, the competent civil courts of Gujarat, India shall possess exclusive jurisdiction.",
      ],
    },
  ],
  bottomLink: {
    promptText: "Want to know how we protect your confidential CAD drawings & data?",
    linkText: "View Privacy Policy & NDA",
    linkUrl: "/privacy-policy",
  },
};

