"use client";

import React from "react";
import { Sparkles, Factory, Layers } from "lucide-react";
import { ImagePicker } from "@/components/ui/ImagePicker";

interface AboutInfrastructureEditorProps {
  aboutData: any;
  setAboutData: (data: any) => void;
}

export default function AboutInfrastructureEditor({
  aboutData,
  setAboutData,
}: AboutInfrastructureEditorProps) {
  const infra = aboutData?.infrastructure || {
    badge: "OUR INFRASTRUCTURE",
    heading: "Where Precision",
    highlightHeading: "Takes Shape.",
    description: "Our 15,000 m² integrated tooling facility is designed for precision, efficiency, and multi-cavitation manufacturing.",
    image: "/About/FACILITY.png",
    items: [],
  };

  const updateInfra = (field: string, val: any) => {
    setAboutData({
      ...aboutData,
      infrastructure: {
        ...infra,
        [field]: val,
      },
    });
  };

  const updateItem = (index: number, field: string, val: string) => {
    const list = [...(infra.items || [])];
    list[index] = { ...list[index], [field]: val };
    updateInfra("items", list);
  };

  return (
    <div className="space-y-8">
      {/* Header Info Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#0056b3]/10 text-[#0056b3] border border-[#0056b3]/20 uppercase">
              About Page &bull; Section 5
            </span>
            <span className="text-xs text-slate-500 font-medium">Toolroom Plant, CNC, EDM &amp; Assembly Labs</span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <Factory className="w-5 h-5 text-[#0056b3]" />
            About Page Infrastructure
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage the section titles, main facility photo, and the 5 interactive category departments (Facility, CNC, EDM, Fitting, Metrology).
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
              value={infra.badge ?? "OUR INFRASTRUCTURE"}
              onChange={(e) => updateInfra("badge", e.target.value)}
              placeholder="OUR INFRASTRUCTURE"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Heading Prefix
            </label>
            <input
              type="text"
              value={infra.heading ?? "Where Precision"}
              onChange={(e) => updateInfra("heading", e.target.value)}
              placeholder="Where Precision"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Heading Highlight (Blue)
            </label>
            <input
              type="text"
              value={infra.highlightHeading ?? "Takes Shape."}
              onChange={(e) => updateInfra("highlightHeading", e.target.value)}
              placeholder="Takes Shape."
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
            value={infra.description ?? "Our 15,000 m² integrated tooling facility is designed for precision, efficiency, and multi-cavitation manufacturing."}
            onChange={(e) => updateInfra("description", e.target.value)}
            placeholder="Our 15,000 m² integrated tooling facility is designed for precision, efficiency, and multi-cavitation manufacturing."
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
          />
        </div>

        {/* Featured Facility Image */}
        <div className="pt-2 border-t border-slate-100">
          <ImagePicker
            label="Main Infrastructure Facility Image (Left Display Photo)"
            value={infra.image || "/About/FACILITY.png"}
            onChange={(val) => updateInfra("image", val)}
          />
        </div>
      </div>

      {/* 5 Infrastructure Categories / Departments */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Layers className="w-4 h-4 text-[#0056b3]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            5 Interactive Category Tabs (Facility, CNC, EDM, Fitting, Metrology)
          </h3>
        </div>

        <div className="space-y-4">
          {(infra.items || []).map((item: any, idx: number) => (
            <div
              key={item.id || idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black text-[#0056b3]">
                  CATEGORY {item.num || `0${idx + 1}`}
                </span>
                <span className="text-[11px] font-mono font-semibold text-slate-500">
                  {item.tag || `0${idx + 1} — AREA`}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-4 space-y-1">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase">
                    Tab Nav Title
                  </label>
                  <input
                    type="text"
                    value={item.navTitle || ""}
                    placeholder="e.g. FACILITY"
                    onChange={(e) => updateItem(idx, "navTitle", e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
                  />
                </div>

                <div className="md:col-span-4 space-y-1">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase">
                    Subtitle Header
                  </label>
                  <input
                    type="text"
                    value={item.subtitle || ""}
                    placeholder="e.g. Integrated Manufacturing Environment"
                    onChange={(e) => updateItem(idx, "subtitle", e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
                  />
                </div>

                <div className="md:col-span-4 space-y-1">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase">
                    Overlay Tag
                  </label>
                  <input
                    type="text"
                    value={item.tag || ""}
                    placeholder="e.g. 01 — MAIN TOOLROOM COMPLEX"
                    onChange={(e) => updateItem(idx, "tag", e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase">
                  Description
                </label>
                <textarea
                  rows={2}
                  value={item.description || ""}
                  placeholder="Technical area details..."
                  onChange={(e) => updateItem(idx, "description", e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 leading-snug focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

