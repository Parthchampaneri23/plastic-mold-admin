export interface FAQItem {
  question: string;
  answer: string;
}

export const PRODUCT_FAQS: Record<string, FAQItem[]> = {
  'pet-preform-mold': [
    {
      question: "What cavitation configurations are available for Patel Mould PET preform moulds?",
      answer: "We manufacture PET preform moulds ranging from 8-cavity pilot and specialized configurations up to 96-cavity ultra-high-output production systems, featuring balanced hot runner manifolds with individual pneumatic or hydraulic valve gates for zero gate vestige."
    },
    {
      question: "Which tool steel grades do you use for cores and cavities?",
      answer: "All core, cavity, and neck insert stacks are machined from vacuum heat-treated Swedish Uddeholm Stavax ESR or Assab 1.2083 stainless steel hardened to 50–52 HRC, delivering superior corrosion resistance against corrosive PET off-gassing and guaranteeing 5M+ shot lifespan."
    },
    {
      question: "How does your conformal cooling technology reduce PET cycle times?",
      answer: "Our conformal cooling circuits follow the preform geometry within sub-millimeter proximity. This ensures rapid, uniform thermal extraction around the preform thread, body, and gate, reducing total cooling cycle time by 15% to 22% while eliminating part warping."
    },
    {
      question: "Can your preform moulds run on my existing injection molding machine brand?",
      answer: "Yes. Our moulds are custom-engineered to interface seamlessly with global and domestic injection molding presses including Husky, Netstal, KraussMaffei, Haitian, Ferromatik Milacron, and Windsor with standardized clamping and manifold connections."
    },
    {
      question: "What dimensional tolerances are verified during pre-dispatch CMM inspection?",
      answer: "Every mould stack undergoes 100% 3D coordinate inspection in our Zeiss CMM metrology laboratory. We maintain wall thickness concentricity within ±0.005mm and neck finish thread geometry to within ±0.002mm of approved CAD drawings."
    }
  ],
  'pet-jar-mold': [
    {
      question: "What neck diameters can you manufacture for wide-mouth PET jars?",
      answer: "We engineer wide-mouth PET jar moulds across neck diameters from 45mm to 120mm+ for confectionery, spice, pickle, ghee, peanut butter, and bulk powder containers, with custom thread pitches and induction-seal foil land profiles."
    },
    {
      question: "How do you achieve uniform base thickness on wide-mouth jars?",
      answer: "We employ advanced Moldflow finite element simulation to optimize preform stretch ratios, gate vestige placement, and blowing pressure transitions, ensuring even resin distribution and high top-load crush strength without base sink marks."
    },
    {
      question: "Are interchangeable neck inserts available to change thread styles?",
      answer: "Yes, our modular bolster design allows rapid changeover of neck split inserts without removing the entire mould base from the machine, saving substantial downtime when switching between continuous thread and lug neck profiles."
    },
    {
      question: "What surface polish standard is delivered inside jar cavities?",
      answer: "All jar cavity stacks are diamond-polished by senior master bench toolmakers up to SPI-A1 optical mirror grade, ensuring high-clarity transparency and easy part ejection without drag marks."
    },
    {
      question: "What is the typical production lead time for a custom jar mould?",
      answer: "Lead time typically ranges from 4 to 6 weeks from 3D CAD approval and DFM sign-off, inclusive of complete CNC/EDM machining, mold assembly, bluing verification, and comprehensive T0/T1 factory trials."
    }
  ],
  'high-cavitation-preform-mold': [
    {
      question: "How is melt balance maintained across 48 to 96 cavities?",
      answer: "Our hot runner manifolds feature naturally balanced runner channels with identical flow lengths and diameters to every nozzle tip, ensuring simultaneous cavity fill, uniform preform weight, and minimal cavity-to-cavity weight variance (CV < 0.2%)."
    },
    {
      question: "What valve gate actuation mechanism do you implement for fast cycling?",
      answer: "We utilize synchronous pneumatic or hydraulic valve pin actuation bars with micro-adjustable pin stroke calibration, delivering clean gate cutoff without stringing or drool at cycle times as fast as 7.5 to 10 seconds."
    },
    {
      question: "How do you protect high-cavitation moulds during continuous 24/7 production?",
      answer: "Moulds feature interlocked taper alignment locks, Ampco bronze wear plates, guided ejection return sensors, and integrated multi-zone thermocouple sensors to protect against platen misalignment and thermal shocks."
    },
    {
      question: "What spare parts kit is provided with high-cavitation shipments?",
      answer: "Each mould includes an export maintenance pack with spare hot runner nozzle tips, heater bands, thermocouples, cavity O-rings, valve pins, and neck split springs to support zero-downtime preventative maintenance."
    },
    {
      question: "Is FAT (Factory Acceptance Test) video and sample verification included?",
      answer: "Yes, full FAT trial verification on our in-house test machines is recorded and shared alongside Zeiss 3D CMM dimensional reports and first-article preform samples before container dispatch."
    }
  ],
  'isbm-bottle-mold': [
    {
      question: "Which single-stage ISBM machine models do your moulds support?",
      answer: "Our single-stage ISBM bottle moulds are 100% compatible with Nissei ASB (such as ASB-70DPH, ASB-12M, ASB-150DP) and Aoki Technical machine platforms with precision rotary table index clamping."
    },
    {
      question: "How are the injection, conditioning, blow, and ejection stations synchronized?",
      answer: "Every ISBM mould set includes the complete 4-station or 3-station tooling architecture: injection cavity/core stacks, temperature conditioning station blocks, blow cavity molds with bottom push-up plugs, and automatic ejection stripper lip sets."
    },
    {
      question: "Can ISBM moulds produce oval or asymmetric bottle shapes?",
      answer: "Yes, we specialize in asymmetric and oval bottle designs for personal care and pharmaceutical liquids, incorporating custom differential stretch rod geometry and specialized cavity cooling to balance wall thickness across non-circular profiles."
    },
    {
      question: "What prevents flash along the bottle parting line in ISBM tooling?",
      answer: "We use sub-micron CNC jig grinding and optical bench bluing to achieve >90% precision contact along split parting lines, ensuring flash-free bottle seams and flawless cosmetic aesthetics."
    },
    {
      question: "What resin types can be processed in your ISBM moulds?",
      answer: "While primarily engineered for virgin and rPET (recycled PET), our tooling also processes Polypropylene (PP), PETG, and specialized barrier polymers with tailored cavity shrinkage compensation."
    }
  ],
  'isbm-container-mold': [
    {
      question: "What volume range can be manufactured with ISBM container moulds?",
      answer: "We engineer ISBM container moulds for packaging capacities ranging from miniature 10ml dropper vials and luxury cosmetic jars up to large 2.5-liter handleware containers."
    },
    {
      question: "How do you prevent vacuum side-wall collapse on hot-fill or syrup containers?",
      answer: "We incorporate engineered structural vacuum ribs and optimized hoop-strength profiles directly into the 3D cavity design, validated through Moldflow rheological simulation prior to tool steel cutting."
    },
    {
      question: "Can you incorporate custom brand logos and embossing into the mould?",
      answer: "Yes, our CNC micro-milling and mirror EDM spark erosion capabilities allow crisp brand logos, volumetric fill marks, and tactile grip patterns directly on cavity faces with micron sharpness."
    },
    {
      question: "What cooling medium and flow rate are recommended for optimal cycle times?",
      answer: "Chilled industrial water at 8°C–12°C with turbulent flow Reynolds numbers (>4000) is routed through conformal core/cavity cooling lines to guarantee ultra-fast stabilization and crystal-clear clarity."
    },
    {
      question: "Do you supply complete lip cavities and transfer plates with the mould set?",
      answer: "Yes, all our ISBM container moulds ship as turnkey tooling packages including lip cavity split blocks, core pins, stripper rings, transfer plates, and blow bottom push-up assemblies."
    }
  ],
  'multi-cavity-isbm-mold': [
    {
      question: "How do you achieve cavity-to-cavity weight uniformity across 8 to 32 cavities in ISBM?",
      answer: "We engineer thermally balanced hot runner manifold layouts with individually PID-controlled nozzle heating zones, ensuring identical melt temperature and rheological viscosity to each preform cavity (weight variance CV < 0.25%)."
    },
    {
      question: "What cycle time gains can be expected from high-density multi-cavity ISBM moulds?",
      answer: "With optimized high-velocity water circuits and copper alloy insert cooling in conditioning and blowing stations, multi-cavity moulds achieve fast cycle times between 8.5 and 14 seconds depending on bottle size and grammage."
    },
    {
      question: "Are interchangeable cavity and lip inserts supported for flexible bottle sizes?",
      answer: "Yes, our modular bolster plate design allows rapid insert changeover without removing the full mould base, enabling quick switches between different bottle heights, volumes, or neck finishes."
    },
    {
      question: "Which machine platforms support your high-cavitation ISBM mould packages?",
      answer: "Our tooling is engineered to interface seamlessly with Nissei ASB-70DPH, ASB-150DP, Aoki 250/350 series, and modern servo-electric single-stage ISBM platforms."
    },
    {
      question: "What quality assurance records accompany multi-cavity ISBM mould shipments?",
      answer: "Every mould package includes a comprehensive Zeiss CMM 3D dimensional report, full bluing contact check inspection, FAT trial video footage, and preform/bottle samples with spectrophotometer clarity verification."
    }
  ],
  'ebm-bottle-mold': [
    {
      question: "Which polymers can be molded using Patel Mould EBM bottle moulds?",
      answer: "Our extrusion blow moulds are custom-engineered for High-Density Polyethylene (HDPE), Polypropylene (PP), Low-Density Polyethylene (LDPE), and Post-Consumer Recycled (PCR) resins with shrinkage-compensated cavity geometry."
    },
    {
      question: "What pinch-off technology is implemented for leak-proof bottle bottoms?",
      answer: "We employ hardened beryllium copper (Ampco 25) or premium tool steel pinch-off blades with dual-angle relief edges. This produces rapid heat dissipation, immaculate weld lines, and easy, flash-free automated trimming."
    },
    {
      question: "How do your cooling channels prevent bottle warping on high-speed EBM lines?",
      answer: "We design multi-circuit baffled cooling channels positioned uniformly beneath the cavity surface, providing fast, balanced thermal extraction that prevents post-ejection ovality or bottle base distortion."
    },
    {
      question: "Can these moulds incorporate calibrated neck cutter rings for induction seal finishes?",
      answer: "Yes, all EBM bottle moulds feature replaceable hardened D2/H13 neck cutter sleeves and matching water-cooled blow pins to yield mirror-flat neck lands ideal for induction foil sealing."
    },
    {
      question: "What is the typical lifespan and maintenance cycle of your EBM bottle tooling?",
      answer: "Engineered with aircraft-grade aluminum alloy blocks or forged P20/1.2316 steel with hardened guide pins and wear strips, our moulds deliver over 3 million production shots with standard preventative maintenance."
    }
  ],
  'ebm-container-mold': [
    {
      question: "Which blow moulding machines are compatible with your EBM moulds?",
      answer: "Our Extrusion Blow Moulding (EBM) tooling works on single-station and shuttle-type continuous extrusion presses including Bekum, Uniloy, Techne, Jagmohan, Rana, and Fong Kee machines."
    },
    {
      question: "What pinch-off technology is used to ensure high weld strength on handles and bases?",
      answer: "We utilize certified Beryllium Copper (Ampco 25) inserts along the bottom pinch-off and container handle zones. Beryllium copper rapidly dissipates parison heat, creating a dense, flashless weld with exceptional drop-impact resistance."
    },
    {
      question: "Can your EBM moulds accommodate calibrated neck blowing pins?",
      answer: "Yes, we manufacture high-precision hardened neck cutter rings and matched water-cooled calibration blow pins to produce smooth, burr-free neck faces ideal for induction foil sealing."
    },
    {
      question: "What container sizes and cavitation options are supported in EBM?",
      answer: "We build single-cavity moulds for heavy-duty 5L to 25L chemical jerry cans, as well as multi-cavity (up to 8-cavity) moulds with automated in-mould flash deflashing for high-volume FMCG bottles."
    },
    {
      question: "What tool steel grades do you recommend for abrasive HDPE and PP resins?",
      answer: "We recommend pre-hardened DIN 1.2316 or P20+Ni tool steels, combined with hard chrome plating on cavity surfaces for high wear resistance against abrasive pigments and calcium carbonate additives."
    }
  ],
  'ebm-industrial-packaging-mold': [
    {
      question: "What container capacities do your industrial EBM packaging moulds support?",
      answer: "We engineer heavy-duty industrial blow moulds for 5-liter, 10-liter, 20-liter, and up to 50-liter Jerry cans, open-top drums, and chemical carboys with integrated handleware and stacking interlocks."
    },
    {
      question: "How do your moulds ensure containers pass stringent UN drop tests?",
      answer: "Our tooling incorporates finite element wall-thickness optimization, reinforced corner radiuses, and high-impact beryllium copper handle/base pinch inserts to achieve dense weld strength capable of withstanding 2.0-meter UN drop tests."
    },
    {
      question: "Can you accommodate view-stripe parison lines and multi-layer parisons in the mould?",
      answer: "Yes, our cavity designs support multi-layer parisons (including barrier EVOH layers) and translucent visual level-indicator stripes with dedicated parison pinch guides and zero flash distortion."
    },
    {
      question: "What mold base materials are used for large-format industrial tooling?",
      answer: "We use high-tensile forged steel bolster plates and pre-hardened alloy blocks with heavy-duty guide pillars and bronze wear plates to withstand the high clamp tonnages (up to 50 tons) of accumulator head machines."
    },
    {
      question: "Are in-mould deflashing mechanisms available for handle holes and neck flash?",
      answer: "Yes, we provide fully automated in-mould hydraulic/pneumatic punch deflashing assemblies that remove handle slug flash and bottom tail flash cleanly before container ejection."
    }
  ]
};
