"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { Layers } from "lucide-react";
import { IIndustriesHero, IIndustriesGridSection } from "@/models/IndustryPageContent";

interface IndustriesHeroEditorProps {
  hero: IIndustriesHero;
  gridSection: IIndustriesGridSection;
  onHeroChange: (hero: IIndustriesHero) => void;
  onGridChange: (grid: IIndustriesGridSection) => void;
}

export function IndustriesHeroEditor({
  hero,
  gridSection,
  onHeroChange,
  onGridChange,
}: IndustriesHeroEditorProps) {
  const currentHero = hero || {
    titlePart1: "Industries We",
    titleHighlight: "Serve",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Industries",
    bannerImage: "/industries/industries-banner.jpg",
  };

  const currentGrid = gridSection || {
    badge: "APPLICATION SECTORS",
    heading: "Precision Mould Solutions for",
    headingHighlight: "Critical Sectors",
    description: "",
  };

  return (
    <div className="space-y-6">
      {/* 1. HERO BANNER CONFIG */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Industries Hero Banner</h2>
            <p className="text-xs text-slate-500">
              Customize the top banner title, orange accent text, breadcrumbs, and background industrial image.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Title Prefix (White Text)
            </label>
            <input
              type="text"
              value={currentHero.titlePart1 || ""}
              onChange={(e) => onHeroChange({ ...currentHero, titlePart1: e.target.value })}
              placeholder="Industries We"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Title Highlight (Gradient / Orange Text)
            </label>
            <input
              type="text"
              value={currentHero.titleHighlight || ""}
              onChange={(e) => onHeroChange({ ...currentHero, titleHighlight: e.target.value })}
              placeholder="Serve"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Breadcrumb Root Label
            </label>
            <input
              type="text"
              value={currentHero.breadcrumbHome || ""}
              onChange={(e) => onHeroChange({ ...currentHero, breadcrumbHome: e.target.value })}
              placeholder="Home"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Breadcrumb Current Label
            </label>
            <input
              type="text"
              value={currentHero.breadcrumbCurrent || ""}
              onChange={(e) => onHeroChange({ ...currentHero, breadcrumbCurrent: e.target.value })}
              placeholder="Industries"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <ImagePicker
              label="Banner Background Image"
              value={currentHero.bannerImage || ""}
              onChange={(val) => onHeroChange({ ...currentHero, bannerImage: val })}
              helperText="Upload or enter image path (e.g. /industries/industries-banner.jpg)"
            />
          </div>
        </div>
      </div>

      {/* 2. GRID INTRO HEADER CONFIG */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ff6b00]">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Industries Grid Intro Section</h2>
            <p className="text-xs text-slate-500">
              The heading, badge, and intro text displayed above the 8 industry sector cards on the listing page.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Section Badge
            </label>
            <input
              type="text"
              value={currentGrid.badge || ""}
              onChange={(e) => onGridChange({ ...currentGrid, badge: e.target.value })}
              placeholder="APPLICATION SECTORS"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Heading (Main)
            </label>
            <input
              type="text"
              value={currentGrid.heading || ""}
              onChange={(e) => onGridChange({ ...currentGrid, heading: e.target.value })}
              placeholder="Precision Mould Solutions for"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Heading Highlight (Gradient Text)
            </label>
            <input
              type="text"
              value={currentGrid.headingHighlight || ""}
              onChange={(e) => onGridChange({ ...currentGrid, headingHighlight: e.target.value })}
              placeholder="Critical Sectors"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Intro Paragraph
            </label>
            <textarea
              rows={3}
              value={currentGrid.description || ""}
              onChange={(e) => onGridChange({ ...currentGrid, description: e.target.value })}
              placeholder="Description text explaining the sectors..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
