"use client";

import React from "react";
import { IInfraCta } from "@/models/InfrastructurePageContent";
import { MessageSquare } from "lucide-react";

interface Props {
  data: IInfraCta;
  onChange: (data: IInfraCta) => void;
}

export const InfrastructureCtaEditor: React.FC<Props> = ({ data, onChange }) => {
  const updateField = (field: keyof IInfraCta, val: any) => {
    onChange({ ...data, [field]: val });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              11. Manufacturing Partnership CTA
            </h3>
            <p className="text-xs text-slate-500">
              Customize the bottom partnership banner, contact details, quote button, and right-hand consultation box.
            </p>
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Badge</label>
              <input
                type="text"
                value={data.badge || "MANUFACTURING PARTNERSHIP"}
                onChange={(e) => updateField("badge", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#0056b3]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Title</label>
              <input
                type="text"
                value={data.title || ""}
                onChange={(e) => updateField("title", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Description Paragraph</label>
            <textarea
              rows={2}
              value={data.description || ""}
              onChange={(e) => updateField("description", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Location Label</label>
              <input
                type="text"
                value={data.location || ""}
                onChange={(e) => updateField("location", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email Label</label>
              <input
                type="text"
                value={data.email || ""}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Label</label>
              <input
                type="text"
                value={data.phone || ""}
                onChange={(e) => updateField("phone", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Box Header</label>
              <input
                type="text"
                value={data.boxTitle || ""}
                onChange={(e) => updateField("boxTitle", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Box Badge Pill</label>
              <input
                type="text"
                value={data.boxBadge || ""}
                onChange={(e) => updateField("boxBadge", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#ff6b00]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Box Description</label>
            <textarea
              rows={2}
              value={data.boxDescription || ""}
              onChange={(e) => updateField("boxDescription", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Button Text</label>
              <input
                type="text"
                value={data.buttonText || ""}
                onChange={(e) => updateField("buttonText", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Button Link</label>
              <input
                type="text"
                value={data.buttonLink || ""}
                onChange={(e) => updateField("buttonLink", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
