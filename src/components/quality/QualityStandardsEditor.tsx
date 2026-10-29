"use client";

import React from "react";
import { ShieldCheck, Plus, Trash2 } from "lucide-react";
import {
  IQualityStandardsSection,
  IQualityStandardBlock,
} from "@/models/QualityPageContent";

interface QualityStandardsEditorProps {
  standards: IQualityStandardsSection;
  onChange: (standards: IQualityStandardsSection) => void;
}

export function QualityStandardsEditor({
  standards,
  onChange,
}: QualityStandardsEditorProps) {
  const current = standards || {
    badge: "QUALITY STANDARDS & CERTIFICATIONS",
    headingPart1: "Quality Standards &",
    headingHighlight: "Certifications.",
    description: "",
    blocks: [],
  };

  const handleUpdateBlock = (
    index: number,
    field: keyof IQualityStandardBlock,
    value: any
  ) => {
    const list = [...(current.blocks || [])];
    list[index] = { ...list[index], [field]: value };
    onChange({ ...current, blocks: list });
  };

  const handleAddBlock = () => {
    const list = [...(current.blocks || [])];
    list.push({
      title: "New Standard Block",
      tagline: "Application Standard",
      description: "Describe compliance guidelines and tooling standards...",
      points: ["Compliance point 1", "Compliance point 2", "Compliance point 3"],
      iconName: "ShieldCheck",
    });
    onChange({ ...current, blocks: list });
  };

  const handleDeleteBlock = (index: number) => {
    const list = (current.blocks || []).filter((_, i) => i !== index);
    onChange({ ...current, blocks: list });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Quality Standards &amp; Certifications Blocks
          </h2>
          <p className="text-xs text-slate-500">
            Manage Customer Specifications, Applicable Industry Practices, and Documentation &amp; Traceability cards.
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
            placeholder="QUALITY STANDARDS & CERTIFICATIONS"
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
            placeholder="Quality Standards &"
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
            placeholder="Certifications."
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
            placeholder="Manufacturing compliance is guided by agreed customer specifications..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>
      </div>

      {/* Standards Blocks List */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">
            Standard Pillars ({current.blocks?.length || 0})
          </h3>
          <button
            onClick={handleAddBlock}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Standard Block</span>
          </button>
        </div>

        <div className="space-y-4">
          {(current.blocks || []).map((blk, bIdx) => (
            <div
              key={bIdx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0056b3] font-mono">
                  Pillar #0{bIdx + 1} &bull; {blk.title || "Untitled Block"}
                </span>
                <button
                  onClick={() => handleDeleteBlock(bIdx)}
                  className="text-slate-400 hover:text-red-500 transition-colors p-1"
                  title="Delete block"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Block Title
                  </label>
                  <input
                    type="text"
                    value={blk.title || ""}
                    onChange={(e) => handleUpdateBlock(bIdx, "title", e.target.value)}
                    placeholder="e.g. Customer Specifications"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Tagline (Orange text)
                  </label>
                  <input
                    type="text"
                    value={blk.tagline || ""}
                    onChange={(e) => handleUpdateBlock(bIdx, "tagline", e.target.value)}
                    placeholder="e.g. Application-Centric Tooling Parameters"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={blk.description || ""}
                    onChange={(e) => handleUpdateBlock(bIdx, "description", e.target.value)}
                    placeholder="Moulds are engineered and inspected according to approved 2D drawings..."
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Bullet Points (One per line)
                  </label>
                  <textarea
                    rows={3}
                    value={(blk.points || []).join("\n")}
                    onChange={(e) => {
                      const pts = e.target.value.split("\n").filter((p) => p.trim());
                      handleUpdateBlock(bIdx, "points", pts);
                    }}
                    placeholder="Customer drawing dimensional tolerances&#10;Specific machine compatibility parameters"
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

