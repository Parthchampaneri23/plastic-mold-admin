"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { CheckCircle2, Plus, Trash2 } from "lucide-react";
import {
  IFinalInspectionSection,
  IFinalChecklistItem,
} from "@/models/QualityPageContent";

interface FinalInspectionEditorProps {
  finalInspection: IFinalInspectionSection;
  onChange: (finalInspection: IFinalInspectionSection) => void;
}

export function FinalInspectionEditor({
  finalInspection,
  onChange,
}: FinalInspectionEditorProps) {
  const current = finalInspection || {
    badge: "PRE-DISPATCH VERIFICATION",
    headingPart1: "Every Detail Matters",
    headingHighlight: "Before Delivery.",
    description: "",
    image: "/quality/final-inspection-check.jpg",
    checklistHeading: "Pre-Dispatch Verification Checklist",
    items: [],
  };

  const handleUpdateItem = (
    index: number,
    field: keyof IFinalChecklistItem,
    value: string
  ) => {
    const list = [...(current.items || [])];
    list[index] = { ...list[index], [field]: value };
    onChange({ ...current, items: list });
  };

  const handleAddItem = () => {
    const list = [...(current.items || [])];
    const newId = `final-check-${Date.now()}`;
    list.push({
      id: newId,
      label: "New Checklist Item",
      description: "Describe pre-dispatch check...",
      verificationScope: "Documented against inspection report",
    });
    onChange({ ...current, items: list });
  };

  const handleDeleteItem = (index: number) => {
    const list = (current.items || []).filter((_, i) => i !== index);
    onChange({ ...current, items: list });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Final Pre-Dispatch Inspection &amp; Checklist
          </h2>
          <p className="text-xs text-slate-500">
            Manage the pre-dispatch section headline, photo, and 5-point verification checklist items.
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
            placeholder="PRE-DISPATCH VERIFICATION"
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
            placeholder="Every Detail Matters"
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
            placeholder="Before Delivery."
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
            placeholder="Final verification ensures that completed moulds, spare inserts, cooling interfaces..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Checklist Heading
          </label>
          <input
            type="text"
            value={current.checklistHeading || ""}
            onChange={(e) => onChange({ ...current, checklistHeading: e.target.value })}
            placeholder="Pre-Dispatch Verification Checklist"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <ImagePicker
            label="Final Inspection Photo"
            value={current.image || ""}
            onChange={(val) => onChange({ ...current, image: val })}
            helperText="Upload or enter final pre-dispatch photo path (e.g. /quality/final-inspection-check.jpg)"
          />
        </div>
      </div>

      {/* Checklist Items */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">
            Checklist Items ({current.items?.length || 0})
          </h3>
          <button
            onClick={handleAddItem}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Item</span>
          </button>
        </div>

        <div className="space-y-3">
          {(current.items || []).map((item, iIdx) => (
            <div
              key={item.id || iIdx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0056b3] font-mono">
                  Checklist Item #{iIdx + 1}
                </span>
                <button
                  onClick={() => handleDeleteItem(iIdx)}
                  className="text-slate-400 hover:text-red-500 transition-colors p-1"
                  title="Delete item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-1">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Label
                  </label>
                  <input
                    type="text"
                    value={item.label || ""}
                    onChange={(e) => handleUpdateItem(iIdx, "label", e.target.value)}
                    placeholder="e.g. Core-Cavity Alignment"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Verification Scope
                  </label>
                  <input
                    type="text"
                    value={item.verificationScope || ""}
                    onChange={(e) => handleUpdateItem(iIdx, "verificationScope", e.target.value)}
                    placeholder="e.g. Blue-match check & shut-off contact"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={item.description || ""}
                    onChange={(e) => handleUpdateItem(iIdx, "description", e.target.value)}
                    placeholder="Verification of parting line contact..."
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

