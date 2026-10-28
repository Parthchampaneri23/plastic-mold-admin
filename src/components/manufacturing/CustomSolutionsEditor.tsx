"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import {
  ICustomMoldSolutions,
  ICustomSolutionItem,
} from "@/models/ManufacturingPageContent";
import { Settings, Shield, Sliders, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

interface Props {
  data: ICustomMoldSolutions;
  onChange: (data: ICustomMoldSolutions) => void;
}

export const CustomSolutionsEditor: React.FC<Props> = ({ data, onChange }) => {
  const updateField = (field: keyof ICustomMoldSolutions, val: any) => {
    onChange({ ...data, [field]: val });
  };

  const updateSolution = (index: number, field: keyof ICustomSolutionItem, val: any) => {
    const updated = [...(data.solutions || [])];
    updated[index] = { ...updated[index], [field]: val };
    updateField("solutions", updated);
  };

  const updateHighlights = (index: number, text: string) => {
    const highlights = text.split("\n").filter((t) => t.trim().length > 0);
    updateSolution(index, "highlights", highlights);
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
              value={data.badge || "CUSTOM MOLD SOLUTIONS"}
              onChange={(e) => updateField("badge", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
              placeholder="CUSTOM MOLD SOLUTIONS"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Heading</label>
              <input
                type="text"
                value={data.heading || "Customized Solutions for"}
                onChange={(e) => updateField("heading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Customized Solutions for"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Heading Highlight (Blue)
              </label>
              <input
                type="text"
                value={data.highlightHeading || "Demanding Mould Requirements"}
                onChange={(e) => updateField("highlightHeading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Demanding Mould Requirements"
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
              placeholder="From customer-specific mould designs to engineering coordination..."
            />
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. TWO-COLUMN INTERACTIVE SOLUTIONS (PART 1)             */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border-2 border-blue-100 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#0056b3] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              01
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-[#0056b3] text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5">
                <Settings className="w-3 h-3 text-[#0056b3]" />
                Interactive Solutions &amp; Engineering Panel
              </div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Engineering Presentation Photo &amp; 3 Solution Steps
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400 font-semibold">
            Left Toolroom Photo &amp; Right 3 Clickable Cards
          </span>
        </div>

        <div className="space-y-6">
          {/* Left Column Image Picker */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
            <ImagePicker
              label="Engineering / Mould Trial Presentation Photo (Left Column)"
              value={data.image || "/manufacturing/mfg_custom.jpg"}
              onChange={(url) => updateField("image", url)}
              helperText="High-res mould trial photo with engineers (e.g. /manufacturing/mfg_custom.jpg)"
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
                value={
                  data.solutionProcessTitle ||
                  "Engineering Tailored Around Your Production"
                }
                onChange={(e) => updateField("solutionProcessTitle", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                placeholder="Engineering Tailored Around Your Production"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Right Column Guidance Text
              </label>
              <input
                type="text"
                value={
                  data.solutionProcessDescription ||
                  "Click any solution below to inspect engineering coordination and technical activities in the panel on the left."
                }
                onChange={(e) => updateField("solutionProcessDescription", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                placeholder="Click any solution below to inspect..."
              />
            </div>
          </div>

          {/* 3 Interactive Solution Cards */}
          <div>
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              3 Solution Steps (Clickable Cards with Left-Panel Details)
            </label>

            <div className="space-y-4">
              {(data.solutions || []).map((sol, i) => (
                <div
                  key={sol.id || i}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4 hover:border-[#0056b3] transition-colors"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#0056b3] text-white flex items-center justify-center font-mono font-bold text-[11px]">
                        {sol.number || `0${i + 1}`}
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        {sol.title}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#ff6b00] font-semibold">
                      STEP {sol.number} ({sol.id})
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Step Title (Right Card)
                    </label>
                    <input
                      type="text"
                      value={sol.title || ""}
                      onChange={(e) => updateSolution(i, "title", e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Step Description (Right Card body)
                    </label>
                    <textarea
                      rows={2}
                      value={sol.description || ""}
                      onChange={(e) => updateSolution(i, "description", e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Detail Note (Active Panel Callout Box)
                    </label>
                    <input
                      type="text"
                      value={sol.detail || ""}
                      onChange={(e) => updateSolution(i, "detail", e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-700"
                      placeholder="Design coordination, tooling configuration..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Key Engineering Activities (One per line)
                    </label>
                    <textarea
                      rows={3}
                      value={(sol.highlights || []).join("\n")}
                      onChange={(e) => updateHighlights(i, e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                      placeholder="Tailored cavity stack configurations&#10;Resin-specific shrinkage compensation&#10;Development planning..."
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. CONFIDENTIALITY & ENGINEERING INTEGRITY BANNER (PART 2) */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border-2 border-orange-100 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#ff6b00] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              02
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-orange-50 text-[#ff6b00] text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5">
                <Shield className="w-3 h-3 text-[#ff6b00]" />
                Confidentiality &amp; NDA
              </div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Confidentiality &amp; Engineering Integrity Banner
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
                Banner Eyebrow Badge
              </label>
              <input
                type="text"
                value={
                  data.confidentialityBadge ||
                  "CONFIDENTIALITY & ENGINEERING INTEGRITY"
                }
                onChange={(e) => updateField("confidentialityBadge", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-[#0056b3]"
                placeholder="CONFIDENTIALITY & ENGINEERING INTEGRITY"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Banner Title
              </label>
              <input
                type="text"
                value={
                  data.confidentialityTitle ||
                  "Protected Development & Technical Coordination"
                }
                onChange={(e) => updateField("confidentialityTitle", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
                placeholder="Protected Development & Technical Coordination"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Banner Description
            </label>
            <textarea
              rows={2}
              value={
                data.confidentialityDescription ||
                "Custom mould developments are safeguarded under strict NDA agreements with proprietary CAD design security, pre-trial validation, and direct engineering review."
              }
              onChange={(e) => updateField("confidentialityDescription", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                NDA Pill Tag
              </label>
              <input
                type="text"
                value={data.confidentialityNda || "Strict NDA Protection"}
                onChange={(e) => updateField("confidentialityNda", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono font-bold text-[#0056b3]"
                placeholder="Strict NDA Protection"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Review Pill Tag
              </label>
              <input
                type="text"
                value={data.confidentialityDfm || "Free DFM Review"}
                onChange={(e) => updateField("confidentialityDfm", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono font-bold text-[#ff6b00]"
                placeholder="Free DFM Review"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. TECHNICAL CONSULTATION CTA BANNER (PART 3)            */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              03
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5">
                <MessageSquare className="w-3 h-3 text-[#0056b3]" />
                Final Call To Action
              </div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Technical Consultation &amp; Inquiry CTA Banner
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400 font-semibold">
            Bottom Wide Section Banner
          </span>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                CTA Eyebrow Badge
              </label>
              <input
                type="text"
                value={data.ctaBadge || "TECHNICAL CONSULTATION & FEASIBILITY"}
                onChange={(e) => updateField("ctaBadge", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-[#0056b3]"
                placeholder="TECHNICAL CONSULTATION & FEASIBILITY"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                CTA Main Title
              </label>
              <input
                type="text"
                value={data.ctaTitle || "Let's Discuss Your Custom Mould Requirements"}
                onChange={(e) => updateField("ctaTitle", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
                placeholder="Let's Discuss Your Custom Mould Requirements"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              CTA Description
            </label>
            <textarea
              rows={2}
              value={
                data.ctaDescription ||
                "Share your product concept, specifications or tooling requirements with our team to start a technical discussion."
              }
              onChange={(e) => updateField("ctaDescription", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                CTA Button Text
              </label>
              <input
                type="text"
                value={data.ctaButtonText || "Discuss Your Mould Project"}
                onChange={(e) => updateField("ctaButtonText", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                placeholder="Discuss Your Mould Project"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                CTA Button Link
              </label>
              <input
                type="text"
                value={data.ctaButtonLink || "/contact?subject=Custom+Mould+Solutions"}
                onChange={(e) => updateField("ctaButtonLink", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                placeholder="/contact?subject=Custom+Mould+Solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
