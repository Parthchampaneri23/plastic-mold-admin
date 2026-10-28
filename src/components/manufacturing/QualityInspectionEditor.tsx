"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import {
  IQualityInspection,
  IQualityCardItem,
  IQualityStripItem,
} from "@/models/ManufacturingPageContent";
import { ShieldCheck, Ruler, CheckCircle2, Sliders, FileCheck2, Cpu } from "lucide-react";

interface Props {
  data: IQualityInspection;
  onChange: (data: IQualityInspection) => void;
}

export const QualityInspectionEditor: React.FC<Props> = ({ data, onChange }) => {
  const updateField = (field: keyof IQualityInspection, val: any) => {
    onChange({ ...data, [field]: val });
  };

  const updateCard = (index: number, field: keyof IQualityCardItem, val: any) => {
    const updated = [...(data.cards || [])];
    updated[index] = { ...updated[index], [field]: val };
    updateField("cards", updated);
  };

  const updateDetailItems = (index: number, text: string) => {
    const items = text.split("\n").filter((t) => t.trim().length > 0);
    updateCard(index, "detailItems", items);
  };

  const updateStripItem = (index: number, field: keyof IQualityStripItem, val: string) => {
    const updated = [...(data.stripItems || [])];
    updated[index] = { ...updated[index], [field]: val };
    updateField("stripItems", updated);
  };

  return (
    <div className="space-y-8">
      {/* ======================================================== */}
      {/* 0. MAIN SECTION HEADER                                   */}
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
              value={data.badge || "QUALITY & INSPECTION"}
              onChange={(e) => updateField("badge", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
              placeholder="QUALITY & INSPECTION"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Heading</label>
              <input
                type="text"
                value={data.heading || "Built for Precision."}
                onChange={(e) => updateField("heading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Built for Precision."
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Heading Highlight (Blue)
              </label>
              <input
                type="text"
                value={data.highlightHeading || "Verified for Performance."}
                onChange={(e) => updateField("highlightHeading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Verified for Performance."
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
              placeholder="Discover the measurement and quality practices applied across each stage..."
            />
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. TWO-COLUMN INTERACTIVE METROLOGY & STAGES (PART 1)    */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border-2 border-blue-100 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#0056b3] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              01
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-[#0056b3] text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5">
                <Ruler className="w-3 h-3 text-[#0056b3]" />
                Interactive Stage-Gate Inspection
              </div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Metrology Lab Presentation &amp; 4 Quality Stages
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400 font-semibold">
            Left Metrology Photo &amp; Right 4 Clickable Cards
          </span>
        </div>

        <div className="space-y-6">
          {/* Left Column Image Picker */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
            <ImagePicker
              label="Quality Inspection Environment Photo (Left Column)"
              value={data.image || "/manufacturing/mfg_quality_clean.jpg"}
              onChange={(url) => updateField("image", url)}
              helperText="High-res metrology laboratory or Zeiss CMM photo (e.g. /manufacturing/mfg_quality_clean.jpg)"
            />
          </div>

          {/* Right Column Title & Subtitle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Right Column Heading
              </label>
              <input
                type="text"
                value={data.processTitle || "A Structured Approach to Quality Control"}
                onChange={(e) => updateField("processTitle", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                placeholder="A Structured Approach to Quality Control"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Right Column Guidance Text
              </label>
              <input
                type="text"
                value={
                  data.processDescription ||
                  "Click any stage below to inspect verified measurement activities and in-process checkpoints in the panel on the left."
                }
                onChange={(e) => updateField("processDescription", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                placeholder="Click any stage below to inspect..."
              />
            </div>
          </div>

          {/* 4 Interactive Quality Cards */}
          <div>
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              4 Quality Inspection Stages (Clickable Cards with Left-Panel Details)
            </label>

            <div className="space-y-4">
              {(data.cards || []).map((card, i) => (
                <div
                  key={card.id || i}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4 hover:border-[#0056b3] transition-colors"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#0056b3] text-white flex items-center justify-center font-mono font-bold text-[11px]">
                        {card.number || `0${i + 1}`}
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        {card.title}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#ff6b00] font-semibold">
                      STAGE {card.number} ({card.id})
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Stage Title (Right Card)
                      </label>
                      <input
                        type="text"
                        value={card.title || ""}
                        onChange={(e) => updateCard(i, "title", e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Sub-Heading (Active Panel Eyebrow)
                      </label>
                      <input
                        type="text"
                        value={card.detailTitle || ""}
                        onChange={(e) => updateCard(i, "detailTitle", e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono font-semibold text-[#0056b3]"
                        placeholder="Metrology & Instrument Capabilities"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Stage Description
                    </label>
                    <textarea
                      rows={2}
                      value={card.description || ""}
                      onChange={(e) => updateCard(i, "description", e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Key Verification Activities (One per line)
                    </label>
                    <textarea
                      rows={3}
                      value={(card.detailItems || []).join("\n")}
                      onChange={(e) => updateDetailItems(i, e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                      placeholder="Verification point 1&#10;Verification point 2&#10;Verification point 3"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. QUALITY ASSURANCE GUARANTEE BANNER (PART 2)           */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border-2 border-orange-100 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#ff6b00] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              02
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-orange-50 text-[#ff6b00] text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5">
                <ShieldCheck className="w-3 h-3 text-[#ff6b00]" />
                Guarantee &amp; Tolerancing
              </div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Quality Assurance Guarantee Banner
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400 font-semibold">
            Right Column Bottom Banner
          </span>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Guarantee Eyebrow Badge
              </label>
              <input
                type="text"
                value={data.guaranteeBadge || "QUALITY ASSURANCE GUARANTEE"}
                onChange={(e) => updateField("guaranteeBadge", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-[#0056b3]"
                placeholder="QUALITY ASSURANCE GUARANTEE"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Guarantee Title
              </label>
              <input
                type="text"
                value={
                  data.guaranteeTitle ||
                  "Zeiss 3D CMM & Sub-Micron Inspection Verification"
                }
                onChange={(e) => updateField("guaranteeTitle", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
                placeholder="Zeiss 3D CMM & Sub-Micron Inspection Verification"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Guarantee Description
            </label>
            <textarea
              rows={2}
              value={
                data.guaranteeDescription ||
                "Every mould stack undergoes full coordinate verification (±0.002 mm tolerance), 10–12 bar hydrostatic cooling circuit testing, and certified inspection reports."
              }
              onChange={(e) => updateField("guaranteeDescription", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Precision Pill Tag
              </label>
              <input
                type="text"
                value={data.guaranteePrecision || "±0.002 mm Precision"}
                onChange={(e) => updateField("guaranteePrecision", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono font-bold text-[#0056b3]"
                placeholder="±0.002 mm Precision"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Certification Pill Tag
              </label>
              <input
                type="text"
                value={data.guaranteeIso || "ISO 9001 Process"}
                onChange={(e) => updateField("guaranteeIso", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono font-bold text-[#ff6b00]"
                placeholder="ISO 9001 Process"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. PRECISION MEASUREMENT & VERIFICATION STRIP (PART 3)   */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              03
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5">
                <FileCheck2 className="w-3 h-3 text-[#0056b3]" />
                Horizontal 3-Card Strip
              </div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Precision Measurement &amp; Verification (3 Cards)
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400 font-semibold">
            Bottom Wide Section Cards
          </span>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Strip Header Title
            </label>
            <input
              type="text"
              value={data.stripBadge || "Precision Measurement & Verification"}
              onChange={(e) => updateField("stripBadge", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
              placeholder="Precision Measurement & Verification"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(data.stripItems || []).map((st, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3 hover:border-[#0056b3] transition-colors"
              >
                <div className="flex items-center justify-between pb-1 border-b border-slate-200/70">
                  <span className="text-[10px] font-mono font-bold text-[#0056b3] uppercase">
                    Strip Card 0{i + 1}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-semibold">
                    Step {st.number || `0${i + 1}`}
                  </span>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 mb-0.5">
                    Card Title
                  </label>
                  <input
                    type="text"
                    value={st.label || ""}
                    onChange={(e) => updateStripItem(i, "label", e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-900"
                    placeholder="Dimensional Inspection"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 mb-0.5">
                    Card Description
                  </label>
                  <textarea
                    rows={3}
                    value={st.fullDesc || ""}
                    onChange={(e) => updateStripItem(i, "fullDesc", e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs leading-relaxed"
                    placeholder="Rigorous coordinate checking of core shanks, cavity pockets..."
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
