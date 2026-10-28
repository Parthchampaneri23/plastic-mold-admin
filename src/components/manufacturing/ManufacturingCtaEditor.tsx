"use client";

import React from "react";
import { ICustomMoldSolutions } from "@/models/ManufacturingPageContent";
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";

interface Props {
  data: ICustomMoldSolutions;
  onChange: (data: ICustomMoldSolutions) => void;
}

export const ManufacturingCtaEditor: React.FC<Props> = ({ data, onChange }) => {
  const updateField = (field: keyof ICustomMoldSolutions, val: any) => {
    onChange({ ...data, [field]: val });
  };

  return (
    <div className="space-y-6">
      {/* SECTION HEADER */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Technical Consultation &amp; Feasibility CTA
            </h3>
            <p className="text-xs text-slate-500">
              Customize the final call to action banner displayed at the bottom of the Manufacturing page.
            </p>
          </div>
        </div>

        {/* LIVE PREVIEW CARD */}
        <div className="mb-6 p-6 rounded-2xl border border-slate-200 bg-linear-to-r from-blue-50/50 via-white to-orange-50/30">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#ff6b00]" />
            Live Preview
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#ff6b00] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                {data.ctaBadge || "TECHNICAL CONSULTATION & FEASIBILITY"}
              </span>
              <h4 className="text-base font-bold text-slate-900">
                {data.ctaTitle || "Let's Discuss Your Custom Mould Requirements"}
              </h4>
              <p className="text-xs text-slate-600">
                {data.ctaDescription ||
                  "Share your product concept, specifications or tooling requirements with our team to start a technical discussion."}
              </p>
            </div>
            <div className="shrink-0">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0056b3] text-white text-xs font-bold shadow-sm shadow-[#0056b3]/20"
              >
                <span>{data.ctaButtonText || "Discuss Your Mould Project"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* INPUT FIELDS */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Eyebrow Badge Text
              </label>
              <input
                type="text"
                value={data.ctaBadge || "TECHNICAL CONSULTATION & FEASIBILITY"}
                onChange={(e) => updateField("ctaBadge", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-[#0056b3] focus:ring-2 focus:ring-[#0056b3]"
                placeholder="TECHNICAL CONSULTATION & FEASIBILITY"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Main Title
              </label>
              <input
                type="text"
                value={data.ctaTitle || "Let's Discuss Your Custom Mould Requirements"}
                onChange={(e) => updateField("ctaTitle", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Let's Discuss Your Custom Mould Requirements"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Description Paragraph
            </label>
            <textarea
              rows={2}
              value={
                data.ctaDescription ||
                "Share your product concept, specifications or tooling requirements with our team to start a technical discussion."
              }
              onChange={(e) => updateField("ctaDescription", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
              placeholder="Share your product concept, specifications or tooling requirements..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Button Label
              </label>
              <input
                type="text"
                value={data.ctaButtonText || "Discuss Your Mould Project"}
                onChange={(e) => updateField("ctaButtonText", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Discuss Your Mould Project"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Button Destination Link
              </label>
              <input
                type="text"
                value={data.ctaButtonLink || "/contact?subject=Custom+Mould+Solutions"}
                onChange={(e) => updateField("ctaButtonLink", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="/contact?subject=Custom+Mould+Solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
