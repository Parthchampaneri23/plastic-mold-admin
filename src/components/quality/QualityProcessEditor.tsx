"use client";

import React from "react";
import { GitCommit, Plus, Trash2 } from "lucide-react";
import { IQualityProcess, IQualityProcessStage } from "@/models/QualityPageContent";

interface QualityProcessEditorProps {
  process: IQualityProcess;
  onChange: (process: IQualityProcess) => void;
}

export function QualityProcessEditor({ process, onChange }: QualityProcessEditorProps) {
  const current = process || {
    badge: "QUALITY CONTROL PROCESS",
    headingPart1: "Structured From",
    headingHighlight: "Ingot To Trial.",
    description: "",
    stages: [],
  };

  const handleUpdateStage = (
    index: number,
    field: keyof IQualityProcessStage,
    value: string
  ) => {
    const list = [...(current.stages || [])];
    list[index] = { ...list[index], [field]: value };
    onChange({ ...current, stages: list });
  };

  const handleAddStage = () => {
    const list = [...(current.stages || [])];
    const stepNum = String(list.length + 1).padStart(2, "0");
    list.push({
      step: stepNum,
      title: "New Process Stage",
      description: "Describe stage requirements and checks...",
      detail: "Key milestone detail or scope...",
      iconName: "CheckCircle2",
    });
    onChange({ ...current, stages: list });
  };

  const handleDeleteStage = (index: number) => {
    const list = (current.stages || []).filter((_, i) => i !== index);
    onChange({ ...current, stages: list });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
          <GitCommit className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            5-Stage Quality Control Process
          </h2>
          <p className="text-xs text-slate-500">
            Timeline connecting raw material inspection, design verification, in-process, final inspection, and mold testing.
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
            placeholder="QUALITY CONTROL PROCESS"
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
            placeholder="Structured From"
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
            placeholder="Ingot To Trial."
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
            placeholder="Our 5-stage quality process guides tooling through raw steel verification..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>
      </div>

      {/* Process Stages List */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">
            Timeline Stages ({current.stages?.length || 0})
          </h3>
          <button
            onClick={handleAddStage}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Stage</span>
          </button>
        </div>

        <div className="space-y-3">
          {(current.stages || []).map((stg, sIdx) => (
            <div
              key={sIdx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0056b3] font-mono">
                  Stage #{stg.step || `0${sIdx + 1}`}
                </span>
                <button
                  onClick={() => handleDeleteStage(sIdx)}
                  className="text-slate-400 hover:text-red-500 transition-colors p-1"
                  title="Delete stage"
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
                    value={stg.step || ""}
                    onChange={(e) => handleUpdateStage(sIdx, "step", e.target.value)}
                    placeholder="01"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs font-mono focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div className="md:col-span-3">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Stage Title
                  </label>
                  <input
                    type="text"
                    value={stg.title || ""}
                    onChange={(e) => handleUpdateStage(sIdx, "title", e.target.value)}
                    placeholder="e.g. Raw Material Inspection"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div className="md:col-span-4">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={stg.description || ""}
                    onChange={(e) => handleUpdateStage(sIdx, "description", e.target.value)}
                    placeholder="Verification of incoming tool steel billets..."
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div className="md:col-span-4">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Key Detail / Scope
                  </label>
                  <input
                    type="text"
                    value={stg.detail || ""}
                    onChange={(e) => handleUpdateStage(sIdx, "detail", e.target.value)}
                    placeholder="Grade confirmation, visual defect check..."
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

