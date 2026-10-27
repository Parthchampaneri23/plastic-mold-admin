"use client";

import React from "react";
import { Sparkles, Award } from "lucide-react";
import { ImagePicker } from "@/components/ui/ImagePicker";

interface CompanyStrengthEditorProps {
  aboutData: any;
  setAboutData: (data: any) => void;
}

export default function CompanyStrengthEditor({ aboutData, setAboutData }: CompanyStrengthEditorProps) {
  const cs = aboutData?.companyStrength || {
    badge: "OUR STRENGTH",
    heading: "Built on Experience.",
    highlightHeading: "Powered by Expertise.",
    description: "Over three decades of specialized mold making crafted into four core pillars of tooling superiority.",
    image: "/About/Aboutstrenght.png",
    strengths: [],
  };

  const updateCS = (field: string, val: any) => {
    setAboutData({
      ...aboutData,
      companyStrength: {
        ...cs,
        [field]: val,
      },
    });
  };

  const updateStrength = (index: number, field: string, val: string) => {
    const list = [...(cs.strengths || [])];
    list[index] = { ...list[index], [field]: val };
    updateCS("strengths", list);
  };

  return (
    <div className="space-y-8">
      {/* Header Info Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#0056b3]/10 text-[#0056b3] border border-[#0056b3]/20 uppercase">
              About Page &bull; Section 4
            </span>
            <span className="text-xs text-slate-500 font-medium">Core Advantages &amp; 4 Verified Pillars</span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#ff6b00]" />
            Company Strengths &amp; 4 Pillars
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage the section title, description, featured factory photo, and the 4 interactive engineering advantage pillars.
          </p>
        </div>
      </div>

      {/* Main Section Header */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#ff6b00]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Section Header &amp; Top Description
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Badge Eyebrow
            </label>
            <input
              type="text"
              value={cs.badge ?? "OUR STRENGTH"}
              onChange={(e) => updateCS("badge", e.target.value)}
              placeholder="OUR STRENGTH"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Heading Prefix
            </label>
            <input
              type="text"
              value={cs.heading ?? "Built on Experience."}
              onChange={(e) => updateCS("heading", e.target.value)}
              placeholder="Built on Experience."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Heading Highlight (Blue)
            </label>
            <input
              type="text"
              value={cs.highlightHeading ?? "Powered by Expertise."}
              onChange={(e) => updateCS("highlightHeading", e.target.value)}
              placeholder="Powered by Expertise."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
            Section Description
          </label>
          <textarea
            rows={2}
            value={cs.description ?? "Over three decades of specialized mold making crafted into four core pillars of tooling superiority."}
            onChange={(e) => updateCS("description", e.target.value)}
            placeholder="Over three decades of specialized mold making crafted into four core pillars of tooling superiority."
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
          />
        </div>

        {/* Featured Strength Image */}
        <div className="pt-2 border-t border-slate-100">
          <ImagePicker
            label="Featured Toolroom / Plant Image (Left Side Photo)"
            value={cs.image || "/About/Aboutstrenght.png"}
            onChange={(val) => updateCS("image", val)}
          />
        </div>
      </div>

      {/* 4 Pillars Cards */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#ff6b00]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            4 Strength Pillars (Experience, Team, Tech, Capability)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {(cs.strengths || []).map((item: any, idx: number) => (
            <div key={item.id || idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black text-[#0056b3]">PILLAR {item.num || `0${idx + 1}`}</span>
                <span className="text-xs font-mono font-bold text-[#ff6b00]">{item.metric}</span>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase">Title</label>
                <input
                  type="text"
                  value={item.title || ""}
                  onChange={(e) => updateStrength(idx, "title", e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase">Metric Value</label>
                  <input
                    type="text"
                    value={item.metric || ""}
                    onChange={(e) => updateStrength(idx, "metric", e.target.value)}
                    className="w-full px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase">Metric Label</label>
                  <input
                    type="text"
                    value={item.metricLabel || ""}
                    onChange={(e) => updateStrength(idx, "metricLabel", e.target.value)}
                    className="w-full px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase">Detailed Description</label>
                <textarea
                  rows={2}
                  value={item.description || ""}
                  onChange={(e) => updateStrength(idx, "description", e.target.value)}
                  className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 leading-snug"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
