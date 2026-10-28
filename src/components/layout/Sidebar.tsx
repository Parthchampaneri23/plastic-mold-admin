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

  const [siteDropdownOpen, setSiteDropdownOpen] = useState<boolean>(true);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState<boolean>(!isAboutTab && !isProductTab && !isManufacturingTab);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState<boolean>(isAboutTab);
  const [productDropdownOpen, setProductDropdownOpen] = useState<boolean>(isProductTab);
  const [manufacturingDropdownOpen, setManufacturingDropdownOpen] = useState<boolean>(isManufacturingTab);

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
    } else if (currentTab !== "overview") {
      setHomeDropdownOpen(true);
    }
  }, [currentTab]);

  const handleLogout = async () => {
    try {
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
