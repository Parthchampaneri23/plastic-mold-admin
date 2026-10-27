"use client";

import React from "react";
import { ShieldCheck, Plus, Trash2 } from "lucide-react";

interface WhyUsSectionEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function WhyUsSectionEditor({ data, setData }: WhyUsSectionEditorProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 uppercase">
              Home Page &bull; Section 5
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Total: {data?.whyChooseUs?.length || 0} Proof Points
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#ff6b00]" />
            Why Patel Mould (6 Proof Points & Center Orbit)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage the 6 proof cards (01 to 06) and the central circular badge displayed on the website.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            const count = (data?.whyChooseUs?.length || 0) + 1;
            const newPoint = {
              id: `proof-${count}`,
              title: `New Proof Point`,
              description: `High precision tooling proof detail description`,
              iconName: "ShieldCheck",
              highlight: `±0.005mm Tolerance`,
            };
            setData({ ...data, whyChooseUs: [...(data.whyChooseUs || []), newPoint] });
          }}
          className="px-4 py-2 rounded-xl bg-[#0056b3] hover:bg-[#003d80] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-[#0056b3]/20 transition-all cursor-pointer self-start sm:self-auto shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add More Point</span>
        </button>
      </div>

      {/* Central Circle Badge Editor */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Central Orbit Badge (Middle Circular Display)
          </h3>
          <span className="text-xs font-semibold text-[#0056b3]">Center Radial Circle</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Center Metric Number
            </label>
            <input
              type="text"
              value={data?.whyChooseUsCenterNumber || "30+"}
              onChange={(e) => {
                setData({ ...data, whyChooseUsCenterNumber: e.target.value });
              }}
              placeholder="30+"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Center Label
            </label>
            <input
              type="text"
              value={data?.whyChooseUsCenterLabel || "YEARS OF EXPERIENCE"}
              onChange={(e) => {
                setData({ ...data, whyChooseUsCenterLabel: e.target.value });
              }}
              placeholder="YEARS OF EXPERIENCE"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Center Tagline
            </label>
            <input
              type="text"
              value={data?.whyChooseUsCenterTagline || "Precision Engineered. Performance Proven."}
              onChange={(e) => {
                setData({ ...data, whyChooseUsCenterTagline: e.target.value });
              }}
              placeholder="Precision Engineered. Performance Proven."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800"
            />
          </div>
        </div>
      </div>

      {/* 6 Proof Cards Layout Matching Website */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.whyChooseUs?.map((item: any, index: number) => {
          const numStr = String(index + 1).padStart(2, "0");
          return (
            <div
              key={item.id || index}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 relative group hover:border-[#0056b3] transition-colors"
            >
              {/* Top Header Row with Number matching website (01, 02, etc.) */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-2xl font-black text-slate-400 group-hover:text-[#0056b3] transition-colors">
                    {numStr}
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    Card #{index + 1}
                  </span>
                </div>

                {data.whyChooseUs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Delete Card #${numStr} (${item.title})?`)) {
                        const updated = data.whyChooseUs.filter((_: any, i: number) => i !== index);
                        setData({ ...data, whyChooseUs: updated });
                      }
                    }}
                    title="Delete card"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Title */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Proof Title
                </label>
                <input
                  type="text"
                  value={item.title || ""}
                  placeholder="e.g. Precision Manufacturing"
                  onChange={(e) => {
                    const updated = [...data.whyChooseUs];
                    updated[index].title = e.target.value;
                    setData({ ...data, whyChooseUs: updated });
                  }}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Description (One line summary)
                </label>
                <textarea
                  rows={2}
                  value={item.description || ""}
                  placeholder="e.g. ±0.005mm tolerance machining capability"
                  onChange={(e) => {
                    const updated = [...data.whyChooseUs];
                    updated[index].description = e.target.value;
                    setData({ ...data, whyChooseUs: updated });
                  }}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                />
              </div>

              {/* Bottom Accent line indicator matching website */}
              <div className="pt-2">
                <div className="h-[2px] w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-12 bg-[#ff6b00]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
