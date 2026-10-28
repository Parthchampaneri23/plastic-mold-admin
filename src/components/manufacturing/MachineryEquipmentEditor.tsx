"use client";

import React, { useState } from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import {
  IMachineryEquipment,
  IMachineryItem,
} from "@/models/ManufacturingPageContent";
import { Plus, Trash2 } from "lucide-react";

interface Props {
  data: IMachineryEquipment;
  onChange: (data: IMachineryEquipment) => void;
}

export const MachineryEquipmentEditor: React.FC<Props> = ({ data, onChange }) => {
  const [selectedMachineId, setSelectedMachineId] = useState<string>(
    data.machines?.[0]?.id || "mach-1"
  );

  const updateField = (field: keyof IMachineryEquipment, val: any) => {
    onChange({ ...data, [field]: val });
  };

  const currentMachineIndex = (data.machines || []).findIndex(
    (m) => m.id === selectedMachineId
  );
  const currentMachine =
    currentMachineIndex >= 0
      ? data.machines[currentMachineIndex]
      : data.machines?.[0];

  const updateCurrentMachine = (field: keyof IMachineryItem, val: any) => {
    if (currentMachineIndex < 0) return;
    const updated = [...(data.machines || [])];
    updated[currentMachineIndex] = { ...updated[currentMachineIndex], [field]: val };
    updateField("machines", updated);
  };

  const addMachine = () => {
    const newId = `mach-${Date.now().toString().slice(-4)}`;
    const newMachine: IMachineryItem = {
      id: newId,
      slug: `new-machine-${Date.now().toString().slice(-4)}`,
      name: "New Toolroom Machine",
      manufacturer: "Manufacturer Brand",
      model: "Model Name / Series",
      category: "CNC",
      badge: "HIGH-PRECISION",
      image: "/manufacturing/cnc-precision-machining.webp",
      specifications: "Speed / Accuracy specifications",
      capacity: "Working table / Stroke capacity",
      application: "Tooling and cavity manufacturing applications",
      shortDescription: "Overview of machinery performance and advantages.",
    };
    const updated = [...(data.machines || []), newMachine];
    updateField("machines", updated);
    setSelectedMachineId(newId);
  };

  const removeMachine = (machineId: string) => {
    if ((data.machines || []).length <= 1) return;
    const updated = (data.machines || []).filter((m) => m.id !== machineId);
    updateField("machines", updated);
    if (selectedMachineId === machineId && updated.length > 0) {
      setSelectedMachineId(updated[0].id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
          Machinery & Equipment Section Header
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Controls the heading, highlight, and description above the machinery grid.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Badge</label>
            <input
              type="text"
              value={data.badge || ""}
              onChange={(e) => updateField("badge", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
              placeholder="MACHINERY & EQUIPMENT"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Heading</label>
              <input
                type="text"
                value={data.heading || ""}
                onChange={(e) => updateField("heading", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Our Machinery."
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
                placeholder="Your Manufacturing Confidence."
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

      {/* Machinery List & Individual Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Machine selector list */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase">
                Machines ({data.machines?.length || 0})
              </h4>
              <span className="text-[11px] text-slate-500">Categorized plant assets</span>
            </div>
            <button
              type="button"
              onClick={addMachine}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-blue-50 text-[#0056b3] text-xs font-semibold hover:bg-blue-100"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </div>

          <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
            {(data.machines || []).map((m) => {
              const isSelected = m.id === selectedMachineId;
              return (
                <div
                  key={m.id}
                  onClick={() => setSelectedMachineId(m.id)}
                  className={`p-3 rounded-xl cursor-pointer transition-all border flex items-center justify-between ${
                    isSelected
                      ? "bg-blue-50 border-[#0056b3] text-slate-900 shadow-2xs"
                      : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <span className="inline-block text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-bold mb-1">
                      {m.category || "CNC"}
                    </span>
                    <h5 className="text-xs font-bold truncate leading-tight">{m.name}</h5>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5">{m.model}</p>
                  </div>
                  {(data.machines || []).length > 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeMachine(m.id);
                      }}
                      className="text-slate-400 hover:text-red-500 p-1 shrink-0"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected machine editor form */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          {currentMachine ? (
            <>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-[#0056b3] uppercase tracking-wide">
                  Editing: {currentMachine.name}
                </span>
                <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                  ID: {currentMachine.id}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Machine Name</label>
                  <input
                    type="text"
                    value={currentMachine.name || ""}
                    onChange={(e) => updateCurrentMachine("name", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-[#0056b3]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Category Filter</label>
                  <select
                    value={currentMachine.category || "CNC"}
                    onChange={(e) => updateCurrentMachine("category", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                  >
                    <option value="CNC">CNC</option>
                    <option value="EDM">EDM</option>
                    <option value="CMM">CMM</option>
                    <option value="Grinding">Grinding</option>
                    <option value="Trial">Trial</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Manufacturer</label>
                  <input
                    type="text"
                    value={currentMachine.manufacturer || ""}
                    onChange={(e) => updateCurrentMachine("manufacturer", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Model / Series</label>
                  <input
                    type="text"
                    value={currentMachine.model || ""}
                    onChange={(e) => updateCurrentMachine("model", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Badge Tag</label>
                  <input
                    type="text"
                    value={currentMachine.badge || ""}
                    onChange={(e) => updateCurrentMachine("badge", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                    placeholder="HIGH-SPEED MILLING"
                  />
                </div>
              </div>

              <ImagePicker
                label="Machine Photo"
                value={currentMachine.image || ""}
                onChange={(url) => updateCurrentMachine("image", url)}
                description="Machine picture displayed on card (e.g. /manufacturing/cnc-precision-machining.webp)"
              />

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specifications Summary
                </label>
                <input
                  type="text"
                  value={currentMachine.specifications || ""}
                  onChange={(e) => updateCurrentMachine("specifications", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                  placeholder="Up to 24,000 RPM Spindle | Simultaneous 5-Axis | Linear Scales ±0.001 mm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Capacity / Stroke Details
                  </label>
                  <input
                    type="text"
                    value={currentMachine.capacity || ""}
                    onChange={(e) => updateCurrentMachine("capacity", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                    placeholder="Travel: X 1,050 mm × Y 600 mm × Z 550 mm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tooling Application
                  </label>
                  <input
                    type="text"
                    value={currentMachine.application || ""}
                    onChange={(e) => updateCurrentMachine("application", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                    placeholder="High-speed contouring of multi-cavity preform stacks"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  value={currentMachine.shortDescription || ""}
                  onChange={(e) => updateCurrentMachine("shortDescription", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-400 text-xs">
              No machine selected.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
