"use client";

import React, { useState } from "react";
import { FileText, Plus, Trash2, CheckCircle2 } from "lucide-react";
import { ContactInquirySectionData } from "@/data/defaultContact";

interface ContactInquiryEditorProps {
  inquiry: ContactInquirySectionData;
  onChange: (inquiry: ContactInquirySectionData) => void;
}

export function ContactInquiryEditor({
  inquiry,
  onChange,
}: ContactInquiryEditorProps) {
  const currentInquiry = inquiry || {
    badge: "TECHNICAL RFQ & PROPOSAL DESK",
    headingPart1: "Request a Technical Quotation &",
    headingHighlight: "Project Assessment",
    description: "",
    formTitle: "Project Brief & Tooling Parameter Specifications",
    formSubtitle: "Complete the 3-stage tooling profile below. All CAD components and technical data are protected under our mutual NDA.",
    successTitle: "Quotation Request Submitted Successfully!",
    successMessage: "Our engineering division in Gujarat has received your tooling requirements and attached files. A dedicated mold project engineer will review your CAD parameters and issue a preliminary DFM report within 24 business hours.",
    supportPhone: "+91 77847 58347",
    responseWindow: "Under 24 Business Hours",
    fileUploadNote: "Accepted: STEP, STP, IGES, DXF, DWG, PDF (Max 25MB)",
    requirementOptions: [
      "New Complete Mold Tooling",
      "Mold Cavity & Core Replacement",
      "Neck Split & Conversion Kit",
      "Hot Runner System Overhaul",
      "Mold Flow Analysis & DFM Only",
    ],
  };

  const [newOption, setNewOption] = useState("");

  const handleAddOption = () => {
    if (!newOption.trim()) return;
    const list = [...(currentInquiry.requirementOptions || []), newOption.trim()];
    onChange({ ...currentInquiry, requirementOptions: list });
    setNewOption("");
  };

  const handleRemoveOption = (index: number) => {
    const list = [...(currentInquiry.requirementOptions || [])];
    list.splice(index, 1);
    onChange({ ...currentInquiry, requirementOptions: list });
  };

  const handleUpdateOption = (index: number, val: string) => {
    const list = [...(currentInquiry.requirementOptions || [])];
    list[index] = val;
    onChange({ ...currentInquiry, requirementOptions: list });
  };

  return (
    <div className="space-y-6">
      {/* 1. SECTION HEADLINE & INTRO */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">RFQ Quote Inquiry Header</h2>
            <p className="text-xs text-slate-500">
              Customize the headline, highlight text, and proposal description above the RFQ submission form.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Badge Text
            </label>
            <input
              type="text"
              value={currentInquiry.badge || ""}
              onChange={(e) => onChange({ ...currentInquiry, badge: e.target.value })}
              placeholder="TECHNICAL RFQ & PROPOSAL DESK"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Heading Part 1
            </label>
            <input
              type="text"
              value={currentInquiry.headingPart1 || ""}
              onChange={(e) =>
                onChange({ ...currentInquiry, headingPart1: e.target.value })
              }
              placeholder="Request a Technical Quotation &"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Heading Highlight (Orange)
            </label>
            <input
              type="text"
              value={currentInquiry.headingHighlight || ""}
              onChange={(e) =>
                onChange({ ...currentInquiry, headingHighlight: e.target.value })
              }
              placeholder="Project Assessment"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-semibold text-[#ff6b00]"
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Section Description Paragraph
            </label>
            <textarea
              rows={3}
              value={currentInquiry.description || ""}
              onChange={(e) =>
                onChange({ ...currentInquiry, description: e.target.value })
              }
              placeholder="Submit your preform or container specifications..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* 2. RFQ FORM CONTENT & CONFIGURATION */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ff6b00]">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">RFQ Request Form Settings &amp; Feedback</h2>
            <p className="text-xs text-slate-500">
              Configure titles, support line, turnaround response time, file upload constraints, and success state for the 11-field RFQ form.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Form Card Title
            </label>
            <input
              type="text"
              value={currentInquiry.formTitle || ""}
              onChange={(e) =>
                onChange({ ...currentInquiry, formTitle: e.target.value })
              }
              placeholder="Project Brief & Tooling Parameter Specifications"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Form Card Subtitle
            </label>
            <input
              type="text"
              value={currentInquiry.formSubtitle || ""}
              onChange={(e) =>
                onChange({ ...currentInquiry, formSubtitle: e.target.value })
              }
              placeholder="Complete the 3-stage tooling profile below..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Direct Engineering Support Phone
            </label>
            <input
              type="text"
              value={currentInquiry.supportPhone || ""}
              onChange={(e) =>
                onChange({ ...currentInquiry, supportPhone: e.target.value })
              }
              placeholder="+91 77847 58347"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Guaranteed Response Window
            </label>
            <input
              type="text"
              value={currentInquiry.responseWindow || ""}
              onChange={(e) =>
                onChange({ ...currentInquiry, responseWindow: e.target.value })
              }
              placeholder="Under 24 Business Hours"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              CAD &amp; Drawing Upload Note
            </label>
            <input
              type="text"
              value={currentInquiry.fileUploadNote || ""}
              onChange={(e) =>
                onChange({ ...currentInquiry, fileUploadNote: e.target.value })
              }
              placeholder="Accepted: STEP, STP, IGES, DXF, DWG, PDF (Max 25MB)"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Submission Success Banner Title
            </label>
            <input
              type="text"
              value={currentInquiry.successTitle || ""}
              onChange={(e) =>
                onChange({ ...currentInquiry, successTitle: e.target.value })
              }
              placeholder="Quotation Request Submitted Successfully!"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-semibold text-emerald-700"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Submission Success Detailed Message
            </label>
            <textarea
              rows={2}
              value={currentInquiry.successMessage || ""}
              onChange={(e) =>
                onChange({ ...currentInquiry, successMessage: e.target.value })
              }
              placeholder="Our engineering division in Gujarat has received your tooling requirements..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>
        </div>

        {/* Dynamic Requirement Scope Dropdown Options */}
        <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Requirement Scope Dropdown Options</h3>
              <p className="text-xs text-slate-500">
                Options available for visitors when selecting their tooling scope in the form.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {(currentInquiry.requirementOptions || []).map((opt, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-6 text-xs text-slate-400 font-mono text-center">
                  {idx + 1}.
                </span>
                <input
                  type="text"
                  value={opt}
                  onChange={(e) => handleUpdateOption(idx, e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveOption(idx)}
                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                  title="Remove option"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              type="text"
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddOption())}
              placeholder="Add another requirement option (e.g. Spare Parts & Inserts)..."
              className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
            />
            <button
              type="button"
              onClick={handleAddOption}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0056b3] hover:bg-blue-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Option</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
