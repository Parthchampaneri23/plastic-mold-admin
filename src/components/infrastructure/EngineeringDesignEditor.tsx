"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { IInfraSection, IInfraHighlight, IInfraWorkflowStage } from "@/models/InfrastructurePageContent";
import { Laptop, Plus, Trash2 } from "lucide-react";

interface Props {
  data: IInfraSection;
  onChange: (data: IInfraSection) => void;
}

export const EngineeringDesignEditor: React.FC<Props> = ({ data, onChange }) => {
  const updateField = (field: keyof IInfraSection, val: any) => {
    onChange({ ...data, [field]: val });
  };

  const updateDescriptionText = (text: string) => {
    updateField("description", [text]);
  };

  const updateHighlight = (index: number, field: keyof IInfraHighlight, val: string) => {
    const list = [...(data.highlights || [])];
    list[index] = { ...list[index], [field]: val };
    updateField("highlights", list);
  };

  const addHighlight = () => {
    const nextIdx = (data.highlights?.length || 0) + 1;
    const list = [
      ...(data.highlights || []),
      {
        label: nextIdx < 10 ? `0${nextIdx}` : `${nextIdx}`,
        title: "New Deliverable Feature",
        description: "Mould design, coordination, or manufacturing preparation.",
      },
    ];
    updateField("highlights", list);
  };

  const removeHighlight = (index: number) => {
    const list = (data.highlights || []).filter((_, i) => i !== index);
    updateField("highlights", list);
  };

  const updateStage = (index: number, field: keyof IInfraWorkflowStage, val: string) => {
    const list = [...(data.stages || [])];
    list[index] = { ...list[index], [field]: val };
    updateField("stages", list);
  };

  const addStage = () => {
    const nextIdx = (data.stages?.length || 0) + 1;
    const list = [
      ...(data.stages || []),
      {
        step: nextIdx < 10 ? `0${nextIdx}` : `${nextIdx}`,
        title: "New Workflow Stage",
        description: "Stage description and engineering deliverables.",
      },
    ];
    updateField("stages", list);
  };

  const removeStage = (index: number) => {
    const list = (data.stages || []).filter((_, i) => i !== index);
    updateField("stages", list);
  };

  const highlights = data.highlights || [];
  const stages = data.stages || [];
  const descriptionText = data.description?.[0] || "";

  return (
    <div className="space-y-8">
      {/* ======================================================== */}
      {/* 0. SECTION HEADER & TOP INTRODUCTION                      */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-6">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            <Laptop className="w-4 h-4 text-[#ff6b00]" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              CAD / CAM FACILITY — Header &amp; Introduction
            </h3>
            <p className="text-xs text-slate-500">
              Manage the 2-column header layout matching the website (Eyebrow badge, Main Title, Subtitle, and Right Paragraph).
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {/* Eyebrow Badge Pill */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Top Eyebrow Badge
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ff6b00]" />
              <input
                type="text"
                value={data.badge || "CAD / CAM FACILITY"}
                onChange={(e) => updateField("badge", e.target.value)}
                className="w-full pl-8 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#0056b3] focus:ring-2 focus:ring-[#0056b3]"
                placeholder="CAD / CAM FACILITY"
              />
            </div>
          </div>

          {/* 2-Column Heading & Paragraph */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Main Heading
                </label>
                <input
                  type="text"
                  value={data.heading || "Engineering Design & Planning"}
                  onChange={(e) => updateField("heading", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-[#0056b3]"
                  placeholder="Engineering Design & Planning"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Subheading (Under Heading)
                </label>
                <textarea
                  rows={2}
                  value={data.subheading || ""}
                  onChange={(e) => updateField("subheading", e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-600 focus:ring-2 focus:ring-[#0056b3]"
                  placeholder="From concept development to manufacturing preparation, every design stage supports a more coordinated mould-development process."
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Right Intro Paragraph (with Blue/Orange Vertical Accent)
              </label>
              <textarea
                rows={5}
                value={descriptionText}
                onChange={(e) => updateDescriptionText(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 focus:ring-2 focus:ring-[#0056b3] leading-relaxed"
                placeholder="Engineering design transforms product requirements and approved drawings into mould concepts ready for detailed development..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. TWO-COLUMN LAYOUT: Image (Left) + Steps Cards (Right) */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              01
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Design Studio Photo &amp; Simulation Deliverables
              </h3>
              <p className="text-xs text-slate-500">
                Matches the 2-column layout on the website: Left CAD workstations photo + Right numbered deliverable cards.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: CAD Studio Photo */}
          <div className="lg:col-span-5 space-y-3">
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider">
              Left Column: CAD/CAM Studio Photo
            </label>
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60">
              <ImagePicker
                label="CAD Workstations & Engineering Team Photo"
                value={data.imageSrc || "/infrastructure/engineering-design.jpg"}
                onChange={(url) => updateField("imageSrc", url)}
                description="Photo of CAD workstations and engineers collaborating (e.g. /infrastructure/engineering-design.jpg)"
              />
            </div>
          </div>

          {/* Right Column: Numbered Deliverable Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex-1 mr-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Steps Header Title ({highlights.length} deliverables):
                  </span>
                </div>
                <input
                  type="text"
                  value={data.stepsHeading || "Design & Simulation Deliverables"}
                  onChange={(e) => updateField("stepsHeading", e.target.value)}
                  className="w-full px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-[#0056b3] bg-white"
                  placeholder="Design & Simulation Deliverables"
                />
                <p className="text-[10px] text-slate-400 mt-0.5">
                  This title appears above the stacked cards on the website next to the orange dot.
                </p>
              </div>

              <button
                type="button"
                onClick={addHighlight}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-[#0056b3] text-xs font-bold hover:bg-[#0056b3] hover:text-white transition-all shadow-2xs shrink-0 self-start mt-4"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Deliverable
              </button>
            </div>

            <div className="space-y-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-400 transition-all duration-200 flex items-start gap-3.5 group shadow-2xs"
                >
                  {/* Restrained Blue Number Column / Badge */}
                  <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-200/80 text-[#0056b3] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3] transition-all">
                    <span className="text-xs font-mono font-bold tracking-tight">
                      {item.label || (idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`)}
                    </span>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase text-slate-400">
                          Step Badge:
                        </span>
                        <input
                          type="text"
                          value={item.label || (idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`)}
                          onChange={(e) => updateHighlight(idx, "label", e.target.value)}
                          className="w-12 px-1.5 py-0.5 rounded border border-slate-200 text-[10px] font-mono font-bold text-center bg-white"
                          placeholder="01"
                        />
                      </div>
                      {highlights.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeHighlight(idx)}
                          title="Remove Step"
                          className="text-slate-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        value={item.title || ""}
                        onChange={(e) => updateHighlight(idx, "title", e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-900 bg-white focus:ring-2 focus:ring-[#0056b3]"
                        placeholder="e.g. Mould Design"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={2}
                        value={item.description || ""}
                        onChange={(e) => updateHighlight(idx, "description", e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 bg-white focus:ring-2 focus:ring-[#0056b3] leading-relaxed"
                        placeholder="Step description details..."
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. SEQUENTIAL 5-STAGE ENGINEERING WORKFLOW TRACK          */}
      {/* ======================================================== */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3] font-bold text-xs">
              02
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#ff6b00] uppercase tracking-wider block">
                Integrated Workflow Sequence
              </span>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                From Concept Specification to Shop-Floor CAM Execution ({stages.length} Connected Stages)
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={addStage}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-[#0056b3] text-xs font-bold hover:bg-[#0056b3] hover:text-white transition-all shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Stage
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-400 transition-all duration-200 space-y-2.5 group shadow-2xs relative"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 text-[#0056b3] flex items-center justify-center text-xs font-mono font-bold group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                    {stage.step || (idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`)}
                  </div>
                  <input
                    type="text"
                    value={stage.step || (idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`)}
                    onChange={(e) => updateStage(idx, "step", e.target.value)}
                    className="w-12 px-1.5 py-0.5 rounded border border-slate-200 text-[10px] font-mono font-bold text-center bg-white"
                    placeholder="01"
                  />
                </div>

                {stages.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeStage(idx)}
                    title="Remove Stage"
                    className="text-slate-400 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div>
                <input
                  type="text"
                  value={stage.title || ""}
                  onChange={(e) => updateStage(idx, "title", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-900 bg-white focus:ring-2 focus:ring-[#0056b3]"
                  placeholder="e.g. Requirement Review"
                />
              </div>

              <div>
                <textarea
                  rows={2}
                  value={stage.description || ""}
                  onChange={(e) => updateStage(idx, "description", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 bg-white focus:ring-2 focus:ring-[#0056b3] leading-relaxed"
                  placeholder="Stage deliverables description..."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
