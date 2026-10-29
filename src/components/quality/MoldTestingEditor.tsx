"use client";

import React from "react";
import { Wrench, Plus, Trash2 } from "lucide-react";
import {
  IMoldTestingSection,
  IMoldTestingStep,
} from "@/models/QualityPageContent";

interface MoldTestingEditorProps {
  moldTesting: IMoldTestingSection;
  onChange: (moldTesting: IMoldTestingSection) => void;
}

export function MoldTestingEditor({ moldTesting, onChange }: MoldTestingEditorProps) {
  const current = moldTesting || {
    badge: "MOULD TESTING JOURNEY",
    headingPart1: "From Initial Dry Cycle To",
    headingHighlight: "Trial Validation.",
    description: "",
    steps: [],
  };

  const handleUpdateStep = (
    index: number,
    field: keyof IMoldTestingStep,
    value: string
  ) => {
    const list = [...(current.steps || [])];
    list[index] = { ...list[index], [field]: value };
    onChange({ ...current, steps: list });
  };

  const handleAddStep = () => {
    const list = [...(current.steps || [])];
    const stepNum = String(list.length + 1).padStart(2, "0");
    list.push({
      step: stepNum,
      phase: `Phase ${list.length + 1}`,
      title: "New Testing Step",
      description: "Describe testing procedure and dry cycling checks...",
      keyAction: "Key action or verification parameter...",
      iconName: "Activity",
    });
    onChange({ ...current, steps: list });
  };

  const handleDeleteStep = (index: number) => {
    const list = (current.steps || []).filter((_, i) => i !== index);
    onChange({ ...current, steps: list });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
          <Wrench className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Mould Testing Journey (Dry Cycle to Trial)
          </h2>
          <p className="text-xs text-slate-500">
            Manage Phase 1 Setup &amp; Preparation, Phase 2 Trial &amp; Performance Checks, and Phase 3 Review &amp; Refinement.
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
            placeholder="MOULD TESTING JOURNEY"
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
            placeholder="From Initial Dry Cycle To"
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
            placeholder="Trial Validation."
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
            placeholder="Mould testing evaluates mechanical actuation, slide timing, cooling balance..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>
      </div>

      {/* Steps List */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">
            Testing Steps ({current.steps?.length || 0})
          </h3>
          <button
            onClick={handleAddStep}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Step</span>
          </button>
        </div>

        <div className="space-y-3">
          {(current.steps || []).map((stp, sIdx) => (
            <div
              key={stp.step || sIdx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0056b3] font-mono">
                  {stp.phase || `Phase ${sIdx + 1}`} &bull; Step #{stp.step || `0${sIdx + 1}`}
                </span>
                <button
                  onClick={() => handleDeleteStep(sIdx)}
                  className="text-slate-400 hover:text-red-500 transition-colors p-1"
                  title="Delete step"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Step Number
                  </label>
                  <input
                    type="text"
                    value={stp.step || ""}
                    onChange={(e) => handleUpdateStep(sIdx, "step", e.target.value)}
                    placeholder="01"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs font-mono focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Phase Label
                  </label>
                  <input
                    type="text"
                    value={stp.phase || ""}
                    onChange={(e) => handleUpdateStep(sIdx, "phase", e.target.value)}
                    placeholder="Phase 1"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={stp.title || ""}
                    onChange={(e) => handleUpdateStep(sIdx, "title", e.target.value)}
                    placeholder="e.g. Setup & Preparation"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div className="md:col-span-4">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={stp.description || ""}
                    onChange={(e) => handleUpdateStep(sIdx, "description", e.target.value)}
                    placeholder="Prepare the mould assembly, verify machine platen compatibility..."
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div className="md:col-span-4">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Key Action
                  </label>
                  <input
                    type="text"
                    value={stp.keyAction || ""}
                    onChange={(e) => handleUpdateStep(sIdx, "keyAction", e.target.value)}
                    placeholder="Platen sizing, cooling circuit leak checks, and initial dry stroke inspection."
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

