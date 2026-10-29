"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { Layers, Plus, Trash2 } from "lucide-react";
import {
  IRawMaterialSection,
  IMaterialInspectionCheck,
} from "@/models/QualityPageContent";

interface RawMaterialEditorProps {
  rawMaterial: IRawMaterialSection;
  onChange: (rawMaterial: IRawMaterialSection) => void;
}

export function RawMaterialEditor({ rawMaterial, onChange }: RawMaterialEditorProps) {
  const current = rawMaterial || {
    badge: "RAW MATERIAL VERIFICATION",
    headingPart1: "Quality Starts With",
    headingHighlight: "The Material.",
    description: "",
    image: "/quality/raw-material-steel-inspection.jpg",
    checksHeading: "Raw Material Verification Gateways",
    checks: [],
  };

  const handleUpdateCheck = (
    index: number,
    field: keyof IMaterialInspectionCheck,
    value: string
  ) => {
    const list = [...(current.checks || [])];
    list[index] = { ...list[index], [field]: value };
    onChange({ ...current, checks: list });
  };

  const handleAddCheck = () => {
    const list = [...(current.checks || [])];
    list.push({
      title: "New Material Inspection Check",
      scope: "Tool Steel & Plates",
      criteria: "Describe verification criteria and standards...",
      iconName: "Tag",
    });
    onChange({ ...current, checks: list });
  };

  const handleDeleteCheck = (index: number) => {
    const list = (current.checks || []).filter((_, i) => i !== index);
    onChange({ ...current, checks: list });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Raw Material Inspection &amp; Tool Steel Checks
          </h2>
          <p className="text-xs text-slate-500">
            Configure steel grade verification, mill certificate review, surface checks, and incoming stock allowances.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Section Badge
          </label>
          <input
            type="text"
            value={current.badge || ""}
            onChange={(e) => onChange({ ...current, badge: e.target.value })}
            placeholder="RAW MATERIAL VERIFICATION"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Heading Part 1
          </label>
          <input
            type="text"
            value={current.headingPart1 || ""}
            onChange={(e) => onChange({ ...current, headingPart1: e.target.value })}
            placeholder="Quality Starts With"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Heading Highlight (Blue Text)
          </label>
          <input
            type="text"
            value={current.headingHighlight || ""}
            onChange={(e) => onChange({ ...current, headingHighlight: e.target.value })}
            placeholder="The Material."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Description
          </label>
          <textarea
            rows={3}
            value={current.description || ""}
            onChange={(e) => onChange({ ...current, description: e.target.value })}
            placeholder="Sound mould tooling relies upon certified, uniform tool steel..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Checks List Heading
          </label>
          <input
            type="text"
            value={current.checksHeading || ""}
            onChange={(e) => onChange({ ...current, checksHeading: e.target.value })}
            placeholder="Raw Material Verification Gateways"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <ImagePicker
            label="Raw Material Inspection Photo"
            value={current.image || ""}
            onChange={(val) => onChange({ ...current, image: val })}
            helperText="Upload or enter steel inspection photo path"
          />
        </div>
      </div>

      {/* Material Checks List */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">
            Material Inspection Checks ({current.checks?.length || 0})
          </h3>
          <button
            onClick={handleAddCheck}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Check</span>
          </button>
        </div>

        <div className="space-y-3">
          {(current.checks || []).map((chk, cIdx) => (
            <div
              key={cIdx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0056b3] font-mono">
                  Gateway #{cIdx + 1}
                </span>
                <button
                  onClick={() => handleDeleteCheck(cIdx)}
                  className="text-slate-400 hover:text-red-500 transition-colors p-1"
                  title="Delete check"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Check Title
                  </label>
                  <input
                    type="text"
                    value={chk.title || ""}
                    onChange={(e) => handleUpdateCheck(cIdx, "title", e.target.value)}
                    placeholder="e.g. Material Grade Verification"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Scope Tag
                  </label>
                  <input
                    type="text"
                    value={chk.scope || ""}
                    onChange={(e) => handleUpdateCheck(cIdx, "scope", e.target.value)}
                    placeholder="e.g. Tool Steel & Plates"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Verification Criteria
                  </label>
                  <input
                    type="text"
                    value={chk.criteria || ""}
                    onChange={(e) => handleUpdateCheck(cIdx, "criteria", e.target.value)}
                    placeholder="Confirmation of specified steel grades..."
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

