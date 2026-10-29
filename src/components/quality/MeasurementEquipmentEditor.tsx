"use client";

import React from "react";
import { Compass, Plus, Trash2 } from "lucide-react";
import {
  IMeasurementEquipmentSection,
  IMeasurementEquipmentItem,
} from "@/models/QualityPageContent";

interface MeasurementEquipmentEditorProps {
  measurementEquipment: IMeasurementEquipmentSection;
  onChange: (measurementEquipment: IMeasurementEquipmentSection) => void;
}

export function MeasurementEquipmentEditor({
  measurementEquipment,
  onChange,
}: MeasurementEquipmentEditorProps) {
  const current = measurementEquipment || {
    badge: "METROLOGY INSTRUMENTS",
    headingPart1: "Precision Measurement",
    headingHighlight: "Instruments.",
    description: "",
    items: [],
  };

  const handleUpdateItem = (
    index: number,
    field: keyof IMeasurementEquipmentItem,
    value: string
  ) => {
    const list = [...(current.items || [])];
    list[index] = { ...list[index], [field]: value };
    onChange({ ...current, items: list });
  };

  const handleAddItem = () => {
    const list = [...(current.items || [])];
    const newId = `equipment-${Date.now()}`;
    list.push({
      id: newId,
      name: "New Measurement Instrument",
      category: "Inspection Tool",
      purpose: "Describe measuring function, part verification, or tolerance checks...",
      resolutionOrApplication: "Standard 0.01 mm accuracy",
      iconName: "Compass",
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
          <Compass className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Precision Measurement Instruments Catalogue
          </h2>
          <p className="text-xs text-slate-500">
            Manage calipers, precision micrometers, height gauges, dial indicators, bore gauges, and granite master tables.
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
            placeholder="METROLOGY INSTRUMENTS"
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
            placeholder="Precision Measurement"
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
            placeholder="Instruments."
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
            placeholder="Key measuring instruments used in our toolroom to check mould dimensions..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>
      </div>

      {/* Equipment List */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">
            Measuring Instruments ({current.items?.length || 0})
          </h3>
          <button
            onClick={handleAddItem}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Instrument</span>
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
                  Instrument #{iIdx + 1}
                </span>
                <button
                  onClick={() => handleDeleteItem(iIdx)}
                  className="text-slate-400 hover:text-red-500 transition-colors p-1"
                  title="Delete instrument"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Instrument Name
                  </label>
                  <input
                    type="text"
                    value={item.name || ""}
                    onChange={(e) => handleUpdateItem(iIdx, "name", e.target.value)}
                    placeholder="e.g. Digital & Dial Calipers"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Category Tag
                  </label>
                  <input
                    type="text"
                    value={item.category || ""}
                    onChange={(e) => handleUpdateItem(iIdx, "category", e.target.value)}
                    placeholder="e.g. Length & Thickness"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Resolution / Accuracy
                  </label>
                  <input
                    type="text"
                    value={item.resolutionOrApplication || ""}
                    onChange={(e) => handleUpdateItem(iIdx, "resolutionOrApplication", e.target.value)}
                    placeholder="e.g. Standard 0.01 mm accuracy"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div className="md:col-span-3">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Purpose &amp; Application
                  </label>
                  <input
                    type="text"
                    value={item.purpose || ""}
                    onChange={(e) => handleUpdateItem(iIdx, "purpose", e.target.value)}
                    placeholder="Measures outer size, inner holes, and depth of mould plates..."
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

