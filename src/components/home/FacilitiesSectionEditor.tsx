"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { Building2, Plus, Trash2 } from "lucide-react";

interface FacilitiesSectionEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function FacilitiesSectionEditor({ data, setData }: FacilitiesSectionEditorProps) {
  return (
    <div className="space-y-6">
      {/* Header Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 uppercase">
              Home Page &bull; Section 6
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Total: {data?.facilities?.length || 0} Facilities
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#ff6b00]" />
            Infrastructure & Modern Machinery
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage the 4 facility workshop showcase cards with photo previews and target explore links.
          </p>
        </div>

        <button
          onClick={() => {
            const count = (data?.facilities?.length || 0) + 1;
            const newFacility = {
              id: `facility-${count}`,
              title: "New Plant Facility Workshop",
              image: "/infrastructure/cnc-machining.jpg",
              link: "/infrastructure",
            };
            setData({ ...data, facilities: [...(data.facilities || []), newFacility] });
          }}
          className="px-4 py-2 rounded-xl bg-[#0056b3] hover:bg-[#003d80] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-[#0056b3]/20 transition-all cursor-pointer self-start sm:self-auto shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add More Facility</span>
        </button>
      </div>

      {/* Facility Cards Grid Matching Website */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.facilities?.map((fac: any, index: number) => (
          <div
            key={fac.id || index}
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-[#0056b3] transition-all duration-300 space-y-4 group"
          >
            {/* Header Row */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Facility #{index + 1}: {fac.title}
              </span>
              {data.facilities.length > 1 && (
                <button
                  onClick={() => {
                    if (confirm(`Delete "${fac.title}"?`)) {
                      const updated = data.facilities.filter((_: any, i: number) => i !== index);
                      setData({ ...data, facilities: updated });
                    }
                  }}
                  title="Delete facility"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Image Preview & Picker */}
            <div className="space-y-2">
              <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner group/img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={fac.image || "/infrastructure/cnc-machining.jpg"}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
              </div>
              <ImagePicker
                label="Facility Workshop Photo"
                value={fac.image || "/infrastructure/cnc-machining.jpg"}
                onChange={(url) => {
                  const updated = [...data.facilities];
                  updated[index].image = url;
                  setData({ ...data, facilities: updated });
                }}
                helperText="Upload new photo or select from /infrastructure/..."
              />
            </div>

            {/* Facility Title & Explore Button Link */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
              <div className="sm:col-span-8">
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Facility Title (Bottom Left Heading)
                </label>
                <input
                  type="text"
                  value={fac.title || ""}
                  placeholder="e.g. High-Speed CNC Machining Center"
                  onChange={(e) => {
                    const updated = [...data.facilities];
                    updated[index].title = e.target.value;
                    setData({ ...data, facilities: updated });
                  }}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                />
              </div>

              <div className="sm:col-span-4">
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Explore Link (Button)
                </label>
                <input
                  type="text"
                  value={fac.link || "/infrastructure"}
                  placeholder="/infrastructure#cnc"
                  onChange={(e) => {
                    const updated = [...data.facilities];
                    updated[index].link = e.target.value;
                    setData({ ...data, facilities: updated });
                  }}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
