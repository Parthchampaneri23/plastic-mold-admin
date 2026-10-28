"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { IFacilityOverview, IFacilityOverviewItem } from "@/models/InfrastructurePageContent";
import { Factory, Plus, Trash2, Layers, ShieldCheck, Network } from "lucide-react";

interface Props {
  data: IFacilityOverview;
  onChange: (data: IFacilityOverview) => void;
}

const defaultIcons = [
  <Layers key="0" className="w-5 h-5 text-[#0056b3]" />,
  <Factory key="1" className="w-5 h-5 text-[#ff6b00]" />,
  <Network key="2" className="w-5 h-5 text-[#0056b3]" />,
  <ShieldCheck key="3" className="w-5 h-5 text-[#0056b3]" />,
];

export const FacilityOverviewEditor: React.FC<Props> = ({ data, onChange }) => {
  const updateField = (field: keyof IFacilityOverview, val: any) => {
    onChange({ ...data, [field]: val });
  };

  const updateCapability = (index: number, field: keyof IFacilityOverviewItem, val: string) => {
    const list = [...(data.capabilities || [])];
    list[index] = { ...list[index], [field]: val };
    updateField("capabilities", list);
  };

  const addCapability = () => {
    const list = [
      ...(data.capabilities || []),
      {
        title: "New Work Area / Capability",
        description: "Describe the specialized toolroom workstation, equipment or quality checkpoint.",
      },
    ];
    updateField("capabilities", list);
  };

  const removeCapability = (index: number) => {
    const list = (data.capabilities || []).filter((_, i) => i !== index);
    updateField("capabilities", list);
  };

  const capabilities = data.capabilities || [];

  return (
    <div className="space-y-8">
      {/* ======================================================== */}
      {/* 0. SECTION HEADER & TOP INTRODUCTION                      */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-6">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            <Factory className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              FACILITY WORKFLOW — Header &amp; Introduction
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
                value={data.badge || "FACILITY WORKFLOW"}
                onChange={(e) => updateField("badge", e.target.value)}
                className="w-full pl-8 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#0056b3] focus:ring-2 focus:ring-[#0056b3]"
                placeholder="FACILITY WORKFLOW"
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
                value={data.heading || "A Facility Designed for Precision"}
                onChange={(e) => updateField("heading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-[#0056b3]"
                placeholder="A Facility Designed for Precision"
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
                rows={3}
                value={data.description || ""}
                onChange={(e) => updateField("description", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Our facility integrates CAD design, CNC machining, EDM, toolroom operations, and precision inspection in an organized workspace..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. LARGE WIDE FACILITY PRESENTATION PHOTO                 */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              01
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Wide Facility Toolroom Photo
              </h3>
              <p className="text-xs text-slate-500">
                The wide panoramic plant photo shown in the center of the FACILITY WORKFLOW section.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400 font-semibold">
            Panoramic Floor View
          </span>
        </div>

        <ImagePicker
          label="Toolroom Production Floor Photo"
          value={data.imageSrc || "/infrastructure/facility-hero.jpg"}
          onChange={(url) => updateField("imageSrc", url)}
          description="High-resolution wide facility floor image (e.g. /infrastructure/facility-hero.jpg)"
        />
      </div>

      {/* ======================================================== */}
      {/* 2. THE 4 FACILITY WORKFLOW & CAPABILITY CARDS             */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              02
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Facility Workflow &amp; Toolroom Capability Cards ({capabilities.length})
              </h3>
              <p className="text-xs text-slate-500">
                The 4 cards displayed directly beneath the wide facility photograph (Matching website layout).
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={addCapability}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 border border-blue-200 text-[#0056b3] text-xs font-bold hover:bg-[#0056b3] hover:text-white transition-all shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Card
          </button>
        </div>

        {/* 4 Cards Grid - Matching Website Look & Feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-400 transition-all duration-200 flex flex-col justify-between space-y-3 group shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {defaultIcons[idx % defaultIcons.length]}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400">
                    Card 0{idx + 1}
                  </span>
                  {capabilities.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeCapability(idx)}
                      title="Remove Card"
                      className="text-slate-400 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Card Title
                  </label>
                  <input
                    type="text"
                    value={item.title || ""}
                    onChange={(e) => updateCapability(idx, "title", e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-white focus:ring-2 focus:ring-[#0056b3]"
                    placeholder="e.g. Precision-Focused Layout"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    value={item.description || ""}
                    onChange={(e) => updateCapability(idx, "description", e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-600 bg-white leading-relaxed focus:ring-2 focus:ring-[#0056b3]"
                    placeholder="Describe this zone or capability..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
