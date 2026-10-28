"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { IInfraSection, IInfraHighlight } from "@/models/InfrastructurePageContent";
import { Sparkles, Plus, Trash2 } from "lucide-react";

interface Props {
  data: IInfraSection;
  onChange: (data: IInfraSection) => void;
}

export const EdmMachiningEditor: React.FC<Props> = ({ data, onChange }) => {
  const updateField = (field: keyof IInfraSection, val: any) => {
    onChange({ ...data, [field]: val });
  };

  const updateDescriptionText = (text: string) => {
    updateField("description", [text]);
  };

  const updateHighlight = (index: number, field: keyof IInfraHighlight, val: string) => {
    const list = [...(data.highlights || [])];
    list[index] = { ...list[index], [field]: val };
    updateField("highlights", list);
  };

  const addHighlight = () => {
    const list = [
      ...(data.highlights || []),
      {
        label: `0${(data.highlights?.length || 0) + 1}`,
        title: "New Spark Erosion Feature",
        description: "Intricate geometry, spark erosion parameters, and finish details.",
      },
    ];
    updateField("highlights", list);
  };

  const removeHighlight = (index: number) => {
    const list = (data.highlights || []).filter((_, i) => i !== index);
    updateField("highlights", list);
  };

  const highlights = data.highlights || [];
  const descriptionText = data.description?.[0] || "";

  return (
    <div className="space-y-8">
      {/* ======================================================== */}
      {/* 0. SECTION HEADER & TOP INTRODUCTION                      */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-6">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            <Sparkles className="w-4 h-4 text-[#ff6b00]" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              SPARK EROSION FACILITY — Header &amp; Introduction
            </h3>
            <p className="text-xs text-slate-500">
              Manage the 2-column header layout matching the website (Eyebrow badge, Main Title, and Right Paragraph).
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {/* Eyebrow Badge Pill */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Top Eyebrow Badge
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ff6b00]" />
              <input
                type="text"
                value={data.badge || "SPARK EROSION FACILITY"}
                onChange={(e) => updateField("badge", e.target.value)}
                className="w-full pl-8 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#0056b3] focus:ring-2 focus:ring-[#0056b3]"
                placeholder="SPARK EROSION FACILITY"
              />
            </div>
          </div>

          {/* 2-Column Heading & Paragraph */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Main Heading
              </label>
              <input
                type="text"
                value={data.heading || "EDM Machining"}
                onChange={(e) => updateField("heading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-[#0056b3]"
                placeholder="EDM Machining"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Displays prominently on the left side of the section header.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Right Intro Paragraph (with Blue/Orange Vertical Accent)
              </label>
              <textarea
                rows={4}
                value={descriptionText}
                onChange={(e) => updateDescriptionText(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 focus:ring-2 focus:ring-[#0056b3] leading-relaxed"
                placeholder="Electrical Discharge Machining (EDM) enables the creation of intricate mould features..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. TWO-COLUMN LAYOUT: Image (Left) + Steps Cards (Right) */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              01
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                EDM Spark Erosion Photo &amp; Steps Cards
              </h3>
              <p className="text-xs text-slate-500">
                Matches the 2-column layout on the website: Left machine photo + Right 3 numbered step cards.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: EDM Photo */}
          <div className="lg:col-span-5 space-y-3">
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider">
              Left Column: Machine Showcase Photo
            </label>
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60">
              <ImagePicker
                label="Die-Sinking EDM Setup Photo"
                value={data.imageSrc || "/infrastructure/edm-machining.jpg"}
                onChange={(url) => updateField("imageSrc", url)}
                description="High-resolution photo of spark erosion in action (e.g. /infrastructure/edm-machining.jpg)"
              />
            </div>
          </div>

          {/* Right Column: Numbered Step Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex-1 mr-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Steps Header Title ({highlights.length} steps):
                  </span>
                </div>
                <input
                  type="text"
                  value={data.stepsHeading || "EDM Spark Erosion Steps"}
                  onChange={(e) => updateField("stepsHeading", e.target.value)}
                  className="w-full px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-[#0056b3] bg-white"
                  placeholder="EDM Spark Erosion Steps"
                />
                <p className="text-[10px] text-slate-400 mt-0.5">
                  This title appears above the stacked cards on the website next to the orange dot.
                </p>
              </div>

              <button
                type="button"
                onClick={addHighlight}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-[#0056b3] text-xs font-bold hover:bg-[#0056b3] hover:text-white transition-all shadow-2xs shrink-0 self-start mt-4"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Step
              </button>
            </div>

            <div className="space-y-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-400 transition-all duration-200 flex items-start gap-3.5 group shadow-2xs"
                >
                  {/* Restrained Blue Number Column / Badge */}
                  <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-200/80 text-[#0056b3] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3] transition-all">
                    <span className="text-xs font-mono font-bold tracking-tight">
                      {item.label || `0${idx + 1}`}
                    </span>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase text-slate-400">
                          Step Badge:
                        </span>
                        <input
                          type="text"
                          value={item.label || `0${idx + 1}`}
                          onChange={(e) => updateHighlight(idx, "label", e.target.value)}
                          className="w-12 px-1.5 py-0.5 rounded border border-slate-200 text-[10px] font-mono font-bold text-center bg-white"
                          placeholder="01"
                        />
                      </div>
                      {highlights.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeHighlight(idx)}
                          title="Remove Step"
                          className="text-slate-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        value={item.title || ""}
                        onChange={(e) => updateHighlight(idx, "title", e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-900 bg-white focus:ring-2 focus:ring-[#0056b3]"
                        placeholder="e.g. Intricate Geometry"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={2}
                        value={item.description || ""}
                        onChange={(e) => updateHighlight(idx, "description", e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 bg-white focus:ring-2 focus:ring-[#0056b3] leading-relaxed"
                        placeholder="Step description details..."
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
