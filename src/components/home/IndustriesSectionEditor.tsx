"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { Building, Plus, Trash2 } from "lucide-react";

interface IndustriesSectionEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function IndustriesSectionEditor({ data, setData }: IndustriesSectionEditorProps) {
  return (
    <div className="space-y-6">
      {/* Header Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 uppercase">
              Home Page &bull; Section 7
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Total: {data?.industries?.length || 0} Industry Sectors
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <Building className="w-5 h-5 text-[#ff6b00]" />
            Industries & Global Applications
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage the 6 industry cards (Packaging, Food & Beverage, Pharma, Personal Care, Containers, Chemical).
          </p>
        </div>

        <button
          onClick={() => {
            const count = (data?.industries?.length || 0) + 1;
            const newIndustry = {
              id: `industry-${count}`,
              name: "New Industry Sector",
              description: "Industrial container and packaging mold solutions.",
              image: "/industries/packaging-clean.jpg",
              link: "/industries",
            };
            setData({ ...data, industries: [...(data.industries || []), newIndustry] });
          }}
          className="px-4 py-2 rounded-xl bg-[#0056b3] hover:bg-[#003d80] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-[#0056b3]/20 transition-all cursor-pointer self-start sm:self-auto shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add More Industry</span>
        </button>
      </div>

      {/* 6 Industry Cards Grid Matching Website */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.industries?.map((ind: any, index: number) => (
          <div
            key={ind.id || index}
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#0056b3] transition-all duration-300 space-y-4 group"
          >
            {/* Header Row */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Industry #{index + 1}: {ind.name}
              </span>
              {data.industries.length > 1 && (
                <button
                  onClick={() => {
                    if (confirm(`Delete "${ind.name}"?`)) {
                      const updated = data.industries.filter((_: any, i: number) => i !== index);
                      setData({ ...data, industries: updated });
                    }
                  }}
                  title="Delete industry"
                  className="p-1 rounded text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Image Preview & Picker */}
            <div className="space-y-2">
              <div className="relative h-44 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner group/img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ind.image || "/industries/packaging-clean.jpg"}
                  alt={ind.name}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
              </div>
              <ImagePicker
                label="Industry Application Photo"
                value={ind.image || "/industries/packaging-clean.jpg"}
                onChange={(url) => {
                  const updated = [...data.industries];
                  updated[index].image = url;
                  setData({ ...data, industries: updated });
                }}
                helperText="Upload new photo or select from /industries/..."
              />
            </div>

            {/* Title & Explore Link */}
            <div className="space-y-2 pt-1">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Industry Name (Bottom Left Title)
                </label>
                <input
                  type="text"
                  value={ind.name || ""}
                  placeholder="e.g. Packaging"
                  onChange={(e) => {
                    const updated = [...data.industries];
                    updated[index].name = e.target.value;
                    setData({ ...data, industries: updated });
                  }}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Target Explore Link (e.g. /industries/packaging)
                </label>
                <input
                  type="text"
                  value={ind.link || "/industries"}
                  placeholder="/industries/packaging"
                  onChange={(e) => {
                    const updated = [...data.industries];
                    updated[index].link = e.target.value;
                    setData({ ...data, industries: updated });
                  }}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
