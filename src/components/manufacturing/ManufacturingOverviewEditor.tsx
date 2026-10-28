"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { IManufacturingOverview, IOverviewStat, ICapabilityHighlight } from "@/models/ManufacturingPageContent";
import { Plus, Trash2 } from "lucide-react";

interface Props {
  data: IManufacturingOverview;
  onChange: (data: IManufacturingOverview) => void;
}

export const ManufacturingOverviewEditor: React.FC<Props> = ({ data, onChange }) => {
  const updateField = (field: keyof IManufacturingOverview, val: any) => {
    onChange({ ...data, [field]: val });
  };

  const updateStat = (index: number, field: keyof IOverviewStat, val: string) => {
    const updated = [...(data.stats || [])];
    updated[index] = { ...updated[index], [field]: val };
    updateField("stats", updated);
  };

  const addStat = () => {
    const updated = [...(data.stats || []), { value: "100%", label: "New Stat", detail: "Description" }];
    updateField("stats", updated);
  };

  const removeStat = (index: number) => {
    const updated = (data.stats || []).filter((_, i) => i !== index);
    updateField("stats", updated);
  };

  const updateCapability = (index: number, field: keyof ICapabilityHighlight, val: string) => {
    const updated = [...(data.capabilities || [])];
    updated[index] = { ...updated[index], [field]: val };
    updateField("capabilities", updated);
  };

  return (
    <div className="space-y-6">
      {/* Editorial & Headings */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
          Editorial & Section Headings
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Controls the 2-column introduction, badge, and summary description of your toolroom.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Badge Eyebrow
            </label>
            <input
              type="text"
              value={data.badge || ""}
              onChange={(e) => updateField("badge", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
              placeholder="MANUFACTURING OVERVIEW"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Heading Line 1
              </label>
              <input
                type="text"
                value={data.heading || ""}
                onChange={(e) => updateField("heading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Precision Engineering."
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Heading Line 2 (Blue Highlight)
              </label>
              <input
                type="text"
                value={data.highlightHeading || ""}
                onChange={(e) => updateField("highlightHeading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Manufacturing Excellence."
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Manufacturing Summary Editorial Text
            </label>
            <textarea
              rows={3}
              value={data.summary || ""}
              onChange={(e) => updateField("summary", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
              placeholder="Every tooling phase—from metallurgical steel verification..."
            />
          </div>
        </div>
      </div>

      {/* Facility Image & Info Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
          Manufacturing Facility Presentation
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          The prominent facility presentation image and location card.
        </p>

        <div className="space-y-4">
          <ImagePicker
            label="Facility Showcase Image"
            value={data.facilityImage || ""}
            onChange={(url) => updateField("facilityImage", url)}
            description="Recommended: High-resolution plant photo (e.g. /About/FACILITY.png)"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Facility Location Label
              </label>
              <input
                type="text"
                value={data.facilityLocation || ""}
                onChange={(e) => updateField("facilityLocation", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Precision Mould Park, Phase-IV GIDC, Gujarat"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Facility Size Badge
              </label>
              <input
                type="text"
                value={data.facilityTag || ""}
                onChange={(e) => updateField("facilityTag", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="15,000 m² Plant"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Infrastructure Title
              </label>
              <input
                type="text"
                value={data.infrastructureTitle || ""}
                onChange={(e) => updateField("infrastructureTitle", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="End-to-End Toolroom Infrastructure"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Infrastructure Description
              </label>
              <input
                type="text"
                value={data.infrastructureDesc || ""}
                onChange={(e) => updateField("infrastructureDesc", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Our plant integrates dedicated machining cells and metrology labs..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4 Interactive Capabilities */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
          Toolroom Capability Highlights (4 Cards)
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Hovering or tapping these cards dynamically updates the bottom preview panel over the facility image.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(data.capabilities || []).map((cap, i) => (
            <div key={cap.id || i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0056b3] uppercase tracking-wide">
                  Card #{i + 1} ({cap.id})
                </span>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  value={cap.title || ""}
                  onChange={(e) => updateCapability(i, "title", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Card Description</label>
                <textarea
                  rows={2}
                  value={cap.cardDesc || ""}
                  onChange={(e) => updateCapability(i, "cardDesc", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Hover Panel Description (Shown on Image)
                </label>
                <input
                  type="text"
                  value={cap.panelDesc || ""}
                  onChange={(e) => updateCapability(i, "panelDesc", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Stats Counter Strip */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Toolroom Overview Statistics (4 Strip Counters)
            </h3>
            <p className="text-xs text-slate-500">
              Animated counter strip displayed under the overview section.
            </p>
          </div>
          <button
            type="button"
            onClick={addStat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-[#0056b3] hover:bg-blue-100 text-xs font-semibold transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Stat</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(data.stats || []).map((st, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 relative">
              <button
                type="button"
                onClick={() => removeStat(i)}
                className="absolute top-2 right-2 text-slate-400 hover:text-red-500 p-1"
                title="Remove Stat"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase">Value</label>
                <input
                  type="text"
                  value={st.value || ""}
                  onChange={(e) => updateStat(i, "value", e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-md border border-slate-200 text-xs font-bold text-[#0056b3]"
                  placeholder="30+"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase">Label</label>
                <input
                  type="text"
                  value={st.label || ""}
                  onChange={(e) => updateStat(i, "label", e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-md border border-slate-200 text-xs font-semibold text-slate-800"
                  placeholder="Years Experience"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase">Detail Note</label>
                <input
                  type="text"
                  value={st.detail || ""}
                  onChange={(e) => updateStat(i, "detail", e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-md border border-slate-200 text-[11px] text-slate-600"
                  placeholder="Tooling mastery established since 1994"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
