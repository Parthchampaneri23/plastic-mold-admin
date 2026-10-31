"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  LogOut,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Factory,
  Globe,
} from "lucide-react";

interface SidebarProps {
  currentTab?: string;
  setCurrentTab?: (tab: string) => void;
}

export function Sidebar({ currentTab = "overview", setCurrentTab }: SidebarProps) {
  const router = useRouter();
  const isAboutTab = currentTab.startsWith("about-");
  const isSiteTab = currentTab.startsWith("site-");
  const isProductTab = currentTab.startsWith("product-");
  const isManufacturingTab = currentTab.startsWith("mfg-");
  const isInfrastructureTab = currentTab.startsWith("infra-");
  const isIndustriesTab = currentTab.startsWith("industry-");
  const isQualityTab = currentTab.startsWith("quality-");
  const isGalleryTab = currentTab.startsWith("gallery-");
  const isBlogsTab = currentTab.startsWith("blogs-");
  const isContactTab = currentTab.startsWith("contact-");
  const isLegalTab = currentTab.startsWith("legal-");

  const [siteDropdownOpen, setSiteDropdownOpen] = useState<boolean>(true);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState<boolean>(!isAboutTab && !isProductTab && !isManufacturingTab && !isInfrastructureTab && !isIndustriesTab && !isQualityTab && !isGalleryTab && !isBlogsTab && !isContactTab && !isLegalTab);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState<boolean>(isAboutTab);
  const [productDropdownOpen, setProductDropdownOpen] = useState<boolean>(isProductTab);
  const [manufacturingDropdownOpen, setManufacturingDropdownOpen] = useState<boolean>(isManufacturingTab);
  const [infraDropdownOpen, setInfraDropdownOpen] = useState<boolean>(isInfrastructureTab);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState<boolean>(isIndustriesTab);
  const [qualityDropdownOpen, setQualityDropdownOpen] = useState<boolean>(isQualityTab);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState<boolean>(isGalleryTab);
  const [blogsDropdownOpen, setBlogsDropdownOpen] = useState<boolean>(isBlogsTab);
  const [contactDropdownOpen, setContactDropdownOpen] = useState<boolean>(isContactTab);
  const [legalDropdownOpen, setLegalDropdownOpen] = useState<boolean>(isLegalTab);

  // Auto-expand accordion if tab changes to that section
  React.useEffect(() => {
    if (currentTab.startsWith("about-")) {
      setAboutDropdownOpen(true);
    } else if (currentTab.startsWith("site-")) {
      setSiteDropdownOpen(true);
    } else if (currentTab.startsWith("product-")) {
      setProductDropdownOpen(true);
    } else if (currentTab.startsWith("mfg-")) {
      setManufacturingDropdownOpen(true);
    } else if (currentTab.startsWith("infra-")) {
      setInfraDropdownOpen(true);
    } else if (currentTab.startsWith("industry-")) {
      setIndustriesDropdownOpen(true);
    } else if (currentTab.startsWith("quality-")) {
      setQualityDropdownOpen(true);
    } else if (currentTab.startsWith("gallery-")) {
      setGalleryDropdownOpen(true);
    } else if (currentTab.startsWith("blogs-")) {
      setBlogsDropdownOpen(true);
    } else if (currentTab.startsWith("contact-")) {
      setContactDropdownOpen(true);
    } else if (currentTab.startsWith("legal-")) {
      setLegalDropdownOpen(true);
    } else if (currentTab !== "overview") {
      setHomeDropdownOpen(true);
    }
  }, [currentTab]);

  const handleLogout = async () => {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem("admin_current_tab");
      }
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
      router.refresh();
    } catch {
      router.push("/login");
    }
  };

  // Clean, pure text list of home page sections
  const homeSections = [
    { id: "hero", label: "1. Sliders & Banners" },
    { id: "company-intro", label: "2. About Us Section" },
    { id: "categories", label: "3. Product Categories" },
    { id: "capabilities", label: "4. Manufacturing Capabilities" },
    { id: "why-us", label: "5. Why Choose Us" },
    { id: "facilities", label: "6. Infrastructure / Facilities" },
    { id: "industries", label: "7. Industries & Global Reach" },
    { id: "quality", label: "8. Quality & Technology Highlights" },
    { id: "featured-products", label: "9. Featured Products" },
    { id: "testimonials", label: "10. Clients & Testimonials" },
    { id: "cta", label: "11. Inquiry & Contact CTA" },
  ];

  // Clean list of About Us page sections
  const aboutSections = [
    { id: "about-hero", label: "1. Banner & Breadcrumb" },
    { id: "about-company", label: "2. About Patel Mould (Story & Timeline)" },
    { id: "about-vision", label: "3. Vision, Mission & Values" },
    { id: "about-strength", label: "4. Company Strengths & 4 Pillars" },
    { id: "about-infrastructure", label: "5. Toolroom Infrastructure" },
    { id: "about-quality", label: "6. Quality Commitment Journey" },
    { id: "about-faqs", label: "7. About Page FAQs" },
  ];

  // Clean list of Manufacturing page sections
  const manufacturingSections = [
    { id: "mfg-hero", label: "1. Hero Banner & Tag" },
    { id: "mfg-overview", label: "2. Overview & Facility Stats" },
    { id: "mfg-design", label: "3. Mold Design & DFM R&D" },
    { id: "mfg-machining", label: "4. Precision Machining Tabs" },
    { id: "mfg-process", label: "5. 9-Stage Mould Process" },
    { id: "mfg-machinery", label: "6. Machinery & Equipment List" },
    { id: "mfg-capacity", label: "7. Production Capacity & Scale" },
    { id: "mfg-quality", label: "8. Quality & Metrology Standards" },
    { id: "mfg-solutions", label: "9. Custom Mold Solutions" },
    { id: "mfg-cta", label: "10. Technical Consultation CTA" },
  ];

  // Clean list of Infrastructure page sections
  const infrastructureSections = [
    { id: "infra-hero", label: "1. Hero Banner & Breadcrumb" },
    { id: "infra-overview", label: "2. Facility Overview & Zones" },
    { id: "infra-cnc", label: "3. CNC Machining Center" },
    { id: "infra-edm", label: "4. EDM Spark Erosion" },
    { id: "infra-assembly", label: "5. Mould Assembly & Fitting" },
    { id: "infra-quality", label: "6. Quality Metrology Lab" },
    { id: "infra-testing", label: "7. Testing & Validation Trials" },
    { id: "infra-warehouse", label: "8. Storage & Material Logistics" },
    { id: "infra-design", label: "9. Engineering CAD/CAM Design" },
    { id: "infra-faqs", label: "10. Infrastructure FAQs" },
    { id: "infra-cta", label: "11. Partnership CTA Banner" },
  ];

  // Clean list of Industries page sections
  const industriesSections = [
    { id: "industry-hero", label: "1. Banner & Grid Intro" },
    { id: "industry-list", label: "2. Industry Sectors (8)" },
  ];

  // Clean list of Quality & Testing page sections
  const qualitySections = [
    { id: "quality-hero", label: "1. Banner & Overview (4 Pillars)" },
    { id: "quality-policy", label: "2. Quality Policy & Commitments" },
    { id: "quality-process", label: "3. 5-Stage QC Process Timeline" },
    { id: "quality-raw-material", label: "4. Raw Material Verification" },
    { id: "quality-in-process", label: "5. In-Process Dashboard" },
    { id: "quality-final", label: "6. Pre-Dispatch Final Checklist" },
    { id: "quality-testing", label: "7. Mould Testing Journey (3 Phases)" },
    { id: "quality-equipment", label: "8. Measurement Instruments" },
    { id: "quality-standards", label: "9. Standards & Certifications" },
  ];

  // Clean list of Gallery page sections
  const gallerySections = [
    { id: "gallery-hero", label: "1. Banner & Portfolio Intro" },
    { id: "gallery-featured", label: "2. Featured Collections (3 Cards)" },
    { id: "gallery-items", label: "3. Gallery Items & Media Library" },
  ];

  // Clean list of Blogs page sections
  const blogsSections = [
    { id: "blogs-hero", label: "1. Banner & Knowledge Hub Intro" },
    { id: "blogs-categories", label: "2. Filter Categories Pills" },
    { id: "blogs-posts", label: "3. Blog Articles & Technical Editor" },
  ];

  // Clean list of Contact Us page sections
  const contactSections = [
    { id: "contact-hero", label: "1. Banner & Breadcrumbs" },
    { id: "contact-intro", label: "2. Consultation Intro & Badges" },
    { id: "contact-inquiry", label: "3. Request a Quote Form & Header" },
    { id: "contact-direct", label: "4. Direct Contact Form & Google Map" },
  ];

  // Clean list of Legal Pages sections
  const legalSections = [
    { id: "legal-privacy", label: "1. Privacy Policy Page" },
    { id: "legal-terms", label: "2. Terms & Conditions Page" },
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col shrink-0 h-screen sticky top-0 select-none shadow-xs text-slate-800">
      {/* Brand Header */}
      <div className="h-18 px-5 border-b border-slate-200 bg-white flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shadow-xs overflow-hidden shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/PMlogo.png"
              alt="Patel Mould Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="font-extrabold text-sm tracking-tight text-slate-900 block leading-tight">
              PATEL MOULD
            </span>
            <span className="text-[10px] font-bold text-[#ff6b00] tracking-wider uppercase">
              Admin CMS Portal
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-4 scrollbar-thin">
        {/* Dashboard Overview */}
        <button
          onClick={() => setCurrentTab && setCurrentTab("overview")}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            currentTab === "overview"
              ? "bg-[#0056b3] text-white shadow-sm shadow-[#0056b3]/25"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <LayoutDashboard className={`w-4 h-4 ${currentTab === "overview" ? "text-white" : "text-slate-500"}`} />
            <span>Dashboard Overview</span>
          </div>
          {currentTab === "overview" && <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />}
        </button>

        {/* WEBSITE PAGES GROUP */}
        <div>
          <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Website Pages
          </div>

          <div className="space-y-3">
            {/* 1. SITE MANAGER ACCORDION (TOP BAR, NAVBAR, FOOTER) */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden shadow-xs">
              <button
                onClick={() => setSiteDropdownOpen(!siteDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer bg-white hover:bg-slate-50 border-b border-slate-200"
              >
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  Site Manager
                </span>

                <div className="text-slate-400">
                  {siteDropdownOpen ? (
                    <ChevronDown className="w-4 h-4 text-[#ff6b00]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              {siteDropdownOpen && (
                <div className="p-1.5 space-y-1 bg-white">
                  <button
                    onClick={() => setCurrentTab && setCurrentTab("site-brand")}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                      currentTab === "site-brand"
                        ? "bg-[#0056b3] text-white shadow-xs font-bold"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                    }`}
                  >
                    <span className="text-xs truncate">Logo & Favicon Manager</span>
                  </button>

                  <button
                    onClick={() => setCurrentTab && setCurrentTab("site-topbar")}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                      currentTab === "site-topbar"
                        ? "bg-[#0056b3] text-white shadow-xs font-bold"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                    }`}
                  >
                    <span className="text-xs truncate">Top Bar (Contacts & Map)</span>
                  </button>

                  <button
                    onClick={() => setCurrentTab && setCurrentTab("site-navbar")}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                      currentTab === "site-navbar"
                        ? "bg-[#0056b3] text-white shadow-xs font-bold"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                    }`}
                  >
                    <span className="text-xs truncate">Main Navbar (Logo & Links)</span>
                  </button>

                  <button
                    onClick={() => setCurrentTab && setCurrentTab("site-footer")}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                      currentTab === "site-footer"
                        ? "bg-[#0056b3] text-white shadow-xs font-bold"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                    }`}
                  >
                    <span className="text-xs truncate">Global Footer</span>
                  </button>
                </div>
              )}
            </div>

            {/* 2. HOME PAGE WITH DROPDOWN ARROW */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden shadow-xs">
              <button
                onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer bg-white hover:bg-slate-50 border-b border-slate-200"
              >
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  Home Page
                </span>

                {/* Arrow Indicator */}
                <div className="text-slate-400">
                  {homeDropdownOpen ? (
                    <ChevronDown className="w-4 h-4 text-[#ff6b00]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              {/* SECTIONS LIST INSIDE DROPDOWN - Pure clean text rows */}
              {homeDropdownOpen && (
                <div className="p-1.5 space-y-1 bg-white">
                  {homeSections.map((sec) => {
                    const isActive = currentTab === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setCurrentTab && setCurrentTab(sec.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#0056b3] text-white shadow-xs font-bold"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                        }`}
                      >
                        <span className="text-xs truncate">
                          {sec.label}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. ABOUT US PAGE WITH DROPDOWN ARROW */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden shadow-xs">
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer bg-white hover:bg-slate-50 border-b border-slate-200"
              >
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  About Page
                </span>

                {/* Arrow Indicator */}
                <div className="text-slate-400">
                  {aboutDropdownOpen ? (
                    <ChevronDown className="w-4 h-4 text-[#ff6b00]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              {/* SECTIONS LIST INSIDE DROPDOWN */}
              {aboutDropdownOpen && (
                <div className="p-1.5 space-y-1 bg-white">
                  {aboutSections.map((sec) => {
                    const isActive = currentTab === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setCurrentTab && setCurrentTab(sec.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#0056b3] text-white shadow-xs font-bold"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                        }`}
                      >
                        <span className="text-xs truncate">
                          {sec.label}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 4. PRODUCT PAGE WITH DROPDOWN (CATEGORY & SUB CATEGORY) */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden shadow-xs">
              <button
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer bg-white hover:bg-slate-50 border-b border-slate-200"
              >
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  Product Page
                </span>

                <div className="text-slate-400">
                  {productDropdownOpen ? (
                    <ChevronDown className="w-4 h-4 text-[#ff6b00]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              {productDropdownOpen && (
                <div className="p-1.5 space-y-1 bg-white">
                  {/* Category Link */}
                  <button
                    onClick={() => setCurrentTab && setCurrentTab("product-categories")}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                      currentTab === "product-categories"
                        ? "bg-[#0056b3] text-white shadow-xs font-bold"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                    }`}
                  >
                    <span className="text-xs">Category</span>
                    {currentTab === "product-categories" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
                    )}
                  </button>

                  {/* Sub Category / Products Link */}
                  <button
                    onClick={() => setCurrentTab && setCurrentTab("product-list")}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                      currentTab === "product-list"
                        ? "bg-[#0056b3] text-white shadow-xs font-bold"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                    }`}
                  >
                    <span className="text-xs">Sub Category</span>
                    {currentTab === "product-list" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* 5. MANUFACTURING PAGE WITH DROPDOWN (ALL 9 SECTIONS) */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden shadow-xs">
              <button
                onClick={() => setManufacturingDropdownOpen(!manufacturingDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer bg-white hover:bg-slate-50 border-b border-slate-200"
              >
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  Manufacturing Page
                </span>

                <div className="text-slate-400">
                  {manufacturingDropdownOpen ? (
                    <ChevronDown className="w-4 h-4 text-[#ff6b00]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              {/* SECTIONS LIST INSIDE DROPDOWN - Pure clean text rows */}
              {manufacturingDropdownOpen && (
                <div className="p-1.5 space-y-1 bg-white">
                  {manufacturingSections.map((sec) => {
                    const isActive = currentTab === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setCurrentTab && setCurrentTab(sec.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#0056b3] text-white shadow-xs font-bold"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                        }`}
                      >
                        <span className="text-xs truncate">{sec.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 6. INFRASTRUCTURE PAGE WITH DROPDOWN (ALL 11 SECTIONS) */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden shadow-xs">
              <button
                onClick={() => setInfraDropdownOpen(!infraDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer bg-white hover:bg-slate-50 border-b border-slate-200"
              >
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  Infrastructure Page
                </span>

                <div className="text-slate-400">
                  {infraDropdownOpen ? (
                    <ChevronDown className="w-4 h-4 text-[#ff6b00]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              {/* SECTIONS LIST INSIDE DROPDOWN - Pure clean text rows */}
              {infraDropdownOpen && (
                <div className="p-1.5 space-y-1 bg-white">
                  {infrastructureSections.map((sec) => {
                    const isActive = currentTab === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setCurrentTab && setCurrentTab(sec.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#0056b3] text-white shadow-xs font-bold"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                        }`}
                      >
                        <span className="text-xs truncate">{sec.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 7. INDUSTRIES PAGE WITH DROPDOWN (HERO & SECTORS) */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden shadow-xs">
              <button
                onClick={() => setIndustriesDropdownOpen(!industriesDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer bg-white hover:bg-slate-50 border-b border-slate-200"
              >
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  Industries Page
                </span>

                <div className="text-slate-400">
                  {industriesDropdownOpen ? (
                    <ChevronDown className="w-4 h-4 text-[#ff6b00]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              {/* SECTIONS LIST INSIDE DROPDOWN */}
              {industriesDropdownOpen && (
                <div className="p-1.5 space-y-1 bg-white">
                  {industriesSections.map((sec) => {
                    const isActive = currentTab === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setCurrentTab && setCurrentTab(sec.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#0056b3] text-white shadow-xs font-bold"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                        }`}
                      >
                        <span className="text-xs truncate">{sec.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 8. QUALITY & TESTING PAGE WITH DROPDOWN (9 SECTIONS) */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden shadow-xs">
              <button
                onClick={() => setQualityDropdownOpen(!qualityDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer bg-white hover:bg-slate-50 border-b border-slate-200"
              >
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  Quality &amp; Testing Page
                </span>

                <div className="text-slate-400">
                  {qualityDropdownOpen ? (
                    <ChevronDown className="w-4 h-4 text-[#ff6b00]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              {/* SECTIONS LIST INSIDE DROPDOWN */}
              {qualityDropdownOpen && (
                <div className="p-1.5 space-y-1 bg-white">
                  {qualitySections.map((sec) => {
                    const isActive = currentTab === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setCurrentTab && setCurrentTab(sec.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#0056b3] text-white shadow-xs font-bold"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                        }`}
                      >
                        <span className="text-xs truncate">{sec.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 9. GALLERY PAGE WITH DROPDOWN (3 SECTIONS) */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden shadow-xs">
              <button
                onClick={() => setGalleryDropdownOpen(!galleryDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer bg-white hover:bg-slate-50 border-b border-slate-200"
              >
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  Gallery Page
                </span>

                <div className="text-slate-400">
                  {galleryDropdownOpen ? (
                    <ChevronDown className="w-4 h-4 text-[#ff6b00]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              {/* SECTIONS LIST INSIDE DROPDOWN */}
              {galleryDropdownOpen && (
                <div className="p-1.5 space-y-1 bg-white">
                  {gallerySections.map((sec) => {
                    const isActive = currentTab === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setCurrentTab && setCurrentTab(sec.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#0056b3] text-white shadow-xs font-bold"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                        }`}
                      >
                        <span className="text-xs truncate">{sec.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 10. BLOGS PAGE WITH DROPDOWN (3 SECTIONS) */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden shadow-xs">
              <button
                onClick={() => setBlogsDropdownOpen(!blogsDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer bg-white hover:bg-slate-50 border-b border-slate-200"
              >
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  Blogs Page
                </span>

                <div className="text-slate-400">
                  {blogsDropdownOpen ? (
                    <ChevronDown className="w-4 h-4 text-[#ff6b00]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              {/* SECTIONS LIST INSIDE DROPDOWN */}
              {blogsDropdownOpen && (
                <div className="p-1.5 space-y-1 bg-white">
                  {blogsSections.map((sec) => {
                    const isActive = currentTab === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setCurrentTab && setCurrentTab(sec.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#0056b3] text-white shadow-xs font-bold"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                        }`}
                      >
                        <span className="text-xs truncate">{sec.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 11. CONTACT US PAGE WITH DROPDOWN (4 SECTIONS) */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden shadow-xs">
              <button
                onClick={() => setContactDropdownOpen(!contactDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer bg-white hover:bg-slate-50 border-b border-slate-200"
              >
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  Contact Us Page
                </span>

                <div className="text-slate-400">
                  {contactDropdownOpen ? (
                    <ChevronDown className="w-4 h-4 text-[#ff6b00]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              {/* SECTIONS LIST INSIDE DROPDOWN */}
              {contactDropdownOpen && (
                <div className="p-1.5 space-y-1 bg-white">
                  {contactSections.map((sec) => {
                    const isActive = currentTab === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setCurrentTab && setCurrentTab(sec.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#0056b3] text-white shadow-xs font-bold"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                        }`}
                      >
                        <span className="text-xs truncate">{sec.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 12. LEGAL PAGES WITH DROPDOWN (PRIVACY POLICY & TERMS) */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden shadow-xs">
              <button
                onClick={() => setLegalDropdownOpen(!legalDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer bg-white hover:bg-slate-50 border-b border-slate-200"
              >
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  Legal Pages
                </span>

                <div className="text-slate-400">
                  {legalDropdownOpen ? (
                    <ChevronDown className="w-4 h-4 text-[#ff6b00]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              {/* SECTIONS LIST INSIDE LEGAL DROPDOWN */}
              {legalDropdownOpen && (
                <div className="p-1.5 space-y-1 bg-white">
                  {legalSections.map((sec) => {
                    const isActive = currentTab === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setCurrentTab && setCurrentTab(sec.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#0056b3] text-white shadow-xs font-bold"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
                        }`}
                      >
                        <span className="text-xs truncate">{sec.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* User / Sign Out Footer */}
      <div className="p-3 border-t border-slate-200 bg-slate-50/80">
        <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 p-0.5 flex items-center justify-center shrink-0 shadow-xs overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/PMlogo.png"
                alt="PM"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-slate-900 truncate">Patel Mould Admin</p>
              <p className="text-[10px] text-slate-500 truncate">admin@plasticmold.com</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            title="Sign out"
            className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
