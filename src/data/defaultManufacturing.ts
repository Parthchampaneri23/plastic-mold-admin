export const DEFAULT_MANUFACTURING_CONTENT = {
  hero: {
    bannerImage: "/manufacturing/manufacturing banner.png",
    badge: "MANUFACTURING CAPABILITIES",
    titlePrefix: "Manufacturing ",
    titleHighlight: "Capabilities",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Manufacturing",
  },
  overview: {
    badge: "MANUFACTURING OVERVIEW",
    heading: "Precision Engineering.",
    highlightHeading: "Manufacturing Excellence.",
    summary:
      "Every tooling phase—from metallurgical steel verification and parametric 3D CAD design to finish machining, optical assembly, and in-house press trials—is managed under one roof to assure complete dimensional integrity and on-schedule execution.",
    facilityImage: "/About/FACILITY.png",
    facilityLocation: "Precision Mould Park, Phase-IV GIDC, Gujarat",
    facilityTag: "15,000 m² Plant",
    infrastructureTitle: "End-to-End Toolroom Infrastructure",
    infrastructureDesc:
      "Our plant integrates dedicated machining cells and metrology labs to support demanding mould builds. Synchronized toolpaths and strict in-process checkpoints ensure zero accumulated tolerance errors across all cavities.",
    stats: [
      { value: "30+", label: "Years Experience", detail: "Tooling mastery established since 1994" },
      { value: "1,500+", label: "Molds Delivered", detail: "Built for diverse global industries" },
      { value: "100%", label: "Quality Tested", detail: "100% pre-dispatch trial validation" },
      { value: "25+", label: "Cities Served", detail: "Trusted partner across India & overseas" },
    ],
    capabilities: [
      {
        id: "cnc",
        title: "CNC Precision Machining",
        cardDesc:
          "High-speed 5-axis milling centers delivering sub-micron tolerances for complex multi-cavity stack components.",
        panelDesc: "Precision machining for complex mould components and demanding geometries.",
      },
      {
        id: "edm",
        title: "EDM & Wire EDM",
        cardDesc:
          "Precision spark erosion and 4-axis wire cut cells achieving optical mirror surface finishes in deep ribs.",
        panelDesc: "Detailed machining for intricate profiles, cavities and complex mould features.",
      },
      {
        id: "metrology",
        title: "Metrology & Dimensional Inspection",
        cardDesc:
          "Zeiss 3D CNC Coordinate Measuring Machines inside a 20°C temperature-controlled quality laboratory.",
        panelDesc: "Dimensional inspection to support mould accuracy and consistent manufacturing quality.",
      },
      {
        id: "testing",
        title: "Mould Testing & Validation",
        cardDesc:
          "100% pre-dispatch trial runs on in-house injection moulding presses verifying cycle times and part concentricity.",
        panelDesc: "Mould testing and validation to evaluate performance and verify manufacturing requirements.",
      },
    ],
  },
  designDevelopment: {
    badge: "MOLD DESIGN & DEVELOPMENT",
    heading: "Engineering Design &",
    highlightHeading: "Simulation R&D",
    description:
      "Our engineering team develops mould designs around product requirements, tooling geometry and manufacturability, helping prepare designs for reliable production.",
    image: "/manufacturing/mfg_cad.jpg",
    overlayBadge: "IN-HOUSE R&D DESIGN",
    overlayTitle: "CAD Design & Engineering",
    overlayTag: "Design-led mould development",
    workflowTitle: "From Concept to Manufacturing",
    workflowDesc:
      "A structured four-stage design methodology ensuring every tool is fully assessed before shop floor release.",
    capabilities: [
      {
        id: "cad-simulation",
        number: "01",
        title: "CAD & Simulation Capabilities",
        panelTitle: "CAD & Simulation",
        panelDesc:
          "3D mould design and engineering analysis to evaluate design feasibility and support tooling development.",
        cardDesc:
          "Full 3D parametric modelling and flow simulations ensuring optimized cooling and balanced runner systems.",
        points: [
          "3D parametric solid assembly & BOM generation",
          "Mould flow thermal balance & filling analysis",
          "Cooling line layout optimization for cycle reduction",
        ],
      },
      {
        id: "custom-mold",
        number: "02",
        title: "Custom Mould Development",
        panelTitle: "Custom Mould Development",
        panelDesc:
          "Mould solutions tailored to product geometry, packaging requirements and application needs.",
        cardDesc:
          "Tailored tooling engineered for client container volumes, custom neck finishes, and container lightweighting.",
        points: [
          "Specialized neck finishes (PCO, 38mm, Bericap, wide-mouth jars)",
          "Preform lightweighting and resin distribution control",
          "Tooling adaptation for client-specific machine specifications",
        ],
      },
      {
        id: "engineering-dfm",
        number: "03",
        title: "Engineering Process & DFM",
        panelTitle: "Design for Manufacturability",
        panelDesc:
          "Engineering reviews to assess mould design, part geometry and manufacturing considerations before production.",
        cardDesc:
          "Structured pre-machining reviews pinpointing draft angles, parting splits, and core stability before steel cutting.",
        points: [
          "Pre-machining DFM feasibility review & client sign-off",
          "Parting split optimization and flash-free shut-off design",
          "Detailed 2D engineering toolroom shop blueprints",
        ],
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Design Brief",
        shortDesc: "Requirements & resin feasibility",
        fullDesc:
          "Evaluating customer 2D/3D container drawings, neck finish requirements, resin shrinkage, and cavitation targets.",
        deliverable: "Feasibility Assessment",
      },
      {
        step: "02",
        title: "3D Mould Design",
        shortDesc: "Parametric CAD & stack layout",
        fullDesc:
          "Building parametric CAD assemblies in Siemens NX/SolidWorks with optimized cooling line routing and hot runner sizing.",
        deliverable: "3D CAD Stack Assembly",
      },
      {
        step: "03",
        title: "DFM Review",
        shortDesc: "Engineering & parting analysis",
        fullDesc:
          "Rigorous pre-machining review of draft angles, parting shut-offs, gate vestiges, and thermal flow balance.",
        deliverable: "Approved DFM Report",
      },
      {
        step: "04",
        title: "Manufacturing Handoff",
        shortDesc: "Approved CAM shop release",
        fullDesc:
          "Final toolroom handoff including verified 2D engineering blueprints, steel procurement BOM, and 5-axis CNC toolpaths.",
        deliverable: "Toolroom Shop Pack",
      },
    ],
  },
  precisionMachining: {
    badge: "PRECISION MACHINING",
    heading: "CNC & EDM",
    highlightHeading: "High-Accuracy Manufacturing",
    description:
      "Explore the machining processes used to manufacture mould cavities, cores and precision tooling elements with high dimensional accuracy.",
    tabs: [
      {
        id: "cnc",
        tabLabel: "CNC Precision Machining",
        badge: "MULTI-AXIS MILLING",
        heading: "5-Axis CNC Precision Machining",
        subtitle: "Controlled machining for complex mould components",
        description:
          "Precision CNC machining supports the production of complex mould geometries, cavity details and carefully finished tooling components.",
        image: "/manufacturing/cnc-precision-machining.webp",
        imageAlt: "CNC machining centre milling a steel mould block in Gujarat toolroom",
        features: [
          "Multi-axis machining for complex geometries, where supported",
          "Appropriate cutting strategies for mould components",
          "Dimensional checks throughout the manufacturing process",
          "Surface finishing suited to component requirements",
        ],
        specs: [
          { label: "Machining Process", value: "High-Accuracy CNC Milling" },
          { label: "Quality Focus", value: "Complex Mould Cavities & Cores" },
          { label: "Inspection Method", value: "In-Process Dimensional Checks" },
        ],
      },
      {
        id: "edm",
        tabLabel: "EDM & Wire EDM",
        badge: "ELECTRICAL DISCHARGE",
        heading: "EDM & Wire EDM Machining",
        subtitle: "Intricate profiles and detailed mould features",
        description:
          "Electrical discharge machining supports detailed features, narrow profiles and geometries that may be difficult to produce using conventional cutting methods.",
        image: "/manufacturing/edm-wire-machining.webp",
        imageAlt: "Wire EDM machine operating on a precision steel mould insert in Gujarat",
        features: [
          "Detailed cavity and profile machining",
          "Wire-cut machining for suitable intricate geometries",
          "Careful control of workpiece positioning",
          "Inspection of machined features against design requirements",
        ],
        specs: [
          { label: "Machining Process", value: "Wire EDM & Die Sinking" },
          { label: "Quality Focus", value: "Intricate Profiles & Deep Ribs" },
          { label: "Inspection Method", value: "Optical & Contact Verification" },
        ],
      },
      {
        id: "grinding",
        tabLabel: "Precision Surface Grinding",
        badge: "SURFACE & DATUM FINISHING",
        heading: "Precision Surface Grinding",
        subtitle: "Flatness, finish and dimensional control",
        description:
          "Precision grinding helps achieve the required surface finish and dimensional characteristics on suitable mould components and tooling surfaces.",
        image: "/manufacturing/cnc-precision-machining.webp",
        imageAlt: "Precision surface grinding process for mould components and plates",
        features: [
          "Controlled finishing of appropriate steel surfaces",
          "Preparation of mating and reference surfaces",
          "Dimensional inspection after machining",
          "Surface quality checks based on component requirements",
        ],
        specs: [
          { label: "Machining Process", value: "Precision Surface Grinding" },
          { label: "Quality Focus", value: "Mating Plates & Datum Planes" },
          { label: "Inspection Method", value: "Flatness & Parallelism Checks" },
        ],
      },
    ],
  },
  process: {
    badge: "9-STAGE MANUFACTURING PROCESS",
    heading: "Our Step-by-Step",
    highlightHeading: "Mould Making Process",
    description:
      "A transparent, milestone-driven toolroom workflow from product engineering drawing through CMM inspection and full in-house press trial validation.",
    stages: [
      {
        step: "01",
        title: "Requirement Analysis",
        subtitle: "Product Feasibility & Preform Engineering",
        description:
          "Thorough evaluation of preform drawing, neck finish specifications, resin selection, cycle time targets, and cavitation planning.",
        activities: [
          "Part 3D model & DFM assessment",
          "Resin rheology & shrinkage analysis",
          "Cavitation & tonnage calculation",
          "Hot runner system sizing",
        ],
        deliverable: "DFM Engineering Report & Feasibility Sign-off",
        toolingAspect: "Resin rheology, neck finish, shrinkage & cavitation study",
        tag: "Feasibility Review",
      },
      {
        step: "02",
        title: "Mold Design",
        subtitle: "Full 3D CAD & MoldFlow Simulation",
        description:
          "State-of-the-art MoldFlow injection simulation, conformal cooling channel routing, and complete parametric 3D assembly generation.",
        activities: [
          "Full 3D CAD parametric stack layout",
          "Cooling thermal simulation & cycle reduction",
          "Gate vestige & fill balance simulation",
          "Complete BOM & tooling blueprint",
        ],
        deliverable: "Approved 3D Tooling CAD & CAE MoldFlow Simulation",
        toolingAspect: "3D CAD stack assembly, thermal cooling flow & runner sizing",
        tag: "CAD / CAE Layout",
      },
      {
        step: "03",
        title: "Material Selection",
        subtitle: "Premium Tooling Steel & Metallurgy",
        description:
          "Procurement of certified European/Japanese tool steels (Bohler, Uddeholm, Assab) with pre-hardened or vacuum-heat-treated grades.",
        activities: [
          "Cavities: Stavax ESR / 1.2083 (HRC 50-52)",
          "Core & Neck Rings: Heat-treated corrosion-proof steel",
          "Wear plates: Ampco beryllium copper / bronze inserts",
          "Ultrasonic metallurgy testing for zero porosity",
        ],
        deliverable: "Certified Steel Mill Test Certificates & Hardness Logs",
        toolingAspect: "Bohler/Stavax ESR steel metallurgy, hardness & wear inserts",
        tag: "Metallurgy Planning",
      },
      {
        step: "04",
        title: "CNC Machining",
        subtitle: "High-Speed 5-Axis Milling",
        description:
          "Roughing and high-speed precision finishing on rigid Japanese & Taiwanese machining centers running at up to 24,000 RPM.",
        activities: [
          "Simultaneous 5-axis mold base & core pocketing",
          "High-speed finishing with diamond-coated micro tools",
          "Sub-micron contouring for aerodynamic preform profiles",
          "Thermal compensation sensors during 24/7 machining",
        ],
        deliverable: "CNC In-Process Coordinate Metrology Log",
        toolingAspect: "High-speed 5-axis roughing and finishing with micro tools",
        tag: "5-Axis Toolroom",
      },
      {
        step: "05",
        title: "EDM / Precision Machining",
        subtitle: "Mirror Spark Erosion & Wire Cut",
        description:
          "Sub-micron CNC die sinking EDM for deep neck ribs and sharp parting corners, paired with precision 4-axis wire EDM.",
        activities: [
          "Mirror-spark finish EDM (Ra < 0.1 µm)",
          "Copper-tungsten micro-electrodes generation",
          "Precision wire-cut for split neck rings (±0.002 mm)",
          "Optical surface roughness profile validation",
        ],
        deliverable: "Surface Finish Roughness (Ra) Metrology Sign-off",
        toolingAspect: "Sub-micron spark erosion & 4-axis wire-cut split neck rings",
        tag: "Mirror Spark EDM",
      },
      {
        step: "06",
        title: "Mold Assembly",
        subtitle: "Master Toolmaker Hand Fitting & Bluing",
        description:
          "Meticulous benching, optical bluing check, hot runner manifold integration, and smooth slider cam alignment by senior Gujarati toolmakers.",
        activities: [
          "100% bluing contact verification (>85% contact area)",
          "Multi-zone hot runner manifold thermal wiring & seal check",
          "Hydraulic / pneumatic stripper stroke calibration",
          "Smooth ejection plate cycle balancing",
        ],
        deliverable: "Assembly Clearance & Interlocking Verification Sheet",
        toolingAspect: "Optical bluing contact verification & manifold thermal wiring",
        tag: "Master Bench Fitting",
      },
      {
        step: "07",
        title: "Quality Inspection",
        subtitle: "Zeiss 3D CMM & Metrology Testing",
        description:
          "Comprehensive dimensional verification inside a 20°C temperature-controlled metrology laboratory using 3D CNC CMM and optical profile projectors.",
        activities: [
          "Zeiss 3D CMM coordinate inspection",
          "Neck thread pitch & diameter optical projector scan",
          "Cooling water channel pressure test (10 bar leak-free)",
          "Core-cavity concentricity & wall thickness deviation check",
        ],
        deliverable: "Full 3D CMM Dimensional Inspection Certificate",
        toolingAspect: "Zeiss 3D CNC CMM & optical profile comparator inspection",
        tag: "Metrology Laboratory",
      },
      {
        step: "08",
        title: "Mold Trial",
        subtitle: "In-House Injection Molding Machine Testing",
        description:
          "Real-world production trial run on in-house KraussMaffei & Haitian injection presses to evaluate cycle times, part aesthetics, and gate quality.",
        activities: [
          "T0 / T1 production trial runs with customer resin",
          "Dry-cycle timing & fast ejection testing",
          "Preform weight variation check across all cavities (CV < 0.2%)",
          "Drop impact & optical haze inspection of samples",
        ],
        deliverable: "Sample Mold Trial Report & Qualified First Article Samples",
        toolingAspect: "In-house 180T-450T press trial & dimensional sample validation",
        tag: "Press Trial & Validation",
      },
      {
        step: "09",
        title: "Final Delivery",
        subtitle: "Sea/Air Export Packaging & Deployment Support",
        description:
          "VCI anti-rust oil coating, heavy-duty seaworthy wooden crating, spare parts kit, and on-site technician commissioning at customer site.",
        activities: [
          "Multi-layer vacuum wrap & anti-corrosion VCI barrier",
          "Heavy-duty steel-reinforced export wooden box",
          "Complete spare parts kit (nozzles, tips, O-rings, heaters)",
          "Operation & maintenance manual + commissioning engineer support",
        ],
        deliverable: "Export Dispatch Kit, Operation Manual & Warranty Pack",
        toolingAspect: "VCI corrosion wrap, export wooden crating & spare kit",
        tag: "Export Packaging & Dispatch",
      },
    ],
  },
  machinery: {
    badge: "MACHINERY & EQUIPMENT",
    heading: "Our Machinery.",
    highlightHeading: "Your Manufacturing Confidence.",
    description:
      "Explore the machining, inspection and mould-trial equipment supporting our tooling and manufacturing capabilities.",
    machines: [
      {
        id: "mach-1",
        slug: "cnc-precision-machining",
        name: "Makino & Mazak 5-Axis High-Speed CNC",
        manufacturer: "Makino / Mazak Tooling Cells",
        model: "5-Axis High-Speed Machining Centers",
        category: "CNC",
        badge: "HIGH-SPEED MILLING",
        image: "/About/CNC.png",
        specifications: "Up to 24,000 RPM Spindle | Simultaneous 5-Axis | Linear Scales ±0.001 mm",
        capacity: "Travel: X 1,050 mm × Y 600 mm × Z 550 mm | Table Load: 800 kg",
        application: "High-speed contouring of multi-cavity preform stacks, core shanks & precision cavities",
        shortDescription:
          "Advanced multi-axis CNC machining centers delivering micron-level positioning and optical cavity surface finishes for complex plastic tooling.",
      },
      {
        id: "mach-2",
        slug: "edm-die-sinking",
        name: "Mitsubishi CNC Die-Sinking Mirror EDM",
        manufacturer: "Mitsubishi Electric (Japan)",
        model: "EA-Series Precision Die-Sinker with FP-Power",
        category: "EDM",
        badge: "MIRROR SPARK EROSION",
        image: "/About/EDM.png",
        specifications: "Super-fine Mirror Finish Circuit (Ra < 0.1 µm) | Fuzzy-Logic Arc Suppression",
        capacity: "Tank Size: 900 × 600 × 350 mm | 16-Station Automatic Tool Changer",
        application: "Intricate cavity ribs, deep split thread neck finishes & sharp internal radius profiles",
        shortDescription:
          "High-precision spark erosion cell engineered to produce mirror cavity surface finishes and intricate rib geometries without manual polishing.",
      },
      {
        id: "mach-3",
        slug: "wire-cut-edm",
        name: "Sodick Linear Motor 4-Axis Wire Cut EDM",
        manufacturer: "Sodick Precision (Japan)",
        model: "ALN600G Linear Motor Wire Cut System",
        category: "EDM",
        badge: "SUB-MICRON WIRE CUT",
        image: "/Home/inf2.png",
        specifications: "Best Finish: Ra 0.15 µm | Min. Corner Radius: 0.03 mm | Auto Wire Threading 0.10–0.25 mm",
        capacity: "Travel: X 600 mm × Y 400 mm × Z 350 mm | U/V Travel: ±100 mm",
        application: "Split neck ring inserts, precision slide gibs, ejector plates & custom stripper rings",
        shortDescription:
          "Linear motor driven wire EDM delivering flawless taper-free cutting and sub-micron repeatability for split insert components.",
      },
      {
        id: "mach-4",
        slug: "zeiss-cmm-inspection",
        name: "Zeiss DuraMax 3D CNC Coordinate Measuring Machine",
        manufacturer: "Carl Zeiss Metrology (Germany)",
        model: "DuraMax HTG 3D CNC CMM with VAST Scanning",
        category: "CMM",
        badge: "METROLOGY LAB CERTIFIED",
        image: "/manufacturing/mfg_quality.jpg",
        specifications: "MPEE: 2.4 + L/300 µm | Continuous VAST Probe Scanning | 20°C Temperature-Controlled Lab",
        capacity: "Measuring Volume: 500 × 500 × 500 mm | Max Workpiece Weight: 100 kg",
        application: "100% stack inspection, preform wall concentricity, pitch spacing & GD&T certificate generation",
        shortDescription:
          "World-standard German metrology system verifying 3D coordinate geometry, neck thread pitch, and concentricity across all cavity components.",
      },
      {
        id: "mach-5",
        slug: "surface-grinding",
        name: "Chevalier & Okamoto Precision Surface Grinders",
        manufacturer: "Chevalier / Okamoto Tooling",
        model: "Precision Hydraulic Surface Grinding System",
        category: "Grinding",
        badge: "SUB-MICRON FLATNESS",
        image: "/Home/inf4.png",
        specifications: "Parallelism: ≤ 0.002 mm over 500 mm | Surface Roughness: Ra ≤ 0.2 µm",
        capacity: "Magnetic Chuck: 600 × 300 mm | Table Travel: 650 mm",
        application: "Mating parting plate surfaces, runner manifold backplates & slider wear-strip squaring",
        shortDescription:
          "Rigid surface grinders delivering dead-flat datum planes and zero-flash mold parting line closures.",
      },
      {
        id: "mach-6",
        slug: "injection-molding-press",
        name: "KraussMaffei & Haitian In-House Trial Presses",
        manufacturer: "KraussMaffei / Haitian International",
        model: "High-Speed Injection Molding Presses (180T - 450T)",
        category: "Trial",
        badge: "IN-HOUSE VALIDATION",
        image: "/manufacturing/mfg_custom.jpg",
        specifications: "180 Ton to 450 Ton Clamping | High-Speed Accumulator Assisted Injection | Fast Mold Open",
        capacity: "Tie Bar Spacing: up to 780 × 780 mm | Max Shot Weight: 1,800 g (PET/PP)",
        application: "T0/T1 validation trials, cycle-time qualification, hot runner balance & first article inspection",
        shortDescription:
          "Dedicated in-house injection molding presses verifying actual cycle times, multi-cavity fill balance, and sample aesthetics prior to dispatch.",
      },
    ],
  },
  capacity: {
    badge: "PRODUCTION CAPACITY",
    heading: "Scale, Precision &",
    highlightHeading: "Toolroom Capacity",
    description:
      "Engineered toolroom infrastructure capable of delivering high-volume multi-cavity stack tooling with synchronized machining shifts.",
    facilityBadge: "MANUFACTURING CAPACITY",
    facilitySubheading: "INFRASTRUCTURE & RESOURCES",
    facilityTitle: "Integrated Facilities Designed for Production Consistency",
    facilityDescription:
      "Operating from Phase-IV GIDC Gujarat, our toolroom combines high-speed 5-axis CNC machining centers, mirror spark EDMs, precision wire-cut cells, and dedicated assembly bays under one roof. Synchronized workflows eliminate cumulative tolerance build-up across complex multi-cavity tooling.",
    facilityImage: "/About/FACILITY.png",
    highlights: [
      {
        title: "Integrated Precision Toolroom",
        description:
          "Dedicated bays for 5-axis CNC milling, spark erosion EDM, 4-axis wire cut, and flat surface grinding operating in synchronized production shifts.",
      },
      {
        title: "Multi-Complexity Mould Handling",
        description:
          "Engineering infrastructure equipped to execute simple single-cavity prototype tools through complex 144-cavity balanced hot runner preform stacks.",
      },
      {
        title: "Controlled Metrology & In-Process Verification",
        description:
          "Zeiss 3D CNC Coordinate Measuring Machines inside a 20°C temperature-controlled quality laboratory ensure zero cumulative tolerance errors.",
      },
      {
        title: "In-House Validation Press Trials",
        description:
          "Dedicated 180T to 450T injection moulding trial presses verify cycle times, gate balance, and sample concentricity prior to dispatch.",
      },
    ],
    capabilitiesBadge: "MOULD PRODUCTION CAPABILITY",
    capabilitiesHeading: "Mould Production Capabilities",
    capabilities: [
      {
        id: "preform-jar",
        title: "PET Preform & Jar Moulds",
        badge: "1 to 144 Cavities",
        description:
          "High-speed preform and wide-mouth jar tooling engineered with balanced hot runner manifolds, interchangeable components, and optimized conformal cooling for rapid cycle times.",
        image: "/product/pet-preform-mold.png",
        link: "/products/pet-preform-mold",
        points: [
          "Multi-cavity preform stacks (up to 144 cavities) for water, CSD, and hot-fill bottles",
          "Wide-mouth jar moulds with custom multi-start neck thread finishes",
          "Hardened Stavax ESR stainless steel components with sub-micron interchangeability",
        ],
      },
      {
        id: "isbm",
        title: "ISBM Moulds",
        badge: "Single-Stage Tooling",
        description:
          "Injection Stretch Blow Mould tooling engineered for single-stage machine platforms, delivering crystal clarity, precise neck orientation, and uniform wall thickness.",
        image: "/product/isbm-bottle-mold.png",
        link: "/products/isbm-bottle-mold",
        points: [
          "Single-stage integrated preform injection and stretch-blow cavity stations",
          "Optical mirror cavity surface finishes (Ra ≤ 0.1 µm) for cosmetic and pharma containers",
          "Engineered base petaloid geometries and precision thread alignment",
        ],
      },
      {
        id: "ebm",
        title: "EBM Moulds",
        badge: "Extrusion Blow Moulding",
        description:
          "Extrusion blow mould tooling for hollow plastic containers, engineered with durable beryllium copper pinch-offs and high-conductivity thermal cooling layouts.",
        image: "/product/ebm-bottle-mold.png",
        link: "/products/ebm-bottle-mold",
        points: [
          "High-durability cavity blocks for HDPE, PP, LDPE, and multi-layer containers",
          "Calibrated beryllium copper pinch-off inserts for clean bottom flash separation",
          "Calibrated neck finishes and uniform parison cooling across high-volume production",
        ],
      },
    ],
    statsBadge: "PRODUCTION STATISTICS",
    statsHeading: "Verified Manufacturing Metrics",
    stats: [
      {
        id: "experience",
        metric: "30",
        prefix: "",
        suffix: "+",
        isNumeric: true,
        label: "Years of Experience",
        sublabel: "Established Since 1994",
      },
      {
        id: "molds-delivered",
        metric: "1,500",
        prefix: "",
        suffix: "+",
        isNumeric: true,
        label: "Moulds Manufactured",
        sublabel: "Preform, ISBM & EBM Tooling",
      },
      {
        id: "facility-area",
        metric: "15,000",
        prefix: "",
        suffix: " m²",
        isNumeric: true,
        label: "Toolroom Facility Area",
        sublabel: "Phase-IV GIDC, Gujarat",
      },
      {
        id: "cavitation-capability",
        metric: "144",
        prefix: "1 to ",
        suffix: " Cav",
        isNumeric: true,
        label: "Cavitation Capability",
        sublabel: "Micro to High-Volume Stacks",
      },
    ],
  },
  quality: {
    badge: "QUALITY & INSPECTION",
    heading: "Built for Precision.",
    highlightHeading: "Verified for Performance.",
    description:
      "Discover the measurement and quality practices applied across each stage of mould manufacturing to maintain dimensional control.",
    image: "/manufacturing/mfg_quality_clean.jpg",
    processTitle: "A Structured Approach to Quality Control",
    processDescription:
      "Click any stage below to inspect verified measurement activities and in-process checkpoints in the panel on the left.",
    cards: [
      {
        id: "equipment",
        number: "01",
        title: "Inspection Equipment",
        description:
          "Use suitable precision measuring and inspection instruments to verify component dimensions and manufacturing requirements.",
        detailTitle: "Metrology & Instrument Capabilities",
        detailItems: [
          "Coordinate Measuring Machine (CMM) multi-axis digital probing",
          "Optical thread profile projectors and non-contact surface profilometers",
          "Digital micrometer sets, bore gauges, and calibrated dial indicators",
        ],
      },
      {
        id: "in-process",
        number: "02",
        title: "In-Process Quality Control",
        description:
          "Perform relevant checks during machining and mould manufacturing to identify deviations before the next production stage.",
        detailTitle: "Stage-Gate In-Process Verification",
        detailItems: [
          "On-machine toolpath and probe measurement after roughing and semi-finishing",
          "Electrode wear calibration and spark gap verification in EDM cells",
          "Cavity insert concentricity and stack plate flatness checkpoints",
        ],
      },
      {
        id: "precision",
        number: "03",
        title: "Precision Measurement",
        description:
          "Verify critical dimensions and component geometry against approved drawings and specified tolerances.",
        detailTitle: "Geometric & Dimensional Tolerancing",
        detailItems: [
          "Critical cavity, core shank, and neck ring dimensional inspection",
          "Interchangeability checks across multi-cavity stack components",
          "Cooling channel wall thickness and manifold alignment verification",
        ],
      },
      {
        id: "testing-final",
        number: "04",
        title: "Testing & Final Inspection",
        description:
          "Inspect completed mould components and carry out applicable functional or trial checks before delivery.",
        detailTitle: "Pre-Dispatch Mould Validation",
        detailItems: [
          "Hydrostatic pressure and leak testing of cooling water circuits",
          "Ejection stroke calibration and mechanical alignment dry-cycle checks",
          "Comprehensive digital inspection report and sample sign-off records",
        ],
      },
    ],
    guaranteeBadge: "QUALITY ASSURANCE GUARANTEE",
    guaranteeTitle: "Zeiss 3D CMM & Sub-Micron Inspection Verification",
    guaranteeDescription:
      "Every mould stack undergoes full coordinate verification (±0.002 mm tolerance), 10–12 bar hydrostatic cooling circuit testing, and certified inspection reports.",
    guaranteePrecision: "±0.002 mm Precision",
    guaranteeIso: "ISO 9001 Process",
    stripBadge: "Precision Measurement & Verification",
    stripItems: [
      {
        number: "01",
        label: "Dimensional Inspection",
        shortDesc: "Multi-axis measurement of core, cavity, and split neck geometries.",
        fullDesc:
          "Rigorous coordinate checking of core shanks, cavity pockets, and neck finish concentricity against CAD drawings with sub-micron precision.",
      },
      {
        number: "02",
        label: "Manufacturing Checkpoints",
        shortDesc: "Stage-gate validation across CNC, spark erosion, and assembly bays.",
        fullDesc:
          "In-process probe checkpoints after roughing, EDM spark erosion, and stack plate fitting to prevent cumulative tolerance errors.",
      },
      {
        number: "03",
        label: "Final Quality Verification",
        shortDesc: "Hydrostatic pressure leak tests and complete digital report sign-off.",
        fullDesc:
          "10-12 bar pressure leak testing of conformal cooling water circuits, dry-cycle ejection calibration, and certified inspection reports.",
      },
    ],
  },
  customSolutions: {
    badge: "CUSTOM MOLD SOLUTIONS",
    heading: "Customized Solutions for",
    highlightHeading: "Demanding Mould Requirements",
    description:
      "From customer-specific mould designs to engineering coordination and production support, we work to align tooling solutions with your product and manufacturing requirements.",
    image: "/manufacturing/mfg_custom.jpg",
    solutionProcessTitle: "Engineering Tailored Around Your Production",
    solutionProcessDescription:
      "Click any solution below to inspect engineering coordination and technical activities in the panel on the left.",
    solutions: [
      {
        id: "development",
        number: "01",
        title: "Customized Mould Development",
        description:
          "Develop mould solutions around the required product geometry, material, mould configuration and production objectives.",
        detail:
          "Design coordination, tooling configuration and development planning based on approved customer requirements.",
        highlights: [
          "Tailored cavity stack configurations & balanced cooling routing",
          "Resin-specific shrinkage compensation (PET, PP, HDPE, PCR blends)",
          "Development planning aligned with customer production schedules",
        ],
      },
      {
        id: "requirements",
        number: "02",
        title: "Customer-Specific Requirements",
        description:
          "Align tooling requirements with the customer's product specifications, production equipment and manufacturing workflow.",
        detail:
          "Discuss product dimensions, machine compatibility, mould interfaces and relevant production constraints.",
        highlights: [
          "Mould base clamping, tie-bar spacing, and machine stroke compatibility",
          "Custom preform neck finish & container closure interface verification",
          "Automation & take-out robot mounting alignment",
        ],
      },
      {
        id: "support",
        number: "03",
        title: "Engineering Support",
        description:
          "Coordinate technical requirements through mould development, validation and applicable production support.",
        detail:
          "Support can include design discussions, trial coordination, technical feedback and agreed tooling improvements.",
        highlights: [
          "DFM engineering review and parametric tooling discussions",
          "Pre-dispatch press trial coordination and sample validation",
          "Technical feedback and agreed tooling optimization",
        ],
      },
    ],
    confidentialityBadge: "CONFIDENTIALITY & ENGINEERING INTEGRITY",
    confidentialityTitle: "Protected Development & Technical Coordination",
    confidentialityDescription:
      "Custom mould developments are safeguarded under strict NDA agreements with proprietary CAD design security, pre-trial validation, and direct engineering review.",
    confidentialityNda: "Strict NDA Protection",
    confidentialityDfm: "Free DFM Review",
    ctaBadge: "TECHNICAL CONSULTATION & FEASIBILITY",
    ctaTitle: "Let's Discuss Your Custom Mould Requirements",
    ctaDescription:
      "Share your product concept, specifications or tooling requirements with our team to start a technical discussion.",
    ctaButtonText: "Discuss Your Mould Project",
    ctaButtonLink: "/contact?subject=Custom+Mould+Solutions",
  },
};
