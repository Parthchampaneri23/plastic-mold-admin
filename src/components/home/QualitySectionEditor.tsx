"use client";

import React, { useState } from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import {
  ShieldCheck,
  Sliders,
  Cpu,
  CheckCircle2,
  Gauge,
  Activity,
  Microscope,
  Layers,
  Settings,
  Scale,
  Sparkles,
  Plus,
  Trash2,
  Target,
  FlaskConical,
  Award,
  BarChart3,
} from "lucide-react";

interface QualitySectionEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function QualitySectionEditor({ data, setData }: QualitySectionEditorProps) {
  const [qualityActiveTab, setQualityActiveTab] = useState<"standards" | "inspection" | "testing" | "technology">("standards");

  return (
            <div className="space-y-6">
              {/* Header Box */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 uppercase">
                      Home Page &bull; Section 8
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      4 Framework Pillars &bull; Quality Benchmarks
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#ff6b00]" />
                    Quality Standards & Technology Highlights
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Manage the zero-defect tooling guarantee, interactive framework tabs, inspection steps, testing fleet, and quality benchmark metrics.
                  </p>
                </div>
              </div>

              {/* Top Section Header Controls (Eyebrow Badge, Main Headline, Highlight, Description) */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" />
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Main Section Header (As Shown on Website)
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Eyebrow Badge Text
                    </label>
                    <input
                      type="text"
                      value={data?.qualitySection?.eyebrowBadge || "ZERO-DEFECT TOOLING GUARANTEE"}
                      onChange={(e) => {
                        const qs = { ...(data.qualitySection || {}) };
                        qs.eyebrowBadge = e.target.value;
                        setData({ ...data, qualitySection: qs });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      placeholder="ZERO-DEFECT TOOLING GUARANTEE"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Headline (Line 1 - Dark)
                    </label>
                    <input
                      type="text"
                      value={data?.qualitySection?.headlineMain || "Quality Standards &"}
                      onChange={(e) => {
                        const qs = { ...(data.qualitySection || {}) };
                        qs.headlineMain = e.target.value;
                        setData({ ...data, qualitySection: qs });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      placeholder="Quality Standards &"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Headline Highlight (Line 2 - Blue)
                    </label>
                    <input
                      type="text"
                      value={data?.qualitySection?.headlineHighlight || "Technology Highlights."}
                      onChange={(e) => {
                        const qs = { ...(data.qualitySection || {}) };
                        qs.headlineHighlight = e.target.value;
                        setData({ ...data, qualitySection: qs });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      placeholder="Technology Highlights."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Section Description (Right Column with Vertical Blue/Orange Accent Bar)
                  </label>
                  <textarea
                    rows={2}
                    value={
                      data?.qualitySection?.description ||
                      "Explore our 4-pillar quality framework engineered to deliver ±0.002mm sub-micron accuracy, flashless output, and 5,000,000+ shot tool lifespan."
                    }
                    onChange={(e) => {
                      const qs = { ...(data.qualitySection || {}) };
                      qs.description = e.target.value;
                      setData({ ...data, qualitySection: qs });
                    }}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                    placeholder="Enter section description..."
                  />
                </div>
              </div>

              {/* Interactive Tab Switcher Exactly Like Website */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 bg-slate-100 rounded-2xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setQualityActiveTab("standards")}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    qualityActiveTab === "standards"
                      ? "bg-[#0056b3] text-white shadow-md shadow-[#0056b3]/25"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  <ShieldCheck className={`w-4 h-4 ${qualityActiveTab === "standards" ? "text-white" : "text-[#0056b3]"}`} />
                  <span>Quality Standards</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQualityActiveTab("inspection")}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    qualityActiveTab === "inspection"
                      ? "bg-[#0056b3] text-white shadow-md shadow-[#0056b3]/25"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  <Target className={`w-4 h-4 ${qualityActiveTab === "inspection" ? "text-white" : "text-[#0056b3]"}`} />
                  <span>Inspection Process</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQualityActiveTab("testing")}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    qualityActiveTab === "testing"
                      ? "bg-[#0056b3] text-white shadow-md shadow-[#0056b3]/25"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  <FlaskConical className={`w-4 h-4 ${qualityActiveTab === "testing" ? "text-white" : "text-[#0056b3]"}`} />
                  <span>Testing Facilities</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQualityActiveTab("technology")}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    qualityActiveTab === "technology"
                      ? "bg-[#0056b3] text-white shadow-md shadow-[#0056b3]/25"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  <Cpu className={`w-4 h-4 ${qualityActiveTab === "technology" ? "text-white" : "text-[#0056b3]"}`} />
                  <span>Technology Highlights</span>
                </button>
              </div>

              {/* TAB 1: QUALITY STANDARDS & BENCHMARKS (EXACT SCREENSHOT MATCH) */}
              {qualityActiveTab === "standards" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: QMS Framework & 4 Standard Badges */}
                  <div className="lg:col-span-7 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#ff6b00]" />
                        <span className="text-xs font-bold text-[#0056b3] uppercase tracking-wider">
                          Standard Details & Certification Points
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Badge Text (e.g. ISO 9001:2015 QMS FRAMEWORK)
                      </label>
                      <input
                        type="text"
                        value={data?.qualitySection?.standardsTab?.tabBadge || "ISO 9001:2015 QMS FRAMEWORK"}
                        onChange={(e) => {
                          const qs = { ...(data.qualitySection || {}) };
                          if (!qs.standardsTab) qs.standardsTab = {};
                          qs.standardsTab.tabBadge = e.target.value;
                          setData({ ...data, qualitySection: qs });
                        }}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
                        placeholder="ISO 9001:2015 QMS FRAMEWORK"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Tab Heading Title
                      </label>
                      <input
                        type="text"
                        value={data?.qualitySection?.standardsTab?.heading || "Global Industrial Quality Standards"}
                        onChange={(e) => {
                          const qs = { ...(data.qualitySection || {}) };
                          if (!qs.standardsTab) qs.standardsTab = {};
                          qs.standardsTab.heading = e.target.value;
                          setData({ ...data, qualitySection: qs });
                        }}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                        placeholder="Global Industrial Quality Standards"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Description Paragraph
                      </label>
                      <textarea
                        rows={3}
                        value={
                          data?.qualitySection?.standardsTab?.description ||
                          "Our Quality Management System enforces strict metallurgical traceability, cleanroom compliant mold assembly standards, and zero-defect flashless gating protocols across every PET, ISBM, and EBM tooling project."
                        }
                        onChange={(e) => {
                          const qs = { ...(data.qualitySection || {}) };
                          if (!qs.standardsTab) qs.standardsTab = {};
                          qs.standardsTab.description = e.target.value;
                          setData({ ...data, qualitySection: qs });
                        }}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                        placeholder="Enter description..."
                      />
                    </div>

                    {/* 4 Feature Checklist Points */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                          Quality Standard Checkmarks (Shown in 2x2 grid)
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            const qs = { ...(data.qualitySection || {}) };
                            if (!qs.standardsTab) qs.standardsTab = {};
                            const feats = [...(qs.standardsTab.features || [
                              "ISO 9001:2015 Certified Toolroom",
                              "Swedish Uddeholm S136 ESR Steel",
                              "Zero Flash Injection Tolerance",
                              "EN 10204 3.1 Mill Certificate"
                            ])];
                            feats.push("New Quality Guarantee Feature");
                            qs.standardsTab.features = feats;
                            setData({ ...data, qualitySection: qs });
                          }}
                          className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#0056b3] hover:bg-blue-100 text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add More Feature</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(
                          data?.qualitySection?.standardsTab?.features || [
                            "ISO 9001:2015 Certified Toolroom",
                            "Swedish Uddeholm S136 ESR Steel",
                            "Zero Flash Injection Tolerance",
                            "EN 10204 3.1 Mill Certificate"
                          ]
                        ).map((feat: string, fIdx: number) => (
                          <div
                            key={fIdx}
                            className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2 group hover:border-[#0056b3] transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0" />
                            <input
                              type="text"
                              value={feat}
                              onChange={(e) => {
                                const qs = { ...(data.qualitySection || {}) };
                                if (!qs.standardsTab) qs.standardsTab = {};
                                const feats = [...(qs.standardsTab.features || [
                                  "ISO 9001:2015 Certified Toolroom",
                                  "Swedish Uddeholm S136 ESR Steel",
                                  "Zero Flash Injection Tolerance",
                                  "EN 10204 3.1 Mill Certificate"
                                ])];
                                feats[fIdx] = e.target.value;
                                qs.standardsTab.features = feats;
                                setData({ ...data, qualitySection: qs });
                              }}
                              className="w-full bg-transparent text-xs font-bold text-slate-800 focus:outline-none focus:text-[#0056b3]"
                              placeholder="Feature text..."
                            />
                            {(data?.qualitySection?.standardsTab?.features || []).length > 1 && (
                              <button
                                type="button"
                                onClick={() => {
                                  const qs = { ...(data.qualitySection || {}) };
                                  if (!qs.standardsTab) qs.standardsTab = {};
                                  const feats = (qs.standardsTab.features || []).filter(
                                    (_: any, i: number) => i !== fIdx
                                  );
                                  qs.standardsTab.features = feats;
                                  setData({ ...data, qualitySection: qs });
                                }}
                                className="text-slate-400 hover:text-red-500 opacity-60 group-hover:opacity-100 transition-opacity p-1 cursor-pointer"
                                title="Remove feature"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Quality Benchmark Card Matching Screenshot */}
                  <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-5">
                    {/* Benchmark Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          QUALITY BENCHMARK
                        </span>
                        <input
                          type="text"
                          value={data?.qualitySection?.standardsTab?.benchmarkSubtitle || "PATEL MOULD VS INDUSTRY"}
                          onChange={(e) => {
                            const qs = { ...(data.qualitySection || {}) };
                            if (!qs.standardsTab) qs.standardsTab = {};
                            qs.standardsTab.benchmarkSubtitle = e.target.value;
                            setData({ ...data, qualitySection: qs });
                          }}
                          className="text-xs font-bold text-[#0056b3] uppercase tracking-wider bg-transparent focus:outline-none"
                          placeholder="PATEL MOULD VS INDUSTRY"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          const qs = { ...(data.qualitySection || {}) };
                          if (!qs.standardsTab) qs.standardsTab = {};
                          const bms = [...(qs.standardsTab.benchmarks || [
                            { id: "bench-1", label: "Cavity Dimension Accuracy", value: "±0.002 mm", percentage: 98 },
                            { id: "bench-2", label: "Mold Life Longevity", value: "5,000,000+ Shots", percentage: 95 },
                            { id: "bench-3", label: "Gate Vestige Polish", value: "Ra 0.1 Mirror Finish", percentage: 100 },
                          ])];
                          bms.push({
                            id: `bench-${bms.length + 1}`,
                            label: "New Benchmark Metric",
                            value: "Sub-Micron Zero Flash",
                            percentage: 95,
                          });
                          qs.standardsTab.benchmarks = bms;
                          setData({ ...data, qualitySection: qs });
                        }}
                        className="px-2.5 py-1 rounded-lg bg-orange-50 text-[#ff6b00] hover:bg-orange-100 text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Benchmark</span>
                      </button>
                    </div>

                    {/* Benchmark Progress Bars List */}
                    <div className="space-y-4">
                      {(
                        data?.qualitySection?.standardsTab?.benchmarks || [
                          { id: "bench-1", label: "Cavity Dimension Accuracy", value: "±0.002 mm", percentage: 98 },
                          { id: "bench-2", label: "Mold Life Longevity", value: "5,000,000+ Shots", percentage: 95 },
                          { id: "bench-3", label: "Gate Vestige Polish", value: "Ra 0.1 Mirror Finish", percentage: 100 },
                        ]
                      ).map((bm: any, bIdx: number) => (
                        <div key={bm.id || bIdx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                          <div className="flex items-center justify-between text-xs font-bold gap-2">
                            <input
                              type="text"
                              value={bm.label}
                              onChange={(e) => {
                                const qs = { ...(data.qualitySection || {}) };
                                if (!qs.standardsTab) qs.standardsTab = {};
                                const bms = [...(qs.standardsTab.benchmarks || [])];
                                bms[bIdx].label = e.target.value;
                                qs.standardsTab.benchmarks = bms;
                                setData({ ...data, qualitySection: qs });
                              }}
                              className="font-bold text-slate-900 bg-transparent focus:outline-none flex-1 text-xs"
                              placeholder="Benchmark Label..."
                            />
                            <input
                              type="text"
                              value={bm.value}
                              onChange={(e) => {
                                const qs = { ...(data.qualitySection || {}) };
                                if (!qs.standardsTab) qs.standardsTab = {};
                                const bms = [...(qs.standardsTab.benchmarks || [])];
                                bms[bIdx].value = e.target.value;
                                qs.standardsTab.benchmarks = bms;
                                setData({ ...data, qualitySection: qs });
                              }}
                              className="font-bold text-[#0056b3] text-right bg-transparent focus:outline-none w-36 text-xs"
                              placeholder="Value e.g. ±0.002 mm"
                            />
                            {(data?.qualitySection?.standardsTab?.benchmarks || []).length > 1 && (
                              <button
                                type="button"
                                onClick={() => {
                                  const qs = { ...(data.qualitySection || {}) };
                                  if (!qs.standardsTab) qs.standardsTab = {};
                                  const bms = (qs.standardsTab.benchmarks || []).filter((_: any, i: number) => i !== bIdx);
                                  qs.standardsTab.benchmarks = bms;
                                  setData({ ...data, qualitySection: qs });
                                }}
                                className="text-slate-400 hover:text-red-500 p-1 cursor-pointer"
                                title="Remove benchmark"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>

                          {/* Progress bar visual preview */}
                          <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden shadow-inner relative">
                            <div
                              style={{ width: `${bm.percentage || 95}%` }}
                              className="h-full bg-gradient-to-r from-[#0056b3] via-[#0080ff] to-[#ff6b00] rounded-full transition-all duration-300"
                            />
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-slate-500 font-semibold pt-0.5">
                            <span>Bar Width Percentage:</span>
                            <div className="flex items-center gap-1">
                              <input
                                type="number"
                                min={10}
                                max={100}
                                value={bm.percentage || 95}
                                onChange={(e) => {
                                  const qs = { ...(data.qualitySection || {}) };
                                  if (!qs.standardsTab) qs.standardsTab = {};
                                  const bms = [...(qs.standardsTab.benchmarks || [])];
                                  bms[bIdx].percentage = Number(e.target.value);
                                  qs.standardsTab.benchmarks = bms;
                                  setData({ ...data, qualitySection: qs });
                                }}
                                className="w-14 px-1.5 py-0.5 bg-white border border-slate-200 rounded text-center text-[10px] font-bold text-slate-900"
                              />
                              <span>%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: INSPECTION PROCESS (4-STEP WORKFLOW) */}
              {qualityActiveTab === "inspection" && (
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-[#ff6b00]" />
                        <span className="text-xs font-bold text-[#0056b3] uppercase tracking-wider">
                          Inspection Process Workflow Header
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const qs = { ...(data.qualitySection || {}) };
                          if (!qs.inspectionTab) qs.inspectionTab = {};
                          const steps = [...(qs.inspectionTab.steps || [
                            { id: "step-1", stepNumber: "01", title: "Raw Steel Audit", description: "Ultrasonic flaw detection & hardness testing on Assab/Uddeholm steel blocks.", badge: "Ultrasonic Inspection" },
                            { id: "step-2", stepNumber: "02", title: "In-Process CNC Audit", description: "On-machine Renishaw touch probe calibration during 5-axis electrode & cavity milling.", badge: "Renishaw Laser Probe" },
                            { id: "step-3", stepNumber: "03", title: "Zeiss 3D CMM Metrology", description: "100% dimensional scan in 20°C climate lab against original 3D CAD model.", badge: "Zeiss 3D Scanning" },
                            { id: "step-4", stepNumber: "04", title: "FAIR Sample Approval", description: "First Article Inspection Report delivered with full CMM data prior to shipping.", badge: "FAIR Report Certificate" },
                          ])];
                          const num = steps.length + 1;
                          steps.push({
                            id: `step-${num}`,
                            stepNumber: num < 10 ? `0${num}` : `${num}`,
                            title: "New Inspection Step",
                            description: "Comprehensive verification & testing step protocol description.",
                            badge: "Laser Verification",
                          });
                          qs.inspectionTab.steps = steps;
                          setData({ ...data, qualitySection: qs });
                        }}
                        className="px-3 py-1.5 rounded-xl bg-[#0056b3] text-white hover:bg-[#003d80] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add More Step</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Workflow Title
                        </label>
                        <input
                          type="text"
                          value={data?.qualitySection?.inspectionTab?.heading || "4-Step Precision Inspection Workflow"}
                          onChange={(e) => {
                            const qs = { ...(data.qualitySection || {}) };
                            if (!qs.inspectionTab) qs.inspectionTab = {};
                            qs.inspectionTab.heading = e.target.value;
                            setData({ ...data, qualitySection: qs });
                          }}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                          placeholder="4-Step Precision Inspection Workflow"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Workflow Subtitle
                        </label>
                        <input
                          type="text"
                          value={
                            data?.qualitySection?.inspectionTab?.description ||
                            "Every component is audited through optical laser scanning and 3D CMM coordinate verification before assembly."
                          }
                          onChange={(e) => {
                            const qs = { ...(data.qualitySection || {}) };
                            if (!qs.inspectionTab) qs.inspectionTab = {};
                            qs.inspectionTab.description = e.target.value;
                            setData({ ...data, qualitySection: qs });
                          }}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                          placeholder="Subtitle description..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {(
                      data?.qualitySection?.inspectionTab?.steps || [
                        { id: "step-1", stepNumber: "01", title: "Raw Steel Audit", description: "Ultrasonic flaw detection & hardness testing on Assab/Uddeholm steel blocks.", badge: "Ultrasonic Inspection" },
                        { id: "step-2", stepNumber: "02", title: "In-Process CNC Audit", description: "On-machine Renishaw touch probe calibration during 5-axis electrode & cavity milling.", badge: "Renishaw Laser Probe" },
                        { id: "step-3", stepNumber: "03", title: "Zeiss 3D CMM Metrology", description: "100% dimensional scan in 20°C climate lab against original 3D CAD model.", badge: "Zeiss 3D Scanning" },
                        { id: "step-4", stepNumber: "04", title: "FAIR Sample Approval", description: "First Article Inspection Report delivered with full CMM data prior to shipping.", badge: "FAIR Report Certificate" },
                      ]
                    ).map((st: any, sIdx: number) => (
                      <div
                        key={st.id || sIdx}
                        className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 group hover:border-[#0056b3] transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <input
                            type="text"
                            value={st.stepNumber || `0${sIdx + 1}`}
                            onChange={(e) => {
                              const qs = { ...(data.qualitySection || {}) };
                              if (!qs.inspectionTab) qs.inspectionTab = {};
                              const steps = [...(qs.inspectionTab.steps || [])];
                              steps[sIdx].stepNumber = e.target.value;
                              qs.inspectionTab.steps = steps;
                              setData({ ...data, qualitySection: qs });
                            }}
                            className="w-10 h-10 rounded-xl bg-blue-50 text-[#0056b3] font-extrabold text-sm text-center border border-blue-100 focus:outline-none focus:bg-[#0056b3] focus:text-white transition-colors"
                            placeholder="01"
                          />
                          {(data?.qualitySection?.inspectionTab?.steps || []).length > 1 && (
                            <button
                              type="button"
                              onClick={() => {
                                const qs = { ...(data.qualitySection || {}) };
                                if (!qs.inspectionTab) qs.inspectionTab = {};
                                const steps = (qs.inspectionTab.steps || []).filter((_: any, i: number) => i !== sIdx);
                                qs.inspectionTab.steps = steps;
                                setData({ ...data, qualitySection: qs });
                              }}
                              className="text-slate-400 hover:text-red-500 p-1 cursor-pointer"
                              title="Delete step"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Step Title
                          </label>
                          <input
                            type="text"
                            value={st.title}
                            onChange={(e) => {
                              const qs = { ...(data.qualitySection || {}) };
                              if (!qs.inspectionTab) qs.inspectionTab = {};
                              const steps = [...(qs.inspectionTab.steps || [])];
                              steps[sIdx].title = e.target.value;
                              qs.inspectionTab.steps = steps;
                              setData({ ...data, qualitySection: qs });
                            }}
                            className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3]"
                            placeholder="Step Title..."
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Description
                          </label>
                          <textarea
                            rows={3}
                            value={st.description}
                            onChange={(e) => {
                              const qs = { ...(data.qualitySection || {}) };
                              if (!qs.inspectionTab) qs.inspectionTab = {};
                              const steps = [...(qs.inspectionTab.steps || [])];
                              steps[sIdx].description = e.target.value;
                              qs.inspectionTab.steps = steps;
                              setData({ ...data, qualitySection: qs });
                            }}
                            className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-700 focus:outline-none focus:border-[#0056b3]"
                            placeholder="Step description..."
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Bottom Badge / Device
                          </label>
                          <input
                            type="text"
                            value={st.badge}
                            onChange={(e) => {
                              const qs = { ...(data.qualitySection || {}) };
                              if (!qs.inspectionTab) qs.inspectionTab = {};
                              const steps = [...(qs.inspectionTab.steps || [])];
                              steps[sIdx].badge = e.target.value;
                              qs.inspectionTab.steps = steps;
                              setData({ ...data, qualitySection: qs });
                            }}
                            className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3]"
                            placeholder="e.g. Zeiss 3D Scanning"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: TESTING FACILITIES (PRESS FLEET & TRIALS) */}
              {qualityActiveTab === "testing" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Trial Pressing Content */}
                  <div className="lg:col-span-7 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                      <FlaskConical className="w-4 h-4 text-[#ff6b00]" />
                      <span className="text-xs font-bold text-[#0056b3] uppercase tracking-wider">
                        Trial Pressing & Sampling Details
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Eyebrow Badge
                        </label>
                        <input
                          type="text"
                          value={data?.qualitySection?.testingTab?.tabBadge || "In-House Sampling Machine Fleet"}
                          onChange={(e) => {
                            const qs = { ...(data.qualitySection || {}) };
                            if (!qs.testingTab) qs.testingTab = {};
                            qs.testingTab.tabBadge = e.target.value;
                            setData({ ...data, qualitySection: qs });
                          }}
                          className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#ff6b00] focus:outline-none focus:border-[#0056b3] focus:bg-white"
                          placeholder="In-House Sampling Machine Fleet"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Facility Heading
                        </label>
                        <input
                          type="text"
                          value={data?.qualitySection?.testingTab?.heading || "Turnkey Trial Pressing (100T - 1200T)"}
                          onChange={(e) => {
                            const qs = { ...(data.qualitySection || {}) };
                            if (!qs.testingTab) qs.testingTab = {};
                            qs.testingTab.heading = e.target.value;
                            setData({ ...data, qualitySection: qs });
                          }}
                          className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                          placeholder="Turnkey Trial Pressing (100T - 1200T)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Facility Description
                      </label>
                      <textarea
                        rows={3}
                        value={
                          data?.qualitySection?.testingTab?.description ||
                          "We don't ship unproven molds. Our in-house test bay houses high-speed injection and blow molding trial presses ranging from 100-ton to 1200-ton clamping force, replicating your exact production environment."
                        }
                        onChange={(e) => {
                          const qs = { ...(data.qualitySection || {}) };
                          if (!qs.testingTab) qs.testingTab = {};
                          qs.testingTab.description = e.target.value;
                          setData({ ...data, qualitySection: qs });
                        }}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                        placeholder="Enter description..."
                      />
                    </div>

                    {/* Sampling Points Checklist */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                          Testing Points (Checklist)
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            const qs = { ...(data.qualitySection || {}) };
                            if (!qs.testingTab) qs.testingTab = {};
                            const pts = [...(qs.testingTab.points || [
                              { id: "pt-1", text: "Real-time cycle time speed optimization & pressure balancing" },
                              { id: "pt-2", text: "Preform wall thickness & optical polarization concentricity audit" },
                              { id: "pt-3", text: "Hydraulic & pneumatic action trial fitting under maximum pressure" },
                            ])];
                            pts.push({ id: `pt-${pts.length + 1}`, text: "New sampling check protocol" });
                            qs.testingTab.points = pts;
                            setData({ ...data, qualitySection: qs });
                          }}
                          className="px-2.5 py-1 rounded-lg bg-orange-50 text-[#ff6b00] hover:bg-orange-100 text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add More Point</span>
                        </button>
                      </div>

                      <div className="space-y-2">
                        {(
                          data?.qualitySection?.testingTab?.points || [
                            { id: "pt-1", text: "Real-time cycle time speed optimization & pressure balancing" },
                            { id: "pt-2", text: "Preform wall thickness & optical polarization concentricity audit" },
                            { id: "pt-3", text: "Hydraulic & pneumatic action trial fitting under maximum pressure" },
                          ]
                        ).map((pt: any, pIdx: number) => (
                          <div
                            key={pt.id || pIdx}
                            className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2 group hover:border-[#0056b3]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0" />
                            <input
                              type="text"
                              value={pt.text}
                              onChange={(e) => {
                                const qs = { ...(data.qualitySection || {}) };
                                if (!qs.testingTab) qs.testingTab = {};
                                const pts = [...(qs.testingTab.points || [])];
                                pts[pIdx].text = e.target.value;
                                qs.testingTab.points = pts;
                                setData({ ...data, qualitySection: qs });
                              }}
                              className="w-full bg-transparent text-xs font-semibold text-slate-800 focus:outline-none"
                              placeholder="Testing point..."
                            />
                            {(data?.qualitySection?.testingTab?.points || []).length > 1 && (
                              <button
                                type="button"
                                onClick={() => {
                                  const qs = { ...(data.qualitySection || {}) };
                                  if (!qs.testingTab) qs.testingTab = {};
                                  const pts = (qs.testingTab.points || []).filter((_: any, i: number) => i !== pIdx);
                                  qs.testingTab.points = pts;
                                  setData({ ...data, qualitySection: qs });
                                }}
                                className="text-slate-400 hover:text-red-500 p-1 cursor-pointer"
                                title="Remove point"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Fleet Stat Cards */}
                  <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-[#0056b3]" />
                        <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                          Testing Machine Stat Cards
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const qs = { ...(data.qualitySection || {}) };
                          if (!qs.testingTab) qs.testingTab = {};
                          const sts = [...(qs.testingTab.stats || [
                            { id: "stat-1", value: "100T - 1200T", label: "Clamping Force Test Fleet" },
                            { id: "stat-2", value: "100% Batch", label: "Trial Sampling Reports" },
                          ])];
                          sts.push({
                            id: `stat-${sts.length + 1}`,
                            value: "50+ Bar",
                            label: "Maximum Hydraulic Pressure",
                          });
                          qs.testingTab.stats = sts;
                          setData({ ...data, qualitySection: qs });
                        }}
                        className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#0056b3] hover:bg-blue-100 text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Stat Card</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(
                        data?.qualitySection?.testingTab?.stats || [
                          { id: "stat-1", value: "100T - 1200T", label: "Clamping Force Test Fleet" },
                          { id: "stat-2", value: "100% Batch", label: "Trial Sampling Reports" },
                        ]
                      ).map((st: any, sIdx: number) => (
                        <div
                          key={st.id || sIdx}
                          className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 group hover:border-[#0056b3] transition-all"
                        >
                          <div className="flex justify-end">
                            {(data?.qualitySection?.testingTab?.stats || []).length > 1 && (
                              <button
                                type="button"
                                onClick={() => {
                                  const qs = { ...(data.qualitySection || {}) };
                                  if (!qs.testingTab) qs.testingTab = {};
                                  const sts = (qs.testingTab.stats || []).filter((_: any, i: number) => i !== sIdx);
                                  qs.testingTab.stats = sts;
                                  setData({ ...data, qualitySection: qs });
                                }}
                                className="text-slate-400 hover:text-red-500 p-0.5 cursor-pointer"
                                title="Remove stat"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                              Value / Metric
                            </label>
                            <input
                              type="text"
                              value={st.value}
                              onChange={(e) => {
                                const qs = { ...(data.qualitySection || {}) };
                                if (!qs.testingTab) qs.testingTab = {};
                                const sts = [...(qs.testingTab.stats || [])];
                                sts[sIdx].value = e.target.value;
                                qs.testingTab.stats = sts;
                                setData({ ...data, qualitySection: qs });
                              }}
                              className="w-full text-center text-lg font-black text-slate-900 bg-white border border-slate-200 rounded-lg py-1 px-2 focus:outline-none focus:border-[#0056b3]"
                              placeholder="100T - 1200T"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                              Label / Description
                            </label>
                            <input
                              type="text"
                              value={st.label}
                              onChange={(e) => {
                                const qs = { ...(data.qualitySection || {}) };
                                if (!qs.testingTab) qs.testingTab = {};
                                const sts = [...(qs.testingTab.stats || [])];
                                sts[sIdx].label = e.target.value;
                                qs.testingTab.stats = sts;
                                setData({ ...data, qualitySection: qs });
                              }}
                              className="w-full text-center text-[11px] font-bold text-slate-600 bg-white border border-slate-200 rounded-lg py-1 px-2 focus:outline-none focus:border-[#0056b3]"
                              placeholder="Clamping Force Test Fleet"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: TECHNOLOGY HIGHLIGHTS (3 CARDS) */}
              {qualityActiveTab === "technology" && (
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-[#ff6b00]" />
                        3 Advanced Tooling Technology Cards
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Manage 3D Moldflow Thermal Simulation, Sequential Hot Runner Gating, and Conformal Cooling Channel highlights.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        const qs = { ...(data.qualitySection || {}) };
                        if (!qs.technologyTab) qs.technologyTab = {};
                        const cards = [...(qs.technologyTab.cards || [
                          {
                            id: "tech-1",
                            title: "3D Moldflow Thermal Simulation",
                            description: "Pre-machining thermal and melt flow analysis using Autodesk Moldflow to eliminate air traps, weld lines, and warpage.",
                            badge: "Autodesk Moldflow Integrated",
                            accentColor: "blue",
                          },
                          {
                            id: "tech-2",
                            title: "Sequential Hot Runner Gating",
                            description: "Husky & Mold-Masters hot runner integration with needle valve sequential gating for zero flash and uniform cavity filling.",
                            badge: "Husky & Mold-Masters Systems",
                            accentColor: "orange",
                          },
                          {
                            id: "tech-3",
                            title: "Conformal Cooling Channel Design",
                            description: "Advanced 3D curved conformal cooling channels following cavity geometry, reducing mold cycle time up to 30%.",
                            badge: "30% Cycle Time Reduction",
                            accentColor: "blue",
                          },
                        ])];
                        cards.push({
                          id: `tech-${cards.length + 1}`,
                          title: "New Technology Innovation",
                          description: "Advanced tooling engineering highlight and cycle efficiency specification.",
                          badge: "Sub-Micron Capability",
                          accentColor: cards.length % 2 === 0 ? "blue" : "orange",
                        });
                        qs.technologyTab.cards = cards;
                        setData({ ...data, qualitySection: qs });
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-[#0056b3] text-white hover:bg-[#003d80] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Tech Card</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {(
                      data?.qualitySection?.technologyTab?.cards || [
                        {
                          id: "tech-1",
                          title: "3D Moldflow Thermal Simulation",
                          description: "Pre-machining thermal and melt flow analysis using Autodesk Moldflow to eliminate air traps, weld lines, and warpage.",
                          badge: "Autodesk Moldflow Integrated",
                          accentColor: "blue",
                        },
                        {
                          id: "tech-2",
                          title: "Sequential Hot Runner Gating",
                          description: "Husky & Mold-Masters hot runner integration with needle valve sequential gating for zero flash and uniform cavity filling.",
                          badge: "Husky & Mold-Masters Systems",
                          accentColor: "orange",
                        },
                        {
                          id: "tech-3",
                          title: "Conformal Cooling Channel Design",
                          description: "Advanced 3D curved conformal cooling channels following cavity geometry, reducing mold cycle time up to 30%.",
                          badge: "30% Cycle Time Reduction",
                          accentColor: "blue",
                        },
                      ]
                    ).map((card: any, cIdx: number) => (
                      <div
                        key={card.id || cIdx}
                        className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 group hover:border-[#0056b3] transition-all"
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                          <span
                            className={`px-2.5 py-1 rounded-xl text-xs font-bold uppercase tracking-wider ${
                              card.accentColor === "orange"
                                ? "bg-orange-50 text-[#ff6b00] border border-orange-200"
                                : "bg-blue-50 text-[#0056b3] border border-blue-200"
                            }`}
                          >
                            Card #{cIdx + 1}
                          </span>

                          <div className="flex items-center gap-2">
                            <select
                              value={card.accentColor || "blue"}
                              onChange={(e) => {
                                const qs = { ...(data.qualitySection || {}) };
                                if (!qs.technologyTab) qs.technologyTab = {};
                                const cards = [...(qs.technologyTab.cards || [])];
                                cards[cIdx].accentColor = e.target.value;
                                qs.technologyTab.cards = cards;
                                setData({ ...data, qualitySection: qs });
                              }}
                              className="text-[10px] font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-1.5 py-0.5"
                            >
                              <option value="blue">Blue Accent</option>
                              <option value="orange">Orange Accent</option>
                            </select>

                            {(data?.qualitySection?.technologyTab?.cards || []).length > 1 && (
                              <button
                                type="button"
                                onClick={() => {
                                  const qs = { ...(data.qualitySection || {}) };
                                  if (!qs.technologyTab) qs.technologyTab = {};
                                  const cards = (qs.technologyTab.cards || []).filter(
                                    (_: any, i: number) => i !== cIdx
                                  );
                                  qs.technologyTab.cards = cards;
                                  setData({ ...data, qualitySection: qs });
                                }}
                                className="text-slate-400 hover:text-red-500 p-1 cursor-pointer"
                                title="Remove tech card"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Card Title
                          </label>
                          <input
                            type="text"
                            value={card.title}
                            onChange={(e) => {
                              const qs = { ...(data.qualitySection || {}) };
                              if (!qs.technologyTab) qs.technologyTab = {};
                              const cards = [...(qs.technologyTab.cards || [])];
                              cards[cIdx].title = e.target.value;
                              qs.technologyTab.cards = cards;
                              setData({ ...data, qualitySection: qs });
                            }}
                            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3]"
                            placeholder="e.g. 3D Moldflow Thermal Simulation"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Card Description
                          </label>
                          <textarea
                            rows={3}
                            value={card.description}
                            onChange={(e) => {
                              const qs = { ...(data.qualitySection || {}) };
                              if (!qs.technologyTab) qs.technologyTab = {};
                              const cards = [...(qs.technologyTab.cards || [])];
                              cards[cIdx].description = e.target.value;
                              qs.technologyTab.cards = cards;
                              setData({ ...data, qualitySection: qs });
                            }}
                            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-[#0056b3]"
                            placeholder="Enter description..."
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Bottom Badge Tag
                          </label>
                          <input
                            type="text"
                            value={card.badge}
                            onChange={(e) => {
                              const qs = { ...(data.qualitySection || {}) };
                              if (!qs.technologyTab) qs.technologyTab = {};
                              const cards = [...(qs.technologyTab.cards || [])];
                              cards[cIdx].badge = e.target.value;
                              qs.technologyTab.cards = cards;
                              setData({ ...data, qualitySection: qs });
                            }}
                            className={`w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold ${
                              card.accentColor === "orange" ? "text-[#ff6b00]" : "text-[#0056b3]"
                            } focus:outline-none focus:border-[#0056b3]`}
                            placeholder="e.g. 30% Cycle Time Reduction"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
  );
}
