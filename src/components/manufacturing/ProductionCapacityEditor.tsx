"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import {
  IProductionCapacity,
  IProductionStatItem,
  ICapacityHighlightItem,
  IMouldProductionCapability,
} from "@/models/ManufacturingPageContent";
import { Factory, Layers, BarChart3, Sliders, CheckCircle2 } from "lucide-react";

interface Props {
  data: IProductionCapacity;
  onChange: (data: IProductionCapacity) => void;
}

export const ProductionCapacityEditor: React.FC<Props> = ({ data, onChange }) => {
  const updateField = (field: keyof IProductionCapacity, val: any) => {
    onChange({ ...data, [field]: val });
  };

  const updateStat = (index: number, field: keyof IProductionStatItem, val: any) => {
    const updated = [...(data.stats || [])];
    updated[index] = { ...updated[index], [field]: val };
    updateField("stats", updated);
  };

  const updateHighlight = (index: number, field: keyof ICapacityHighlightItem, val: string) => {
    const updated = [...(data.highlights || [])];
    updated[index] = { ...updated[index], [field]: val };
    updateField("highlights", updated);
  };

  const updateCapability = (
    index: number,
    field: keyof IMouldProductionCapability,
    val: any
  ) => {
    const updated = [...(data.capabilities || [])];
    updated[index] = { ...updated[index], [field]: val };
    updateField("capabilities", updated);
  };

  const updateCapabilityPoints = (index: number, text: string) => {
    const points = text.split("\n").filter((p) => p.trim().length > 0);
    updateCapability(index, "points", points);
  };

  return (
    <div className="space-y-8">
      {/* ======================================================== */}
      {/* 0. MAIN SECTION BANNER & INTRO                          */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Section Header &amp; Top Description
            </h3>
            <p className="text-xs text-slate-500">
              Controls the top eyebrow badge, main title, and right-hand descriptive text.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Badge</label>
            <input
              type="text"
              value={data.badge || "PRODUCTION CAPACITY"}
              onChange={(e) => updateField("badge", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
              placeholder="PRODUCTION CAPACITY"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Heading</label>
              <input
                type="text"
                value={data.heading || "Scale, Precision &"}
                onChange={(e) => updateField("heading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Scale, Precision &"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Heading Highlight (Blue)
              </label>
              <input
                type="text"
                value={data.highlightHeading || "Toolroom Capacity"}
                onChange={(e) => updateField("highlightHeading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Toolroom Capacity"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Description</label>
            <textarea
              rows={2}
              value={data.description || ""}
              onChange={(e) => updateField("description", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
              placeholder="Engineered toolroom infrastructure capable of delivering high-volume multi-cavity stack tooling..."
            />
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. MANUFACTURING CAPACITY (PART 1 - SERIAL WISE)         */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border-2 border-blue-100 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#0056b3] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              01
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-[#0056b3] text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5">
                <Factory className="w-3 h-3 text-[#0056b3]" />
                Section 1 of 3
              </div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                MANUFACTURING CAPACITY
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400 font-semibold">
            Facility Image &amp; 4 Operational Pillars
          </span>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Sub-Section Eyebrow Badge
              </label>
              <input
                type="text"
                value={data.facilityBadge || "MANUFACTURING CAPACITY"}
                onChange={(e) => updateField("facilityBadge", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                placeholder="MANUFACTURING CAPACITY"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Sub-Section Tag (Orange)
              </label>
              <input
                type="text"
                value={data.facilitySubheading || "INFRASTRUCTURE & RESOURCES"}
                onChange={(e) => updateField("facilitySubheading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-[#ff6b00]"
                placeholder="INFRASTRUCTURE & RESOURCES"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Facility Heading Title
            </label>
            <input
              type="text"
              value={
                data.facilityTitle ||
                "Integrated Facilities Designed for Production Consistency"
              }
              onChange={(e) => updateField("facilityTitle", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
              placeholder="Integrated Facilities Designed for Production Consistency"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Facility Narrative Summary
            </label>
            <textarea
              rows={3}
              value={
                data.facilityDescription ||
                "Operating from Phase-IV GIDC Gujarat, our toolroom combines high-speed 5-axis CNC machining centers, mirror spark EDMs, precision wire-cut cells, and dedicated assembly bays under one roof. Synchronized workflows eliminate cumulative tolerance build-up across complex multi-cavity tooling."
              }
              onChange={(e) => updateField("facilityDescription", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              placeholder="Facility narrative paragraph..."
            />
          </div>

          <div className="pt-2">
            <ImagePicker
              label="Manufacturing Facility Presentation Photo (Left Column)"
              value={data.facilityImage || "/About/FACILITY.png"}
              onChange={(url) => updateField("facilityImage", url)}
              helperText="Toolroom facility photo (e.g. /About/FACILITY.png)"
            />
          </div>

          {/* 4 Toolroom Infrastructure Pillars */}
          <div className="pt-3">
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              4 Infrastructure &amp; Capability Points (Right Column Cards)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(data.highlights || []).map((hl, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2 hover:border-[#0056b3] transition-colors"
                >
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#0056b3]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Point #{i + 1}</span>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={hl.title || ""}
                      onChange={(e) => updateHighlight(i, "title", e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Description
                    </label>
                    <textarea
                      rows={2}
                      value={hl.description || ""}
                      onChange={(e) => updateHighlight(i, "description", e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MOULD PRODUCTION CAPABILITY (PART 2 - SERIAL WISE)    */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border-2 border-orange-100 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#ff6b00] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              02
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-orange-50 text-[#ff6b00] text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5">
                <Layers className="w-3 h-3 text-[#ff6b00]" />
                Section 2 of 3
              </div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                MOULD PRODUCTION CAPABILITY
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400 font-semibold">
            3 Tooling Spectrum Cards
          </span>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Sub-Section Eyebrow Badge
              </label>
              <input
                type="text"
                value={data.capabilitiesBadge || "MOULD PRODUCTION CAPABILITY"}
                onChange={(e) => updateField("capabilitiesBadge", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                placeholder="MOULD PRODUCTION CAPABILITY"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Sub-Section Heading
              </label>
              <input
                type="text"
                value={data.capabilitiesHeading || "Mould Production Capabilities"}
                onChange={(e) => updateField("capabilitiesHeading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
                placeholder="Mould Production Capabilities"
              />
            </div>
          </div>

          {/* 3 Core Mould Categories */}
          <div className="space-y-4 pt-2">
            {(data.capabilities || []).map((cap, i) => (
              <div
                key={cap.id || i}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4 hover:border-[#ff6b00] transition-colors"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                  <span className="text-xs font-extrabold text-[#0056b3] uppercase tracking-wider">
                    Mould Category #{i + 1}: {cap.title}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-[#ff6b00] font-bold">
                    {cap.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Category Title
                    </label>
                    <input
                      type="text"
                      value={cap.title || ""}
                      onChange={(e) => updateCapability(i, "title", e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Top Badge Pill (e.g. 1 to 144 Cavities)
                    </label>
                    <input
                      type="text"
                      value={cap.badge || ""}
                      onChange={(e) => updateCapability(i, "badge", e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-[#ff6b00]"
                      placeholder="1 to 144 Cavities"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    value={cap.description || ""}
                    onChange={(e) => updateCapability(i, "description", e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <ImagePicker
                    label="Mould Product Photo"
                    value={cap.image || ""}
                    onChange={(url) => updateCapability(i, "image", url)}
                    helperText="High-res product render (e.g. /product/pet-preform-mold.png)"
                  />
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Link URL (Explore Specifications)
                      </label>
                      <input
                        type="text"
                        value={cap.link || ""}
                        onChange={(e) => updateCapability(i, "link", e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                        placeholder="/products/pet-preform-mold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Bullet Features (One per line)
                      </label>
                      <textarea
                        rows={3}
                        value={(cap.points || []).join("\n")}
                        onChange={(e) => updateCapabilityPoints(i, e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                        placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. PRODUCTION STATISTICS (PART 3 - SERIAL WISE)          */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              03
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5">
                <BarChart3 className="w-3 h-3 text-[#0056b3]" />
                Section 3 of 3
              </div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                PRODUCTION STATISTICS
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400 font-semibold">
            4 Animated Verified Metrics Cards
          </span>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Sub-Section Eyebrow Badge
              </label>
              <input
                type="text"
                value={data.statsBadge || "PRODUCTION STATISTICS"}
                onChange={(e) => updateField("statsBadge", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                placeholder="PRODUCTION STATISTICS"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Sub-Section Heading
              </label>
              <input
                type="text"
                value={data.statsHeading || "Verified Manufacturing Metrics"}
                onChange={(e) => updateField("statsHeading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
                placeholder="Verified Manufacturing Metrics"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {(data.stats || []).map((st, i) => (
              <div
                key={st.id || i}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3 hover:border-[#0056b3] transition-colors"
              >
                <div className="flex items-center justify-between pb-1 border-b border-slate-200/70">
                  <span className="text-[10px] font-mono font-bold text-[#0056b3] uppercase">
                    Card 0{i + 1}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-semibold">
                    {st.id}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  <div>
                    <label className="block text-[9px] text-slate-500 font-bold uppercase">
                      Prefix
                    </label>
                    <input
                      type="text"
                      value={st.prefix || ""}
                      onChange={(e) => updateStat(i, "prefix", e.target.value)}
                      className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-medium"
                      placeholder="1 to "
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] text-slate-500 font-bold uppercase">
                      Number
                    </label>
                    <input
                      type="text"
                      value={st.metric || ""}
                      onChange={(e) => updateStat(i, "metric", e.target.value)}
                      className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-extrabold text-[#0056b3]"
                      placeholder="144"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] text-slate-500 font-bold uppercase">
                      Suffix
                    </label>
                    <input
                      type="text"
                      value={st.suffix || ""}
                      onChange={(e) => updateStat(i, "suffix", e.target.value)}
                      className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-medium"
                      placeholder=" Cav"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 mb-0.5">
                    Metric Title (e.g. Years of Experience)
                  </label>
                  <input
                    type="text"
                    value={st.label || ""}
                    onChange={(e) => updateStat(i, "label", e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 mb-0.5">
                    Sublabel (e.g. Established Since 1994)
                  </label>
                  <input
                    type="text"
                    value={st.sublabel || ""}
                    onChange={(e) => updateStat(i, "sublabel", e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-[11px] text-slate-600 font-medium"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
