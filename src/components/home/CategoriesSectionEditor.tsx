"use client";

import React from "react";
import { Layers, Plus, Trash2, ArrowRight } from "lucide-react";
import { ImagePicker } from "@/components/ui/ImagePicker";

interface CategoriesSectionEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function CategoriesSectionEditor({ data, setData }: CategoriesSectionEditorProps) {
  const sectionInfo = data?.categoriesSection || {
    badge: "PRODUCT CATEGORIES",
    headlineDark: "Precision Moulds for",
    headlineBlue: "Diverse Applications.",
    description:
      "High-precision PET preform, ISBM, and EBM tooling engineered for 5M+ cycle tool life, rapid cycle times, and high-volume container production.",
    pill1Text: "Preform & ISBM Tooling",
    pill2Text: "Zero-Flash Gating",
  };

  const categories = data?.productCategories || [
    {
      id: "preform-jar-mold",
      name: "Preform & Jar Mold",
      shortDesc:
        "High-precision multi-cavity PET preform molds and wide-mouth jar tooling engineered for high-speed cycle times and zero-defect output.",
      image: "/Home/preform-mold.png",
      buttonText: "View Products",
      link: "/products?category=preform-jar#catalog",
    },
    {
      id: "isbm-mold",
      name: "ISBM Mold",
      shortDesc:
        "Injection Stretch Blow Molding (ISBM) tooling engineered for single-stage premium container production with flawless optical clarity.",
      image: "/Home/isbm-mold.png",
      buttonText: "View Products",
      link: "/products?category=isbm#catalog",
    },
    {
      id: "ebm-mold",
      name: "EBM Mold",
      shortDesc:
        "Extrusion Blow Molding (EBM) tooling for complex hollow plastic bottles, jerrycans, automotive tanks, and industrial containers.",
      image: "/Home/ebm-mold.png",
      buttonText: "View Products",
      link: "/products?category=ebm#catalog",
    },
  ];

  const updateSectionInfo = (field: string, val: string) => {
    setData({
      ...data,
      categoriesSection: {
        ...sectionInfo,
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
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 uppercase">
              Home Page &bull; Section 3
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Total: {categories.length} Tooling Categories
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#ff6b00]" />
            Product Categories (Tooling Lines)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage the section headline, 2-column header description, highlight pills, and 3 category cards (Preform & Jar Mold, ISBM Mold, EBM Mold).
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            const count = categories.length + 1;
            const newCat = {
              id: `custom-category-${count}`,
              name: `New Mold Category ${count}`,
              shortDesc: "High-precision injection tooling engineered for high-speed cycle times.",
              image: "/Home/preform-mold.png",
              buttonText: "View Products",
              link: "/products#catalog",
            };
            setData({
              ...data,
              productCategories: [...categories, newCat],
            });
          }}
          className="px-4 py-2 rounded-xl bg-[#0056b3] hover:bg-[#003d80] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-[#0056b3]/20 transition-all cursor-pointer self-start sm:self-auto shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add More Category</span>
        </button>
      </div>

      {/* 1. SECTION HEADER CONTROLS (SPLIT HEADLINE, RIGHT COLUMN ACCENT TEXT & PILLS) */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Section Header & Description (Matching Website 2-Column Split)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Eyebrow Badge */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Eyebrow Badge Text
            </label>
            <input
              type="text"
              value={sectionInfo.badge || ""}
              placeholder="PRODUCT CATEGORIES"
              onChange={(e) => updateSectionInfo("badge", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Headline Line 1 (Dark) */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Headline Line 1 (Dark Text)
            </label>
            <input
              type="text"
              value={sectionInfo.headlineDark || ""}
              placeholder="Precision Moulds for"
              onChange={(e) => updateSectionInfo("headlineDark", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Headline Line 2 (Blue Highlight) */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Headline Line 2 (Blue Highlight)
            </label>
            <input
              type="text"
              value={sectionInfo.headlineBlue || ""}
              placeholder="Diverse Applications."
              onChange={(e) => updateSectionInfo("headlineBlue", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Right Column Description */}
          <div className="md:col-span-3">
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Right Column Description (With Vertical Gradient Accent Bar)
            </label>
            <textarea
              rows={2}
              value={sectionInfo.description || ""}
              placeholder="High-precision PET preform, ISBM, and EBM tooling engineered for 5M+ cycle tool life, rapid cycle times, and high-volume container production."
              onChange={(e) => updateSectionInfo("description", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Micro Pill 1 */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Micro Highlight Pill 1 (Blue Accent)
            </label>
            <input
              type="text"
              value={sectionInfo.pill1Text || ""}
              placeholder="Preform & ISBM Tooling"
              onChange={(e) => updateSectionInfo("pill1Text", e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Micro Pill 2 */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Micro Highlight Pill 2 (Orange Accent)
            </label>
            <input
              type="text"
              value={sectionInfo.pill2Text || ""}
              placeholder="Zero-Flash Gating"
              onChange={(e) => updateSectionInfo("pill2Text", e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* 2. 3 CATEGORY CARDS GRID (MATCHING WEBSITE SCREENSHOT) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Product Category Cards (Grid of {categories.length})
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            3 columns layout matching the website
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat: any, index: number) => (
            <div
              key={cat.id || index}
              className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-[#0056b3] transition-all duration-300 space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Row: Category Number & Delete */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                    Category #{index + 1}: {cat.name}
                  </span>
                  {categories.length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Delete category "${cat.name}"?`)) {
                          const updated = categories.filter((_: any, i: number) => i !== index);
                          setData({ ...data, productCategories: updated });
                        }
                      }}
                      title="Delete category"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Photo Preview & Picker */}
                <div className="space-y-2">
                  <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner group/img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cat.image || "/Home/preform-mold.png"}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <ImagePicker
                    label="Category Showcase Photo"
                    value={cat.image || "/Home/preform-mold.png"}
                    onChange={(url) => {
                      const updated = [...categories];
                      updated[index].image = url;
                      setData({ ...data, productCategories: updated });
                    }}
                    helperText="Upload category mold photo (e.g. /Home/preform-mold.png)"
                  />
                </div>

                {/* Category Title */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Category Name
                  </label>
                  <input
                    type="text"
                    value={cat.name || ""}
                    placeholder="e.g. Preform & Jar Mold"
                    onChange={(e) => {
                      const updated = [...categories];
                      updated[index].name = e.target.value;
                      setData({ ...data, productCategories: updated });
                    }}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                  />
                </div>

                {/* Short Description */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Short Description
                  </label>
                  <textarea
                    rows={3}
                    value={cat.shortDesc || ""}
                    placeholder="High-precision multi-cavity PET preform molds..."
                    onChange={(e) => {
                      const updated = [...categories];
                      updated[index].shortDesc = e.target.value;
                      setData({ ...data, productCategories: updated });
                    }}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed focus:outline-none focus:border-[#0056b3] focus:bg-white"
                  />
                </div>

                {/* Target Explore Link */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Target Button Link
                  </label>
                  <input
                    type="text"
                    value={cat.link || `/products?category=${cat.id?.replace("-mold", "") || "preform-jar"}#catalog`}
                    placeholder="/products?category=preform-jar#catalog"
                    onChange={(e) => {
                      const updated = [...categories];
                      updated[index].link = e.target.value;
                      setData({ ...data, productCategories: updated });
                    }}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                  />
                </div>
              </div>

              {/* Action Button Preview (Matching Website) */}
              <div className="pt-2">
                <div className="w-full py-2.5 px-4 rounded-xl border border-blue-200/80 bg-blue-50 font-bold text-[#0056b3] text-xs flex items-center justify-center gap-2 group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3] transition-all duration-300">
                  <span>{cat.buttonText || "View Products"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
