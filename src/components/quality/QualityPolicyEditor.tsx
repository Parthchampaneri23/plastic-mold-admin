"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { ShieldCheck, Plus, Trash2, CheckCircle2 } from "lucide-react";
import { IQualityPolicy, IQualityCommitment } from "@/models/QualityPageContent";

interface QualityPolicyEditorProps {
  policy: IQualityPolicy;
  onChange: (policy: IQualityPolicy) => void;
}

export function QualityPolicyEditor({ policy, onChange }: QualityPolicyEditorProps) {
  const current = policy || {
    badge: "QUALITY POLICY",
    headingPart1: "Quality Is Built Into",
    headingHighlight: "Every Stage.",
    description: "",
    image: "/quality/quality-policy-alignment.jpg",
    commitments: [],
  };

  const handleUpdateCommitment = (
    index: number,
    field: keyof IQualityCommitment,
    value: string
  ) => {
    const list = [...(current.commitments || [])];
    list[index] = { ...list[index], [field]: value };
    onChange({ ...current, commitments: list });
  };

  const handleAddCommitment = () => {
    const list = [...(current.commitments || [])];
    list.push({
      title: "New Quality Commitment",
      description: "Describe commitment to tooling excellence and tolerances...",
      iconName: "ShieldCheck",
    });
    onChange({ ...current, commitments: list });
  };

  const handleDeleteCommitment = (index: number) => {
    const list = (current.commitments || []).filter((_, i) => i !== index);
    onChange({ ...current, commitments: list });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Quality Policy &amp; Core Commitments
          </h2>
          <p className="text-xs text-slate-500">
            Manage the Quality Policy section headline, description, inspection alignment image, and key commitments.
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
            placeholder="QUALITY POLICY"
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
            placeholder="Quality Is Built Into"
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
            placeholder="Every Stage."
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
            placeholder="Our quality policy establishes clear verification protocols at every transition point..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <ImagePicker
            label="Quality Policy Section Photo"
            value={current.image || ""}
            onChange={(val) => onChange({ ...current, image: val })}
            helperText="Upload or enter quality policy photo path (e.g. /quality/quality-policy-alignment.jpg)"
          />
        </div>
      </div>

      {/* Commitments List */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">
            Core Commitments ({current.commitments?.length || 0})
          </h3>
          <button
            onClick={handleAddCommitment}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Commitment</span>
          </button>
        </div>

        <div className="space-y-3">
          {(current.commitments || []).map((comm, cIdx) => (
            <div
              key={cIdx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0056b3] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Commitment #{cIdx + 1}
                </span>
                <button
                  onClick={() => handleDeleteCommitment(cIdx)}
                  className="text-slate-400 hover:text-red-500 transition-colors p-1"
                  title="Delete commitment"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-1">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={comm.title || ""}
                    onChange={(e) => handleUpdateCommitment(cIdx, "title", e.target.value)}
                    placeholder="e.g. Precision in Every Detail"
                    className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={comm.description || ""}
                    onChange={(e) => handleUpdateCommitment(cIdx, "description", e.target.value)}
                    placeholder="Controlled machining tolerances, critical core-cavity alignment..."
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

