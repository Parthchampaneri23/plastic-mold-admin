"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { IInfraHero } from "@/models/InfrastructurePageContent";
import { Sparkles, Layers } from "lucide-react";

interface Props {
  data: IInfraHero;
  onChange: (data: IInfraHero) => void;
}

export const InfrastructureHeroEditor: React.FC<Props> = ({ data, onChange }) => {
  const updateField = (field: keyof IInfraHero, val: any) => {
    onChange({ ...data, [field]: val });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              1. Hero Banner &amp; Breadcrumb
            </h3>
            <p className="text-xs text-slate-500">
              Customize the top facility hero background image, headline title, and breadcrumb tags.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <ImagePicker
            label="Facility Hero Background Image"
            value={data.imageSrc || "/infrastructure/facility-hero.jpg"}
            onChange={(url) => updateField("imageSrc", url)}
            description="Recommended: High-resolution plant/facility panorama (e.g. /infrastructure/facility-hero.jpg)"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Eyebrow Tag
              </label>
              <input
                type="text"
                value={data.eyebrow || "OUR INFRASTRUCTURE"}
                onChange={(e) => updateField("eyebrow", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#0056b3]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Main Hero Title
              </label>
              <input
                type="text"
                value={data.title || ""}
                onChange={(e) => updateField("title", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Breadcrumb Home Text
              </label>
              <input
                type="text"
                value={data.breadcrumbHome || "Home"}
                onChange={(e) => updateField("breadcrumbHome", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Breadcrumb Current Text
              </label>
              <input
                type="text"
                value={data.breadcrumbCurrent || "Infrastructure"}
                onChange={(e) => updateField("breadcrumbCurrent", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#0056b3]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
