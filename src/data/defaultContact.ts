export interface ContactHeroBannerData {
  titlePart1: string;
  titleHighlight: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bannerImage: string;
}

export interface ContactIntroBadgeItem {
  title: string;
  subtitle: string;
  iconName: string;
}

export interface ContactIntroSectionData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  leadParagraph: string;
  secondaryParagraph: string;
  image: string;
  trustBadges: ContactIntroBadgeItem[];
}

export interface ContactInquirySectionData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  // Form settings & text
  formTitle: string;
  formSubtitle: string;
  successTitle: string;
  successMessage: string;
  supportPhone: string;
  responseWindow: string;
  fileUploadNote: string;
  requirementOptions: string[];
}

export interface ContactChannelCard {
  title: string;
  lines: string[];
  actionLabel: string;
  actionUrl: string;
  iconType: "location" | "phone" | "email" | "whatsapp";
}

export interface ContactDirectFormConfig {
  formBadge: string;
  formTitle: string;
  formSubtitle: string;
  submitButtonText: string;
  successTitle: string;
  successMessage: string;
  supportPhone: string;
  responseWindow: string;
}

export interface ContactDirectSectionData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  channels: ContactChannelCard[];
  mapEmbedUrl: string;
  mapAddressTitle: string;
  mapAddressDetail: string;
  mapCoordinates: string;
  mapDirectionUrl: string;
  socialLinkedIn: string;
  socialFacebook: string;
  socialYouTube: string;
  socialInstagram: string;
  quickForm: ContactDirectFormConfig;
}

export interface ContactPageContentData {
  heroBanner: ContactHeroBannerData;
  intro: ContactIntroSectionData;
  inquiry: ContactInquirySectionData;
  direct: ContactDirectSectionData;
}

export const defaultContactPageContent: ContactPageContentData = {
  heroBanner: {
    titlePart1: "Contact",
    titleHighlight: "Our Team",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Contact Us",
    bannerImage: "/contact/contact-banner.jpg",
  },
  intro: {
    badge: "DIRECT TOOLROOM CONSULTATION",
    headingPart1: "Let’s Engineer Your Next",
    headingHighlight: "Precision Mould",
    leadParagraph:
      "Based in Gujarat’s renowned industrial engineering corridor, Patel Mould Industries partners with plastic converters, beverage corporations, pharmaceutical packagers, and FMCG brands across India and 14+ countries globally.",
    secondaryParagraph:
      "Whether you are planning a high-cavity PET preform conversion system, an ISBM pharmaceutical container project, or heavy-duty extrusion blow molds, our tooling engineers offer direct DFM review, moldflow thermal balancing, and rapid quotations.",
    image: "/contact/contact-office.jpg",
    trustBadges: [
      {
        title: "ISO 9001:2015",
        subtitle: "Certified Quality",
        iconName: "ShieldCheck",
      },
      {
        title: "24-Hour DFM",
        subtitle: "Technical Turnaround",
        iconName: "Clock",
      },
      {
        title: "5M+ Shot Life",
        subtitle: "Class 101 Guarantee",
        iconName: "Award",
      },
      {
        title: "14+ Countries",
        subtitle: "Global Direct Exports",
        iconName: "Users",
      },
    ],
  },
  inquiry: {
    badge: "TECHNICAL RFQ & PROPOSAL DESK",
    headingPart1: "Request a Technical Quotation &",
    headingHighlight: "Project Assessment",
    description:
      "Submit your preform or container specifications, 3D CAD models (STEP/IGES/SolidWorks), neck diameter, cavitation target, and resin details for a preliminary tooling assessment and transparent cost proposal within 24 hours.",
    formTitle: "Project Brief & Tooling Parameter Specifications",
    formSubtitle: "Complete the 3-stage tooling profile below. All CAD components and technical data are protected under our mutual NDA.",
    successTitle: "Quotation Request Submitted Successfully!",
    successMessage: "Our engineering division in Gujarat has received your tooling requirements and attached files. A dedicated mold project engineer will review your CAD parameters and issue a preliminary DFM report within 24 business hours.",
    supportPhone: "+91 77847 58347",
    responseWindow: "Under 24 Business Hours",
    fileUploadNote: "Accepted: STEP, STP, IGES, DXF, DWG, PDF (Max 25MB)",
    requirementOptions: [
      "New Complete Mold Tooling",
      "Mold Cavity & Core Replacement",
      "Neck Split & Conversion Kit",
      "Hot Runner System Overhaul",
      "Mold Flow Analysis & DFM Only",
    ],
  },
  direct: {
    badge: "REACH OUR FACILITY",
    headingPart1: "Corporate Campus &",
    headingHighlight: "Contact Information",
    description:
      "Visit our 15,000 m² high-precision toolroom and corporate engineering offices in Gujarat, or reach out to our client communication desk via phone, email, or direct WhatsApp.",
    channels: [
      {
        title: "Plant & Toolroom Campus",
        lines: [
          "Plot No. 142–148, Precision Mould Park, Phase-IV GIDC, Vatva, Ahmedabad, Gujarat 382445, India.",
        ],
        actionLabel: "View On Google Map",
        actionUrl:
          "https://www.google.com/maps/search/?api=1&query=Precision+Mould+Park+Phase+IV+GIDC+Vatva+Gujarat+India",
        iconType: "location",
      },
      {
        title: "Telephone Lines",
        lines: [
          "Direct Sales: +91 77847 58347",
          "Toolroom Desk: +91 79 2583 4901",
          "Support Desk: +91 79 2583 4902",
        ],
        actionLabel: "Call Technical Line",
        actionUrl: "tel:+917784758347",
        iconType: "phone",
      },
      {
        title: "Corporate & RFQ Email",
        lines: [
          "Quotes: sales@patelmould.com",
          "Engineering: technical@patelmould.com",
          "Exports: export@patelmould.com",
        ],
        actionLabel: "Send An Email",
        actionUrl: "mailto:sales@patelmould.com",
        iconType: "email",
      },
      {
        title: "WhatsApp & Working Hours",
        lines: [
          "WhatsApp: +91 77847 58347",
          "Mon – Sat: 8:30 AM – 7:30 PM IST",
          "Sunday: Emergency On-Call Support",
        ],
        actionLabel: "Instant WhatsApp Chat",
        actionUrl:
          "https://wa.me/917784758347?text=Hello%20Patel%20Mould%20Industries,%20I%20have%20a%20tooling%20inquiry",
        iconType: "whatsapp",
      },
    ],
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Precision+Mould+Park,+Phase-IV+GIDC,+Vatva,+Gujarat,+India&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapAddressTitle: "Patel Mould Industries Corporate Toolroom",
    mapAddressDetail:
      "Phase-IV GIDC Industrial Estate, Vatva, Ahmedabad, Gujarat 382445, India.",
    mapCoordinates: "Coordinates: 22.9587° N, 72.6375° E",
    mapDirectionUrl:
      "https://www.google.com/maps/search/?api=1&query=Precision+Mould+Park+Phase+IV+GIDC+Vatva+Gujarat+India",
    socialLinkedIn: "https://linkedin.com",
    socialFacebook: "https://facebook.com",
    socialYouTube: "https://youtube.com",
    socialInstagram: "https://instagram.com",
    quickForm: {
      formBadge: "DIRECT MESSAGE DESK",
      formTitle: "Send Us a Direct Message",
      formSubtitle:
        "For factory visit requests, distributor partnerships, or administrative communications.",
      submitButtonText: "Send Direct Message",
      successTitle: "Thank You! Your message is sent.",
      successMessage:
        "Your message has been securely delivered to our plant coordination desk in Gujarat.",
      supportPhone: "+91 77847 58347",
      responseWindow: "Within 4 to 8 hours",
    },
  },
};

