export interface GalleryItem {
  id: string;
  slug: string;
  title: string;
  category: 'Manufacturing Facility' | 'Machinery' | 'Mold Manufacturing' | 'Products' | 'Quality Inspection' | 'Completed Projects';
  image: string;
  alt: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  aspectRatio: 'landscape' | 'portrait' | 'square' | 'wide';
  featured?: boolean;
  featuredCollection?: 'Inside Our Facility' | 'Precision in Every Detail' | 'Engineered Mold Solutions';
  keyHighlights: string[];
  specifications?: { label: string; value: string }[];
  applicationContext?: string;
  relatedCategoryLink?: string;
}

export type GalleryCategory =
  | 'All Images'
  | 'Manufacturing Facility'
  | 'Machinery'
  | 'Mold Manufacturing'
  | 'Products'
  | 'Quality Inspection'
  | 'Completed Projects';

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All Images',
  'Manufacturing Facility',
  'Machinery',
  'Mold Manufacturing',
  'Products',
  'Quality Inspection',
  'Completed Projects',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // 1. Manufacturing Facility
  {
    id: 'mfg-fac-01',
    slug: 'precision-toolroom-assembly-bay',
    title: 'Precision Toolroom & Assembly Bay',
    category: 'Manufacturing Facility',
    image: '/infrastructure/facility-hero.jpg',
    alt: 'Patel Mould Industries Precision Toolroom and Assembly Bay Gujarat',
    badge: 'Main Facility',
    shortDescription: 'Modern organized toolroom layout dedicated to precision mold fitting and multi-cavity stack assembly.',
    fullDescription: 'Our primary manufacturing bay in Gujarat spans over 25,000 sq.ft of climate-controlled, vibration-damped industrial flooring. It houses high-precision CNC machine centers, EDM stations, and dedicated mold assembly benches where veteran toolmakers execute final micrometric fitting of mold stacks.',
    aspectRatio: 'landscape',
    featured: true,
    featuredCollection: 'Inside Our Facility',
    keyHighlights: [
      'Over 25,000 sq. ft. precision manufacturing footprint',
      'Overhead 10-ton gantry cranes for heavy mold bases',
      'Vibration-isolated foundations for sub-micron accuracy',
      'Segregated rough machining, EDM, and clean assembly zones'
    ],
    specifications: [
      { label: 'Facility Area', value: '25,000+ sq. ft.' },
      { label: 'Crane Capacity', value: '10 Ton Overhead' },
      { label: 'Location', value: 'GIDC Industrial Estate, Gujarat, India' },
      { label: 'Environmental Control', value: 'Dust-free Assembly Zones' }
    ],
    applicationContext: 'Central production hub serving FMCG, beverage, cosmetic, and pharmaceutical packaging giants across India and globally.',
    relatedCategoryLink: '/infrastructure'
  },
  {
    id: 'mfg-fac-02',
    slug: 'mold-assembly-fitting-bay',
    title: 'Clean Mold Assembly & Polishing Bay',
    category: 'Manufacturing Facility',
    image: '/infrastructure/mold-assembly.jpg',
    alt: 'Clean Mold Assembly and Polishing Bay at Patel Mould Industries',
    badge: 'Assembly Zone',
    shortDescription: 'Dedicated dust-controlled assembly zone for core-cavity alignment and hand polishing.',
    fullDescription: 'Precision fitting requires clean environment control. Our assembly station features specialized hydraulic mold turners, optical alignment gauges, and pneumatic hand-polishing tools to achieve SPI-A1 diamond mirror polish on complex optical packaging cavities.',
    aspectRatio: 'square',
    keyHighlights: [
      'SPI-A1 optical diamond mirror polishing benches',
      'Hydraulic mold die-spotting press alignment',
      'Core & cavity blue-matching verification',
      'Conformal cooling circuit pressure leak testing'
    ],
    specifications: [
      { label: 'Surface Finish', value: 'Up to SPI A1 / Ra 0.02 µm' },
      { label: 'Spotting Press', value: '150 Ton Precision Clamping' },
      { label: 'Cooling Test Pressure', value: 'Up to 12 Bar Hydropneumatic' }
    ],
    applicationContext: 'Essential for high-clarity PET bottles and transparent cosmetic jars requiring optical reflection without swirl marks.',
    relatedCategoryLink: '/infrastructure'
  },
  {
    id: 'mfg-fac-03',
    slug: 'heavy-raw-material-staging-warehouse',
    title: 'Tool Steel Staging & Storage Center',
    category: 'Manufacturing Facility',
    image: '/infrastructure/warehouse-storage.jpg',
    alt: 'Certified Tool Steel Inventory and Staging Center',
    badge: 'Raw Material Bay',
    shortDescription: 'Climate-controlled warehouse housing certified European & Japanese mold steels.',
    fullDescription: 'We maintain extensive inventory of pre-hardened and vacuum-hardened European tool steels including Bohler, Uddeholm Stavax ESR, DIN 1.2316, and 1.2083. Complete traceability with mill test certificates guarantees structural reliability and zero internal micro-porosity.',
    aspectRatio: 'portrait',
    keyHighlights: [
      '100% UT tested forged steel blocks',
      'Full metallurgical batch test certification traceability',
      'Ampco beryllium copper inserts for hot-spot cooling',
      'Automated vertical storage racking system'
    ],
    specifications: [
      { label: 'Stock Steels', value: 'Stavax ESR, DIN 1.2083, 1.2316, P20+Ni' },
      { label: 'Inspection', value: '100% Ultrasonic Flaw Detection' },
      { label: 'Hardness Range', value: '30 HRC up to 54 HRC Vacuum Treated' }
    ],
    applicationContext: 'Guarantees corrosion resistance against aggressive blow-molding resins and ensures mold lifespans exceeding 5 million shots.',
    relatedCategoryLink: '/infrastructure'
  },

  // 2. Machinery
  {
    id: 'mach-01',
    slug: 'high-speed-5-axis-cnc-machining-center',
    title: 'High-Speed 5-Axis CNC Machining Center',
    category: 'Machinery',
    image: '/infrastructure/cnc-machining.jpg',
    alt: 'High-Speed 5-Axis CNC Milling Center Patel Mould Industries',
    badge: 'Machining Center',
    shortDescription: 'Micron-accurate continuous 5-axis high-speed CNC milling for complex cavity profiles.',
    fullDescription: 'Equipped with 24,000 RPM high-torque direct spindles and optical Heidenhain glass scale feedback. Enables high-speed hard milling of pre-hardened cavity blocks up to 52 HRC directly, minimizing secondary EDM cycles and preserving flawless surface geometry.',
    aspectRatio: 'wide',
    featured: true,
    featuredCollection: 'Precision in Every Detail',
    keyHighlights: [
      '24,000 RPM thermal-compensated direct spindle',
      'Continuous simultaneous 5-axis contour milling',
      'Laser tool-length and breakage detection system',
      'Positioning repeatability down to ±0.002 mm'
    ],
    specifications: [
      { label: 'Spindle Speed', value: '24,000 RPM' },
      { label: 'Positioning Repeatability', value: '±0.002 mm (2 Microns)' },
      { label: 'Controller', value: 'Heidenhain TNC 640 / Fanuc 31i' },
      { label: 'Work Table Capacity', value: '850 x 700 mm (1,200 kg)' }
    ],
    applicationContext: 'High-cavity PET preform mold plates, ISBM split cavities, and complex cosmetic bottle contour forms.',
    relatedCategoryLink: '/manufacturing'
  },
  {
    id: 'mach-02',
    slug: 'precision-spark-erosion-edm-system',
    title: 'Precision Spark Erosion & Wire EDM Station',
    category: 'Machinery',
    image: '/infrastructure/edm-machining.jpg',
    alt: 'Spark Erosion and CNC Wire EDM Precision Machining Station',
    badge: 'EDM Technology',
    shortDescription: 'Mirror-finish electrical discharge machining for deep ribs, sharp corners, and micro-grooves.',
    fullDescription: 'Our CNC sinker EDM and submerged brass wire-cut machines produce intricate thread details, deep neck ring venting, and ultra-fine parting line shut-offs that are inaccessible to standard rotating milling cutters.',
    aspectRatio: 'landscape',
    keyHighlights: [
      'Mirror discharge generator producing Ra 0.1 µm finishes',
      'Automated C-axis rotary indexing chucks',
      'Submerged wire EDM cutting down to 0.1 mm brass wire',
      'Negligible recast layer for fatigue-resistant mold cavities'
    ],
    specifications: [
      { label: 'Surface Roughness', value: 'Ra 0.1 µm Mirror Sparking' },
      { label: 'Wire Diameter', value: '0.10 mm to 0.25 mm' },
      { label: 'Dielectric', value: 'Chilled Deionized Filtration' },
      { label: 'Max Workpiece Weight', value: '1,000 kg' }
    ],
    applicationContext: 'Preform neck ring threads, deep closure tamper-evident band undercuts, and ISBM bottom petaloid cavities.',
    relatedCategoryLink: '/manufacturing'
  },
  {
    id: 'mach-03',
    slug: 'cnc-precision-lathe-turning-center',
    title: 'CNC Precision Hard Turning & Cylindrical Grinding',
    category: 'Machinery',
    image: '/manufacturing/cnc-precision-machining.webp',
    alt: 'CNC Precision Hard Turning Center Patel Mould Industries',
    badge: 'Hard Turning',
    shortDescription: 'Super-precision turning and cylindrical grinding for PET preform cores and neck rings.',
    fullDescription: 'High-rigidity slant-bed CNC turning centers with hydrostatic bearings designed for hard-turning mold core mandrels. Delivers exceptional roundness and cylindrical runout within 1.5 microns across long core pins.',
    aspectRatio: 'square',
    keyHighlights: [
      'Sub-micron concentricity across multi-station core stacks',
      'Ceramic and CBN tooling for hard turning up to 58 HRC',
      'Integrated in-situ touch probing systems',
      'Dual spindle synchronization for complete part machining'
    ],
    specifications: [
      { label: 'Spindle Runout', value: '< 0.0015 mm' },
      { label: 'Hardness Range', value: 'Up to 58 HRC Hard Turning' },
      { label: 'Turning Diameter', value: 'Max Ø 320 mm' }
    ],
    applicationContext: 'PET preform core rods, guide pillars, hardened bushings, and interchangeable neck insert rings.',
    relatedCategoryLink: '/manufacturing'
  },

  // 3. Mold Manufacturing
  {
    id: 'mold-mfg-01',
    slug: 'cad-cae-moldflow-simulation-cell',
    title: 'CAD/CAM Engineering & MoldFlow Simulation Cell',
    category: 'Mold Manufacturing',
    image: '/infrastructure/engineering-design.jpg',
    alt: 'CAD CAM Engineering and MoldFlow Simulation Workstations',
    badge: 'Engineering CAD/CAM',
    shortDescription: 'Parametric 3D mold tooling architecture and thermal cooling simulation engineering.',
    fullDescription: 'Every mold project starts at our design center equipped with Siemens NX, Creo, and Autodesk MoldFlow. Our simulation engineers compute fill balance, shear rate, cooling uniformity, and shrinkage dynamics to eliminate preform warpage before steel is cut.',
    aspectRatio: 'wide',
    featured: true,
    featuredCollection: 'Engineered Mold Solutions',
    keyHighlights: [
      'Full 3D associative assembly and parametric cavity stacks',
      'Autodesk MoldFlow injection and gate freeze analysis',
      'Conformal cooling water channel flow optimization',
      'DFM (Design for Manufacturability) client consultation'
    ],
    specifications: [
      { label: 'Software', value: 'Siemens NX, Creo, MoldFlow Insight' },
      { label: 'CAD Standards', value: 'STEP, IGES, Parasolid, CATIA native' },
      { label: 'Thermal Analysis', value: 'CFD Cooling Channel Flow' }
    ],
    applicationContext: 'Pre-production risk elimination for high-speed multi-cavity beverage packaging tooling.',
    relatedCategoryLink: '/manufacturing'
  },
  {
    id: 'mold-mfg-02',
    slug: 'multi-cavity-mold-base-plate-machining',
    title: 'Heavy Mold Base & Manifold Plate Machining',
    category: 'Mold Manufacturing',
    image: '/About/FACILITY.png',
    alt: 'High Precision Mold Base and Hot Runner Manifold Plate Machining',
    badge: 'Tooling Fabrication',
    shortDescription: 'Precision deep-hole gun drilling and plate pocketing for hot runner manifolds.',
    fullDescription: 'Fabricating heavy mold clamping plates, ejector plates, and hot runner manifolds requires extreme perpendicularity and plate flatness. Gun-drilled cooling lines ensure uniform coolant circulation across all cavities simultaneously.',
    aspectRatio: 'landscape',
    keyHighlights: [
      'Gun-drilled deep cooling circuits with zero cross-leakage',
      'Sub-micron pocket flatness for even clamping load distribution',
      'Nickel-plated and anti-corrosion hardened plates',
      'Standardized DME / Hasco guiding pin layouts'
    ],
    specifications: [
      { label: 'Max Plate Size', value: '1,200 x 900 x 600 mm' },
      { label: 'Pocket Tolerance', value: '±0.005 mm' },
      { label: 'Plate Hardness', value: 'Pre-hardened 32-36 HRC' }
    ],
    applicationContext: 'Rigid backbone for 48, 72, and 96-cavity high-speed PET injection tooling.',
    relatedCategoryLink: '/manufacturing'
  },
  {
    id: 'mold-mfg-03',
    slug: 'precision-cavity-insert-fitting',
    title: 'Precision Cavity Core Insert Fitting & Die Spotting',
    category: 'Mold Manufacturing',
    image: '/Home/mold image about.png',
    alt: 'Precision Cavity Core Insert Fitting and Die Spotting Process',
    badge: 'Toolmaker Craftsmanship',
    shortDescription: 'Expert hand-fitting and microscopic blue-matching of parting line shut-offs.',
    fullDescription: 'Even with advanced CNC automation, the ultimate mold longevity relies on artisan mold-makers. Our technicians inspect flash shut-offs using precision bluing dyes under a 150-ton hydraulic spotting press, ensuring zero flash even at 1,800 bar injection pressure.',
    aspectRatio: 'portrait',
    keyHighlights: [
      '100% blue-matching of all cavity parting line lands',
      'Zero-flash seal under full machine clamp pressure',
      'Micrometric slide gib and angle pin timing adjustment',
      'Pre-assembly hot runner electrical resistance testing'
    ],
    specifications: [
      { label: 'Spotting Contact', value: '> 90% Uniform Land Contact' },
      { label: 'Shut-off Clearance', value: 'Zero-flash gap (< 0.005 mm)' },
      { label: 'Die Spotting Press', value: '150 Ton Hydro-Mechanical' }
    ],
    applicationContext: 'Beverage bottle neck finishes, pharmaceutical child-resistant caps, and thin-wall food containers.',
    relatedCategoryLink: '/manufacturing'
  },

  // 4. Products
  {
    id: 'prod-01',
    slug: 'high-cavitation-pet-preform-mold-system',
    title: 'High-Cavitation PET Preform Mold System',
    category: 'Products',
    image: '/product/high-cavitation-preform-mold.png',
    alt: 'High-Cavitation PET Preform Mold System Patel Mould Industries',
    badge: 'PET Tooling',
    shortDescription: 'Balanced hot-runner valve-gate PET preform mold with individual cavity cooling.',
    fullDescription: 'Our flagship 32, 48, and 72-cavity PET preform molds are engineered for continuous 24/7 operation with cycle times down to 8.5 seconds. Featuring imported titanium-coated valve gate nozzles, interchangeable neck splits, and hardened Stavax ESR cavities.',
    aspectRatio: 'landscape',
    featured: true,
    featuredCollection: 'Engineered Mold Solutions',
    keyHighlights: [
      'Rapid cycle time down to 8.5 seconds with intense dual cooling',
      'Internationally interchangeable neck rings (PCO 1881, 1810, 29/25)',
      'Balanced hot-runner system with pneumatic/hydraulic valve pins',
      'Preform weight variation controlled within ±0.2 grams'
    ],
    specifications: [
      { label: 'Cavitation', value: '8 to 96 Cavities' },
      { label: 'Neck Finishes', value: 'PCO 1881, 29/25, 30/25, 38 mm Bericap' },
      { label: 'Cycle Time', value: '8.5 - 14 seconds depending on weight' },
      { label: 'Steel Grade', value: 'Bohler M310 / Stavax ESR (52 HRC)' }
    ],
    applicationContext: 'Packaged drinking water, carbonated soft drinks, edible oil, and dairy beverage bottles.',
    relatedCategoryLink: '/products'
  },
  {
    id: 'prod-02',
    slug: 'precision-isbm-injection-stretch-blow-mold',
    title: 'Multi-Cavity ISBM Injection Stretch Blow Mold',
    category: 'Products',
    image: '/product/multi-cavity-isbm-mold.png',
    alt: 'Multi-Cavity ISBM Injection Stretch Blow Mold System',
    badge: 'ISBM Tooling',
    shortDescription: 'Integrated single-stage ISBM mold for pharmaceutical bottles and cosmetic jars.',
    fullDescription: 'Designed for single-stage ISBM machines (Nissei ASB, Aoki, Automa). These molds execute injection preform molding, conditioning, blow forming, and discharge in one synchronized machine cycle, yielding pristine high-clarity bottles without transit scratches.',
    aspectRatio: 'square',
    keyHighlights: [
      'Compatible with Nissei ASB 70DPH, 12M, 50MB and Aoki systems',
      'High optical clarity without preform scuff marks',
      'Optimum bottom gate pinch-off and orientation stability',
      'Quick-change cavity shells for minimal downtime'
    ],
    specifications: [
      { label: 'Machine Fit', value: 'Nissei ASB, Aoki, Automa single-stage' },
      { label: 'Cavity Range', value: '2, 4, 6, 8, 12 Cavities' },
      { label: 'Bottle Volume', value: '15 ml up to 2,000 ml containers' }
    ],
    applicationContext: 'Pharmaceutical syrup bottles, hand sanitizer dispensers, liquor miniatures, and cosmetic toner jars.',
    relatedCategoryLink: '/products'
  },
  {
    id: 'prod-03',
    slug: 'extrusion-blow-mold-ebm-canister-tooling',
    title: 'Extrusion Blow Mold (EBM) Industrial Canister Tooling',
    category: 'Products',
    image: '/product/ebm-industrial-packaging-mold.png',
    alt: 'Extrusion Blow Mold EBM Industrial Canister Tooling',
    badge: 'EBM Tooling',
    shortDescription: 'Heavy-duty aircraft-grade aluminum/beryllium copper pinch-off EBM molds for jerry cans.',
    fullDescription: 'Built for HDPE, PP, and multi-layer co-extrusion blow molding machines (Bekum, Uniloy, Jagmohan). Features hardened tool steel or beryllium copper pinch-off inserts with vacuum exhaust vents to prevent air entrapment on large 5L to 25L jerry cans.',
    aspectRatio: 'landscape',
    keyHighlights: [
      'Replaceable hardened tool steel pinch-off blades (56 HRC)',
      'High-conductivity beryllium copper neck and base inserts',
      'Parison de-flashing integrated within the mold cycle',
      'Handles multi-layer barrier co-extrusion structures'
    ],
    specifications: [
      { label: 'Materials', value: 'Aerospace 7075-T6 Aluminum / P20 / AMPCO' },
      { label: 'Capacity', value: '500 ml to 30 Liters Jerry Cans' },
      { label: 'Cycle Optimization', value: 'Conformal bottom pinch cooling' }
    ],
    applicationContext: 'Agrochemical containers, engine lubricant jerry cans, industrial chemical drums, and dairy gallon jugs.',
    relatedCategoryLink: '/products'
  },
  {
    id: 'prod-04',
    slug: 'wide-mouth-pet-jar-confectionery-mold',
    title: 'Wide-Mouth PET Jar & Confectionery Container Mold',
    category: 'Products',
    image: '/product/pet-jar-mold.png',
    alt: 'Wide-Mouth PET Jar and Confectionery Mold',
    badge: 'PET Jars',
    shortDescription: 'Specialty molds for 63mm to 120mm wide-mouth neck jars and food storage tubs.',
    fullDescription: 'Engineered for heavy-grammage wide-mouth jars used in food, spice, and confectionery packaging. Custom gate cooling geometry prevents crystalline haze in heavy neck rings, ensuring crystal-clear jar transparency and tight induction seal closure mating.',
    aspectRatio: 'square',
    keyHighlights: [
      'Wide neck diameters from 53 mm to 120 mm',
      'Dual-circuit neck cooling preventing thermal distortion',
      'Optimum thread profile for airtight closure induction sealing',
      'High drop-impact structural base rib geometry'
    ],
    specifications: [
      { label: 'Neck Diameter', value: '53 mm to 120 mm Wide Mouth' },
      { label: 'Jar Capacity', value: '250 gm to 5 kg Food Jars' },
      { label: 'Hot Runner', value: 'Individual valve pin thermal control' }
    ],
    applicationContext: 'Peanut butter, protein powder tubs, biscuit jars, ghee containers, and pickle packaging.',
    relatedCategoryLink: '/products'
  },

  // 5. Quality Inspection
  {
    id: 'qc-01',
    slug: 'zeiss-3d-bridge-cmm-metrology-center',
    title: 'Zeiss 3D Bridge CMM Coordinate Metrology Center',
    category: 'Quality Inspection',
    image: '/quality/quality-inspection-metrology.jpg',
    alt: 'Zeiss 3D Bridge CMM Coordinate Measuring Machine Metrology Center',
    badge: '3D Metrology',
    shortDescription: 'Sub-micron coordinate measuring machine in a temperature-controlled 20°C clean lab.',
    fullDescription: 'Our computerized Zeiss 3D CMM operates within an isolated metrology laboratory held strictly at 20°C ±0.5°C. Every critical mold cavity insert, core pin, and neck ring is touch-probed across thousands of points to certify tolerances within ±0.002 mm before release.',
    aspectRatio: 'landscape',
    featured: true,
    featuredCollection: 'Precision in Every Detail',
    keyHighlights: [
      'Zeiss bridge CMM with Renishaw multi-axis scanning probes',
      'Temperature-stabilized metrology room (20°C ±0.5°C)',
      'Automated CAD-to-part geometric comparison reports',
      'Full statistical process control (CpK > 1.67) validation'
    ],
    specifications: [
      { label: 'Measurement Uncertainty', value: '1.2 µm + L/350' },
      { label: 'Laboratory Temp', value: '20°C ± 0.5°C Controlled' },
      { label: 'Probe System', value: 'Renishaw SP25M Continuous Scanning' },
      { label: 'Traceability', value: 'NABL Certified Reference Standards' }
    ],
    applicationContext: 'Guarantees 100% interchangeable spare cavity sets that bolt on without on-site fitting.',
    relatedCategoryLink: '/quality'
  },
  {
    id: 'qc-02',
    slug: 'preform-optical-concentricity-profilometer',
    title: 'Preform Wall Thickness & Optical Concentricity Station',
    category: 'Quality Inspection',
    image: '/quality/final-inspection-check.jpg',
    alt: 'Optical Concentricity and Wall Thickness Preform Inspection Station',
    badge: 'Optical Metrology',
    shortDescription: 'Non-contact optical profiling and magnetic thickness gauges for molded test preforms.',
    fullDescription: 'Preforms molded during pilot trials undergo comprehensive metrology using Hall-effect magnetic thickness gauges and high-resolution optical profile projectors. Wall thickness variance across 360 degrees is constrained under 0.04 mm to guarantee blow expansion symmetry.',
    aspectRatio: 'portrait',
    keyHighlights: [
      'Magnetic Hall-effect thickness measurement around 360°',
      'Optical comparator profile measurement for neck thread geometry',
      'Polarized light strain gauge for residual thermal stress inspection',
      'Perpendicularity and gate vestige height verification'
    ],
    specifications: [
      { label: 'Thickness Resolution', value: '0.001 mm (1 Micron)' },
      { label: 'Optical Magnification', value: 'Up to 100x Profile Projection' },
      { label: 'Stress Check', value: 'Crossed Polarizer Photoelastic Bench' }
    ],
    applicationContext: 'Essential for high-speed automated blow molding filling lines where preform wobble causes jam-ups.',
    relatedCategoryLink: '/quality'
  },
  {
    id: 'qc-03',
    slug: 'raw-material-metallurgical-spectroscopy-ultrasonic',
    title: 'Raw Material Hardness & Ultrasonic Flaw Testing',
    category: 'Quality Inspection',
    image: '/quality/raw-material-steel-inspection.jpg',
    alt: 'Raw Material Hardness and Ultrasonic Steel Flaw Testing Station',
    badge: 'Material Testing',
    shortDescription: 'Spectrometric chemical analysis and ultrasonic internal integrity testing.',
    fullDescription: 'Before any machining starts, steel blocks undergo ultrasonic probe scanning to verify zero internal slag inclusions or air porosity. Rockwell & Equotip hardness testers confirm uniform heat-treatment through core depths.',
    aspectRatio: 'landscape',
    keyHighlights: [
      'Ultrasonic pulse-echo non-destructive flaw detection',
      'Rockwell C scale digital indentation hardness testing',
      'Chemical optical emission spectroscopy steel grade verification',
      'Microstructural grain boundary grain size analysis'
    ],
    specifications: [
      { label: 'Testing Method', value: 'ASTM A388 Ultrasonic Flaw Scanning' },
      { label: 'Hardness Testers', value: 'Digital Rockwell C & Equotip 550' },
      { label: 'Certification', value: 'EN 10204 3.1 Mill Certificate Audited' }
    ],
    applicationContext: 'Ensures tool integrity against fatigue cracking under 150-ton repetitive cyclic clamping forces.',
    relatedCategoryLink: '/quality'
  },

  // 6. Completed Projects
  {
    id: 'proj-01',
    slug: '72-cavity-beverage-preform-tooling-system',
    title: '72-Cavity High-Speed Water Bottle Preform Tooling',
    category: 'Completed Projects',
    image: '/gallery/project-72cav-preform-trial.jpg',
    alt: '72-Cavity High-Speed Water Bottle Preform Tooling Validation Trial Gujarat India',
    badge: 'Turnkey Project',
    shortDescription: 'Complete 72-cavity PET preform mold commissioned for a premier Indian national beverage bottler.',
    fullDescription: 'Delivered as a turnkey high-speed tooling system for a leading bottled water producer in western India. Achieved a steady 9.2-second cycle time on a 300-ton injection machine, producing over 28,000 preforms per hour with preform weight standard deviation under 0.12 grams.',
    aspectRatio: 'wide',
    featured: true,
    featuredCollection: 'Inside Our Facility',
    keyHighlights: [
      'Production rate: 28,000+ preforms per hour at 9.2s cycle time',
      'PCO 1881 lightweight neck finish (19.5g bottle preform)',
      '100% hot runner valve-gate thermal balance across all 72 tips',
      'Complete FAT (Factory Acceptance Test) sign-off in Gujarat toolroom'
    ],
    specifications: [
      { label: 'Cavitation', value: '72 Cavities Valve-Gated' },
      { label: 'Target Output', value: '28,000 pcs / hour' },
      { label: 'Resin', value: 'Bottle Grade Virgin PET (0.80 IV)' },
      { label: 'Cycle Time', value: '9.2 seconds sustained' }
    ],
    applicationContext: 'High-speed mass packaging bottling line running 24/7 round-the-clock commercial operations.',
    relatedCategoryLink: '/manufacturing'
  },
  {
    id: 'proj-02',
    slug: '4-cavity-isbm-pharmaceutical-syrup-bottle-mold',
    title: 'Multi-Cavity ISBM Pharmaceutical Drop & Syrup Bottle Tool',
    category: 'Completed Projects',
    image: '/gallery/project-pharma-isbm-bottles.jpg',
    alt: 'Multi-Cavity ISBM Pharmaceutical Drop and Syrup Bottle Tooling Project in Gujarat',
    badge: 'Pharma Project',
    shortDescription: 'High-purity pharma bottle tool with zero parting seam flash for automated sterile cappers.',
    fullDescription: 'Engineered for a certified WHO-GMP pharmaceutical manufacturing facility. Designed with micro-vented neck inserts and ultra-smooth bottom contouring to support clean-room automatic capping and zero liquid leakage under pressure.',
    aspectRatio: 'square',
    keyHighlights: [
      'Zero particulate shed tooling with electropolished steel cavities',
      'Tight thread neck tolerances preventing liquid syrup weeping',
      'Certified for clean-room Class D automated blow-fill-seal lines',
      'Complete dimensional qualification dossier according to cGMP'
    ],
    specifications: [
      { label: 'Bottle Volume', value: '100 ml & 200 ml Cough Syrup' },
      { label: 'Cavitation', value: '4 Cavities Single-Stage ISBM' },
      { label: 'Neck Standard', value: '28 mm ROPP / Child Resistant CRC' },
      { label: 'Compliance', value: 'US FDA / Indian Pharmacopoeia standards' }
    ],
    applicationContext: 'Sterile liquid pharmaceutical formulation packaging for export and domestic markets.',
    relatedCategoryLink: '/industries'
  },
  {
    id: 'proj-03',
    slug: '5-liter-heavy-duty-chemical-jerry-can-mold',
    title: '5-Liter Heavy-Duty Chemical Jerry Can Extrusion Mold',
    category: 'Completed Projects',
    image: '/gallery/project-5l-jerry-can-mold.jpg',
    alt: '5-Liter Heavy Duty Agrochemical Jerry Can EBM Extrusion Blow Mold in Gujarat Factory',
    badge: 'Industrial Packaging',
    shortDescription: 'Industrial jerry can mold with structural anti-stacking ribs and UN drop test certification.',
    fullDescription: 'Built for an agrochemical manufacturer requiring heavy-duty 5L HDPE containers. The mold incorporates beryllium-copper pinch-offs and deep cooling fins that withstand 2-meter UN drop tests without weld-line rupture.',
    aspectRatio: 'landscape',
    keyHighlights: [
      'Passed 1.9-meter UN hazardous chemical drop-impact validation',
      'Integrated handle parison blowing with zero pinch flash thinning',
      'Heavy-duty hardened tool steel inserts for long run durability',
      'High-speed pneumatic neck calibration blow-pin assembly'
    ],
    specifications: [
      { label: 'Container Size', value: '5.0 Liter Jerry Can with Grip Handle' },
      { label: 'Material', value: 'High-Molecular Weight HDPE' },
      { label: 'Mold Weight', value: '850 kg' },
      { label: 'Cycle Time', value: '26 seconds with internal parison cool' }
    ],
    applicationContext: 'Agrochemicals, engine oils, industrial solvents, and liquid fertilizer packaging.',
    relatedCategoryLink: '/industries'
  },
  {
    id: 'proj-04',
    slug: 'cosmetic-crystal-clarity-thick-wall-jar-mold',
    title: 'Luxury Cosmetic Thick-Wall Crystal PET Jar Tooling',
    category: 'Completed Projects',
    image: '/gallery/project-luxury-cosmetic-jar-mold.jpg',
    alt: 'Luxury Cosmetic Thick-Wall Crystal PET Jar Tooling Project in Gujarat Showroom',
    badge: 'Cosmetic Tooling',
    shortDescription: 'Heavy-bottom luxury cosmetic container mold delivering glass-like optical clarity.',
    fullDescription: 'Engineered for a premier beauty care brand looking to replace heavy glass containers with recyclable shatterproof PET. Features specialized core thermal gating to avoid sink marks on thick bottom bases.',
    aspectRatio: 'portrait',
    keyHighlights: [
      'Glass-like transparency with thick luxury bottom profile',
      'SPI A1 mirror-polished optical cavity inserts',
      'Zero sink marks on 8 mm thick bottom base transitions',
      'Precision threaded neck compatible with metallic cosmetic caps'
    ],
    specifications: [
      { label: 'Jar Sizes', value: '50 ml & 100 ml Luxury Face Cream' },
      { label: 'Wall Thickness', value: 'Up to 4.5 mm bottom profile' },
      { label: 'Cavitation', value: '4 Cavities' },
      { label: 'Finish', value: 'Optical Diamond Mirror Polish' }
    ],
    applicationContext: 'Premium skin creams, organic body butters, and salon treatment packaging.',
    relatedCategoryLink: '/industries'
  }
];


export interface GalleryHeroBannerData {
  titlePart1: string;
  titleHighlight: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bannerImage: string;
}

export interface GalleryIntroData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
}

export interface FeaturedCollectionItem {
  title: string;
  tagline: string;
  description: string;
  image: string;
  category: GalleryCategory;
  badge: string;
}

export interface GalleryPageContentData {
  heroBanner: GalleryHeroBannerData;
  intro: GalleryIntroData;
  featuredCollections: FeaturedCollectionItem[];
  items: GalleryItem[];
}

export const defaultGalleryPageContent: GalleryPageContentData = {
  heroBanner: {
    titlePart1: "Our",
    titleHighlight: "Gallery",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Gallery",
    bannerImage: "/gallery-banner.jpg",
  },
  intro: {
    badge: "COMPLETE VISUAL ARCHIVE",
    headingPart1: "Explore Our",
    headingHighlight: "Precision Portfolio",
    description: "Explore the Patel Mould Industries manufacturing facility, high-speed 5-axis CNC machinery, spark EDM toolroom, precision PET preform molds, and Zeiss 3D CMM quality inspection in Gujarat, India.",
  },
  featuredCollections: [
    {
      title: "Inside Our Facility",
      tagline: "World-Class Toolroom Infrastructure",
      description: "Tour our 25,000+ sq. ft. precision manufacturing bay equipped with heavy gantry cranes, climate-stabilized zones, and integrated CAD/CAM cells.",
      image: "/infrastructure/facility-hero.jpg",
      category: "Manufacturing Facility",
      badge: "25,000+ Sq. Ft. Facility",
    },
    {
      title: "Precision in Every Detail",
      tagline: "Sub-Micron Machining & Metrology",
      description: "Explore high-speed 5-axis CNC machining centers, mirror EDM spark erosion stations, and Zeiss 3D CMM sub-micron inspection.",
      image: "/infrastructure/cnc-machining.jpg",
      category: "Machinery",
      badge: "±0.002mm Tolerance",
    },
    {
      title: "Engineered Mold Solutions",
      tagline: "High-Cavitation & ISBM Tooling",
      description: "Discover balanced hot runner preform molds up to 96 cavities, single-stage ISBM systems, and rugged EBM jerry can canisters.",
      image: "/product/high-cavitation-preform-mold.png",
      category: "Products",
      badge: "Up to 96 Cavities",
    },
  ],
  items: GALLERY_ITEMS,
};
