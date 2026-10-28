"use client";

import React, { useState } from "react";
import {
  IMoldManufacturingProcess,
  IManufacturingStage,
} from "@/models/ManufacturingPageContent";
import { Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";

interface Props {
  data: IMoldManufacturingProcess;
  onChange: (data: IMoldManufacturingProcess) => void;
}

export const ManufacturingProcessEditor: React.FC<Props> = ({ data, onChange }) => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const updateField = (field: keyof IMoldManufacturingProcess, val: any) => {
    onChange({ ...data, [field]: val });
  };

  const currentStage = (data.stages || [])[activeStageIndex];

  const updateCurrentStage = (field: keyof IManufacturingStage, val: any) => {
    const updatedStages = [...(data.stages || [])];
    updatedStages[activeStageIndex] = { ...updatedStages[activeStageIndex], [field]: val };
    updateField("stages", updatedStages);
  };

  const updateActivities = (text: string) => {
    const activities = text.split("\n").filter((a) => a.trim().length > 0);
    updateCurrentStage("activities", activities);
  };

  const addStage = () => {
    const stepNum = (data.stages?.length || 0) + 1;
    const formattedStep = stepNum < 10 ? `0${stepNum}` : `${stepNum}`;
    const newStage: IManufacturingStage = {
      step: formattedStep,
      title: "New Manufacturing Stage",
      subtitle: "Stage Subtitle",
      description: "Detailed description of manufacturing activities in this stage.",
      activities: ["Activity 1", "Activity 2"],
      deliverable: "Deliverable Certificate",
      toolingAspect: "Key tooling focus and machinery used",
      tag: "Toolroom Bay",
    };
    const updated = [...(data.stages || []), newStage];
    updateField("stages", updated);
    setActiveStageIndex(updated.length - 1);
  };

  const removeStage = (index: number) => {
    if ((data.stages || []).length <= 1) return;
    const updated = (data.stages || []).filter((_, i) => i !== index);
    updateField("stages", updated);
    if (activeStageIndex >= updated.length) {
      setActiveStageIndex(Math.max(0, updated.length - 1));
    }
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
          Manufacturing Process Section Header
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Controls the heading, subtitle and badge above the 9-stage milestone process.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Badge</label>
            <input
              type="text"
              value={data.badge || ""}
              onChange={(e) => updateField("badge", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
              placeholder="9-STAGE MANUFACTURING PROCESS"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Heading Prefix</label>
              <input
                type="text"
                value={data.heading || ""}
                onChange={(e) => updateField("heading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Our Step-by-Step"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Heading Highlight (Blue)
              </label>
              <input
                type="text"
                value={data.highlightHeading || ""}
                onChange={(e) => updateField("highlightHeading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Mould Making Process"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Description</label>
            <textarea
              rows={2}
              value={data.description || ""}
              onChange={(e) => updateField("description", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
            />
          </div>
        </div>
      </div>

      {/* 9 Stages Management */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Toolroom Process Stages ({data.stages?.length || 0} Stages)
            </h3>
            <p className="text-xs text-slate-500">
              Select any stage below to edit its title, activities list, deliverables, and tooling focus.
            </p>
          </div>
          <button
            type="button"
            onClick={addStage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-[#0056b3] hover:bg-blue-100 text-xs font-semibold transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Stage</span>
          </button>
        </div>

        {/* Stage selection tabs */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-1.5 mb-6 p-1.5 rounded-xl bg-slate-100 border border-slate-200">
          {(data.stages || []).map((st, idx) => (
            <button
              key={st.step || idx}
              type="button"
              onClick={() => setActiveStageIndex(idx)}
              className={`py-2 px-2 rounded-lg text-center transition-all ${
                activeStageIndex === idx
                  ? "bg-[#0056b3] text-white shadow-xs font-bold"
                  : "bg-white text-slate-700 hover:text-slate-900 font-medium"
              }`}
            >
              <div className="text-[10px] font-mono opacity-80">{st.step || `0${idx + 1}`}</div>
              <div className="text-xs truncate">{st.title.split(" ")[0]}</div>
            </button>
          ))}
        </div>

        {currentStage && (
          <div className="space-y-4 border-t border-slate-100 pt-5">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-bold text-[#0056b3] uppercase tracking-wide">
                Stage {currentStage.step}: {currentStage.title}
              </span>
              {(data.stages || []).length > 1 && (
                <button
                  type="button"
                  onClick={() => removeStage(activeStageIndex)}
                  className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Stage</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Step Number</label>
                <input
                  type="text"
                  value={currentStage.step || ""}
                  onChange={(e) => updateCurrentStage("step", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-mono font-bold"
                  placeholder="01"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Stage Title</label>
                <input
                  type="text"
                  value={currentStage.title || ""}
                  onChange={(e) => updateCurrentStage("title", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Subtitle</label>
                <input
                  type="text"
                  value={currentStage.subtitle || ""}
                  onChange={(e) => updateCurrentStage("subtitle", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Category Tag</label>
                <input
                  type="text"
                  value={currentStage.tag || ""}
                  onChange={(e) => updateCurrentStage("tag", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Stage Summary</label>
              <textarea
                rows={2}
                value={currentStage.description || ""}
                onChange={(e) => updateCurrentStage("description", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Deliverable</label>
                <input
                  type="text"
                  value={currentStage.deliverable || ""}
                  onChange={(e) => updateCurrentStage("deliverable", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-[#0056b3] focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Tooling Aspect Note</label>
                <input
                  type="text"
                  value={currentStage.toolingAspect || ""}
                  onChange={(e) => updateCurrentStage("toolingAspect", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Activities & Process Checkpoints (One per line)
              </label>
              <textarea
                rows={4}
                value={(currentStage.activities || []).join("\n")}
                onChange={(e) => updateActivities(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-mono focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Activity 1&#10;Activity 2&#10;Activity 3"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
