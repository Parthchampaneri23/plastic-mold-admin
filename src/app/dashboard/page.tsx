"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { AlertCircle } from "lucide-react";

import {
  HeroSectionEditor,
  AboutSectionEditor,
  CategoriesSectionEditor,
  CapabilitiesSectionEditor,
  WhyUsSectionEditor,
  FacilitiesSectionEditor,
  IndustriesSectionEditor,
  QualitySectionEditor,
  FeaturedProductsEditor,
  ClientsSectionEditor,
  InquiryCtaEditor,
} from "@/components/home";

// Site Manager Editors (Top bar, Navbar, Footer)
import {
  TopBarEditor,
  NavbarEditor,
  FooterEditor,
} from "@/components/site";

// About Us Page Editors
import {
  AboutHeroEditor,
  AboutCompanyEditor,
  VisionMissionEditor,
  CompanyStrengthEditor,
  AboutInfrastructureEditor,
  QualityCommitmentEditor,
  AboutFaqEditor,
} from "@/components/about";

// Product Page Editors (Category & Sub Category Products)
import {
  ProductCategoriesEditor,
  ProductListEditor,
} from "@/components/products";

// Manufacturing Page Editors
import {
  ManufacturingHeroEditor,
  ManufacturingOverviewEditor,
  DesignDevelopmentEditor,
  PrecisionMachiningEditor,
  ManufacturingProcessEditor,
  MachineryEquipmentEditor,
  ProductionCapacityEditor,
  QualityInspectionEditor,
  CustomSolutionsEditor,
  ManufacturingCtaEditor,
} from "@/components/manufacturing";

// Infrastructure Page Editors
import {
  InfrastructureHeroEditor,
  FacilityOverviewEditor,
  CncMachiningEditor,
  EdmMachiningEditor,
  MouldAssemblyEditor,
  QualityInspectionEditor as InfraQualityInspectionEditor,
  TestingValidationEditor,
  WarehouseLogisticsEditor,
  EngineeringDesignEditor,
  GenericInfraSectionEditor,
  InfrastructureFaqEditor,
  InfrastructureCtaEditor,
} from "@/components/infrastructure";

export default function DashboardPage() {
  const [currentTab, setCurrentTab] = useState("hero");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedToast, setSavedToast] = useState(false);
  const [data, setData] = useState<any>(null);
  const [aboutData, setAboutData] = useState<any>(null);
  const [productsData, setProductsData] = useState<any>(null);
  const [manufacturingData, setManufacturingData] = useState<any>(null);
  const [infrastructureData, setInfrastructureData] = useState<any>(null);
  const [selectedProductId, setSelectedProductId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Restore currentTab from URL hash or localStorage on initial client mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setCurrentTab(hash);
      } else {
        const storedTab = localStorage.getItem("admin_current_tab");
        if (storedTab) {
          setCurrentTab(storedTab);
        }
      }
    }
  }, []);

  // Update hash and localStorage whenever currentTab changes
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    if (typeof window !== "undefined") {
      window.location.hash = tab;
      localStorage.setItem("admin_current_tab", tab);
    }
  };

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load Home Page Data
      const res = await fetch("/api/home");
      const resJson = await res.json();
      if (resJson.success && resJson.data) {
        setData(resJson.data);
      } else {
        await fetch("/api/seed");
        const retryRes = await fetch("/api/home");
        const retryData = await retryRes.json();
        if (retryData.success && retryData.data) {
          setData(retryData.data);
        }
      }

      // Load About Page Data
      const aboutRes = await fetch("/api/about");
      const aboutJson = await aboutRes.json();
      if (aboutJson.success && aboutJson.data) {
        setAboutData(aboutJson.data);
      }

      // Load Products Page Data
      const productsRes = await fetch("/api/products");
      const productsJson = await productsRes.json();
      if (productsJson.success && productsJson.data) {
        setProductsData(productsJson.data);
        if (productsJson.data.products?.length > 0 && !selectedProductId) {
          setSelectedProductId(productsJson.data.products[0].id || productsJson.data.products[0].slug);
        }
      }

      // Load Manufacturing Page Data
      const mfgRes = await fetch("/api/manufacturing");
      const mfgJson = await mfgRes.json();
      if (mfgJson.success && mfgJson.data) {
        setManufacturingData(mfgJson.data);
      }

      // Load Infrastructure Page Data
      const infraRes = await fetch("/api/infrastructure");
      const infraJson = await infraRes.json();
      if (infraJson.success && infraJson.data) {
        setInfrastructureData(infraJson.data);
      }
    } catch (err: any) {
      setError(err?.message || "Failed to load content");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSave = async () => {
    try {
      setSaving(true);
      setError(null);

      const isAboutSection = currentTab.startsWith("about-");
      const isProductSection = currentTab.startsWith("product-");
      const isMfgSection = currentTab.startsWith("mfg-");
      const isInfraSection = currentTab.startsWith("infra-");

      if (isInfraSection) {
        // Save Infrastructure Page Content
        const res = await fetch("/api/infrastructure", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(infrastructureData),
        });
        const resJson = await res.json();
        if (resJson.success) {
          setInfrastructureData(resJson.data);
          setSavedToast(true);
          setTimeout(() => setSavedToast(false), 3000);
        } else {
          setError(resJson.error || "Failed to save Infrastructure page content.");
        }
      } else if (isMfgSection) {
        // Save Manufacturing Page Content
        const res = await fetch("/api/manufacturing", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(manufacturingData),
        });
        const resJson = await res.json();
        if (resJson.success) {
          setManufacturingData(resJson.data);
          setSavedToast(true);
          setTimeout(() => setSavedToast(false), 3000);
        } else {
          setError(resJson.error || "Failed to save Manufacturing page content.");
        }
      } else if (isProductSection) {
        // Save Products Page Content
        const res = await fetch("/api/products", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productsData),
        });
        const resJson = await res.json();
        if (resJson.success) {
          setProductsData(resJson.data);
          setSavedToast(true);
          setTimeout(() => setSavedToast(false), 3000);
        } else {
          setError(resJson.message || "Failed to save Product page content.");
        }
      } else if (isAboutSection) {
        // Save About Us Content
        const res = await fetch("/api/about", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(aboutData),
        });
        const resJson = await res.json();
        if (resJson.success) {
          setAboutData(resJson.data);
          setSavedToast(true);
          setTimeout(() => setSavedToast(false), 3000);
        } else {
          setError(resJson.message || "Failed to save About page content.");
        }
      } else {
        // Save Home Page / Site Manager Content
        const res = await fetch("/api/home", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const resJson = await res.json();
        if (resJson.success) {
          setData(resJson.data);
          setSavedToast(true);
          setTimeout(() => setSavedToast(false), 3000);
        } else {
          setError(resJson.error || "Failed to save content.");
        }
      }
    } catch (err: any) {
      setError(err?.message || "Error saving content.");
    } finally {
      setSaving(false);
    }
  };

  const getSectionTitle = () => {
    switch (currentTab) {
      // Site Manager
      case "site-topbar":
        return "Site Manager / Top Bar (Contacts & Location)";
      case "site-navbar":
        return "Site Manager / Main Navbar (Logo & Navigation)";
      case "site-footer":
        return "Site Manager / Global Footer & Socials";

      // Home Page Sections
      case "hero":
        return "1. Hero Sliders & Banners";
      case "company-intro":
        return "2. Company Intro & About";
      case "categories":
        return "3. Mold Categories";
      case "capabilities":
        return "4. Manufacturing Capabilities";
      case "why-us":
        return "5. Why Choose Us Advantages";
      case "facilities":
        return "6. Infrastructure Facilities";
      case "industries":
        return "7. Industries & Applications";
      case "quality":
        return "8. Quality Standards & Tech";
      case "featured-products":
        return "9. Featured Products";
      case "testimonials":
        return "10. Client Logos & Reviews";
      case "cta":
        return "11. Inquiry & Contact CTA";

      // About Page Sections
      case "about-hero":
        return "About Page / 1. Banner & Breadcrumb";
      case "about-company":
        return "About Page / 2. About Patel Mould (Story, Stats & Timeline)";
      case "about-vision":
        return "About Page / 3. Vision, Mission & Core Values";
      case "about-strength":
        return "About Page / 4. Company Strengths & 4 Pillars";
      case "about-infrastructure":
        return "About Page / 5. Toolroom Plant & Infrastructure";
      case "about-quality":
        return "About Page / 6. Quality Commitment 5 Stages";
      case "about-faqs":
        return "About Page / 7. Company FAQs";

      // Product Page Sections
      case "product-categories":
        return "Product Page / Category Architecture (3 Core Categories)";
      case "product-list":
        return "Product Page / Sub Category Catalog (9 Products & SEO)";

      // Manufacturing Page Sections
      case "mfg-hero":
        return "Manufacturing / 1. Hero Banner & Tag";
      case "mfg-overview":
        return "Manufacturing / 2. Overview & Facility Stats";
      case "mfg-design":
        return "Manufacturing / 3. Mold Design & DFM R&D";
      case "mfg-machining":
        return "Manufacturing / 4. Precision Machining Tabs";
      case "mfg-process":
        return "Manufacturing / 5. 9-Stage Mould Making Process";
      case "mfg-machinery":
        return "Manufacturing / 6. Machinery & Equipment List";
      case "mfg-capacity":
        return "Manufacturing / 7. Production Capacity & Scale";
      case "mfg-quality":
        return "Manufacturing / 8. Quality & Metrology Standards";
      case "mfg-solutions":
        return "Manufacturing / 9. Custom Mold Solutions";
      case "mfg-cta":
        return "Manufacturing / 10. Technical Consultation CTA";

      // Infrastructure Page Sections
      case "infra-hero":
        return "Infrastructure / 1. Hero Banner & Breadcrumb";
      case "infra-overview":
        return "Infrastructure / 2. Facility Overview & Zones";
      case "infra-cnc":
        return "Infrastructure / 3. CNC Machining Center";
      case "infra-edm":
        return "Infrastructure / 4. EDM Spark Erosion";
      case "infra-assembly":
        return "Infrastructure / 5. Mould Assembly & Fitting";
      case "infra-quality":
        return "Infrastructure / 6. Quality Metrology Lab";
      case "infra-testing":
        return "Infrastructure / 7. Testing & Validation Trials";
      case "infra-warehouse":
        return "Infrastructure / 8. Storage & Material Logistics";
      case "infra-design":
        return "Infrastructure / 9. Engineering CAD/CAM Design";
      case "infra-faqs":
        return "Infrastructure / 10. Infrastructure FAQs";
      case "infra-cta":
        return "Infrastructure / 11. Partnership CTA Banner";

      default:
        return "Dashboard Overview";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-800 flex items-center justify-center font-sans">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-3 border-[#0056b3] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm font-bold text-slate-600">Loading Patel Mould Admin CMS...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex font-sans">
      {/* Clean White Sidebar */}
      <Sidebar currentTab={currentTab} setCurrentTab={handleTabChange} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar
          onSave={handleSave}
          saving={saving}
          savedToast={savedToast}
          onRefresh={loadData}
          currentSectionTitle={getSectionTitle()}
          onSelectTab={handleTabChange}
        />

        <main className="flex-1 p-6 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* SITE MANAGER: TOP BAR */}
          {currentTab === "site-topbar" && <TopBarEditor data={data} setData={setData} />}

          {/* SITE MANAGER: NAVBAR */}
          {currentTab === "site-navbar" && <NavbarEditor data={data} setData={setData} />}

          {/* SITE MANAGER: FOOTER */}
          {currentTab === "site-footer" && <FooterEditor data={data} setData={setData} />}

          {/* SECTION 1: HERO SLIDERS & BANNERS */}
          {currentTab === "hero" && <HeroSectionEditor data={data} setData={setData} />}

          {/* SECTION 2: COMPANY INTRODUCTION */}
          {currentTab === "company-intro" && <AboutSectionEditor data={data} setData={setData} />}

          {/* SECTION 3: CORE MOLD CATEGORIES */}
          {currentTab === "categories" && <CategoriesSectionEditor data={data} setData={setData} />}

          {/* SECTION 4: CAPABILITIES */}
          {currentTab === "capabilities" && <CapabilitiesSectionEditor data={data} setData={setData} />}

          {/* SECTION 5: WHY CHOOSE US */}
          {currentTab === "why-us" && <WhyUsSectionEditor data={data} setData={setData} />}

          {/* SECTION 6: INFRASTRUCTURE / FACILITIES */}
          {currentTab === "facilities" && <FacilitiesSectionEditor data={data} setData={setData} />}

          {/* SECTION 7: INDUSTRIES & GLOBAL APPLICATIONS */}
          {currentTab === "industries" && <IndustriesSectionEditor data={data} setData={setData} />}

          {/* SECTION 8: QUALITY STANDARDS & TECHNOLOGY HIGHLIGHTS */}
          {currentTab === "quality" && <QualitySectionEditor data={data} setData={setData} />}

          {/* SECTION 9: FEATURED PRODUCTS */}
          {currentTab === "featured-products" && <FeaturedProductsEditor data={data} setData={setData} />}

          {/* SECTION 10: CLIENT LOGOS & TESTIMONIALS */}
          {currentTab === "testimonials" && <ClientsSectionEditor data={data} setData={setData} />}

          {/* SECTION 11: INQUIRY CTA */}
          {currentTab === "cta" && <InquiryCtaEditor data={data} setData={setData} />}

          {/* ABOUT PAGE EDITORS */}
          {currentTab === "about-hero" && (
            <AboutHeroEditor aboutData={aboutData} setAboutData={setAboutData} />
          )}

          {currentTab === "about-company" && (
            <AboutCompanyEditor aboutData={aboutData} setAboutData={setAboutData} />
          )}

          {currentTab === "about-vision" && (
            <VisionMissionEditor aboutData={aboutData} setAboutData={setAboutData} />
          )}

          {currentTab === "about-strength" && (
            <CompanyStrengthEditor aboutData={aboutData} setAboutData={setAboutData} />
          )}

          {currentTab === "about-infrastructure" && (
            <AboutInfrastructureEditor aboutData={aboutData} setAboutData={setAboutData} />
          )}

          {currentTab === "about-quality" && (
            <QualityCommitmentEditor aboutData={aboutData} setAboutData={setAboutData} />
          )}

          {currentTab === "about-faqs" && (
            <AboutFaqEditor aboutData={aboutData} setAboutData={setAboutData} />
          )}

          {/* PRODUCT PAGE: CATEGORY (3 CORE CATEGORIES) */}
          {currentTab === "product-categories" && productsData && (
            <ProductCategoriesEditor
              categories={productsData.categories || []}
              onChange={(cats) =>
                setProductsData({ ...productsData, categories: cats })
              }
            />
          )}

          {/* PRODUCT PAGE: SUB CATEGORY (9 PRODUCTS & SEO) */}
          {currentTab === "product-list" && productsData && (
            <ProductListEditor
              products={productsData.products || []}
              categories={productsData.categories || []}
              selectedProductId={selectedProductId}
              onSelectProduct={(id) => setSelectedProductId(id)}
              onChange={(prods) =>
                setProductsData({ ...productsData, products: prods })
              }
            />
          )}

          {/* MANUFACTURING PAGE: SECTION 1 - HERO */}
          {currentTab === "mfg-hero" && manufacturingData && (
            <ManufacturingHeroEditor
              data={manufacturingData.hero || {}}
              onChange={(hero) =>
                setManufacturingData({ ...manufacturingData, hero })
              }
            />
          )}

          {/* MANUFACTURING PAGE: SECTION 2 - OVERVIEW */}
          {currentTab === "mfg-overview" && manufacturingData && (
            <ManufacturingOverviewEditor
              data={manufacturingData.overview || {}}
              onChange={(overview) =>
                setManufacturingData({ ...manufacturingData, overview })
              }
            />
          )}

          {/* MANUFACTURING PAGE: SECTION 3 - MOLD DESIGN */}
          {currentTab === "mfg-design" && manufacturingData && (
            <DesignDevelopmentEditor
              data={manufacturingData.designDevelopment || {}}
              onChange={(designDevelopment) =>
                setManufacturingData({ ...manufacturingData, designDevelopment })
              }
            />
          )}

          {/* MANUFACTURING PAGE: SECTION 4 - PRECISION MACHINING */}
          {currentTab === "mfg-machining" && manufacturingData && (
            <PrecisionMachiningEditor
              data={manufacturingData.precisionMachining || {}}
              onChange={(precisionMachining) =>
                setManufacturingData({ ...manufacturingData, precisionMachining })
              }
            />
          )}

          {/* MANUFACTURING PAGE: SECTION 5 - PROCESS (9 STAGES) */}
          {currentTab === "mfg-process" && manufacturingData && (
            <ManufacturingProcessEditor
              data={manufacturingData.process || {}}
              onChange={(process) =>
                setManufacturingData({ ...manufacturingData, process })
              }
            />
          )}

          {/* MANUFACTURING PAGE: SECTION 6 - MACHINERY & EQUIPMENT */}
          {currentTab === "mfg-machinery" && manufacturingData && (
            <MachineryEquipmentEditor
              data={manufacturingData.machinery || {}}
              onChange={(machinery) =>
                setManufacturingData({ ...manufacturingData, machinery })
              }
            />
          )}

          {/* MANUFACTURING PAGE: SECTION 7 - PRODUCTION CAPACITY */}
          {currentTab === "mfg-capacity" && manufacturingData && (
            <ProductionCapacityEditor
              data={manufacturingData.capacity || {}}
              onChange={(capacity) =>
                setManufacturingData({ ...manufacturingData, capacity })
              }
            />
          )}

          {/* MANUFACTURING PAGE: SECTION 8 - QUALITY & METROLOGY */}
          {currentTab === "mfg-quality" && manufacturingData && (
            <QualityInspectionEditor
              data={manufacturingData.quality || {}}
              onChange={(quality) =>
                setManufacturingData({ ...manufacturingData, quality })
              }
            />
          )}

          {/* MANUFACTURING PAGE: SECTION 9 - CUSTOM SOLUTIONS */}
          {currentTab === "mfg-solutions" && manufacturingData && (
            <CustomSolutionsEditor
              data={manufacturingData.customSolutions || {}}
              onChange={(customSolutions) =>
                setManufacturingData({ ...manufacturingData, customSolutions })
              }
            />
          )}

          {/* MANUFACTURING PAGE: SECTION 10 - CTA BANNER */}
          {currentTab === "mfg-cta" && manufacturingData && (
            <ManufacturingCtaEditor
              data={manufacturingData.customSolutions || {}}
              onChange={(customSolutions) =>
                setManufacturingData({ ...manufacturingData, customSolutions })
              }
            />
          )}

          {/* ======================================================== */}
          {/* INFRASTRUCTURE PAGE EDITORS (11 SECTIONS)                */}
          {/* ======================================================== */}

          {/* INFRASTRUCTURE: SECTION 1 - HERO BANNER */}
          {currentTab === "infra-hero" && infrastructureData && (
            <InfrastructureHeroEditor
              data={infrastructureData.hero || {}}
              onChange={(hero) =>
                setInfrastructureData({ ...infrastructureData, hero })
              }
            />
          )}

          {/* INFRASTRUCTURE: SECTION 2 - FACILITY OVERVIEW */}
          {currentTab === "infra-overview" && infrastructureData && (
            <FacilityOverviewEditor
              data={infrastructureData.facilityOverview || {}}
              onChange={(facilityOverview) =>
                setInfrastructureData({ ...infrastructureData, facilityOverview })
              }
            />
          )}

          {/* INFRASTRUCTURE: SECTION 3 - CNC MACHINING */}
          {currentTab === "infra-cnc" && infrastructureData && (
            <CncMachiningEditor
              data={infrastructureData.cnc || {}}
              onChange={(cnc) =>
                setInfrastructureData({ ...infrastructureData, cnc })
              }
            />
          )}

          {/* INFRASTRUCTURE: SECTION 4 - EDM MACHINING */}
          {currentTab === "infra-edm" && infrastructureData && (
            <EdmMachiningEditor
              data={infrastructureData.edm || {}}
              onChange={(edm) =>
                setInfrastructureData({ ...infrastructureData, edm })
              }
            />
          )}

          {/* INFRASTRUCTURE: SECTION 5 - MOULD ASSEMBLY & FITTING */}
          {currentTab === "infra-assembly" && infrastructureData && (
            <MouldAssemblyEditor
              data={infrastructureData.mouldAssembly || {}}
              onChange={(mouldAssembly) =>
                setInfrastructureData({ ...infrastructureData, mouldAssembly })
              }
            />
          )}

          {/* INFRASTRUCTURE: SECTION 6 - QUALITY INSPECTION */}
          {currentTab === "infra-quality" && infrastructureData && (
            <InfraQualityInspectionEditor
              data={infrastructureData.qualityInspection || {}}
              onChange={(qualityInspection) =>
                setInfrastructureData({ ...infrastructureData, qualityInspection })
              }
            />
          )}

          {/* INFRASTRUCTURE: SECTION 7 - TESTING & VALIDATION */}
          {currentTab === "infra-testing" && infrastructureData && (
            <TestingValidationEditor
              data={infrastructureData.testingValidation || {}}
              onChange={(testingValidation) =>
                setInfrastructureData({ ...infrastructureData, testingValidation })
              }
            />
          )}

          {/* INFRASTRUCTURE: SECTION 8 - WAREHOUSE & MATERIAL HANDLING */}
          {currentTab === "infra-warehouse" && infrastructureData && (
            <WarehouseLogisticsEditor
              data={infrastructureData.warehouseLogistics || {}}
              onChange={(warehouseLogistics) =>
                setInfrastructureData({ ...infrastructureData, warehouseLogistics })
              }
            />
          )}

          {/* INFRASTRUCTURE: SECTION 9 - ENGINEERING DESIGN */}
          {currentTab === "infra-design" && infrastructureData && (
            <EngineeringDesignEditor
              data={infrastructureData.engineeringDesign || {}}
              onChange={(engineeringDesign) =>
                setInfrastructureData({ ...infrastructureData, engineeringDesign })
              }
            />
          )}

          {/* INFRASTRUCTURE: SECTION 10 - FAQS */}
          {currentTab === "infra-faqs" && infrastructureData && (
            <InfrastructureFaqEditor
              data={infrastructureData.faqs || {}}
              onChange={(faqs) =>
                setInfrastructureData({ ...infrastructureData, faqs })
              }
            />
          )}

          {/* INFRASTRUCTURE: SECTION 11 - CTA PARTNERSHIP BANNER */}
          {currentTab === "infra-cta" && infrastructureData && (
            <InfrastructureCtaEditor
              data={infrastructureData.cta || {}}
              onChange={(cta) =>
                setInfrastructureData({ ...infrastructureData, cta })
              }
            />
          )}

          {/* OVERVIEW TAB */}
          {currentTab === "overview" && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h1 className="text-2xl font-black text-slate-900">Patel Mould Control Dashboard</h1>
                <p className="text-xs text-slate-500 mt-1">
                  Select <strong className="text-[#ff6b00]">Home Page</strong>, <strong className="text-[#0056b3]">About Page</strong>, or <strong className="text-[#ff6b00]">Product Page</strong> on the sidebar to manage all dynamic content, categories, products, and SEO.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
