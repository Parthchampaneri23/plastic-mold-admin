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

export default function DashboardPage() {
  const [currentTab, setCurrentTab] = useState("hero");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedToast, setSavedToast] = useState(false);
  const [data, setData] = useState<any>(null);
  const [aboutData, setAboutData] = useState<any>(null);
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

      if (isAboutSection) {
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

          {/* OVERVIEW TAB */}
          {currentTab === "overview" && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h1 className="text-2xl font-black text-slate-900">Patel Mould Control Dashboard</h1>
                <p className="text-xs text-slate-500 mt-1">
                  Select <strong className="text-[#ff6b00]">Home Page</strong> on the sidebar to expand its dropdown and edit any section.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
