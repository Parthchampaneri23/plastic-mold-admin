"use client";

import React, { useState } from "react";
import { Cpu, Plus, Trash2, CheckCircle2, ChevronRight, Check, Sparkles } from "lucide-react";
import { ImagePicker } from "@/components/ui/ImagePicker";

interface CapabilitiesSectionEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function CapabilitiesSectionEditor({ data, setData }: CapabilitiesSectionEditorProps) {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const sectionInfo = data?.capabilitiesSection || {
    badge: "MANUFACTURING CAPABILITIES",
    headlineDark: "Precision Technology.",
    headlineBlue: "Engineering Expertise.",
    description:
      "Advanced tooling technology, specialized toolmaker craftsmanship, and state-of-the-art in-house machinery engineered to deliver high-precision molds with consistent cycle times and zero-defect output.",
    pill1Text: "Sub-Micron CNC Precision",
    pill2Text: "100% In-House Trial Testing",
    showcaseImage: "/Home/capablities.png",
  };

  const capabilities = data?.capabilities || [
    {
      id: "cnc-machining",
      title: "5-Axis CNC Machining",
      shortDesc: "High-speed 5-axis CNC milling centers delivering sub-micron mold cavity precision down to ±0.005mm.",
      machineBadge: "DMG MORI / Makino",
      specifications: [
        "5-Axis Simultaneous Milling",
        "24,000 RPM Ultra-Spindle Speed",
        "Automated Tool Change & Laser Calibration",
      ],
    },
    {
      id: "edm",
      title: "EDM (Electrical Discharge)",
      shortDesc: "Advanced Mirror EDM & CNC Wire Cut EDM for deep cavity ribs, complex threads, and micro-precision inserts.",
      machineBadge: "Makino Mirror EDM",
      specifications: [
        "Sub-micron Ra 0.1 Mirror Polish Finish",
        "CNC Wire Cut EDM ±0.002mm Accuracy",
        "Multi-Electrode Automated Changer",
      ],
    },
    {
      id: "mold-design",
      title: "Mold Design & CAD/CAM",
      shortDesc: "Full 3D moldflow thermal simulation, stress analysis, and DFM optimization prior to steel cutting.",
      machineBadge: "Autodesk Moldflow & UG NX",
      specifications: [
        "3D Moldflow Thermal & Flow Analysis",
        "Parametric SolidWorks & UG NX Modeling",
        "Pre-Machining DFM Feasibility Reports",
      ],
    },
    {
      id: "precision-machining",
      title: "Precision Grinding & Jig Boring",
      shortDesc: "Specialized surface grinding, cylindrical grinding, and jig boring for core & cavity plate stack alignment.",
      machineBadge: "Okamoto & Hauser Jig Bore",
      specifications: [
        "Optical Profile Surface Grinding",
        "Jig Boring Alignment ±0.001mm",
        "Climate-Controlled Workshop Environment",
      ],
    },
    {
      id: "mold-assembly",
      title: "Mold Assembly & Fitting",
      shortDesc: "Master toolmaker spotting presses and cleanroom assembly ensuring perfect parting line seal and zero flash.",
      machineBadge: "Reis Die Spotting Press",
      specifications: [
        "Hydraulic Parting Line Blue-Matching",
        "Zero-Defect Zero-Flash Tight Tolerances",
        "Cleanroom Final Assembly Bays",
      ],
    },
    {
      id: "trial-testing",
      title: "Sampling & Injection Trial Testing",
      shortDesc: "Dedicated production-scale injection molding machines for 100% full-speed trial validation prior to delivery.",
      machineBadge: "Husky & KraussMaffei",
      specifications: [
        "Full-Speed Hot Runner Sampling Runs",
        "CMM Dimensional Inspection Reports (FAI)",
        "CPK & Cycle Time Verification",
      ],
    },
  ];

  const updateSectionInfo = (field: string, val: string) => {
    setData({
      ...data,
      capabilitiesSection: {
        ...sectionInfo,
        [field]: val,
      },
    });
  };

  return (
    <div className="space-y-8">
      {/* Top Header Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 uppercase">
              Home Page &bull; Section 4
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Total: {capabilities.length} In-House Capabilities
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#ff6b00]" />
            Manufacturing Capabilities & Machinery Fleet
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage the split 2-column header, left factory photo showcase, and the interactive capability rows.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            const count = capabilities.length + 1;
            const newCap = {
              id: `custom-capability-${count}`,
              title: `New Capability #${count}`,
              shortDesc: "State-of-the-art precision machinery delivering sub-micron mold accuracy.",
              machineBadge: "Precision Machinery",
              specifications: [
                "Advanced CNC Tooling Precision",
                "Automated Laser Calibration",
                "Quality Benchmark Certified",
              ],
            };
            setData({
              ...data,
              capabilities: [...capabilities, newCap],
            });
            setSelectedIdx(capabilities.length);
          }}
          className="px-4 py-2 rounded-xl bg-[#0056b3] hover:bg-[#003d80] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-[#0056b3]/20 transition-all cursor-pointer self-start sm:self-auto shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add More Capability</span>
        </button>
      </div>

      {/* 1. SECTION HEADER CONTROLS (SPLIT HEADLINE, RIGHT COLUMN TEXT & ACCENT PILLS) */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Section Header & Description (Matching Website 2-Column Split)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Eyebrow Badge */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Eyebrow Badge Text
            </label>
            <input
              type="text"
              value={sectionInfo.badge || ""}
              placeholder="MANUFACTURING CAPABILITIES"
              onChange={(e) => updateSectionInfo("badge", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Headline Line 1 (Dark) */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Headline Line 1 (Dark Text)
            </label>
            <input
              type="text"
              value={sectionInfo.headlineDark || ""}
              placeholder="Precision Technology."
              onChange={(e) => updateSectionInfo("headlineDark", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Headline Line 2 (Blue Highlight) */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Headline Line 2 (Blue Highlight)
            </label>
            <input
              type="text"
              value={sectionInfo.headlineBlue || ""}
              placeholder="Engineering Expertise."
              onChange={(e) => updateSectionInfo("headlineBlue", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Right Column Description */}
          <div className="md:col-span-3">
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Right Column Description (With Vertical Gradient Accent Bar)
            </label>
            <textarea
              rows={2}
              value={sectionInfo.description || ""}
              placeholder="Advanced tooling technology, specialized toolmaker craftsmanship..."
              onChange={(e) => updateSectionInfo("description", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Micro Pill 1 */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Micro Highlight Pill 1 (Blue Accent)
            </label>
            <input
              type="text"
              value={sectionInfo.pill1Text || ""}
              placeholder="Sub-Micron CNC Precision"
              onChange={(e) => updateSectionInfo("pill1Text", e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Micro Pill 2 */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Micro Highlight Pill 2 (Orange Accent)
            </label>
            <input
              type="text"
              value={sectionInfo.pill2Text || ""}
              placeholder="100% In-House Trial Testing"
              onChange={(e) => updateSectionInfo("pill2Text", e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Showcase Photo Picker */}
          <div className="md:col-span-3">
            <ImagePicker
              label="Capabilities Plant Workshop Photo (Left Side Showcase Image)"
              value={sectionInfo.showcaseImage || data?.capabilitiesMainImage || "/Home/capablities.png"}
              onChange={(url) => {
                updateSectionInfo("showcaseImage", url);
                setData({ ...data, capabilitiesMainImage: url });
              }}
              helperText="Default: /Home/capablities.png (Shown with engineering corner accents)"
            />
          </div>
        </div>
      </div>

      {/* 2. CAPABILITIES EDITING & INTERACTIVE ROWS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Interactive Row List (Matches Website UI Exactly) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Select Row to Edit ({capabilities.length})
            </h3>
            <span className="text-[11px] text-slate-500 font-medium">Click to configure</span>
          </div>

          {capabilities.map((cap: any, idx: number) => {
            const isSelected = selectedIdx === idx;
            const numStr = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={cap.id || idx}
                onClick={() => setSelectedIdx(idx)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative ${
                  isSelected
                    ? "bg-blue-50/90 border-[#0056b3] shadow-sm"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/70"
                }`}
              >
                {/* Left Accent Bar */}
                <div
                  className={`absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full ${
                    isSelected ? "bg-[#0056b3]" : "opacity-0"
                  }`}
                />

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start space-x-3">
                    <span
                      className={`font-mono text-xs font-bold mt-0.5 shrink-0 ${
                        isSelected ? "text-[#ff6b00]" : "text-slate-400"
                      }`}
                    >
                      {numStr}
                    </span>
                    <div>
                      <h4
                        className={`text-sm font-bold tracking-tight ${
                          isSelected ? "text-[#0056b3]" : "text-slate-900"
                        }`}
                      >
                        {cap.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {cap.shortDesc}
                      </p>
                      {isSelected && (
                        <div className="mt-2 text-[11px] text-slate-600 font-medium flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0056b3] shrink-0" />
                          <span>{cap.specifications?.length || 0} Key Specifications</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 mt-0.5">
                    {isSelected ? (
                      <div className="w-5 h-5 rounded-full bg-[#0056b3] text-white flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Detailed Editor Form for the Selected Capability */}
        <div className="lg:col-span-7">
          {capabilities[selectedIdx] ? (
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
              {/* Header Row */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20">
                    Row #{String(selectedIdx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Editing: {capabilities[selectedIdx].title}
                  </h3>
                </div>

                {capabilities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Delete "${capabilities[selectedIdx].title}"?`)) {
                        const updated = capabilities.filter((_: any, i: number) => i !== selectedIdx);
                        setData({ ...data, capabilities: updated });
                        setSelectedIdx(Math.max(0, selectedIdx - 1));
                      }
                    }}
                    title="Delete capability"
                    className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                )}
              </div>

              {/* Title & Machine Brand Badge */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Capability Title (Heading)
                  </label>
                  <input
                    type="text"
                    value={capabilities[selectedIdx].title || ""}
                    placeholder="e.g. 5-Axis CNC Machining"
                    onChange={(e) => {
                      const updated = [...capabilities];
                      updated[selectedIdx].title = e.target.value;
                      setData({ ...data, capabilities: updated });
                    }}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Machine Fleet Brand Badge
                  </label>
                  <input
                    type="text"
                    value={capabilities[selectedIdx].machineBadge || ""}
                    placeholder="e.g. DMG MORI / Makino"
                    onChange={(e) => {
                      const updated = [...capabilities];
                      updated[selectedIdx].machineBadge = e.target.value;
                      setData({ ...data, capabilities: updated });
                    }}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
                  />
                </div>
              </div>

              {/* Short Description */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  value={capabilities[selectedIdx].shortDesc || ""}
                  placeholder="High-speed 5-axis CNC milling centers delivering sub-micron mold cavity precision down to ±0.005mm."
                  onChange={(e) => {
                    const updated = [...capabilities];
                    updated[selectedIdx].shortDesc = e.target.value;
                    setData({ ...data, capabilities: updated });
                  }}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed focus:outline-none focus:border-[#0056b3] focus:bg-white"
                />
              </div>

              {/* 3 Checkmark Technical Specifications */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Checkmark Technical Specifications ({capabilities[selectedIdx].specifications?.length || 0})
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = [...capabilities];
                      const specs = [...(updated[selectedIdx].specifications || [])];
                      specs.push("New Technical Specification Detail");
                      updated[selectedIdx].specifications = specs;
                      setData({ ...data, capabilities: updated });
                    }}
                    className="text-[11px] font-bold text-[#0056b3] hover:text-[#003d80] flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Spec</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {(capabilities[selectedIdx].specifications || []).map((spec: string, sIdx: number) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-blue-50 text-[#0056b3] shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="text"
                        value={spec}
                        placeholder={`Specification #${sIdx + 1}`}
                        onChange={(e) => {
                          const updated = [...capabilities];
                          const specs = [...(updated[selectedIdx].specifications || [])];
                          specs[sIdx] = e.target.value;
                          updated[selectedIdx].specifications = specs;
                          setData({ ...data, capabilities: updated });
                        }}
                        className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      />
                      {capabilities[selectedIdx].specifications.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const updated = [...capabilities];
                            const specs = updated[selectedIdx].specifications.filter(
                              (_: any, i: number) => i !== sIdx
                            );
                            updated[selectedIdx].specifications = specs;
                            setData({ ...data, capabilities: updated });
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-xs text-slate-500">
              Select a capability from the left list to edit details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
