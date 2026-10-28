"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { IManufacturingHero } from "@/models/ManufacturingPageContent";

interface Props {
  data: IManufacturingHero;
  onChange: (data: IManufacturingHero) => void;
}

export const ManufacturingHeroEditor: React.FC<Props> = ({ data, onChange }) => {
  const updateField = (field: keyof IManufacturingHero, val: string) => {
    onChange({ ...data, [field]: val });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
          Hero Banner Configuration
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Customize the manufacturing top hero banner background, heading titles, and breadcrumb tags.
        </p>

        <div className="space-y-5">
          <ImagePicker
            label="Hero Banner Image"
            value={data.bannerImage || ""}
            onChange={(url) => updateField("bannerImage", url)}
            description="Recommended: 1920x600 resolution (e.g. /manufacturing/manufacturing banner.png)"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Badge / Tag Text
              </label>
              <input
                type="text"
                value={data.badge || ""}
                onChange={(e) => updateField("badge", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                placeholder="MANUFACTURING CAPABILITIES"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Breadcrumb Current Page Text
              </label>
              <input
                type="text"
                value={data.breadcrumbCurrent || ""}
                onChange={(e) => updateField("breadcrumbCurrent", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                placeholder="Manufacturing"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Title Prefix (White Text)
              </label>
              <input
                type="text"
                value={data.titlePrefix || ""}
                onChange={(e) => updateField("titlePrefix", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                placeholder="Manufacturing "
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Title Highlight (Gradient Accent)
              </label>
              <input
                type="text"
                value={data.titleHighlight || ""}
                onChange={(e) => updateField("titleHighlight", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                placeholder="Capabilities"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
