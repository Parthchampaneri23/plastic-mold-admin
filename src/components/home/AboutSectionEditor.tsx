"use client";

import React, { useState, useRef } from "react";
import { Building, Plus, Trash2, Sparkles, CheckCircle2 } from "lucide-react";
import { ImagePicker } from "@/components/ui/ImagePicker";

interface AboutSectionEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function AboutSectionEditor({ data, setData }: AboutSectionEditorProps) {
  const [newlyAddedStatIndex, setNewlyAddedStatIndex] = useState<number | null>(null);
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);
  const newStatCardRef = useRef<HTMLDivElement | null>(null);
  const newStatInputRef = useRef<HTMLInputElement | null>(null);

  const companyIntro = data?.companyIntro || {
    badge: "ENGINEERING EXCELLENCE SINCE 1994",
    heading: "About Patel Mould Industries",
    paragraph1:
      "Established in 1994 in Gujarat, Patel Mould Industries is one of India's most trusted manufacturers of high-precision PET preform molds, ISBM tooling, and Extrusion Blow Molds.",
    paragraph2:
      "Spanning three decades of Indian toolmaking craftsmanship, Patel Mould Industries operates a 15,000 m² state-of-the-art facility equipped with 5-axis CNC machining, mirror EDMs, and Zeiss 3D CMM quality inspection labs.",
    paragraph3:
      "We specialize in custom multi-cavity mold solutions engineered for zero-flash production, rapid cycle times, and guaranteed 5M+ shot tool life — supporting premier beverage bottlers, FMCG brands, and pharmaceutical manufacturers across India and globally.",
    image: "/Home/company image about.png",
  };

  const companyStats = data?.companyStats || [
    { value: "30+", label: "Years of Experience", subtext: "Established since 1994" },
    { value: "1,500+", label: "Molds Manufactured", subtext: "Built for diverse industries" },
    { value: "100%", label: "Quality Focused", subtext: "Built for reliable performance" },
    { value: "25+ Cities", label: "Serving Across India", subtext: "Trusted by manufacturers nationwide" },
  ];

  const updateIntro = (field: string, val: any) => {
    setData({
      ...data,
      companyIntro: {
        ...companyIntro,
        [field]: val,
      },
    });
  };

  const handleAddCounter = () => {
    const nextIndex = companyStats.length;
    const newStat = {
      value: "100+",
      label: `New Metric #${nextIndex + 1}`,
      subtext: "Built for reliable performance",
    };

    setData({ ...data, companyStats: [...companyStats, newStat] });
    setNewlyAddedStatIndex(nextIndex);
    setFeedbackToast(`New Counter Card #${nextIndex + 1} added successfully!`);

    // Auto-scroll, focus on first field, and trigger temporary highlight
    setTimeout(() => {
      if (newStatCardRef.current) {
        newStatCardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      if (newStatInputRef.current) {
        newStatInputRef.current.focus();
        newStatInputRef.current.select();
      }
    }, 100);

    // Fade toast and highlight animation after 4 seconds
    setTimeout(() => {
      setFeedbackToast(null);
      setNewlyAddedStatIndex(null);
    }, 4000);
  };

  return (
    <div className="space-y-8 relative">
      {/* Visual Feedback Confirmation Toast */}
      {feedbackToast && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-600 text-white shadow-xl shadow-emerald-600/25 animate-in slide-in-from-top-3 duration-300 font-medium text-xs">
          <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
          <span>{feedbackToast}</span>
        </div>
      )}

      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 uppercase">
              Home Page &bull; Section 2
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Live Website Visual Layout Matching
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <Building className="w-5 h-5 text-[#ff6b00]" />
            About Us Section (Company Introduction)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage the plant factory showcase photo, badge, headline, 3-paragraph company story, and the 4 highlight stats.
          </p>
        </div>
      </div>

      {/* STORY CONTENT & PLANT IMAGE EDITOR FORM */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#ff6b00]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Edit Company Story & Factory Photo
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Badge Text */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Eyebrow Badge Text (Orange Dot Pill)
            </label>
            <input
              type="text"
              value={companyIntro.badge || ""}
              placeholder="e.g. ENGINEERING EXCELLENCE SINCE 1994"
              onChange={(e) => updateIntro("badge", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Heading */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Main Heading Title
            </label>
            <input
              type="text"
              value={companyIntro.heading || ""}
              placeholder="e.g. About Patel Mould Industries"
              onChange={(e) => updateIntro("heading", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Factory Image Picker */}
          <div className="md:col-span-2">
            <ImagePicker
              label="Manufacturing Facility Photo (Left Side Showcase)"
              value={companyIntro.image || "/Home/company image about.png"}
              onChange={(url) => updateIntro("image", url)}
              helperText="High-resolution factory overview image (e.g. /Home/company image about.png)"
            />
          </div>

          {/* Paragraph 1 */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Intro Paragraph 1 (Established & Core Tooling Focus)
            </label>
            <textarea
              rows={3}
              value={companyIntro.paragraph1 || ""}
              placeholder="Established in 1994 in Gujarat, Patel Mould Industries..."
              onChange={(e) => updateIntro("paragraph1", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed focus:outline-none focus:border-[#0056b3] focus:bg-white font-medium"
            />
          </div>

          {/* Paragraph 2 */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Paragraph 2 (Facility Size, CNC Machining, EDMs & Quality Lab)
            </label>
            <textarea
              rows={3}
              value={companyIntro.paragraph2 || ""}
              placeholder="Spanning three decades of Indian toolmaking craftsmanship..."
              onChange={(e) => updateIntro("paragraph2", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Paragraph 3 */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Paragraph 3 (Multi-Cavity Solutions, Rapid Cycle Times, Tool Life & Clients)
            </label>
            <textarea
              rows={3}
              value={companyIntro.paragraph3 || ""}
              placeholder="We specialize in custom multi-cavity mold solutions engineered for zero-flash production..."
              onChange={(e) => updateIntro("paragraph3", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* 3. ANIMATED METRIC COUNTERS EDITOR (4 HIGHLIGHT STATS) */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Statistic Metric Cards ({companyStats.length})
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              The 4 highlight cards displayed underneath the About story with animated counting.
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddCounter}
            className="px-3.5 py-2 rounded-xl bg-[#0056b3] hover:bg-[#003d80] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-[#0056b3]/20 transition-all cursor-pointer self-start sm:self-auto active:scale-95"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add More Counter</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {companyStats.map((stat: any, index: number) => {
            const isNewlyAdded = index === newlyAddedStatIndex;

            return (
              <div
                key={index}
                ref={isNewlyAdded ? newStatCardRef : null}
                className={`p-5 rounded-2xl border shadow-xs transition-all duration-300 space-y-3 relative group ${
                  isNewlyAdded
                    ? "bg-amber-50/70 border-amber-400 ring-2 ring-amber-400/50 shadow-lg scale-[1.02]"
                    : "bg-slate-50 hover:bg-white border-slate-200 hover:border-[#0056b3] hover:shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-[#ff6b00] tracking-wider">
                      Stat #{index + 1}
                    </span>
                    {isNewlyAdded && (
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500 text-white animate-pulse">
                        New
                      </span>
                    )}
                  </div>
                  {companyStats.length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Delete stat "${stat.label}"?`)) {
                          const updated = companyStats.filter((_: any, i: number) => i !== index);
                          setData({ ...data, companyStats: updated });
                        }
                      }}
                      title="Delete counter"
                      className="p-1 rounded text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                    Metric Number Value
                  </label>
                  <input
                    ref={isNewlyAdded ? newStatInputRef : null}
                    type="text"
                    value={stat.value || ""}
                    placeholder="30+"
                    onChange={(e) => {
                      const updated = [...companyStats];
                      updated[index].value = e.target.value;
                      setData({ ...data, companyStats: updated });
                    }}
                    className="w-full font-black text-xl text-[#0056b3] px-3 py-1.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                    Primary Label
                  </label>
                  <input
                    type="text"
                    value={stat.label || ""}
                    placeholder="Years of Experience"
                    onChange={(e) => {
                      const updated = [...companyStats];
                      updated[index].label = e.target.value;
                      setData({ ...data, companyStats: updated });
                    }}
                    className="w-full text-xs font-bold text-slate-800 px-3 py-1.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                    Subtext Description
                  </label>
                  <input
                    type="text"
                    value={stat.subtext || ""}
                    placeholder="Established since 1994"
                    onChange={(e) => {
                      const updated = [...companyStats];
                      updated[index].subtext = e.target.value;
                      setData({ ...data, companyStats: updated });
                    }}
                    className="w-full text-[11px] text-slate-500 px-3 py-1.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#0056b3]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
