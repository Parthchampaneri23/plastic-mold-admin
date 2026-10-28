"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import {
  IInfraSection,
  IInfraHighlight,
  IInfraTechnicalDetail,
  IInfraWorkflowStage,
} from "@/models/InfrastructurePageContent";
import { Plus, Trash2, Sliders, Layers } from "lucide-react";

interface Props {
  data: IInfraSection;
  onChange: (data: IInfraSection) => void;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  showStages?: boolean;
  showTechnicalDetails?: boolean;
}

export const GenericInfraSectionEditor: React.FC<Props> = ({
  data,
  onChange,
  title,
  subtitle,
  icon,
  showStages = true,
  showTechnicalDetails = true,
}) => {
  const updateField = (field: keyof IInfraSection, val: any) => {
    onChange({ ...data, [field]: val });
  };

  const updateDescriptionParagraph = (index: number, val: string) => {
    const list = [...(data.description || [])];
    list[index] = val;
    updateField("description", list);
  };

  const addDescriptionParagraph = () => {
    const list = [...(data.description || []), "New descriptive paragraph detailing tooling operations."];
    updateField("description", list);
  };

  const removeDescriptionParagraph = (index: number) => {
    const list = (data.description || []).filter((_, i) => i !== index);
    updateField("description", list);
  };

  // Highlights management
  const updateHighlight = (index: number, field: keyof IInfraHighlight, val: string) => {
    const list = [...(data.highlights || [])];
    list[index] = { ...list[index], [field]: val };
    updateField("highlights", list);
  };

  const addHighlight = () => {
    const list = [
      ...(data.highlights || []),
      {
        label: `0${(data.highlights?.length || 0) + 1}`,
        title: "New Highlight / Feature",
        description: "Feature details and application execution.",
      },
    ];
    updateField("highlights", list);
  };

  const removeHighlight = (index: number) => {
    const list = (data.highlights || []).filter((_, i) => i !== index);
    updateField("highlights", list);
  };

  // Technical Details management
  const updateTechDetail = (index: number, field: keyof IInfraTechnicalDetail, val: string) => {
    const list = [...(data.technicalDetails || [])];
    list[index] = { ...list[index], [field]: val };
    updateField("technicalDetails", list);
  };

  const addTechDetail = () => {
    const list = [
      ...(data.technicalDetails || []),
      { label: "PARAMETER", value: "Value description" },
    ];
    updateField("technicalDetails", list);
  };

  const removeTechDetail = (index: number) => {
    const list = (data.technicalDetails || []).filter((_, i) => i !== index);
    updateField("technicalDetails", list);
  };

  // Workflow Stages management
  const updateStage = (index: number, field: keyof IInfraWorkflowStage, val: string) => {
    const list = [...(data.stages || [])];
    list[index] = { ...list[index], [field]: val };
    updateField("stages", list);
  };

  const addStage = () => {
    const list = [
      ...(data.stages || []),
      {
        step: `0${(data.stages?.length || 0) + 1}`,
        title: "New Stage / Step",
        description: "Stage description and verification outcome.",
      },
    ];
    updateField("stages", list);
  };

  const removeStage = (index: number) => {
    const list = (data.stages || []).filter((_, i) => i !== index);
    updateField("stages", list);
  };

  return (
    <div className="space-y-6">
      {/* 1. Header & Text Content */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            {icon || <Sliders className="w-4 h-4" />}
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{title}</h3>
            <p className="text-xs text-slate-500">{subtitle}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Badge</label>
              <input
                type="text"
                value={data.badge || ""}
                onChange={(e) => updateField("badge", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#0056b3]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Heading</label>
              <input
                type="text"
                value={data.heading || ""}
                onChange={(e) => updateField("heading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Subheading</label>
            <input
              type="text"
              value={data.subheading || ""}
              onChange={(e) => updateField("subheading", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-600"
              placeholder="Optional secondary caption..."
            />
          </div>

          {/* Description Paragraphs */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-700">
                Editorial Paragraphs ({data.description?.length || 0})
              </label>
              <button
                type="button"
                onClick={addDescriptionParagraph}
                className="text-xs font-bold text-[#0056b3] hover:underline inline-flex items-center gap-1"
              >
                <Plus className="w-3 h-3" /> Add Paragraph
              </button>
            </div>
            <div className="space-y-2.5">
              {(data.description || []).map((para, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <textarea
                    rows={2}
                    value={para}
                    onChange={(e) => updateDescriptionParagraph(i, e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                  {(data.description?.length || 0) > 1 && (
                    <button
                      type="button"
                      onClick={() => removeDescriptionParagraph(i)}
                      className="p-2 text-slate-400 hover:text-red-500 rounded-lg border border-slate-200 bg-white"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <ImagePicker
            label="Section Presentation Photo"
            value={data.imageSrc || ""}
            onChange={(url) => updateField("imageSrc", url)}
            description="High-resolution machine or workstation photo"
          />
        </div>
      </div>

      {/* 2. Highlights / Key Features */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Execution Capabilities / Highlights ({data.highlights?.length || 0})
          </label>
          <button
            type="button"
            onClick={addHighlight}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-[#0056b3] text-xs font-bold hover:bg-[#0056b3] hover:text-white transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Highlight
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(data.highlights || []).map((hl, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={hl.label || `0${i + 1}`}
                  onChange={(e) => updateHighlight(i, "label", e.target.value)}
                  className="w-16 px-2 py-0.5 rounded border border-slate-200 text-[11px] font-mono font-bold text-center"
                  placeholder="01"
                />
                <button
                  type="button"
                  onClick={() => removeHighlight(i)}
                  className="text-slate-400 hover:text-red-500 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <input
                type="text"
                value={hl.title || ""}
                onChange={(e) => updateHighlight(i, "title", e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold"
                placeholder="Highlight Title"
              />
              <textarea
                rows={2}
                value={hl.description || ""}
                onChange={(e) => updateHighlight(i, "description", e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                placeholder="Highlight Description..."
              />
            </div>
          ))}
        </div>
      </div>

      {/* 3. Workflow Stages / Sequence Steps (Optional) */}
      {showStages && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Workflow Stages / Sequence Steps ({data.stages?.length || 0})
            </label>
            <button
              type="button"
              onClick={addStage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-[#ff6b00] text-xs font-bold hover:bg-[#ff6b00] hover:text-white transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Stage
            </button>
          </div>

          <div className="space-y-3">
            {(data.stages || []).map((stage, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between"
              >
                <div className="flex items-center gap-2 shrink-0">
                  <input
                    type="text"
                    value={stage.step || `0${i + 1}`}
                    onChange={(e) => updateStage(i, "step", e.target.value)}
                    className="w-14 px-2 py-1 rounded-lg border border-slate-200 text-xs font-mono font-bold text-center"
                    placeholder="01"
                  />
                  <input
                    type="text"
                    value={stage.title || ""}
                    onChange={(e) => updateStage(i, "title", e.target.value)}
                    className="w-48 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold"
                    placeholder="Stage Title"
                  />
                </div>
                <input
                  type="text"
                  value={stage.description || ""}
                  onChange={(e) => updateStage(i, "description", e.target.value)}
                  className="flex-1 w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                  placeholder="Stage Description..."
                />
                <button
                  type="button"
                  onClick={() => removeStage(i)}
                  className="text-slate-400 hover:text-red-500 p-1 shrink-0"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Technical Specs / Parameters (Optional) */}
      {showTechnicalDetails && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Technical Details &amp; Equipment Parameters ({data.technicalDetails?.length || 0})
            </label>
            <button
              type="button"
              onClick={addTechDetail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-[#0056b3] text-xs font-bold hover:bg-[#0056b3] hover:text-white transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Spec
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(data.technicalDetails || []).map((spec, i) => (
              <div
                key={i}
                className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={spec.label || ""}
                  onChange={(e) => updateTechDetail(i, "label", e.target.value)}
                  className="w-36 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-bold uppercase text-slate-700 shrink-0"
                  placeholder="LABEL"
                />
                <input
                  type="text"
                  value={spec.value || ""}
                  onChange={(e) => updateTechDetail(i, "value", e.target.value)}
                  className="flex-1 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-900"
                  placeholder="Specification Value"
                />
                <button
                  type="button"
                  onClick={() => removeTechDetail(i)}
                  className="text-slate-400 hover:text-red-500 p-1 shrink-0"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
