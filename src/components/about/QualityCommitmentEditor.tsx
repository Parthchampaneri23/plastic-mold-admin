"use client";

import React from "react";
import { Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

interface QualityCommitmentEditorProps {
  aboutData: any;
  setAboutData: (data: any) => void;
}

export default function QualityCommitmentEditor({
  aboutData,
  setAboutData,
}: QualityCommitmentEditorProps) {
  const qc = aboutData?.qualityCommitment || {
    badge: "QUALITY COMMITMENT",
    heading: "Precision Doesn't End",
    highlightHeading: "at Machining.",
    description: "Every mould undergoes comprehensive quality verification at every milestone of manufacture.",
    stages: [],
  };

  const updateQC = (field: string, val: any) => {
    setAboutData({
      ...aboutData,
      qualityCommitment: {
        ...qc,
        [field]: val,
      },
    });
  };

  const updateStage = (index: number, field: string, val: any) => {
    const list = [...(qc.stages || [])];
    list[index] = { ...list[index], [field]: val };
    updateQC("stages", list);
  };

  const updateMetric = (stageIndex: number, metricIndex: number, val: string) => {
    const list = [...(qc.stages || [])];
    const currentMetrics = [...(list[stageIndex]?.metrics || [])];
    currentMetrics[metricIndex] = val;
    list[stageIndex] = { ...list[stageIndex], metrics: currentMetrics };
    updateQC("stages", list);
  };

  return (
    <div className="space-y-8">
      {/* Header Info Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#0056b3]/10 text-[#0056b3] border border-[#0056b3]/20 uppercase">
              About Page &bull; Section 6
            </span>
            <span className="text-xs text-slate-500 font-medium">5-Stage Quality Commitment Roadmap</span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#ff6b00]" />
            Quality Commitment &amp; 5 Stages
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage the quality assurance roadmap from DFM review to Zeiss metrology, trial run, and pre-dispatch sign-off.
          </p>
        </div>
      </div>

      {/* Main Section Header */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#ff6b00]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Section Header &amp; Top Description
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Badge Eyebrow
            </label>
            <input
              type="text"
              value={qc.badge ?? "QUALITY COMMITMENT"}
              onChange={(e) => updateQC("badge", e.target.value)}
              placeholder="QUALITY COMMITMENT"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Heading Prefix
            </label>
            <input
              type="text"
              value={qc.heading ?? "Precision Doesn't End"}
              onChange={(e) => updateQC("heading", e.target.value)}
              placeholder="Precision Doesn't End"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Heading Highlight (Blue)
            </label>
            <input
              type="text"
              value={qc.highlightHeading ?? "at Machining."}
              onChange={(e) => updateQC("highlightHeading", e.target.value)}
              placeholder="at Machining."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
            Section Description
          </label>
          <textarea
            rows={2}
            value={qc.description ?? "Every mould undergoes comprehensive quality verification at every milestone of manufacture."}
            onChange={(e) => updateQC("description", e.target.value)}
            placeholder="Every mould undergoes comprehensive quality verification at every milestone of manufacture."
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
          />
        </div>
      </div>

      {/* 5 Stages Cards */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#0056b3]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            5 Quality Inspection Stages (DFM, Machining, Metrology, Trial, Sign-off)
          </h3>
        </div>

        <div className="space-y-5">
          {(qc.stages || []).map((stage: any, idx: number) => (
            <div
              key={stage.id || idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black text-white px-2 py-0.5 rounded bg-[#0056b3]">
                    STAGE {stage.num || `0${idx + 1}`}
                  </span>
                  <span className="text-xs font-bold text-slate-900">{stage.title}</span>
                </div>
                <span className="text-[11px] font-mono font-semibold text-[#ff6b00]">
                  {stage.tagline || ""}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                    Stage Title
                  </label>
                  <input
                    type="text"
                    value={stage.title || ""}
                    onChange={(e) => updateStage(idx, "title", e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                    Tagline Sub-header
                  </label>
                  <input
                    type="text"
                    value={stage.tagline || ""}
                    onChange={(e) => updateStage(idx, "tagline", e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                  Stage Description
                </label>
                <textarea
                  rows={2}
                  value={stage.description || ""}
                  onChange={(e) => updateStage(idx, "description", e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 leading-snug focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-3">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                    Equipment &amp; Primary Testing System
                  </label>
                  <input
                    type="text"
                    value={stage.equipment || ""}
                    onChange={(e) => updateStage(idx, "equipment", e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
                  />
                </div>
              </div>

              {/* 3 Verified Quality Check Metrics */}
              <div className="pt-2 border-t border-slate-200/60">
                <label className="block text-[10px] font-bold text-[#ff6b00] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Quality Checks (3 Checklist Points)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[0, 1, 2].map((mIdx) => (
                    <div key={mIdx}>
                      <input
                        type="text"
                        value={(stage.metrics && stage.metrics[mIdx]) || ""}
                        placeholder={`Check #${mIdx + 1}`}
                        onChange={(e) => updateMetric(idx, mIdx, e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

