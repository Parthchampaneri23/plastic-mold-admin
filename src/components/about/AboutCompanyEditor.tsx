"use client";

import React from "react";
import { Sparkles, Building2, Plus, Trash2, Milestone, Layers } from "lucide-react";
import { ImagePicker } from "@/components/ui/ImagePicker";

interface AboutCompanyEditorProps {
  aboutData: any;
  setAboutData: (data: any) => void;
}

export default function AboutCompanyEditor({ aboutData, setAboutData }: AboutCompanyEditorProps) {
  const company = aboutData?.companyIntro || {
    eyebrowBadge: "ABOUT PATEL MOULD",
    heading: "Built on Precision.",
    highlightHeading: "Driven by Experience.",
    paragraph1: "Founded in 1994, Patel Mould Industries has grown into a precision tooling partner...",
    paragraph2: "Operating out of a 15,000 m² state-of-the-art facility in Gujarat...",
    mainImage: "/About/about company.png",
    facilityAddressBadgeTitle: "Patel Mould Engineering Complex",
    facilityAddressBadgeSub: "Phase-IV GIDC, Precision Tool Park, Gujarat, India",
    isoBadgeText: "ISO 9001:2015",
    keyStats: [],
    timelineMilestones: [],
    coreExpertiseItems: [],
  };

  const updateCompany = (field: string, val: any) => {
    setAboutData({
      ...aboutData,
      companyIntro: {
        ...company,
        [field]: val,
      },
    });
  };

  const updateStat = (index: number, field: string, val: string) => {
    const list = [...(company.keyStats || [])];
    list[index] = { ...list[index], [field]: val };
    updateCompany("keyStats", list);
  };

  const updateMilestone = (index: number, field: string, val: any) => {
    const list = [...(company.timelineMilestones || [])];
    list[index] = { ...list[index], [field]: val };
    updateCompany("timelineMilestones", list);
  };

  const addMilestone = () => {
    const list = [
      ...(company.timelineMilestones || []),
      { year: "2026", title: "New Milestone", description: "Milestone description...", accent: false },
    ];
    updateCompany("timelineMilestones", list);
  };

  const deleteMilestone = (index: number) => {
    const list = company.timelineMilestones.filter((_: any, i: number) => i !== index);
    updateCompany("timelineMilestones", list);
  };

  const updateExpertise = (index: number, field: string, val: string) => {
    const list = [...(company.coreExpertiseItems || [])];
    list[index] = { ...list[index], [field]: val };
    updateCompany("coreExpertiseItems", list);
  };

  return (
    <div className="space-y-8">
      {/* Header Info Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#0056b3]/10 text-[#0056b3] border border-[#0056b3]/20 uppercase">
              About Page &bull; Section 2
            </span>
            <span className="text-xs text-slate-500 font-medium">Core Company Introduction &amp; Timeline</span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#ff6b00]" />
            About Patel Mould Section
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage the primary company story, plant photo, 3 key stat metrics, 30-year journey timeline, and interactive capability highlights.
          </p>
        </div>
      </div>

      {/* Part 1: Main Story & Headings */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#ff6b00]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Company Story &amp; Facility Image
          </h3>
        </div>

        {/* Plant Photo */}
        <div>
          <ImagePicker
            label="Manufacturing Facility / Plant Image"
            value={company.mainImage || "/About/about company.png"}
            onChange={(url) => updateCompany("mainImage", url)}
            helperText="Main factory plant photo shown on the left side"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Eyebrow Badge
            </label>
            <input
              type="text"
              value={company.eyebrowBadge || ""}
              placeholder="ABOUT PATEL MOULD"
              onChange={(e) => updateCompany("eyebrowBadge", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Heading Prefix
            </label>
            <input
              type="text"
              value={company.heading || ""}
              placeholder="Built on Precision."
              onChange={(e) => updateCompany("heading", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Heading Highlight
            </label>
            <input
              type="text"
              value={company.highlightHeading || ""}
              placeholder="Driven by Experience."
              onChange={(e) => updateCompany("highlightHeading", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Paragraph 1 (Origins &amp; Expertise)
            </label>
            <textarea
              rows={4}
              value={company.paragraph1 || ""}
              onChange={(e) => updateCompany("paragraph1", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Paragraph 2 (Facility &amp; Technology)
            </label>
            <textarea
              rows={4}
              value={company.paragraph2 || ""}
              onChange={(e) => updateCompany("paragraph2", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Part 2: 3 Key Stats */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#0056b3]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            3 Core Metric Stats
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(company.keyStats || []).map((stat: any, idx: number) => (
            <div key={stat.id || idx} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#0056b3]">METRIC 0{idx + 1}</span>
                <input
                  type="text"
                  value={stat.badgeText || ""}
                  placeholder="Badge Tag"
                  onChange={(e) => updateStat(idx, "badgeText", e.target.value)}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white border border-slate-200 text-slate-700 w-32 text-right"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase">Value</label>
                <input
                  type="text"
                  value={stat.value || ""}
                  onChange={(e) => updateStat(idx, "value", e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase">Label</label>
                  <input
                    type="text"
                    value={stat.label || ""}
                    onChange={(e) => updateStat(idx, "label", e.target.value)}
                    className="w-full px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase">Subtext</label>
                  <input
                    type="text"
                    value={stat.subtext || ""}
                    onChange={(e) => updateStat(idx, "subtext", e.target.value)}
                    className="w-full px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase">Detail Tooltip</label>
                <input
                  type="text"
                  value={stat.detail || ""}
                  onChange={(e) => updateStat(idx, "detail", e.target.value)}
                  className="w-full px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs text-slate-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part 3: Timeline Milestones */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Milestone className="w-4 h-4 text-[#ff6b00]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              30-Year Journey Timeline Milestones
            </h3>
          </div>
          <button
            type="button"
            onClick={addMilestone}
            className="px-3 py-1.5 rounded-xl bg-[#0056b3] text-white text-xs font-bold flex items-center gap-1 shadow-xs hover:bg-[#003d80] transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Year Milestone</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {(company.timelineMilestones || []).map((ms: any, idx: number) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 relative group space-y-2.5">
              <button
                type="button"
                onClick={() => deleteMilestone(idx)}
                className="absolute top-2 right-2 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                title="Delete milestone"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase">Year</label>
                <input
                  type="text"
                  value={ms.year || ""}
                  onChange={(e) => updateMilestone(idx, "year", e.target.value)}
                  className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-mono font-bold text-[#0056b3]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase">Milestone Title</label>
                <input
                  type="text"
                  value={ms.title || ""}
                  onChange={(e) => updateMilestone(idx, "title", e.target.value)}
                  className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase">Description</label>
                <textarea
                  rows={2}
                  value={ms.description || ""}
                  onChange={(e) => updateMilestone(idx, "description", e.target.value)}
                  className="w-full px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs text-slate-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part 4: Interactive Tooling Capabilities */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#0056b3]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Tooling Capability Explorer
            </h3>
          </div>
          <button
            type="button"
            onClick={() => {
              const currentList = company.coreExpertiseItems || [];
              const nextNum = currentList.length < 9 ? `0${currentList.length + 1}` : `${currentList.length + 1}`;
              updateCompany("coreExpertiseItems", [
                ...currentList,
                {
                  num: nextNum,
                  title: "New Capability",
                  machineBadge: "Precision Specification",
                  description: "Capability description...",
                },
              ]);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-[#0056b3] border border-blue-200 text-xs font-semibold hover:bg-[#0056b3] hover:text-white transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Capability
          </button>
        </div>

        <div>
          <ImagePicker
            label="Capability Explorer Image"
            value={company.capabilitiesImage || "/Home/inf3.png"}
            onChange={(url) => updateCompany("capabilitiesImage", url)}
            helperText="Machine / tooling photo displayed in the capability explorer tab"
          />
        </div>

        {/* Column Headers for clarity */}
        <div className="hidden sm:grid grid-cols-12 gap-3 px-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          <div className="col-span-1">No.</div>
          <div className="col-span-3">Capability Title</div>
          <div className="col-span-3">Badge / Tech Spec</div>
          <div className="col-span-4">Short Description</div>
          <div className="col-span-1 text-center">Action</div>
        </div>

        <div className="space-y-3">
          {(company.coreExpertiseItems || []).map((item: any, idx: number) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              <div className="sm:col-span-1 font-mono text-xs font-bold text-[#0056b3]">
                {item.num || `0${idx + 1}`}
              </div>
              <div className="sm:col-span-3">
                <label className="block sm:hidden text-[10px] font-bold text-slate-500 uppercase mb-0.5">Capability Title</label>
                <input
                  type="text"
                  value={item.title || ""}
                  placeholder="Capability Title"
                  onChange={(e) => updateExpertise(idx, "title", e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900"
                />
              </div>
              <div className="sm:col-span-3">
                <label className="block sm:hidden text-[10px] font-bold text-slate-500 uppercase mb-0.5">Badge / Tech Spec</label>
                <input
                  type="text"
                  value={item.machineBadge || ""}
                  placeholder="Machine Badge / Spec"
                  onChange={(e) => updateExpertise(idx, "machineBadge", e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700"
                />
              </div>
              <div className="sm:col-span-4">
                <label className="block sm:hidden text-[10px] font-bold text-slate-500 uppercase mb-0.5">Description</label>
                <input
                  type="text"
                  value={item.description || ""}
                  placeholder="Short description..."
                  onChange={(e) => updateExpertise(idx, "description", e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700"
                />
              </div>
              <div className="sm:col-span-1 flex items-center justify-center">
                <button
                  type="button"
                  title="Delete Item"
                  onClick={() => {
                    const currentList = company.coreExpertiseItems || [];
                    if (currentList.length <= 1) return;
                    updateCompany(
                      "coreExpertiseItems",
                      currentList.filter((_: any, i: number) => i !== idx)
                    );
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
