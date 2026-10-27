"use client";

import React from "react";
import { Sliders, Plus, Trash2 } from "lucide-react";
import { ImagePicker } from "@/components/ui/ImagePicker";

interface HeroSectionEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function HeroSectionEditor({ data, setData }: HeroSectionEditorProps) {
  return (
    <div className="space-y-6">
      {/* Header Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 uppercase">
              Home Page &bull; Section 1
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Total: {data?.heroSlides?.length || 0} Sliders
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <Sliders className="w-5 h-5 text-[#ff6b00]" />
            Hero Sliders & Banners
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage the 4 home page background slider banners, titles, highlighted texts, badges, and action buttons.
          </p>
        </div>

        {/* ADD MORE SLIDER BUTTON */}
        <button
          type="button"
          onClick={() => {
            const newId = `hero-${(data?.heroSlides?.length || 0) + 1}`;
            const newSlide = {
              id: newId,
              subtitle: "PRECISION MOLD MANUFACTURING",
              title: "New Custom Mold Tooling",
              highlightText: "High Speed Performance.",
              description: "Custom engineered mold tooling built for maximum reliability and daily volume.",
              image: "/Home/Banner1.png",
              primaryCtaText: "EXPLORE PRODUCTS",
              primaryCtaLink: "/products#catalog",
              secondaryCtaText: "REQUEST A QUOTE",
              secondaryCtaLink: "#inquiry-section",
              badge: "Patel Mould Innovation",
            };
            setData({ ...data, heroSlides: [...(data.heroSlides || []), newSlide] });
          }}
          className="px-4 py-2.5 rounded-xl bg-[#ff6b00] hover:bg-[#e56000] text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-[#ff6b00]/25 transition-all cursor-pointer self-start sm:self-auto shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add More Slider</span>
        </button>
      </div>

      {/* Sliders List */}
      <div className="space-y-6">
        {data?.heroSlides?.map((slide: any, index: number) => (
          <div
            key={slide.id || index}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#e6f0fa] text-[#0056b3] font-extrabold text-xs flex items-center justify-center border border-[#0056b3]/20">
                  {index + 1}
                </span>
                <div>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Slider #{index + 1}: {slide.title || "Untitled Slide"}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    ID: {slide.id}
                  </span>
                </div>
              </div>

              {data.heroSlides.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    if (confirm(`Are you sure you want to delete Slider #${index + 1}?`)) {
                      const updated = data.heroSlides.filter((_: any, i: number) => i !== index);
                      setData({ ...data, heroSlides: updated });
                    }
                  }}
                  className="px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Slider</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Subtitle */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Subtitle (Tagline)
                </label>
                <input
                  type="text"
                  value={slide.subtitle || ""}
                  onChange={(e) => {
                    const updated = [...data.heroSlides];
                    updated[index].subtitle = e.target.value;
                    setData({ ...data, heroSlides: updated });
                  }}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                />
              </div>

              {/* Badge Label */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Top Badge Label
                </label>
                <input
                  type="text"
                  value={slide.badge || ""}
                  onChange={(e) => {
                    const updated = [...data.heroSlides];
                    updated[index].badge = e.target.value;
                    setData({ ...data, heroSlides: updated });
                  }}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                />
              </div>

              {/* Main Title */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Main Title
                </label>
                <input
                  type="text"
                  value={slide.title || ""}
                  onChange={(e) => {
                    const updated = [...data.heroSlides];
                    updated[index].title = e.target.value;
                    setData({ ...data, heroSlides: updated });
                  }}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                />
              </div>

              {/* Highlight Text */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Highlight Text <span className="text-[#ff6b00]">(Accent Color)</span>
                </label>
                <input
                  type="text"
                  value={slide.highlightText || ""}
                  onChange={(e) => {
                    const updated = [...data.heroSlides];
                    updated[index].highlightText = e.target.value;
                    setData({ ...data, heroSlides: updated });
                  }}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#ff6b00] focus:bg-white"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Slide Description
                </label>
                <textarea
                  rows={2}
                  value={slide.description || ""}
                  onChange={(e) => {
                    const updated = [...data.heroSlides];
                    updated[index].description = e.target.value;
                    setData({ ...data, heroSlides: updated });
                  }}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                />
              </div>

              {/* Primary CTA */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Primary Button Text & Target Link
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="EXPLORE PRODUCTS"
                    value={slide.primaryCtaText || ""}
                    onChange={(e) => {
                      const updated = [...data.heroSlides];
                      updated[index].primaryCtaText = e.target.value;
                      setData({ ...data, heroSlides: updated });
                    }}
                    className="px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800"
                  />
                  <input
                    type="text"
                    placeholder="/products#catalog"
                    value={slide.primaryCtaLink || ""}
                    onChange={(e) => {
                      const updated = [...data.heroSlides];
                      updated[index].primaryCtaLink = e.target.value;
                      setData({ ...data, heroSlides: updated });
                    }}
                    className="px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800"
                  />
                </div>
              </div>

              {/* Secondary CTA */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Secondary Button Text & Target Link
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="OUR CAPABILITIES"
                    value={slide.secondaryCtaText || ""}
                    onChange={(e) => {
                      const updated = [...data.heroSlides];
                      updated[index].secondaryCtaText = e.target.value;
                      setData({ ...data, heroSlides: updated });
                    }}
                    className="px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800"
                  />
                  <input
                    type="text"
                    placeholder="#capabilities"
                    value={slide.secondaryCtaLink || ""}
                    onChange={(e) => {
                      const updated = [...data.heroSlides];
                      updated[index].secondaryCtaLink = e.target.value;
                      setData({ ...data, heroSlides: updated });
                    }}
                    className="px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800"
                  />
                </div>
              </div>

              {/* Banner Image */}
              <div className="md:col-span-2 pt-2">
                <ImagePicker
                  label="Slide Background Banner Image"
                  value={slide.image}
                  onChange={(url) => {
                    const updated = [...data.heroSlides];
                    updated[index].image = url;
                    setData({ ...data, heroSlides: updated });
                  }}
                  helperText="Click Upload File or type /Home/Banner1.png"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
