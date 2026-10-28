"use client";

import React, { useState } from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import {
  IPrecisionMachining,
  IProcessTab,
  IProcessTabSpec,
} from "@/models/ManufacturingPageContent";
import { Plus, Trash2 } from "lucide-react";

interface Props {
  data: IPrecisionMachining;
  onChange: (data: IPrecisionMachining) => void;
}

export const PrecisionMachiningEditor: React.FC<Props> = ({ data, onChange }) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const updateField = (field: keyof IPrecisionMachining, val: any) => {
    onChange({ ...data, [field]: val });
  };

  const currentTab = (data.tabs || [])[activeTabIndex];

  const updateCurrentTab = (field: keyof IProcessTab, val: any) => {
    const updatedTabs = [...(data.tabs || [])];
    updatedTabs[activeTabIndex] = { ...updatedTabs[activeTabIndex], [field]: val };
    updateField("tabs", updatedTabs);
  };

  const updateFeatures = (text: string) => {
    const features = text.split("\n").filter((f) => f.trim().length > 0);
    updateCurrentTab("features", features);
  };

  const updateSpec = (specIdx: number, field: keyof IProcessTabSpec, val: string) => {
    const specs = [...(currentTab?.specs || [])];
    specs[specIdx] = { ...specs[specIdx], [field]: val };
    updateCurrentTab("specs", specs);
  };

  const addSpec = () => {
    const specs = [...(currentTab?.specs || []), { label: "Spec Label", value: "Spec Value" }];
    updateCurrentTab("specs", specs);
  };

  const removeSpec = (specIdx: number) => {
    const specs = (currentTab?.specs || []).filter((_, i) => i !== specIdx);
    updateCurrentTab("specs", specs);
  };

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
          Precision Machining Section Header
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Title and intro paragraph above the multi-axis machining tabs.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Badge</label>
            <input
              type="text"
              value={data.badge || ""}
              onChange={(e) => updateField("badge", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
              placeholder="PRECISION MACHINING"
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
                placeholder="CNC & EDM"
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
                placeholder="High-Accuracy Manufacturing"
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

      {/* Tabs Selector & Active Tab Editor */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
          Machining Process Tabs ({data.tabs?.length || 0} Tabs)
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Select a process tab below to edit its specifications, features, and machinery imagery.
        </p>

        {/* Tab pill selectors */}
        <div className="flex flex-wrap gap-2 mb-6 p-1.5 rounded-xl bg-slate-100 border border-slate-200 w-fit">
          {(data.tabs || []).map((t, idx) => (
            <button
              key={t.id || idx}
              type="button"
              onClick={() => setActiveTabIndex(idx)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTabIndex === idx
                  ? "bg-[#0056b3] text-white shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white"
              }`}
            >
              {t.tabLabel || `Tab ${idx + 1}`}
            </button>
          ))}
        </div>

        {currentTab && (
          <div className="space-y-5 border-t border-slate-100 pt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Tab Button Label</label>
                <input
                  type="text"
                  value={currentTab.tabLabel || ""}
                  onChange={(e) => updateCurrentTab("tabLabel", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Category Badge</label>
                <input
                  type="text"
                  value={currentTab.badge || ""}
                  onChange={(e) => updateCurrentTab("badge", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                  placeholder="MULTI-AXIS MILLING"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Tab Heading</label>
                <input
                  type="text"
                  value={currentTab.heading || ""}
                  onChange={(e) => updateCurrentTab("heading", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Subtitle</label>
                <input
                  type="text"
                  value={currentTab.subtitle || ""}
                  onChange={(e) => updateCurrentTab("subtitle", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Description</label>
              <textarea
                rows={2}
                value={currentTab.description || ""}
                onChange={(e) => updateCurrentTab("description", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0056b3]"
              />
            </div>

            <ImagePicker
              label="Tab Showcase Image"
              value={currentTab.image || ""}
              onChange={(url) => updateCurrentTab("image", url)}
              description="High-resolution machining photo (e.g. /manufacturing/cnc-precision-machining.webp)"
            />

            {/* Features list */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Capability Features (One per line)
              </label>
              <textarea
                rows={4}
                value={(currentTab.features || []).join("\n")}
                onChange={(e) => updateFeatures(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono focus:ring-2 focus:ring-[#0056b3]"
                placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
              />
            </div>

            {/* Technical specs table */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Technical Specifications ({currentTab.specs?.length || 0})
                </label>
                <button
                  type="button"
                  onClick={addSpec}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-blue-50 text-[#0056b3] text-xs font-semibold hover:bg-blue-100 transition-colors"
                >
                  <Plus className="w-3 h-3" />
                  <span>Add Spec</span>
                </button>
              </div>

              <div className="space-y-2">
                {(currentTab.specs || []).map((sp, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3">
                    <input
                      type="text"
                      value={sp.label || ""}
                      onChange={(e) => updateSpec(sIdx, "label", e.target.value)}
                      className="w-1/3 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold"
                      placeholder="Spec Label"
                    />
                    <input
                      type="text"
                      value={sp.value || ""}
                      onChange={(e) => updateSpec(sIdx, "value", e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-700"
                      placeholder="Spec Value"
                    />
                    <button
                      type="button"
                      onClick={() => removeSpec(sIdx)}
                      className="text-slate-400 hover:text-red-500 p-1.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
