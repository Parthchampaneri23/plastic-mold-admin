"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { Layers, Sparkles } from "lucide-react";
import {
  BlogHeroBannerData,
  BlogIntroSectionData,
} from "@/data/defaultBlogs";

interface BlogHeroIntroEditorProps {
  heroBanner: BlogHeroBannerData;
  intro: BlogIntroSectionData;
  onHeroChange: (hero: BlogHeroBannerData) => void;
  onIntroChange: (intro: BlogIntroSectionData) => void;
}

export function BlogHeroIntroEditor({
  heroBanner,
  intro,
  onHeroChange,
  onIntroChange,
}: BlogHeroIntroEditorProps) {
  const currentHero = heroBanner || {
    titlePart1: "Insights &",
    titleHighlight: "Articles",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Blogs",
    bannerImage: "/blogs/blog-banner.jpg",
  };

  const currentIntro = intro || {
    badge: "Mould Engineering Knowledge Base",
    headingPart1: "Technical Insights from Our",
    headingHighlight: "Gujarat Toolroom",
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
            <h2 className="text-lg font-bold text-slate-900">Blogs Hero Banner</h2>
            <p className="text-xs text-slate-500">
              Customize the top banner headline, highlight gradient accent, breadcrumbs, and high-resolution industrial background image.
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
              placeholder="Insights &"
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
              placeholder="Articles"
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
              placeholder="Blogs"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <ImagePicker
              label="Hero Banner Background Image"
              value={currentHero.bannerImage || ""}
              onChange={(bannerImage) => onHeroChange({ ...currentHero, bannerImage })}
              helperText="Recommended: 1920x600px wide image of toolroom, engineering workstations, or CAD cells."
            />
          </div>
        </div>
      </div>

      {/* 2. BLOG LIST INTRO & HEADLINE */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ff6b00]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Knowledge Hub Intro & Heading</h2>
            <p className="text-xs text-slate-500">
              Configure the knowledge base badge, headline, and descriptive intro above the article cards and category pills.
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
              placeholder="Mould Engineering Knowledge Base"
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
              placeholder="Technical Insights from Our"
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
              placeholder="Gujarat Toolroom"
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
              placeholder="Authoritative, deeply technical articles written by our senior mold engineers..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none leading-relaxed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

