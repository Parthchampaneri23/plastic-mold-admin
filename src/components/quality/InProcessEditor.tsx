"use client";

import React from "react";
import { Activity, Plus, Trash2 } from "lucide-react";
import {
  IInProcessSection,
  IInProcessCheckpoint,
} from "@/models/QualityPageContent";

interface InProcessEditorProps {
  inProcess: IInProcessSection;
  onChange: (inProcess: IInProcessSection) => void;
}

export function InProcessEditor({ inProcess, onChange }: InProcessEditorProps) {
  const current = inProcess || {
    badge: "IN-PROCESS QUALITY DASHBOARD",
    headingPart1: "Inspection Throughout",
    headingHighlight: "Production.",
    description: "",
    checkpointsTitle: "Production Quality Checkpoints",
    checkpointsSubtitle: "Key inspection stages during mould manufacturing",
    checkpoints: [],
  };

  const handleUpdateCheckpoint = (
    index: number,
    field: keyof IInProcessCheckpoint,
    value: string
  ) => {
    const list = [...(current.checkpoints || [])];
    list[index] = { ...list[index], [field]: value };
    onChange({ ...current, checkpoints: list });
  };

  const handleAddCheckpoint = () => {
    const list = [...(current.checkpoints || [])];
    const newId = `checkpoint-${Date.now()}`;
    list.push({
      id: newId,
      title: "New Checkpoint",
      stage: "Production Stage",
      focus: "Critical dimensions and fitment",
      method: "CMM / Dial Bore Gauge",
      iconName: "Crosshair",
    });
    onChange({ ...current, checkpoints: list });
  };

  const handleDeleteCheckpoint = (index: number) => {
    const list = (current.checkpoints || []).filter((_, i) => i !== index);
    onChange({ ...current, checkpoints: list });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
          <Activity className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            In-Process Quality Dashboard
          </h2>
          <p className="text-xs text-slate-500">
            Manage stage-wise machining accuracy, fitment verification, surface inspection, and cooling circuit test cards.
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
            placeholder="IN-PROCESS QUALITY DASHBOARD"
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
            placeholder="Inspection Throughout"
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
            placeholder="Production."
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
            placeholder="Inspection takes place at appropriate manufacturing stages to identify deviations early..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Dashboard Title
          </label>
          <input
            type="text"
            value={current.checkpointsTitle || ""}
            onChange={(e) => onChange({ ...current, checkpointsTitle: e.target.value })}
            placeholder="Production Quality Checkpoints"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Dashboard Subtitle
          </label>
          <input
            type="text"
            value={current.checkpointsSubtitle || ""}
            onChange={(e) => onChange({ ...current, checkpointsSubtitle: e.target.value })}
            placeholder="Key inspection stages during mould manufacturing"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>
      </div>

      {/* Checkpoints List */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">
            Checkpoints ({current.checkpoints?.length || 0})
          </h3>
          <button
            onClick={handleAddCheckpoint}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Checkpoint</span>
          </button>
        </div>

        <div className="space-y-3">
          {(current.checkpoints || []).map((cp, cIdx) => (
            <div
              key={cp.id || cIdx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0056b3] font-mono">
                  Checkpoint #{cIdx + 1}
                </span>
                <button
                  onClick={() => handleDeleteCheckpoint(cIdx)}
                  className="text-slate-400 hover:text-red-500 transition-colors p-1"
                  title="Delete checkpoint"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Checkpoint Title
                  </label>
                  <input
                    type="text"
                    value={cp.title || ""}
                    onChange={(e) => handleUpdateCheckpoint(cIdx, "title", e.target.value)}
                    placeholder="e.g. Machining Accuracy"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Stage Tag
                  </label>
                  <input
                    type="text"
                    value={cp.stage || ""}
                    onChange={(e) => handleUpdateCheckpoint(cIdx, "stage", e.target.value)}
                    placeholder="e.g. CNC & Wire EDM"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Inspection Focus
                  </label>
                  <input
                    type="text"
                    value={cp.focus || ""}
                    onChange={(e) => handleUpdateCheckpoint(cIdx, "focus", e.target.value)}
                    placeholder="e.g. Sub-micron cavity depths and pitch tolerances"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Inspection Method / Tool
                  </label>
                  <input
                    type="text"
                    value={cp.method || ""}
                    onChange={(e) => handleUpdateCheckpoint(cIdx, "method", e.target.value)}
                    placeholder="e.g. Coordinate probes & digital height gauges"
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

