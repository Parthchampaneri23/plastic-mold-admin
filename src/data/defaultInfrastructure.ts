export const DEFAULT_INFRASTRUCTURE_DATA = {
  hero: {
    eyebrow: "OUR INFRASTRUCTURE",
    title: "Built on Precision. Powered by Infrastructure.",
    description:
      "Our manufacturing infrastructure brings together precision machining, mould assembly, inspection, testing and engineering design in a coordinated production environment. Each facility supports the development of dependable, application-specific mould solutions.",
    imageSrc: "/infrastructure/facility-hero.jpg",
    imageAlt: "Patel Mould Industries Precision Manufacturing Facility and Toolroom Gujarat India",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Infrastructure",
  },

  facilityOverview: {
    badge: "FACILITY WORKFLOW",
    heading: "A Facility Designed for Precision",
    description:
      "Our facility integrates CAD design, CNC machining, EDM, toolroom operations, and precision inspection in an organized workspace to ensure accuracy, quality, and dimensional stability.",
    imageSrc: "/infrastructure/facility-hero.jpg",
    imageAlt: "Patel Mould Industries Main Toolroom Facility Layout and Production Floor",
    capabilities: [
      {
        title: "Precision-Focused Layout",
        description:
          "Segregated toolroom zones ensuring clean environment control between rough machining, EDM finishing, and final mould fitting.",
      },
      {
        title: "Organized Work Areas",
        description:
          "Dedicated workstations for mould assembly, polishing, standard component staging, and finished mould preparation.",
      },
      {
        title: "Integrated Engineering",
        description:
          "Direct CAM networked data connectivity between our design engineering office and shop-floor CNC controllers.",
      },
      {
        title: "Quality-Focused Processes",
        description:
          "Structured in-process inspection protocols at every manufacturing stage prior to mould assembly and validation.",
      },
    ],
  },

  cnc: {
    id: "cnc-machining",
    badge: "MACHINING FACILITY",
    heading: "CNC Machining",
    subheading: "High-Rigidity Vertical CNC Machining Centers",
    description: [
      "CNC machining supports the production of precision mould plates, core and cavity inserts, and other critical tooling components. Accurate machining and carefully planned setups help achieve the geometries and surface finishes required for demanding mould applications.",
      "With suitable machining setups, complex profiles and critical dimensions can be produced consistently in line with the applicable engineering requirements.",
    ],
    imageSrc: "/infrastructure/cnc-machining.jpg",
    imageAlt: "CNC Machining Center milling precision steel mould core plate at Patel Mould Industries",
    highlights: [
      {
        label: "01",
        title: "Core & Cavity Contouring",
        description:
          "Surface machining of preform core profiles, cavity blocks, neck inserts, and bottle shapes with tight feature definition.",
      },
      {
        label: "02",
        title: "Plate & Base Squaring",
        description:
          "Accurate face milling, pocket milling, and hole boring to maintain parallelism and proper shut-off across mould plates.",
      },
      {
        label: "03",
        title: "Multi-Axis Operations",
        description:
          "Multi-face machining setups that minimize component repositioning and preserve positional accuracy across critical datum features.",
      },
    ],
    technicalDetails: [
      { label: "Equipment Type", value: "High-Rigidity Vertical CNC Machining Centers" },
      { label: "Machining Application", value: "3D Surface Profiling & Deep Pocket Cavity Milling" },
      { label: "Component Types", value: "Mould Bases, Core Plates, Stripper Rings, Cavity Inserts" },
      { label: "Cooling & Lubrication", value: "Through-Spindle High Pressure Flood & Air Blast" },
    ],
  },

  edm: {
    id: "edm-machining",
    badge: "SPARK EROSION FACILITY",
    heading: "EDM Machining",
    subheading: "Die-Sinking EDM & Micro-Precision Spark Erosion",
    description: [
      "Electrical Discharge Machining (EDM) enables the creation of intricate mould features that are difficult to produce with conventional cutting methods. It supports detailed geometries, internal corners and other application-specific features in compatible tooling materials.",
      "Carefully controlled machining parameters and suitable electrode selection help achieve the required feature geometry and surface finish, subject to the material, tooling setup and process requirements.",
    ],
    imageSrc: "/infrastructure/edm-machining.jpg",
    imageAlt: "Electrical discharge machining setup in precision toolroom at Patel Mould Industries",
    highlights: [
      {
        label: "01",
        title: "Intricate Geometry",
        description:
          "Supports the formation of complex profiles, sharp internal corners, deep slots, and fine preform details in compatible mould components.",
      },
      {
        label: "02",
        title: "Controlled Material Removal",
        description:
          "Utilizes non-contact spark erosion to machine conductive tool steels without mechanical cutting stress on delicate cavity structures.",
      },
      {
        label: "03",
        title: "Application-Specific Finishing",
        description:
          "Careful discharge parameter settings and electrode pairing support required surface texture and dimensional definition.",
      },
    ],
    technicalDetails: [
      { label: "PROCESS", value: "Die-Sinking EDM" },
      { label: "APPLICATION", value: "Intricate mould features and cavity details" },
      { label: "TOOLING", value: "Compatible electrically conductive mould materials" },
      { label: "PROCESS CONTROL", value: "Electrode selection and machining parameter control" },
    ],
  },

  mouldAssembly: {
    id: "mould-assembly",
    badge: "TOOLROOM FITTING",
    heading: "Mould Assembly & Fitting",
    subheading: "Bench Fitting, Blue-Spotting & Functional Verification",
    description: [
      "Precision mould assembly brings together accurately machined components through careful fitting, alignment and inspection. Each assembly stage helps prepare the mould for the next quality check or trial.",
      "From core and cavity alignment to checking moving components and cooling connections, the assembly process focuses on fit, function and readiness for the intended application.",
    ],
    imageSrc: "/infrastructure/mold-assembly.jpg",
    imageAlt: "Careful fitting and assembly of precision mould components at Patel Mould Industries",
    highlights: [
      {
        label: "01",
        title: "Component Fitting",
        description: "Accurate fitting of compatible mould components, inserts and alignment blocks.",
      },
      {
        label: "02",
        title: "Alignment Verification",
        description: "Checking relevant alignment, guide pillar engagement and smooth mechanical movement.",
      },
      {
        label: "03",
        title: "Cooling & Mechanism Checks",
        description: "Reviewing applicable cooling connections, manifold routing and moving mould mechanisms.",
      },
      {
        label: "04",
        title: "Trial Preparation",
        description: "Preparing the assembled mould for appropriate quality inspection or trial procedures.",
      },
    ],
    stages: [
      { step: "01", title: "Component Preparation", description: "Clean and stage all machined components" },
      { step: "02", title: "Fitting & Assembly", description: "Blue-spotting parting line matching" },
      { step: "03", title: "Alignment Checks", description: "Guide pillars and bush alignment checkout" },
      { step: "04", title: "Functional Verification", description: "Dry cycling and slide movement test" },
      { step: "05", title: "Trial Readiness", description: "Manifold pressure leak test & packaging check" },
    ],
    technicalDetails: [
      { label: "ASSEMBLY APPLICATION", value: "Multi-cavity preform, jar, and ISBM mould integration" },
      { label: "INSPECTION FOCUS", value: "Parting line bedding, alignment checks & mechanism verification" },
      { label: "PREPARATION STAGE", value: "Dry mechanical checkout & trial readiness validation" },
    ],
  },

  qualityInspection: {
    id: "quality-inspection",
    badge: "METROLOGY LABORATORY",
    heading: "Quality Inspection",
    subheading: "Measure accurately. Verify carefully. Document clearly.",
    description: [
      "Quality inspection helps verify that manufactured mould components meet approved drawings, dimensional requirements and application-specific specifications. Appropriate measurement and documentation support consistent evaluation before components move to the next production stage.",
    ],
    imageSrc: "/infrastructure/quality-inspection.jpg",
    imageAlt: "Dimensional verification of precision mould components at Patel Mould Industries metrology area",
    highlights: [
      {
        label: "01",
        title: "Drawing Conformity",
        description: "Compare applicable component dimensions and features against approved engineering drawings.",
      },
      {
        label: "02",
        title: "Critical Dimensions",
        description: "Verify selected dimensions and tolerances using suitable measurement equipment.",
      },
      {
        label: "03",
        title: "Geometry & Alignment",
        description: "Check relevant geometric features, profiles and alignment requirements.",
      },
      {
        label: "04",
        title: "Inspection Records",
        description: "Maintain measurement records and reports where required by the applicable quality process.",
      },
    ],
    stages: [
      { step: "01", title: "Dimensional Accuracy", description: "Check critical dimensions against approved requirements." },
      { step: "02", title: "Feature Verification", description: "Inspect relevant profiles, alignments and component features." },
      { step: "03", title: "Quality Documentation", description: "Record inspection outcomes where required." },
    ],
    technicalDetails: [
      { label: "MEASUREMENT APPROACH", value: "Suitable instruments selected for the inspection requirement." },
      { label: "VERIFICATION BASIS", value: "Applicable engineering drawings and specified tolerances." },
      { label: "DOCUMENTATION", value: "Inspection records maintained where required." },
    ],
  },

  testingValidation: {
    id: "testing-validation",
    badge: "TRIAL & VALIDATION",
    heading: "Testing & Validation",
    subheading: "Sample moulding evaluation, dry cycling, and trial verification",
    description: [
      "Testing and validation help evaluate mould function, mechanical movement and sample-part quality before the next production stage. Where applicable, trial results guide final adjustments to meet the agreed application requirements.",
    ],
    imageSrc: "/infrastructure/testing-trials.jpg",
    imageAlt: "Plastic mould trial setup with steel mould installed and sample parts under inspection",
    highlights: [
      {
        label: "01",
        title: "Functional Checks",
        description: "Review applicable mechanical movement and mould operation.",
      },
      {
        label: "02",
        title: "Sample Evaluation",
        description: "Inspect suitable trial samples for relevant visual and dimensional characteristics.",
      },
      {
        label: "03",
        title: "Adjustment Review",
        description: "Record findings and identify any necessary follow-up actions.",
      },
    ],
    stages: [
      { step: "01", title: "Trial Preparation", description: "Prepare the mould and confirm the applicable trial requirements." },
      { step: "02", title: "Functional Evaluation", description: "Observe relevant mould movement and operating behavior." },
      { step: "03", title: "Sample Inspection", description: "Review available trial samples against agreed requirements." },
      { step: "04", title: "Results & Adjustments", description: "Document findings and identify any required modifications." },
    ],
    technicalDetails: [
      { label: "Validation Basis", value: "Applicable mould and application requirements." },
      { label: "Sample Review", value: "Relevant visual and dimensional observations." },
      { label: "Handover Notes", value: "Findings and recommended follow-up, where required." },
    ],
  },

  warehouseLogistics: {
    id: "warehouse-storage",
    badge: "MATERIAL & MOULD LOGISTICS",
    heading: "Organized Storage & Material Handling",
    subheading: "Component preservation, storage racks, and secure export crating",
    description: [
      "Organized storage and careful material handling help protect mould components, maintain orderly inventory and prepare equipment for internal movement or dispatch. Suitable storage and handling practices depend on the component, material and operational requirements.",
    ],
    imageSrc: "/infrastructure/warehouse-storage.jpg",
    imageAlt: "Organized industrial storage racks with protected mould components and crated moulds at Patel Mould Industries",
    highlights: [
      {
        label: "01",
        title: "Component Organization",
        description: "Store components in designated areas according to their identification and handling requirements.",
      },
      {
        label: "02",
        title: "Surface Protection",
        description: "Use suitable protection to help reduce corrosion, contamination and handling damage.",
      },
      {
        label: "03",
        title: "Internal Movement",
        description: "Move mould components using appropriate handling methods and equipment.",
      },
      {
        label: "04",
        title: "Dispatch Preparation",
        description: "Prepare suitable packaging and identification for components scheduled for shipment.",
      },
    ],
    stages: [
      { step: "01", title: "Receiving", description: "Accept raw tool steel and incoming components." },
      { step: "02", title: "Identification", description: "Verify specifications and assign designated storage." },
      { step: "03", title: "Organized Storage", description: "Protected placement on indexed industrial racking." },
      { step: "04", title: "Protected Movement", description: "Controlled transit between machining and assembly bays." },
      { step: "05", title: "Dispatch Preparation", description: "Secure packaging and documentation for shipment." },
    ],
    technicalDetails: [
      { label: "STORAGE APPROACH", value: "Organized placement based on component requirements." },
      { label: "COMPONENT PROTECTION", value: "Appropriate measures for handling and storage." },
      { label: "DISPATCH READINESS", value: "Identification and packaging suited to shipment needs." },
    ],
  },

  engineeringDesign: {
    id: "engineering-design",
    badge: "CAD / CAM FACILITY",
    heading: "Engineering Design & Planning",
    subheading: "From concept development to manufacturing preparation, every design stage supports a more coordinated mould-development process.",
    description: [
      "Engineering design transforms product requirements and approved drawings into mould concepts ready for detailed development and manufacturing planning. CAD/CAM workflows help coordinate component geometry, assembly requirements and machining preparation.",
    ],
    imageSrc: "/infrastructure/engineering-design.jpg",
    imageAlt: "CAD workstations and mould engineering team collaborating at Patel Mould Industries design facility",
    highlights: [
      {
        label: "01",
        title: "Mould Design",
        description: "Development of mould geometry and component layouts based on approved requirements.",
      },
      {
        label: "02",
        title: "Design Coordination",
        description: "Review of relevant assembly relationships, clearances and manufacturing considerations.",
      },
      {
        label: "03",
        title: "Manufacturing Preparation",
        description: "Preparation of suitable design outputs and machining information where applicable.",
      },
    ],
    stages: [
      { step: "01", title: "Requirement Review", description: "Understand the product, application and approved design inputs." },
      { step: "02", title: "3D CAD Development", description: "Develop the relevant mould geometry and component models." },
      { step: "03", title: "Design Verification", description: "Review applicable dimensions, clearances and assembly considerations." },
      { step: "04", title: "CAM Preparation", description: "Prepare appropriate machining data and toolpaths where supported by the workflow." },
      { step: "05", title: "Manufacturing Handover", description: "Provide the approved design outputs and manufacturing information required for the next stage." },
    ],
  },

  faqs: {
    badge: "TOOLROOM & PLANT CAPABILITIES",
    title: "Facility & Infrastructure FAQs",
    subtitle:
      "Explore technical details regarding our precision CNC centers, EDM die-sinking, metrology inspection protocols, and mold trial machines.",
    faqs: [
      {
        question: "What high-precision CNC machinery powers Patel Mould Industries' toolroom?",
        answer:
          "Our 15,000 m² climate-controlled facility operates 5-axis high-speed machining centers from Makino and Mazak with spindle speeds up to 24,000 RPM, achieving sub-micron contour accuracy on complex multi-cavity preform and bottle mold geometries.",
      },
      {
        question: "What are your EDM (Electrical Discharge Machining) toolroom capabilities?",
        answer:
          "We operate Sodick and Makino mirror-spark CNC die-sinking EDM machines achieving mirror surface finishes (Ra < 0.1 µm) without manual polishing, paired with precision 4-axis wire EDM centers holding split-line tolerances to ±0.002mm.",
      },
      {
        question: "How is quality metrology verified inside your inspection laboratory?",
        answer:
          "Our quality assurance division operates in a dedicated 20°C temperature-controlled metrology lab equipped with a German Zeiss 3D CNC Coordinate Measuring Machine (CMM), Mitutoyo optical profile projectors, and digital surface roughness testers.",
      },
      {
        question: "What in-house mold trial and testing equipment do you maintain?",
        answer:
          "We maintain in-house KraussMaffei, Haitian, and Nissei ASB injection and stretch-blow machines ranging from 100T to 1,200T clamping force. Every mould undergoes exhaustive T0/T1 trials with customer resin before dispatch.",
      },
      {
        question: "Where is Patel Mould Industries located and can international clients visit?",
        answer:
          "Our corporate campus and toolroom are located at Patel Mould Park, Phase-IV GIDC, Gujarat, India. We welcome domestic and international clients for facility audits, mold design workshops, and FAT trial inspections.",
      },
    ],
  },

  cta: {
    badge: "MANUFACTURING PARTNERSHIP",
    title: "Looking for the Right Mould Manufacturing Partner?",
    description:
      "Discuss your tooling and mould requirements with our engineering team. Explore how our precision machining, assembly, metrology, and testing infrastructure can support your product goals.",
    location: "GIDC, Gujarat, India",
    email: "sales@patelmould.com",
    phone: "Direct Technical Inquiries",
    boxTitle: "Infrastructure Consultation",
    boxBadge: "Direct Team",
    boxDescription:
      "Connect directly with our tooling engineers for feasibility reviews, cycle analysis, and application-specific mould development.",
    buttonText: "Request a Quote",
    buttonLink: "/contact#inquiry-form-section",
  },
};
