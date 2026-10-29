"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { Layers, Sparkles } from "lucide-react";
import {
  GalleryHeroBannerData,
  GalleryIntroData,
} from "@/data/defaultGallery";

interface GalleryHeroIntroEditorProps {
  heroBanner: GalleryHeroBannerData;
  intro: GalleryIntroData;
  onHeroChange: (hero: GalleryHeroBannerData) => void;
  onIntroChange: (intro: GalleryIntroData) => void;
}

export function GalleryHeroIntroEditor({
  heroBanner,
  intro,
  onHeroChange,
  onIntroChange,
}: GalleryHeroIntroEditorProps) {
  const currentHero = heroBanner || {
    titlePart1: "Our",
    titleHighlight: "Gallery",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Gallery",
    bannerImage: "/gallery-banner.jpg",
  };

  const currentIntro = intro || {
    badge: "COMPLETE VISUAL ARCHIVE",
    headingPart1: "Explore Our",
    headingHighlight: "Precision Portfolio",
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
            <h2 className="text-lg font-bold text-slate-900">Gallery Hero Banner</h2>
            <p className="text-xs text-slate-500">
              Customize the top banner headline, highlight accents, breadcrumbs, and high-resolution industrial background.
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
              placeholder="Our"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Title Highlight (Gradient / Colored Accent)
            </label>
            <input
              type="text"
              value={currentHero.titleHighlight || ""}
              onChange={(e) => onHeroChange({ ...currentHero, titleHighlight: e.target.value })}
              placeholder="Gallery"
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
              placeholder="Gallery"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <ImagePicker
              label="Hero Banner Background Image"
              value={currentHero.bannerImage || ""}
              onChange={(bannerImage) => onHeroChange({ ...currentHero, bannerImage })}
              helperText="Recommended: 1920x600px wide image showing toolroom, CNC bays, or factory environment."
            />
          </div>
        </div>
      </div>

      {/* 2. GALLERY GRID INTRO & HEADLINE */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ff6b00]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Showcase Intro & Filter Header</h2>
            <p className="text-xs text-slate-500">
              Configure the section badge, headline, and descriptive intro above the filter categories and photo grid.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Badge Label
            </label>
            <input
              type="text"
              value={currentIntro.badge || ""}
              onChange={(e) => onIntroChange({ ...currentIntro, badge: e.target.value })}
              placeholder="COMPLETE VISUAL ARCHIVE"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Heading Prefix
            </label>
            <input
              type="text"
              value={currentIntro.headingPart1 || ""}
              onChange={(e) => onIntroChange({ ...currentIntro, headingPart1: e.target.value })}
              placeholder="Explore Our"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Heading Highlight (Blue Accent)
            </label>
            <input
              type="text"
              value={currentIntro.headingHighlight || ""}
              onChange={(e) => onIntroChange({ ...currentIntro, headingHighlight: e.target.value })}
              placeholder="Precision Portfolio"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Section Intro / SEO Summary Description
            </label>
            <textarea
              rows={3}
              value={currentIntro.description || ""}
              onChange={(e) => onIntroChange({ ...currentIntro, description: e.target.value })}
              placeholder="Brief overview explaining Patel Mould Industries' visual archive and toolroom capabilities..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none leading-relaxed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

