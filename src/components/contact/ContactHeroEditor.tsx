"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { Layers } from "lucide-react";
import { ContactHeroBannerData } from "@/data/defaultContact";

interface ContactHeroEditorProps {
  heroBanner: ContactHeroBannerData;
  onChange: (hero: ContactHeroBannerData) => void;
}

export function ContactHeroEditor({ heroBanner, onChange }: ContactHeroEditorProps) {
  const currentHero = heroBanner || {
    titlePart1: "Contact",
    titleHighlight: "Our Team",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Contact Us",
    bannerImage: "/contact/contact-banner.jpg",
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Contact Hero Banner</h2>
            <p className="text-xs text-slate-500">
              Customize the top banner title, orange accent highlight, breadcrumbs, and high-resolution tooling campus background.
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
              onChange={(e) => onChange({ ...currentHero, titlePart1: e.target.value })}
              placeholder="Contact"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Title Highlight (Gradient / Accent Text)
            </label>
            <input
              type="text"
              value={currentHero.titleHighlight || ""}
              onChange={(e) => onChange({ ...currentHero, titleHighlight: e.target.value })}
              placeholder="Our Team"
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
              onChange={(e) => onChange({ ...currentHero, breadcrumbHome: e.target.value })}
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
              onChange={(e) => onChange({ ...currentHero, breadcrumbCurrent: e.target.value })}
              placeholder="Contact Us"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <ImagePicker
              label="Hero Banner Background Image"
              value={currentHero.bannerImage || ""}
              onChange={(bannerImage) => onChange({ ...currentHero, bannerImage })}
              helperText="Recommended: 1920x600px wide image showing toolroom campus or customer engineering office."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

