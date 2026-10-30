// Default image metadata registry for Image Name and SEO Image Alt text across all website assets
export interface ImageMetaItem {
  name: string;
  alt: string;
}

export const DEFAULT_IMAGE_METADATA: Record<string, ImageMetaItem> = {
  // Brand & Site Identity
  "/PMlogo.png": {
    name: "Patel Mould Official Brand Logo",
    alt: "Patel Mould Industries - Precision Plastic Mould Manufacturer Logo",
  },
  "/favicon.ico": {
    name: "Patel Mould Browser Favicon",
    alt: "Patel Mould Industries Precision Tooling Favicon",
  },
  "/icon-192.png": {
    name: "Patel Mould Mobile Web Icon 192px",
    alt: "Patel Mould Industries Mobile App and Browser Touch Icon",
  },
  "/icon-512.png": {
    name: "Patel Mould High-Res PWA Icon 512px",
    alt: "Patel Mould Industries High Resolution Progressive Web Application Icon",
  },

  // Home Page
  "/Home/Banner1.png": {
    name: "Hero Slide 1 - Custom Mold Tooling",
    alt: "High speed multi-cavity PET preform and injection blow mould tooling in workshop",
  },
  "/Home/Banner2.png": {
    name: "Hero Slide 2 - High Cavitation Systems",
    alt: "Precision engineered 48 to 96 cavity PET preform mold base with hot runner systems",
  },
  "/Home/Banner3.png": {
    name: "Hero Slide 3 - Precision CNC Machining",
    alt: "Sub-micron 5-axis CNC machining center milling hardened mold cavity plates",
  },
  "/Home/Banner4.png": {
    name: "Hero Slide 4 - Turnkey Tooling Solutions",
    alt: "Finished precision injection stretch blow molds ready for global container production",
  },
  "/Home/About.png": {
    name: "Home About Section Overview",
    alt: "Patel Mould Industries advanced mold manufacturing plant floor in Gujarat India",
  },
  "/Home/company image about.png": {
    name: "Company Engineering Heritage",
    alt: "Master toolmaker inspecting precision core inserts with micrometric gauges",
  },
  "/Home/CNC image about.png": {
    name: "High-Speed CNC Milling Operations",
    alt: "High-speed CNC machining center contouring hardened mold core steels",
  },
  "/Home/mold image about.png": {
    name: "Multi-Cavity Mold Assembly",
    alt: "Precision multi-cavity PET preform mold stack ready for trial testing",
  },
  "/Home/capablities.png": {
    name: "Core Tooling Capabilities",
    alt: "Comprehensive mold design, CNC machining, spark erosion and metrology setup",
  },
  "/Home/preform-mold.png": {
    name: "High-Cavitation Preform Mold Category",
    alt: "Multi-cavity PET preform mold with balanced valve gate hot runner system",
  },
  "/Home/isbm-mold.png": {
    name: "ISBM Single-Stage Mold Category",
    alt: "Precision injection stretch blow mold for pharmaceutical and cosmetic bottles",
  },
  "/Home/ebm-mold.png": {
    name: "EBM Extrusion Blow Mold Category",
    alt: "Extrusion blow mold with beryllium copper pinch-off inserts for bottles and jerry cans",
  },
  "/Home/company-facility.png": {
    name: "Facility Infrastructure Overview",
    alt: "State of the art 25,000 sq ft mold manufacturing plant and CNC machine line",
  },
  "/Home/facility-cnc.png": {
    name: "CNC Machining Center Bay",
    alt: "Line of high-speed 5-axis and 3-axis vertical machining centers in toolroom",
  },
  "/Home/facility-edm.png": {
    name: "Precision EDM Spark Erosion Bay",
    alt: "Makino mirror finish spark erosion EDM and wire-cut electrical discharge machines",
  },
  "/Home/facility-cmm.png": {
    name: "Zeiss 3D CMM Quality Laboratory",
    alt: "Zeiss 3D coordinate measuring machine inspecting cavity dimensions to sub-micron accuracy",
  },
  "/Home/facility-assembly.png": {
    name: "Cleanroom Mold Assembly Bay",
    alt: "Cleanroom mold assembly and hydraulic valve gate integration workstations",
  },
  "/Home/ind-packaging.png": {
    name: "Beverage & Packaging Industry Application",
    alt: "Blow molded PET bottles and beverage containers produced with Patel Moulds",
  },
  "/Home/ind-pharma.png": {
    name: "Pharmaceutical Industry Application",
    alt: "Sterile pharmaceutical bottles, syrups, and medical containers manufactured from precision tooling",
  },
  "/Home/ind-personal.png": {
    name: "Cosmetics & Personal Care Application",
    alt: "High clarity luxury cosmetic jars and personal care shampoo containers",
  },
  "/Home/ind-food.png": {
    name: "Food & Edible Oil Packaging Application",
    alt: "Food grade wide-mouth jars and edible oil container blow moulds",
  },
  "/Home/ind-industrial.png": {
    name: "Chemical & Industrial Packaging Application",
    alt: "Heavy duty HDPE industrial jerry cans and chemical container moulds",
  },
  "/Home/ind-plastic.png": {
    name: "Consumer Plastics Application",
    alt: "Custom consumer plastic household containers and caps tooling solutions",
  },
  "/Home/inf1.png": {
    name: "Infrastructure Highlight 1 - 5-Axis Milling",
    alt: "5-axis high speed CNC milling machine finishing complex mould surfaces",
  },
  "/Home/inf2.png": {
    name: "Infrastructure Highlight 2 - Precision EDM",
    alt: "Precision sinker EDM producing micro ribs and tight radius details on mold cores",
  },
  "/Home/inf3.png": {
    name: "Infrastructure Highlight 3 - Metrology Inspection",
    alt: "Climate-controlled metrology laboratory verifying tool tolerances to 0.005mm",
  },
  "/Home/inf4.png": {
    name: "Infrastructure Highlight 4 - Mold Stacks",
    alt: "Interchangeable core cavity mold stacks engineered from DIN 1.2316 stainless steel",
  },
  "/Home/client1.png": {
    name: "Client Partner 1 Logo",
    alt: "Trusted beverage and container packaging client brand logo",
  },
  "/Home/client2.webp": {
    name: "Client Partner 2 Logo",
    alt: "Leading FMCG packaging converter client logo",
  },
  "/Home/client3.png": {
    name: "Client Partner 3 Logo",
    alt: "Pharmaceutical packaging manufacturer client logo",
  },
  "/Home/client4.png": {
    name: "Client Partner 4 Logo",
    alt: "Industrial packaging container brand client logo",
  },
  "/Home/cleint5.png": {
    name: "Client Partner 5 Logo",
    alt: "International consumer plastics exporter client logo",
  },

  // About Page
  "/About/about banner.png": {
    name: "About Page Top Banner",
    alt: "Patel Mould Industries engineering complex and tooling facility banner Gujarat",
  },
  "/About/about company.png": {
    name: "About Company History & Facility",
    alt: "Over 30 years of engineering mastery in precision plastic mold manufacturing",
  },
  "/About/Aboutstrenght.png": {
    name: "Company Strength & Craftsmanship",
    alt: "Engineering team and master toolmakers assembling high-cavitation mold tooling",
  },
  "/About/CNC.png": {
    name: "High Precision CNC Machining Bay",
    alt: "High-precision vertical machining centers in operation inside the toolroom",
  },
  "/About/EDM.png": {
    name: "Advanced Spark Erosion & Wire EDM Bay",
    alt: "Advanced spark erosion EDM machine ensuring sub-micron cavity finishes",
  },
  "/About/FACILITY.png": {
    name: "Main Toolroom Facility Overview",
    alt: "Comprehensive view of Patel Mould 25,000 sq ft climate controlled manufacturing plant",
  },

  // Products Page & Catalog
  "/product/product banner.png": {
    name: "Products Catalog Hero Banner",
    alt: "Complete range of PET preform, ISBM, and extrusion blow moulds showcase",
  },
  "/product/pet-preform-mold.png": {
    name: "Standard PET Preform Mold",
    alt: "Custom PET preform mould with interchangeable neck rings and balanced manifold",
  },
  "/product/high-cavitation-preform-mold.png": {
    name: "High-Cavitation 72/96 Preform Mold",
    alt: "High-cavitation 72-cavity PET preform mold with valve gate hot runner system",
  },
  "/product/pet-jar-mold.png": {
    name: "Wide Mouth PET Jar Mold",
    alt: "Wide-mouth PET jar mold for food confectioneries and cosmetic creams",
  },
  "/product/isbm-bottle-mold.png": {
    name: "Single-Stage ISBM Bottle Mold",
    alt: "Single-stage ISBM bottle mould tooling engineered for ASB and Aoki machines",
  },
  "/product/isbm-container-mold.png": {
    name: "Pharma ISBM Container Mold",
    alt: "Pharmaceutical Grade ISBM container mold with mirror cavity polish",
  },
  "/product/multi-cavity-isbm-mold.png": {
    name: "Multi-Cavity ISBM Tooling System",
    alt: "Multi-cavity ISBM mold tooling for personal care and FMCG bottles",
  },
  "/product/ebm-bottle-mold.png": {
    name: "Continuous Extrusion EBM Bottle Mold",
    alt: "Continuous extrusion blow mould for detergent, shampoo and cosmetic bottles",
  },
  "/product/ebm-container-mold.png": {
    name: "HDPE EBM Container Mold",
    alt: "HDPE extrusion blow mould with high-conductive beryllium copper pinch-offs",
  },
  "/product/ebm-industrial-packaging-mold.png": {
    name: "Heavy Industrial Jerry Can Mold",
    alt: "Large capacity 5L to 20L industrial jerry can extrusion blow mold",
  },

  // Manufacturing Page
  "/manufacturing/manufacturing banner.png": {
    name: "Manufacturing Excellence Hero Banner",
    alt: "End-to-end precision mold manufacturing process from CAD design to final trials",
  },
  "/manufacturing/mfg_banner.jpg": {
    name: "Toolroom Manufacturing Floor",
    alt: "CNC milling and precision spark erosion machinery inside the tooling complex",
  },
  "/manufacturing/mfg_cad.jpg": {
    name: "CAD/CAM Engineering & Moldflow Simulation",
    alt: "Tooling engineers conducting 3D CAD design and moldflow thermal simulations",
  },
  "/manufacturing/cnc-precision-machining.webp": {
    name: "CNC Precision Machining Center",
    alt: "High speed 5-axis CNC machining center achieving ±0.005mm tool tolerances",
  },
  "/manufacturing/edm-wire-machining.webp": {
    name: "EDM Wire Cutting & Spark Erosion",
    alt: "Precision wire EDM cutting high-hardness DIN 1.2316 stainless steel mold plates",
  },
  "/manufacturing/mfg_custom.jpg": {
    name: "Custom Mold Tooling Engineering",
    alt: "Bespoke mold design and custom tooling fabrication for complex container neck finishes",
  },
  "/manufacturing/mfg_quality.jpg": {
    name: "Quality Assurance & Metrology Inspection",
    alt: "3D CMM metrology inspection and optical profile projector measurement of mold inserts",
  },
  "/manufacturing/mfg_quality_clean.jpg": {
    name: "Precision Surface Metrology",
    alt: "Sub-micron optical surface finish measurement of mold cavity cores",
  },

  // Infrastructure Page
  "/infrastructure/facility-hero.jpg": {
    name: "Infrastructure Hero Banner",
    alt: "Patel Mould Industries advanced infrastructure and precision machinery overview",
  },
  "/infrastructure/engineering-design.jpg": {
    name: "CAD/CAM Tooling Design Cell",
    alt: "Dedicated CAD/CAM design workstations running Siemens NX and Moldflow software",
  },
  "/infrastructure/cnc-machining.jpg": {
    name: "Advanced CNC Milling Infrastructure",
    alt: "Fleet of high-precision CNC machine centers operating in temperature controlled bays",
  },
  "/infrastructure/edm-machining.jpg": {
    name: "Spark Erosion & Wire Cut EDM Facility",
    alt: "Makino mirror spark EDM machines delivering mirror finish optical mold cavities",
  },
  "/infrastructure/mold-assembly.jpg": {
    name: "Toolroom Assembly & Fitting Bay",
    alt: "Expert toolmakers performing bench fitting and multi-cavity mold stack alignment",
  },
  "/infrastructure/quality-inspection.jpg": {
    name: "Climate-Controlled Metrology Laboratory",
    alt: "Zeiss 3D Coordinate Measuring Machine (CMM) in climate controlled QC laboratory",
  },
  "/infrastructure/testing-trials.jpg": {
    name: "In-House Mold Testing & Sampling Press",
    alt: "In-house injection stretch blow molding press for mold trial sampling and cycle validation",
  },
  "/infrastructure/warehouse-storage.jpg": {
    name: "Raw Material & Tool Steel Warehouse",
    alt: "Certified European mold steel inventory and finished tooling climate controlled warehouse",
  },

  // Quality Page
  "/quality/quality-banner.jpg": {
    name: "Quality Assurance Hero Banner",
    alt: "Patel Mould Industries ISO 9001:2015 quality assurance and zero-defect commitment",
  },
  "/quality/quality-overview.jpg": {
    name: "Quality Management System Overview",
    alt: "Rigorous quality inspection protocol from incoming steel to dispatched mold tooling",
  },
  "/quality/quality-policy-alignment.jpg": {
    name: "ISO 9001:2015 Quality Policy",
    alt: "Quality engineers following strict ISO standards and documented inspection workflows",
  },
  "/quality/raw-material-steel-inspection.jpg": {
    name: "Incoming Tool Steel Ultrasonic Inspection",
    alt: "Ultrasonic flaw detection and spectrometer testing of DIN 1.2316 tool steel blocks",
  },
  "/quality/quality-inspection-metrology.jpg": {
    name: "In-Process 3D CMM Metrology",
    alt: "3D CMM probe verifying micrometric cavity stack dimensions and concentricity",
  },
  "/quality/final-inspection-check.jpg": {
    name: "Final Pre-Dispatch Quality Certification",
    alt: "Final inspection, water cooling pressure leak check, and sample dimensional sign-off",
  },

  // Industries Page
  "/industries/industries-banner.jpg": {
    name: "Industries Served Hero Banner",
    alt: "Global industrial sectors powered by Patel Mould precision container tooling",
  },
  "/industries/food-beverage-clean.jpg": {
    name: "Food & Beverage Packaging Industry",
    alt: "High-cavitation PET preform moulds for mineral water, CSD, juices, and hot-fill drinks",
  },
  "/industries/food-beverage.jpg": {
    name: "Beverage Bottle Production Tooling",
    alt: "High speed beverage container injection stretch blow mould tooling",
  },
  "/industries/packaging-clean.jpg": {
    name: "General Packaging & Containers",
    alt: "Comprehensive container tooling solutions for bottles, jars, canisters, and closures",
  },
  "/industries/packaging.jpg": {
    name: "FMCG Packaging Container Tooling",
    alt: "Mass production packaging moulds for household goods and FMCG products",
  },
  "/industries/pharmaceutical-clean.jpg": {
    name: "Pharmaceutical & Healthcare Packaging",
    alt: "Cleanroom compatible moulds for medicine bottles, dropper vials, and tablet jars",
  },
  "/industries/pharmaceutical.jpg": {
    name: "Medical Container ISBM Tooling",
    alt: "Precision ISBM tooling for sterile pharmaceutical liquid bottles",
  },
  "/industries/personal-care-clean.jpg": {
    name: "Cosmetics & Personal Care Packaging",
    alt: "Luxury cosmetic jars, lotion bottles, and crystal-clear PET personal care containers",
  },
  "/industries/personal-care.jpg": {
    name: "Personal Care Bottle Moulds",
    alt: "Extrusion and stretch blow moulds for shampoos, body washes, and cosmetic packaging",
  },
  "/industries/chemical-packaging-clean.jpg": {
    name: "Chemical & Agrochemical Packaging",
    alt: "Chemical resistant HDPE containers, UN-certified drums, and pesticide jerry cans",
  },
  "/industries/chemical-packaging.jpg": {
    name: "Industrial Chemical Container Tooling",
    alt: "Heavy duty blow moulds for industrial lubricants, oils, and chemical canisters",
  },
  "/industries/household-products.png": {
    name: "Household Products Packaging",
    alt: "Durable HDPE and PP bottle tooling for home cleaners, detergents, and sanitizers",
  },
  "/industries/plastic-containers-clean.jpg": {
    name: "Custom Plastic Containers & Jars",
    alt: "Wide mouth confectionary jars and custom shaped consumer plastic containers",
  },
  "/industries/plastic-containers.jpg": {
    name: "Rigid Plastic Packaging Solutions",
    alt: "Precision tooling for rigid consumer containers and wide-mouth storage jars",
  },
  "/industries/other-industrial-applications.png": {
    name: "Specialized Industrial Applications",
    alt: "Engineered plastic components, technical parts, and custom blow moulded articles",
  },

  // Gallery
  "/gallery-banner.jpg": {
    name: "Visual Portfolio & Gallery Hero Banner",
    alt: "Complete visual gallery of Patel Mould tooling facility, machines, and delivered projects",
  },
  "/gallery/project-72cav-preform-trial.jpg": {
    name: "72-Cavity PET Preform Mold Project Trial",
    alt: "72-cavity PET preform mold undergoing trial run with zero-defect gate quality",
  },
  "/gallery/project-pharma-isbm-bottles.jpg": {
    name: "Pharma ISBM Bottle Tooling Project",
    alt: "Precision single-stage ISBM mold for 100ml sterile syrup bottles",
  },
  "/gallery/project-luxury-cosmetic-jar-mold.jpg": {
    name: "Luxury Cosmetic Jar Tooling Project",
    alt: "High-gloss crystal clear PET cosmetic jar mold with thick base profile",
  },
  "/gallery/project-5l-jerry-can-mold.jpg": {
    name: "5L Industrial Jerry Can Extrusion Mold",
    alt: "Heavy duty 5-liter extrusion blow mold with calibrated beryllium copper neck inserts",
  },

  // Blogs Page
  "/blogs/blog-banner.jpg": {
    name: "Technical Insights & Blog Hero Banner",
    alt: "Patel Mould engineering blog covering plastic mold design, steel selection, and optimization",
  },
  "/blogs/high-cavitation-tooling.jpg": {
    name: "High Cavitation Preform Tooling Article",
    alt: "Technical guide to high cavitation 72 and 96 cavity PET preform mold engineering",
  },
  "/blogs/isbm-pharmaceutical-moulds.jpg": {
    name: "ISBM Pharmaceutical Moulds Article",
    alt: "Engineering single-stage ISBM molds for cleanroom pharmaceutical bottle production",
  },
  "/blogs/ebm-extrusion-mould-engineering.jpg": {
    name: "EBM Extrusion Mould Engineering Article",
    alt: "Extrusion blow mould design principles, pinch-off geometries, and cooling optimization",
  },
  "/blogs/mold-steel-selection.jpg": {
    name: "Mold Steel Selection Guide Article",
    alt: "Selecting between DIN 1.2316, DIN 1.2083, and pre-hardened steels for mold longevity",
  },
  "/blogs/cycle-time-optimization.jpg": {
    name: "Cycle Time Optimization Article",
    alt: "Conformal cooling channel design and thermal balancing for fast mold cycle times",
  },

  // Contact Page
  "/contact/contact-banner.jpg": {
    name: "Contact Us Hero Banner",
    alt: "Patel Mould Industries contact headquarters and manufacturing facility Gujarat India",
  },
  "/contact/contact-intro.jpg": {
    name: "Technical Consultation & RFQ Desk",
    alt: "Tooling engineering sales desk ready to assist with custom mold drawings and quotes",
  },
  "/contact/contact-office.jpg": {
    name: "Engineering Plant & Corporate Office",
    alt: "Patel Mould Industries corporate administration building and engineering center",
  },
};

/**
 * Returns default metadata (Image Name and Image Alt) for any image path.
 * If not in explicit dictionary, synthesizes a clean, SEO-optimized name and alt text.
 */
export function getImageMetadata(imagePath: string, fallbackLabel?: string): ImageMetaItem {
  if (!imagePath) {
    return {
      name: fallbackLabel || "Website Image Asset",
      alt: fallbackLabel ? `${fallbackLabel} - Patel Mould Industries` : "Patel Mould Industries Precision Plastic Mould Tooling",
    };
  }

  // Normalize path (handle backslashes and query params)
  const cleanPath = imagePath.split("?")[0].replace(/\\/g, "/");

  // Check exact dictionary match
  if (DEFAULT_IMAGE_METADATA[cleanPath]) {
    return DEFAULT_IMAGE_METADATA[cleanPath];
  }

  // Check without leading slash
  if (DEFAULT_IMAGE_METADATA["/" + cleanPath.replace(/^\/+/, "")]) {
    return DEFAULT_IMAGE_METADATA["/" + cleanPath.replace(/^\/+/, "")];
  }

  // Synthesize readable Name from filename
  const filename = cleanPath.split("/").pop() || cleanPath;
  const baseName = filename.replace(/\.[^/.]+$/, ""); // strip extension
  const cleanWords = baseName
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim();

  const titleWords = cleanWords
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const name = titleWords || fallbackLabel || "Website Image Asset";
  const alt = fallbackLabel
    ? `${fallbackLabel} - ${titleWords} | Patel Mould Industries`
    : `${titleWords} - Precision Plastic Mould Tooling | Patel Mould Industries`;

  return { name, alt };
}

