"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import {
  IMoldDesignDevelopment,
  IDesignCapabilityItem,
  IDesignWorkflowStep,
} from "@/models/ManufacturingPageContent";
import { Plus, Trash2 } from "lucide-react";

interface Props {
  data: IMoldDesignDevelopment;
  onChange: (data: IMoldDesignDevelopment) => void;
}

export const DesignDevelopmentEditor: React.FC<Props> = ({ data, onChange }) => {
  const updateField = (field: keyof IMoldDesignDevelopment, val: any) => {
    onChange({ ...data, [field]: val });
  };

  const updateCapability = (
    index: number,
    field: keyof IDesignCapabilityItem,
    val: any
  ) => {
    const updated = [...(data.capabilities || [])];
    updated[index] = { ...updated[index], [field]: val };
    updateField("capabilities", updated);
  };

  const updatePoints = (capIndex: number, text: string) => {
    const points = text.split("\n").filter((p) => p.trim().length > 0);
    updateCapability(capIndex, "points", points);
  };

  const updateWorkflowStep = (
    index: number,
    field: keyof IDesignWorkflowStep,
    val: string
  ) => {
    const updated = [...(data.workflowSteps || [])];
    updated[index] = { ...updated[index], [field]: val };
    updateField("workflowSteps", updated);
  };

  return (
    <div className="space-y-6">
      {/* Headings & Descriptions */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
          Mold Design & Development Section Header
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Controls the eyebrow badge, section title, and introductory text.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Badge Eyebrow
            </label>
            <input
              type="text"
              value={data.badge || ""}
              onChange={(e) => updateField("badge", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
              placeholder="MOLD DESIGN & DEVELOPMENT"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Heading Line 1
              </label>
              <input
                type="text"
                value={data.heading || ""}
                onChange={(e) => updateField("heading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Engineering Design &"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Heading Line 2 (Blue Highlight)
              </label>
              <input
                type="text"
                value={data.highlightHeading || ""}
                onChange={(e) => updateField("highlightHeading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Simulation R&D"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Section Description
            </label>
            <textarea
              rows={2}
              value={data.description || ""}
              onChange={(e) => updateField("description", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
            />
          </div>
        </div>
      </div>

      {/* Visual Image & Overlay Tags */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
          CAD & Engineering Visual
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Left column visual representing your design studio and engineering workstations.
        </p>

        <div className="space-y-4">
          <ImagePicker
            label="Design Studio Photo"
            value={data.image || ""}
            onChange={(url) => updateField("image", url)}
            description="Recommended: High-res CAD/Toolroom photo (e.g. /manufacturing/mfg_cad.jpg)"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Overlay Badge
              </label>
              <input
                type="text"
                value={data.overlayBadge || ""}
                onChange={(e) => updateField("overlayBadge", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="IN-HOUSE R&D DESIGN"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Overlay Title
              </label>
              <input
                type="text"
                value={data.overlayTitle || ""}
                onChange={(e) => updateField("overlayTitle", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="CAD Design & Engineering"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Overlay Tag
              </label>
              <input
                type="text"
                value={data.overlayTag || ""}
                onChange={(e) => updateField("overlayTag", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Design-led mould development"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3 Design Capabilities Cards */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
          Design & Simulation Capabilities (3 Cards)
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Interactive cards displayed on the right with expandable technical bullet points.
        </p>

        <div className="space-y-4">
          {(data.capabilities || []).map((cap, i) => (
            <div key={cap.id || i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0056b3] uppercase tracking-wide">
                  Capability #{cap.number || `0${i + 1}`} ({cap.id})
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Card Title</label>
                  <input
                    type="text"
                    value={cap.title || ""}
                    onChange={(e) => updateCapability(i, "title", e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Image Panel Title</label>
                  <input
                    type="text"
                    value={cap.panelTitle || ""}
                    onChange={(e) => updateCapability(i, "panelTitle", e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Card Summary</label>
                  <textarea
                    rows={2}
                    value={cap.cardDesc || ""}
                    onChange={(e) => updateCapability(i, "cardDesc", e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Hover Overlay Description</label>
                  <textarea
                    rows={2}
                    value={cap.panelDesc || ""}
                    onChange={(e) => updateCapability(i, "panelDesc", e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Bullet Points (One per line)
                </label>
                <textarea
                  rows={3}
                  value={(cap.points || []).join("\n")}
                  onChange={(e) => updatePoints(i, e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono focus:ring-2 focus:ring-[#0056b3]"
                  placeholder="Point 1&#10;Point 2&#10;Point 3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Step Engineering Workflow Strip */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
          Engineering Process Workflow (4 Stages)
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Structured 4-stage engineering methodology strip displayed below the CAD preview.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(data.workflowSteps || []).map((wf, i) => (
            <div key={wf.step || i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#ff6b00]">
                  Step {wf.step || `0${i + 1}`}
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  {wf.deliverable}
                </span>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Step Title</label>
                <input
                  type="text"
                  value={wf.title || ""}
                  onChange={(e) => updateWorkflowStep(i, "title", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Summary (Short Desc)</label>
                <input
                  type="text"
                  value={wf.shortDesc || ""}
                  onChange={(e) => updateWorkflowStep(i, "shortDesc", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Detailed Description</label>
                <textarea
                  rows={2}
                  value={wf.fullDesc || ""}
                  onChange={(e) => updateWorkflowStep(i, "fullDesc", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Deliverable Tag</label>
                <input
                  type="text"
                  value={wf.deliverable || ""}
                  onChange={(e) => updateWorkflowStep(i, "deliverable", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-[#0056b3] font-semibold focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
