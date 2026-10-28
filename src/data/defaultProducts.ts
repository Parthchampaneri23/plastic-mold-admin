import { ICategoryItem, IProductItem, IProductsPageHero } from "@/models/ProductPageContent";
import { PRODUCT_FAQS } from "./defaultProductFaqs";

export const DEFAULT_PRODUCT_HERO: IProductsPageHero = {
  badge: "PRECISION MOULD CATALOG",
  heading: "High-Performance Moulds Engineered for",
  headingHighlight: "Zero-Defect Production",
  description:
    "Explore Patel Mould Industries' comprehensive catalog of high-speed PET Preform, Single-Stage ISBM, and Extrusion Blow Moulds (EBM) engineered for beverage, cosmetic, pharma, and industrial packaging.",
  backgroundImage: "/product/product banner.png",
};

export const DEFAULT_PRODUCT_CATEGORIES: ICategoryItem[] = [
  {
    id: "preform-jar",
    slug: "preform-jar",
    name: "Preform & Jar Mold",
    label: "PREFORM & JAR MOULDS",
    description:
      "High-precision multi-cavity PET preform molds and wide-mouth jar tooling engineered for high-speed cycle times and zero-defect output.",
    image: "/product/pet-preform-mold.png",
  },
  {
    id: "isbm",
    slug: "isbm",
    name: "ISBM Mold",
    label: "ISBM MOULDS",
    description:
      "Injection Stretch Blow Molding (ISBM) tooling engineered for single-stage premium container production with flawless optical clarity.",
    image: "/product/isbm-bottle-mold.png",
  },
  {
    id: "ebm",
    slug: "ebm",
    name: "EBM Mold",
    label: "EBM MOULDS",
    description:
      "Extrusion Blow Molding (EBM) tooling for complex hollow plastic bottles, jerrycans, automotive tanks, and industrial containers.",
    image: "/product/ebm-bottle-mold.png",
  },
];

const RAW_PRODUCTS: Omit<IProductItem, "faqs">[] = [
  // 1. PET Preform Mold
  {
    id: "pet-preform-mold",
    slug: "pet-preform-mold",
    name: "PET Preform Mold",
    category: "Preform & Jar Mold",
    categorySlug: "preform-jar",
    shortDescription:
      "High-speed preform moulds built for smooth, reliable bottle production and seamless daily output.",
    overview:
      "Engineered for high-volume beverage and packaging lines, our PET Preform Moulds feature balanced hot runner systems, micro-micron concentricity, and ultra-fast thermal cooling.",
    fullDescription:
      "Our PET Preform Moulds are built using premium S136 stainless steel and advanced CAD/CAM 3D simulations. The optimized cooling channel geometry dramatically reduces cycle times while guaranteeing uniform wall thickness and zero neck flash across all preform cavities.",
    image: "/product/pet-preform-mold.png",
    galleryImages: [
      "/product/pet-preform-mold.png",
      "/product/high-cavitation-preform-mold.png",
      "/product/pet-jar-mold.png",
    ],
    keywords: ["PET", "Preform", "Packaging", "High Volume", "Bottling"],
    application: "Beverage & Packaging",
    features: [
      "High-grade stainless steel core & cavity components (S136 / 1.2083)",
      "Advanced naturally balanced hot runner valve gate system",
      "Optimized neck split conformal cooling design",
      "Guaranteed 5M+ shot lifespan with low maintenance",
      "Interchangeable neck splits & modular core inserts",
    ],
    specifications: [
      { label: "Mold Type", value: "PET Preform" },
      { label: "Application", value: "Beverage & Packaging" },
      { label: "Cavity Configuration", value: "Custom (8 to 96 Cavities)" },
      { label: "Production Output", value: "High Volume Continuous" },
    ],
    techSpecs: {
      moldType: "PET Preform Injection Mould",
      cavityDetails: "Custom Configurable (8 to 96 Cavities)",
      material: "S136 Stainless Steel / Hardened Tool Steel (50-54 HRC)",
      machineCompatibility: "Husky, Netstal, KraussMaffei & standard injection presses",
      application: "Mineral Water, Carbonated Soft Drinks & Juice Packaging",
    },
    seo: {
      metaTitle: "PET Preform Mold | High-Speed Multi-Cavity Moulds | Patel Mould Industries",
      metaDescription:
        "Engineered PET preform moulds with balanced hot runner systems, conformal cooling channels, and 5M+ shot lifespan. Custom 8 to 96 cavity tooling.",
      metaKeywords: "PET Preform Mold, Injection Mold, Multi Cavity Preform Mould, Beverage Packaging, Patel Mould Industries",
      canonicalUrl: "https://www.patelmould.com/products/pet-preform-mold",
      schemaJson: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "PET Preform Mold",
          image: "https://www.patelmould.com/product/pet-preform-mold.png",
          description:
            "Engineered for high-volume beverage and packaging lines, featuring balanced hot runner systems and ultra-fast thermal cooling.",
          brand: {
            "@type": "Brand",
            name: "Patel Mould Industries",
          },
          category: "Preform & Jar Mold",
        },
        null,
        2
      ),
    },
    order: 1,
  },

  // 2. PET Jar Mold
  {
    id: "pet-jar-mold",
    slug: "pet-jar-mold",
    name: "PET Jar Mold",
    category: "Preform & Jar Mold",
    categorySlug: "preform-jar",
    shortDescription:
      "Custom wide-mouth jar moulds offering sparkling clarity and perfect neck threading every time.",
    overview:
      "Designed for wide-mouth packaging applications, our PET Jar Moulds deliver high cosmetic clarity, precise thread engagement, and reliable wall distribution.",
    fullDescription:
      "Specifically crafted for wide-mouth food containers, cosmetics, and confectionery jars, these moulds incorporate high thermal conductivity inserts and precision neck split mechanisms to prevent deformation during rapid eject cycles.",
    image: "/product/pet-jar-mold.png",
    galleryImages: [
      "/product/pet-jar-mold.png",
      "/product/pet-preform-mold.png",
      "/product/high-cavitation-preform-mold.png",
    ],
    keywords: ["PET", "Jar", "Packaging", "Wide Mouth", "Confectionery"],
    application: "Food, Beverage & Packaging",
    features: [
      "Precision wide-mouth neck thread alignment (45mm - 120mm+)",
      "Uniform wall-thickness control with zero deformation",
      "Corrosion-resistant tool steel insertion (Assab Stavax ESR)",
      "Interchangeable cavity modules for quick thread switchover",
      "High-gloss cavity mirror polish up to SPI-A1 standard",
    ],
    specifications: [
      { label: "Mold Type", value: "PET Jar" },
      { label: "Application", value: "Food, Beverage & Packaging" },
      { label: "Cavity Configuration", value: "Custom (2 to 32 Cavities)" },
      { label: "Production Output", value: "High Volume Continuous" },
    ],
    techSpecs: {
      moldType: "Wide-Mouth PET Jar Mould",
      cavityDetails: "Custom Configurable (2 to 32 Cavities)",
      material: "Corrosion-Resistant Stainless Steel / Premium Tool Steel",
      machineCompatibility: "Compatible with standard injection stretch blow moulding systems",
      application: "Food Storage, Cosmetics, Confectionery & Powder Packaging",
    },
    seo: {
      metaTitle: "PET Jar Mold | Wide-Mouth Jar Tooling | Patel Mould Industries",
      metaDescription:
        "High-clarity wide-mouth PET jar moulds engineered for food storage, confectionery, cosmetic jars, and powders. Precision thread alignment and mirror finish.",
      metaKeywords: "PET Jar Mold, Wide Mouth Jar Tooling, Food Packaging Mold, Patel Mould Industries",
      canonicalUrl: "https://www.patelmould.com/products/pet-jar-mold",
      schemaJson: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "PET Jar Mold",
          image: "https://www.patelmould.com/product/pet-jar-mold.png",
          description: "Precision wide-mouth PET jar moulds for confectionery, cosmetics, and food packaging.",
          brand: {
            "@type": "Brand",
            name: "Patel Mould Industries",
          },
          category: "Preform & Jar Mold",
        },
        null,
        2
      ),
    },
    order: 2,
  },

  // 3. High-Cavitation Preform Mold
  {
    id: "high-cavitation-preform-mold",
    slug: "high-cavitation-preform-mold",
    name: "High-Cavitation Preform Mold",
    category: "Preform & Jar Mold",
    categorySlug: "preform-jar",
    shortDescription:
      "Maximized multi-cavity tooling to boost your factory production rates with top-tier precision.",
    overview:
      "High-cavitation tooling designed for continuous, round-the-clock preform manufacturing with balanced melt distribution and minimal energy consumption.",
    fullDescription:
      "Engineered for major bottling plants requiring high output, this high-cavitation tooling setup integrates multi-zone digital thermal control, pneumatic shut-off valve gates, and ultra-durable mould base structures for 5M+ shot lifespan.",
    image: "/product/high-cavitation-preform-mold.png",
    galleryImages: [
      "/product/high-cavitation-preform-mold.png",
      "/product/pet-preform-mold.png",
      "/product/pet-jar-mold.png",
    ],
    keywords: ["High Cavitation", "PET", "Preform", "Production", "Multi Cavity"],
    application: "Beverage Packaging",
    features: [
      "Multi-zone hot runner temperature control system",
      "Independent cavity shut-off valve gate options",
      "Ultra-fast cycle time capability (sub-8s cycle)",
      "Heavy-duty base plate rigidity with hardened wear plates",
      "Sub-micron concentricity guarantee verified on Zeiss CMM",
    ],
    specifications: [
      { label: "Mold Type", value: "High-Cavitation Preform" },
      { label: "Application", value: "Beverage Packaging" },
      { label: "Cavity Configuration", value: "High Cavitation Custom (32 to 128 Cavities)" },
      { label: "Production Output", value: "Ultra High Volume Mass Production" },
    ],
    techSpecs: {
      moldType: "Multi-Cavitation Preform Tooling",
      cavityDetails: "High Density (32 to 128 Cavities)",
      material: "Imported Hardened Tool Steel (HRC 52-56)",
      machineCompatibility: "High-speed automated injection molding platforms",
      application: "Mass Beverage & Bottling Operations",
    },
    seo: {
      metaTitle: "High-Cavitation Preform Mold | 32 to 128 Cavities | Patel Mould",
      metaDescription:
        "High-density multi-cavity PET preform moulds engineered for major water, CSD, and juice bottling lines. Ultra-fast cycle time & balanced melt flow.",
      metaKeywords: "High Cavitation Preform Mold, 48 Cavity Mold, 72 Cavity Mold, 96 Cavity Mold, Patel Mould",
      canonicalUrl: "https://www.patelmould.com/products/high-cavitation-preform-mold",
      schemaJson: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "High-Cavitation Preform Mold",
          image: "https://www.patelmould.com/product/high-cavitation-preform-mold.png",
          description: "32 to 128 cavity high-density PET preform moulds for ultra-high speed beverage manufacturing.",
          brand: {
            "@type": "Brand",
            name: "Patel Mould Industries",
          },
          category: "Preform & Jar Mold",
        },
        null,
        2
      ),
    },
    order: 3,
  },

  // 4. ISBM Bottle Mold
  {
    id: "isbm-bottle-mold",
    slug: "isbm-bottle-mold",
    name: "ISBM Bottle Mold",
    category: "ISBM Mold",
    categorySlug: "isbm",
    shortDescription:
      "Single-stage stretch blow moulds delivering crystal-clear bottle finish and uniform wall strength.",
    overview:
      "Single-stage Injection Stretch Blow Moulding (ISBM) tooling engineered for pharmaceutical, cosmetic, and premium spirit bottle production.",
    fullDescription:
      "Our ISBM Bottle Moulds are built for single-stage processing where preform injection and bottle blowing occur in one seamless machine cycle. This eliminates preform handling scratches and produces optic-grade clarity with precise neck dimensional tolerances.",
    image: "/product/isbm-bottle-mold.png",
    galleryImages: [
      "/product/isbm-bottle-mold.png",
      "/product/isbm-container-mold.png",
      "/product/multi-cavity-isbm-mold.png",
    ],
    keywords: ["ISBM", "PET Bottle", "Bottle", "Packaging", "Cosmetics", "Pharma"],
    application: "PET Bottles",
    features: [
      "Single-stage process tooling compatibility (Aoki, Nissei ASB)",
      "Superior optic-grade clarity & scratch-free surface gloss finish",
      "Precise base pop-up geometry control for perfect standing stability",
      "High wear resistance tool steel inserts for continuous operations",
      "Quick changeover modular cavity inserts",
    ],
    specifications: [
      { label: "Mold Type", value: "ISBM Bottle" },
      { label: "Application", value: "PET Bottles (Pharma & Cosmetics)" },
      { label: "Configuration", value: "Custom (4 to 16 Cavities)" },
      { label: "Production", value: "High Volume Single-Stage" },
    ],
    techSpecs: {
      moldType: "Single-Stage ISBM Bottle Mould",
      cavityDetails: "Custom Configurable (4 to 16 Cavities)",
      material: "Aircraft-Grade Aluminum & Hardened Stainless Steel",
      machineCompatibility: "Aoki, Nissei ASB & standard single-stage ISBM machines",
      application: "Pharma Bottles, Cosmetics & Premium Beverages",
    },
    seo: {
      metaTitle: "ISBM Bottle Mold | Single-Stage Blow Molds | Patel Mould Industries",
      metaDescription:
        "High-precision single-stage ISBM bottle moulds for pharmaceutical, cosmetic, and premium liquor bottles with optical clarity and uniform walls.",
      metaKeywords: "ISBM Bottle Mold, Single Stage ISBM, Nissei ASB Mold, Aoki Tooling, Patel Mould Industries",
      canonicalUrl: "https://www.patelmould.com/products/isbm-bottle-mold",
      schemaJson: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "ISBM Bottle Mold",
          image: "https://www.patelmould.com/product/isbm-bottle-mold.png",
          description: "Single-stage ISBM bottle moulds delivering crystal-clear finish and uniform wall strength.",
          brand: {
            "@type": "Brand",
            name: "Patel Mould Industries",
          },
          category: "ISBM Mold",
        },
        null,
        2
      ),
    },
    order: 4,
  },

  // 5. ISBM Container Mold
  {
    id: "isbm-container-mold",
    slug: "isbm-container-mold",
    name: "ISBM Container Mold",
    category: "ISBM Mold",
    categorySlug: "isbm",
    shortDescription:
      "Flexible container tooling designed for custom shapes, cosmetics, and delicate packaging needs.",
    overview:
      "Custom ISBM tooling designed to handle asymmetric shapes, sharp radii, and special bottle neck designs with high structural integrity.",
    fullDescription:
      "Crafted for complex geometric packaging such as oval shampoo bottles, square personal care containers, and liquor flasks, our ISBM Container Moulds incorporate specialized stretch rod geometry to ensure uniform wall thickness.",
    image: "/product/isbm-container-mold.png",
    galleryImages: [
      "/product/isbm-container-mold.png",
      "/product/isbm-bottle-mold.png",
      "/product/multi-cavity-isbm-mold.png",
    ],
    keywords: ["ISBM", "Container", "Packaging", "Custom Tooling", "Personal Care"],
    application: "Containers",
    features: [
      "Custom complex geometry capability (oval, rectangular, angular)",
      "Seamless parting line match with zero visible seam mark",
      "Integrated bottom mold pinch and push-up mechanics",
      "Optimized micro-venting channels prevent trapped air",
      "Zero distortion conformal cooling jacket",
    ],
    specifications: [
      { label: "Mold Type", value: "ISBM Container" },
      { label: "Application", value: "Personal Care & Chemicals" },
      { label: "Configuration", value: "Custom Geometry" },
      { label: "Design", value: "Application Specific 3D Modeling" },
    ],
    techSpecs: {
      moldType: "Custom ISBM Container Tooling",
      cavityDetails: "Application Specific Custom Configuration",
      material: "High-Conductivity Tool Steel & Premium Alloy",
      machineCompatibility: "Universal Single-Stage ISBM Machinery",
      application: "Personal Care, Household Chemicals & Custom Containers",
    },
    seo: {
      metaTitle: "ISBM Container Mold | Custom Geometric Packaging | Patel Mould",
      metaDescription:
        "Custom single-stage ISBM container moulds designed for oval, square, and complex bottle shapes in personal care and cosmetic industries.",
      metaKeywords: "ISBM Container Mold, Custom Bottle Mold, Oval Shampoo Mold, Personal Care Tooling, Patel Mould",
      canonicalUrl: "https://www.patelmould.com/products/isbm-container-mold",
      schemaJson: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "ISBM Container Mold",
          image: "https://www.patelmould.com/product/isbm-container-mold.png",
          description: "Custom ISBM tooling designed to handle asymmetric shapes and special packaging contours.",
          brand: {
            "@type": "Brand",
            name: "Patel Mould Industries",
          },
          category: "ISBM Mold",
        },
        null,
        2
      ),
    },
    order: 5,
  },

  // 6. Multi-Cavity ISBM Mold
  {
    id: "multi-cavity-isbm-mold",
    slug: "multi-cavity-isbm-mold",
    name: "Multi-Cavity ISBM Mold",
    category: "ISBM Mold",
    categorySlug: "isbm",
    shortDescription:
      "High-density multi-cavity ISBM tools crafted for efficient, cost-effective bottle manufacturing.",
    overview:
      "High-density multi-cavity ISBM moulds designed to maximize output per machine hour while lowering cost per container.",
    fullDescription:
      "Designed for high-capacity FMCG packaging lines, our Multi-Cavity ISBM Moulds ensure cavity-to-cavity volume consistency and tight weight distribution for high-speed automated capping lines.",
    image: "/product/multi-cavity-isbm-mold.png",
    galleryImages: [
      "/product/multi-cavity-isbm-mold.png",
      "/product/isbm-bottle-mold.png",
      "/product/isbm-container-mold.png",
    ],
    keywords: ["ISBM", "Multi-Cavity", "High Volume", "Bottle", "FMCG"],
    application: "Bottle & Container Packaging",
    features: [
      "High cavitation density for maximum yield per hour",
      "Precise cavity-to-cavity weight uniformity (CV < 0.25%)",
      "Durable heat-treated aluminum & tool steel inserts",
      "Fast mold changeover design minimizes setup time",
      "Enhanced cooling circuit channels reduce cycle time",
    ],
    specifications: [
      { label: "Mold Type", value: "Multi-Cavity ISBM" },
      { label: "Application", value: "Bottle & Container Packaging" },
      { label: "Configuration", value: "High Cavitation (8 to 32 Cavities)" },
      { label: "Production", value: "High Volume Fast Cycling" },
    ],
    techSpecs: {
      moldType: "High-Density Multi-Cavity ISBM",
      cavityDetails: "High Cavitation (8 to 32 Cavities)",
      material: "Heat-Treated Hardened Tool Steel",
      machineCompatibility: "High-speed automated ISBM lines",
      application: "FMCG, Edible Oil & Beverage Packaging",
    },
    seo: {
      metaTitle: "Multi-Cavity ISBM Mold | High-Output FMCG Tooling | Patel Mould",
      metaDescription:
        "High-density multi-cavity ISBM moulds engineered for high-speed automated bottling and FMCG production. Maximum yield, uniform weight.",
      metaKeywords: "Multi Cavity ISBM Mold, High Density ISBM, FMCG Packaging Tooling, Patel Mould Industries",
      canonicalUrl: "https://www.patelmould.com/products/multi-cavity-isbm-mold",
      schemaJson: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Multi-Cavity ISBM Mold",
          image: "https://www.patelmould.com/product/multi-cavity-isbm-mold.png",
          description: "High-density multi-cavity ISBM moulds designed to maximize output per machine hour.",
          brand: {
            "@type": "Brand",
            name: "Patel Mould Industries",
          },
          category: "ISBM Mold",
        },
        null,
        2
      ),
    },
    order: 6,
  },

  // 7. EBM Bottle Mold
  {
    id: "ebm-bottle-mold",
    slug: "ebm-bottle-mold",
    name: "EBM Bottle Mold",
    category: "EBM Mold",
    categorySlug: "ebm",
    shortDescription:
      "Durable extrusion blow moulds engineered for crisp bottle contours and clean flash separation.",
    overview:
      "Precision Extrusion Blow Moulding (EBM) tooling for HDPE, PP, and PVC bottles with clean pinch-off edges and rapid thermal response.",
    fullDescription:
      "Engineered with beryllium copper pinch-offs and high thermal conductivity aluminum or steel cavities, our EBM Bottle Moulds guarantee clean flash separation and smooth bottle bottoms for leak-free liquid packaging.",
    image: "/product/ebm-bottle-mold.png",
    galleryImages: [
      "/product/ebm-bottle-mold.png",
      "/product/ebm-container-mold.png",
      "/product/ebm-industrial-packaging-mold.png",
    ],
    keywords: ["EBM", "Bottle", "Packaging", "HDPE", "PP", "Extrusion Blow"],
    application: "Bottles",
    features: [
      "Beryllium copper or hardened tool steel pinch-off edges",
      "Optimized parison alignment guide system",
      "High efficiency water cooling jacket for fast cycle rates",
      "Clean flash separation with zero manual trimming",
      "Compatible with HDPE, PP, LDPE & PVC resins",
    ],
    specifications: [
      { label: "Mold Type", value: "EBM Bottle" },
      { label: "Application", value: "Bottles (Dairy, Oils, Detergent)" },
      { label: "Configuration", value: "Single & Multi-Parison" },
      { label: "Production", value: "High Volume Continuous" },
    ],
    techSpecs: {
      moldType: "Extrusion Blow Mould (EBM)",
      cavityDetails: "Single & Multi-Parison Configurations",
      material: "QC-10 Aircraft Aluminum / Stainless Steel Inserts",
      machineCompatibility: "Bekum, Uniloy, Kautex & Standard EBM machines",
      application: "Milk, Dairy, Lubricant & Detergent Bottles",
    },
    seo: {
      metaTitle: "EBM Bottle Mold | Extrusion Blow Molds HDPE & PP | Patel Mould",
      metaDescription:
        "Extrusion blow moulds (EBM) with beryllium copper pinch-off inserts for HDPE and PP bottles. Rapid cooling, leak-free bases, clean flash trim.",
      metaKeywords: "EBM Bottle Mold, Extrusion Blow Mold, HDPE Bottle Tooling, Dairy Bottle Mold, Patel Mould",
      canonicalUrl: "https://www.patelmould.com/products/ebm-bottle-mold",
      schemaJson: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "EBM Bottle Mold",
          image: "https://www.patelmould.com/product/ebm-bottle-mold.png",
          description: "Precision extrusion blow moulding tooling for HDPE, PP, and PVC bottles with clean pinch-off.",
          brand: {
            "@type": "Brand",
            name: "Patel Mould Industries",
          },
          category: "EBM Mold",
        },
        null,
        2
      ),
    },
    order: 7,
  },

  // 8. EBM Container Mold
  {
    id: "ebm-container-mold",
    slug: "ebm-container-mold",
    name: "EBM Container Mold",
    category: "EBM Mold",
    categorySlug: "ebm",
    shortDescription:
      "Versatile EBM moulds for household, personal care, and chemical containers with custom handleware.",
    overview:
      "Tailored EBM tooling for containers featuring integrated handleware, view-stripe parison lines, and multi-layer wall structures.",
    fullDescription:
      "Our EBM Container Moulds accommodate complex handle geometry, auto-trimming flash features, and calibrated blow pin mechanisms, making them ideal for household chemicals, agrochemicals, and personal care products.",
    image: "/product/ebm-container-mold.png",
    galleryImages: [
      "/product/ebm-container-mold.png",
      "/product/ebm-bottle-mold.png",
      "/product/ebm-industrial-packaging-mold.png",
    ],
    keywords: ["EBM", "Container", "Industrial", "Packaging", "Handleware"],
    application: "Containers",
    features: [
      "Integrated handleware pinch-off & calibrated blow pin design",
      "Multi-cavity extrusion blow parison alignment",
      "Engineered for HDPE / PP / multi-layer co-extrusion resins",
      "Robust mold base frame with anti-wear guide pillars",
      "Integrated transparent view-line channel support",
    ],
    specifications: [
      { label: "Mold Type", value: "EBM Container" },
      { label: "Application", value: "Household Chemicals & Lubricants" },
      { label: "Configuration", value: "Custom Single & Dual Cavity" },
      { label: "Design", value: "Handleware Integrated 3D Design" },
    ],
    techSpecs: {
      moldType: "EBM Container Tooling with Handleware",
      cavityDetails: "Custom Single & Dual Cavity",
      material: "Hard-Anodized Alloy Steel & Beryllium Copper Pinch",
      machineCompatibility: "Continuous & Accumulator Head EBM Machinery",
      application: "Household Detergents, Motor Oil & Agrochemical Containers",
    },
    seo: {
      metaTitle: "EBM Container Mold | Handleware & Chemical Can Tooling | Patel Mould",
      metaDescription:
        "Extrusion blow moulds with integrated handleware, view-stripe support, and auto de-flashing for household chemicals, engine oils, and agrochemicals.",
      metaKeywords: "EBM Container Mold, Handle Bottle Mold, Jerry Can Mold, Chemical Container Tooling, Patel Mould",
      canonicalUrl: "https://www.patelmould.com/products/ebm-container-mold",
      schemaJson: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "EBM Container Mold",
          image: "https://www.patelmould.com/product/ebm-container-mold.png",
          description: "Tailored EBM tooling for containers featuring integrated handleware and view-stripe parisons.",
          brand: {
            "@type": "Brand",
            name: "Patel Mould Industries",
          },
          category: "EBM Mold",
        },
        null,
        2
      ),
    },
    order: 8,
  },

  // 9. EBM Industrial Packaging Mold
  {
    id: "ebm-industrial-packaging-mold",
    slug: "ebm-industrial-packaging-mold",
    name: "EBM Industrial Packaging Mold",
    category: "EBM Mold",
    categorySlug: "ebm",
    shortDescription:
      "Heavy-duty industrial blow moulds built for drums, Jerry cans, and chemical container durability.",
    overview:
      "Heavy-duty large format EBM moulds designed for Jerry cans, industrial drums, and chemical carboys requiring high drop-test impact resistance.",
    fullDescription:
      "Built with heavy-duty structural steel plates and high-wear alloy inserts, these industrial EBM moulds produce robust containers that pass stringent UN drop tests, stacking load requirements, and chemical compatibility standards.",
    image: "/product/ebm-industrial-packaging-mold.png",
    galleryImages: [
      "/product/ebm-industrial-packaging-mold.png",
      "/product/ebm-container-mold.png",
      "/product/ebm-bottle-mold.png",
    ],
    keywords: ["EBM", "Industrial", "Packaging", "Jerry Can", "Drums", "Heavy Duty"],
    application: "Industrial Packaging",
    features: [
      "Heavy-duty industrial grade construction with hardened plates",
      "High-impact tool steel inserts at critical corner stress points",
      "Uniform drop-test container strength design (UN certified containers)",
      "Advanced blow-pin and parison head cooling integration",
      "Multi-point tie-bar clamping and robust alignment bushings",
    ],
    specifications: [
      { label: "Mold Type", value: "EBM Industrial Packaging" },
      { label: "Application", value: "Industrial Drums & Jerry Cans (5L - 50L)" },
      { label: "Configuration", value: "Custom Large Single / Double Cavity" },
      { label: "Production", value: "High Volume Heavy Duty" },
    ],
    techSpecs: {
      moldType: "Industrial EBM Large Format Mould",
      cavityDetails: "Large Single / Double Cavity (5L to 50L Containers)",
      material: "High-Tensile Tool Steel & Hardened Inserts",
      machineCompatibility: "Accumulator Head Industrial Blow Molding Machines",
      application: "Industrial Drums, Jerry Cans & Bulk Chemical Packaging",
    },
    seo: {
      metaTitle: "Industrial EBM Packaging Mold | Jerry Cans & Drums | Patel Mould",
      metaDescription:
        "Large-format extrusion blow moulds for 5L to 50L industrial Jerry cans and chemical drums with UN drop-test compliance and superior impact resistance.",
      metaKeywords: "Industrial EBM Mold, Jerry Can Mould, 20L Drum Mold, Industrial Packaging Tooling, Patel Mould",
      canonicalUrl: "https://www.patelmould.com/products/ebm-industrial-packaging-mold",
      schemaJson: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "EBM Industrial Packaging Mold",
          image: "https://www.patelmould.com/product/ebm-industrial-packaging-mold.png",
          description: "Heavy-duty large format EBM moulds designed for Jerry cans, industrial drums, and chemical carboys.",
          brand: {
            "@type": "Brand",
            name: "Patel Mould Industries",
          },
          category: "EBM Mold",
        },
        null,
        2
      ),
    },
    order: 9,
  },
];

export const DEFAULT_PRODUCTS: IProductItem[] = RAW_PRODUCTS.map((prod) => ({
  ...prod,
  faqs: PRODUCT_FAQS[prod.slug] || [],
}));
