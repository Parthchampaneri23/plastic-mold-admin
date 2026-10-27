"use client";

import React from "react";
import { Sparkles, Image as ImageIcon } from "lucide-react";
import { ImagePicker } from "@/components/ui/ImagePicker";

interface AboutHeroEditorProps {
  aboutData: any;
  setAboutData: (data: any) => void;
}

export default function AboutHeroEditor({ aboutData, setAboutData }: AboutHeroEditorProps) {
  const hero = aboutData?.hero || {
    title: "About",
    highlightText: "Us",
    backgroundImage: "/About/about banner.png",
    breadcrumbHomeText: "Home",
    breadcrumbCurrentText: "About Us",
  };

  const updateHero = (field: string, val: any) => {
    setAboutData({
      ...aboutData,
      hero: {
        ...hero,
        [field]: val,
      },
    });
  };

  return (
    <div className="space-y-8">
      {/* Header Info Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#0056b3]/10 text-[#0056b3] border border-[#0056b3]/20 uppercase">
              About Page &bull; Section 1
            </span>
            <span className="text-xs text-slate-500 font-medium">Top Banner & Breadcrumb</span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-[#ff6b00]" />
            About Page Hero Banner
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Configure the main background image, heading title, and breadcrumb tags displayed at the top of the About Us page.
          </p>
        </div>
      </div>

      {/* Form Controls */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#ff6b00]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Edit Banner &amp; Heading
          </h3>
        </div>

        {/* Background Image Picker */}
        <div>
          <ImagePicker
            label="Banner Background Image"
            value={hero.backgroundImage || "/About/about banner.png"}
            onChange={(url) => updateHero("backgroundImage", url)}
            helperText="Recommended size: 1920x600px with dark navy overlay"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Main Title Prefix */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Heading Prefix
            </label>
            <input
              type="text"
              value={hero.title || ""}
              placeholder="About"
              onChange={(e) => updateHero("title", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Highlight Title */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Heading Highlight (Gradient Text)
            </label>
            <input
              type="text"
              value={hero.highlightText || ""}
              placeholder="Us"
              onChange={(e) => updateHero("highlightText", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Breadcrumb Root */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Breadcrumb Home Label
            </label>
            <input
              type="text"
              value={hero.breadcrumbHomeText || "Home"}
              onChange={(e) => updateHero("breadcrumbHomeText", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Breadcrumb Current */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Breadcrumb Active Label
            </label>
            <input
              type="text"
              value={hero.breadcrumbCurrentText || "About Us"}
              onChange={(e) => updateHero("breadcrumbCurrentText", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
