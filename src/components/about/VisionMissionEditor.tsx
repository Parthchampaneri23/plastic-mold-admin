"use client";

import React from "react";
import { Sparkles, Compass, Target, Plus, Trash2 } from "lucide-react";

interface VisionMissionEditorProps {
  aboutData: any;
  setAboutData: (data: any) => void;
}

export default function VisionMissionEditor({ aboutData, setAboutData }: VisionMissionEditorProps) {
  const vm = aboutData?.visionMission || {
    badge: "PURPOSE & DIRECTION",
    heading: "Guiding Principles.",
    highlightHeading: "Engineered for Future.",
    description: "Our forward-looking roadmap is centered around engineering excellence...",
    visionTitle: "OUR VISION",
    visionQuote: "To be global leaders in high-cavitation plastic mold engineering...",
    visionDescription: "We aspire to continually push the boundaries of PET preform...",
    visionTags: [],
    missionTitle: "OUR MISSION",
    missionQuote: "To engineer precision-crafted tooling that maximizes client productivity...",
    missionDescription: "We deliver turnkey mold solutions through continuous investment...",
    missionTags: [],
    coreValues: [],
  };

  const updateVM = (field: string, val: any) => {
    setAboutData({
      ...aboutData,
      visionMission: {
        ...vm,
        [field]: val,
      },
    });
  };

  const updateTag = (type: "visionTags" | "missionTags", idx: number, val: string) => {
    const list = [...(vm[type] || [])];
    list[idx] = val;
    updateVM(type, list);
  };

  const addTag = (type: "visionTags" | "missionTags") => {
    const list = [...(vm[type] || []), "New Tag"];
    updateVM(type, list);
  };

  const deleteTag = (type: "visionTags" | "missionTags", idx: number) => {
    const list = (vm[type] || []).filter((_: any, i: number) => i !== idx);
    updateVM(type, list);
  };

  const updateValue = (idx: number, field: string, val: string) => {
    const list = [...(vm.coreValues || [])];
    list[idx] = { ...list[idx], [field]: val };
    updateVM("coreValues", list);
  };

  return (
    <div className="space-y-8">
      {/* Header Info Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#0056b3]/10 text-[#0056b3] border border-[#0056b3]/20 uppercase">
              About Page &bull; Section 3
            </span>
            <span className="text-xs text-slate-500 font-medium">Vision, Mission &amp; Core Values Dial</span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#0056b3]" />
            Vision, Mission &amp; Core Values
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage the corporate vision statement, mission manifesto, engineering guarantees, and the 6 core company values.
          </p>
        </div>
      </div>

      {/* Part 1: Section Header (Eyebrow, Main Heading & Subtitle) */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#ff6b00]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Section Header &amp; Top Description
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Eyebrow Badge
            </label>
            <input
              type="text"
              value={vm.badge || "OUR DIRECTION"}
              onChange={(e) => updateVM("badge", e.target.value)}
              placeholder="e.g. OUR DIRECTION"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Heading Prefix
            </label>
            <input
              type="text"
              value={vm.heading || "Purpose That Drives"}
              onChange={(e) => updateVM("heading", e.target.value)}
              placeholder="e.g. Purpose That Drives"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Heading Highlight (Blue)
            </label>
            <input
              type="text"
              value={vm.highlightHeading || "Precision."}
              onChange={(e) => updateVM("highlightHeading", e.target.value)}
              placeholder="e.g. Precision."
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
            Section Description
          </label>
          <textarea
            rows={2}
            value={vm.description || ""}
            onChange={(e) => updateVM("description", e.target.value)}
            placeholder="Purpose, precision, and performance guide everything we engineer at Patel Mould Industries."
            className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed focus:outline-none focus:border-[#0056b3] focus:bg-white"
          />
        </div>
      </div>

      {/* Part 2: Vision & Mission Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* OUR VISION */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Compass className="w-4 h-4 text-[#0056b3]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Vision Statement (Blue Card)
            </h3>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Title
            </label>
            <input
              type="text"
              value={vm.visionTitle || "OUR VISION"}
              onChange={(e) => updateVM("visionTitle", e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Main Quote / Statement
            </label>
            <textarea
              rows={3}
              value={vm.visionQuote || ""}
              onChange={(e) => updateVM("visionQuote", e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Elaboration
            </label>
            <textarea
              rows={3}
              value={vm.visionDescription || ""}
              onChange={(e) => updateVM("visionDescription", e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700"
            />
          </div>

          {/* Tags */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase">Vision Highlights Tags</label>
              <button
                type="button"
                onClick={() => addTag("visionTags")}
                className="text-[10px] text-[#0056b3] font-bold hover:underline cursor-pointer"
              >
                + Add Tag
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {(vm.visionTags || []).map((tag: string, i: number) => (
                <div key={i} className="flex items-center gap-1 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full text-xs">
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) => updateTag("visionTags", i, e.target.value)}
                    className="bg-transparent text-[#0056b3] font-semibold text-xs focus:outline-none w-28"
                  />
                  <button type="button" onClick={() => deleteTag("visionTags", i)} className="text-slate-400 hover:text-red-500">
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OUR MISSION */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Target className="w-4 h-4 text-[#ff6b00]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Mission Statement (Orange Card)
            </h3>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Title
            </label>
            <input
              type="text"
              value={vm.missionTitle || "OUR MISSION"}
              onChange={(e) => updateVM("missionTitle", e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Main Quote / Statement
            </label>
            <textarea
              rows={3}
              value={vm.missionQuote || ""}
              onChange={(e) => updateVM("missionQuote", e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Elaboration
            </label>
            <textarea
              rows={3}
              value={vm.missionDescription || ""}
              onChange={(e) => updateVM("missionDescription", e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700"
            />
          </div>

          {/* Tags */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase">Mission Highlights Tags</label>
              <button
                type="button"
                onClick={() => addTag("missionTags")}
                className="text-[10px] text-[#ff6b00] font-bold hover:underline cursor-pointer"
              >
                + Add Tag
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {(vm.missionTags || []).map((tag: string, i: number) => (
                <div key={i} className="flex items-center gap-1 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full text-xs">
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) => updateTag("missionTags", i, e.target.value)}
                    className="bg-transparent text-[#ff6b00] font-semibold text-xs focus:outline-none w-28"
                  />
                  <button type="button" onClick={() => deleteTag("missionTags", i)} className="text-slate-400 hover:text-red-500">
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Part 3: 6 Core Values Dial */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#0056b3]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            6 Core Values &amp; Dial Header
          </h3>
        </div>

        {/* Core Values Section Header Inputs */}
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                Eyebrow Badge
              </label>
              <input
                type="text"
                value={vm.valuesBadge || "OUR CORE VALUES"}
                onChange={(e) => updateVM("valuesBadge", e.target.value)}
                placeholder="OUR CORE VALUES"
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono font-bold text-slate-900"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                Heading Prefix
              </label>
              <input
                type="text"
                value={vm.valuesHeading || "The Principles Behind"}
                onChange={(e) => updateVM("valuesHeading", e.target.value)}
                placeholder="The Principles Behind"
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                Heading Highlight (Blue)
              </label>
              <input
                type="text"
                value={vm.valuesHighlight || "Our Precision."}
                onChange={(e) => updateVM("valuesHighlight", e.target.value)}
                placeholder="Our Precision."
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-[#0056b3]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
              Description Text
            </label>
            <textarea
              rows={2}
              value={vm.valuesDescription || ""}
              onChange={(e) => updateVM("valuesDescription", e.target.value)}
              placeholder="The principles that shape how we engineer, manufacture, and build lasting partnerships at Patel Mould Industries."
              className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 leading-relaxed"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(vm.coreValues || []).map((val: any, idx: number) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-mono text-xs font-bold text-[#0056b3]">
                VALUE {val.num || `0${idx + 1}`}
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase">Value Title</label>
                <input
                  type="text"
                  value={val.title || ""}
                  onChange={(e) => updateValue(idx, "title", e.target.value)}
                  className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase">Description</label>
                <input
                  type="text"
                  value={val.description || ""}
                  onChange={(e) => updateValue(idx, "description", e.target.value)}
                  className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs text-slate-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
