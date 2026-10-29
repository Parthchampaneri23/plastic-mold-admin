"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { Sparkles, Plus, Trash2 } from "lucide-react";
import {
  IQualityHeroBanner,
  IQualityOverview,
  IQualityOverviewPillar,
} from "@/models/QualityPageContent";

interface QualityHeroOverviewEditorProps {
  heroBanner: IQualityHeroBanner;
  overview: IQualityOverview;
  onHeroChange: (hero: IQualityHeroBanner) => void;
  onOverviewChange: (overview: IQualityOverview) => void;
}

export function QualityHeroOverviewEditor({
  heroBanner,
  overview,
  onHeroChange,
  onOverviewChange,
}: QualityHeroOverviewEditorProps) {
  const hero = heroBanner || {
    titlePart1: "Quality &",
    titleHighlight: "Testing",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Quality & Testing",
    bannerImage: "/quality/quality-banner.jpg",
  };

  const ov = overview || {
    badge: "METROLOGY & INSPECTION OVERVIEW",
    headingPart1: "Precision Checked.",
    headingHighlight: "Quality Assured.",
    description: "",
    image: "/quality/quality-inspection-metrology.jpg",
    pillars: [],
  };

  const handleUpdatePillar = (
    index: number,
    field: keyof IQualityOverviewPillar,
    value: string
  ) => {
    const list = [...(ov.pillars || [])];
    list[index] = { ...list[index], [field]: value };
    onOverviewChange({ ...ov, pillars: list });
  };

  const handleAddPillar = () => {
    const list = [...(ov.pillars || [])];
    const num = String(list.length + 1).padStart(2, "0");
    list.push({
      label: num,
      title: "New Quality Pillar",
      description: "Describe inspection or precision verification criteria...",
      iconName: "CheckCircle2",
    });
    onOverviewChange({ ...ov, pillars: list });
  };

  const handleDeletePillar = (index: number) => {
    const list = (ov.pillars || []).filter((_, i) => i !== index);
    onOverviewChange({ ...ov, pillars: list });
  };

  return (
    <div className="space-y-6">
      {/* 1. HERO BANNER */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Quality Hero Banner &amp; Breadcrumb
            </h2>
            <p className="text-xs text-slate-500">
              Configure the top banner headline, highlight text, breadcrumbs, and industrial background image.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Title Prefix (White Text)
            </label>
            <input
              type="text"
              value={hero.titlePart1 || ""}
              onChange={(e) => onHeroChange({ ...hero, titlePart1: e.target.value })}
              placeholder="Quality &"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Title Highlight (Gradient Accent)
            </label>
            <input
              type="text"
              value={hero.titleHighlight || ""}
              onChange={(e) => onHeroChange({ ...hero, titleHighlight: e.target.value })}
              placeholder="Testing"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Breadcrumb Root
            </label>
            <input
              type="text"
              value={hero.breadcrumbHome || ""}
              onChange={(e) => onHeroChange({ ...hero, breadcrumbHome: e.target.value })}
              placeholder="Home"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Breadcrumb Current
            </label>
            <input
              type="text"
              value={hero.breadcrumbCurrent || ""}
              onChange={(e) => onHeroChange({ ...hero, breadcrumbCurrent: e.target.value })}
              placeholder="Quality & Testing"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <ImagePicker
              label="Banner Background Image"
              value={hero.bannerImage || ""}
              onChange={(val) => onHeroChange({ ...hero, bannerImage: val })}
              helperText="Upload or enter quality banner image path"
            />
          </div>
        </div>
      </div>

      {/* 2. OVERVIEW & 4 PILLARS */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ff6b00]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Overview &amp; 4 Quality Pillars
            </h2>
            <p className="text-xs text-slate-500">
              Manage the introductory section &quot;Precision Checked. Quality Assured.&quot; and the 4 numbered pillar cards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Section Badge
            </label>
            <input
              type="text"
              value={ov.badge || ""}
              onChange={(e) => onOverviewChange({ ...ov, badge: e.target.value })}
              placeholder="METROLOGY & INSPECTION OVERVIEW"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Heading Part 1
            </label>
            <input
              type="text"
              value={ov.headingPart1 || ""}
              onChange={(e) => onOverviewChange({ ...ov, headingPart1: e.target.value })}
              placeholder="Precision Checked."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Heading Part 2 (Blue Highlight)
            </label>
            <input
              type="text"
              value={ov.headingHighlight || ""}
              onChange={(e) => onOverviewChange({ ...ov, headingHighlight: e.target.value })}
              placeholder="Quality Assured."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Description Paragraph
            </label>
            <textarea
              rows={3}
              value={ov.description || ""}
              onChange={(e) => onOverviewChange({ ...ov, description: e.target.value })}
              placeholder="At Patel Mould Industries, our approach to precision mould manufacturing..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <ImagePicker
              label="Metrology Overview Photo"
              value={ov.image || ""}
              onChange={(val) => onOverviewChange({ ...ov, image: val })}
              helperText="Upload or enter inspection metrology photo path"
            />
          </div>
        </div>

        {/* Pillars List */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900">
              Overview Quality Pillars ({ov.pillars?.length || 0})
            </h3>
            <button
              onClick={handleAddPillar}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Pillar</span>
            </button>
          </div>

          <div className="space-y-3">
            {(ov.pillars || []).map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0056b3] font-mono">
                    Pillar #{pillar.label || `0${pIdx + 1}`}
                  </span>
                  <button
                    onClick={() => handleDeletePillar(pIdx)}
                    className="text-slate-400 hover:text-red-500 transition-colors p-1"
                    title="Delete pillar"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                      Badge Number
                    </label>
                    <input
                      type="text"
                      value={pillar.label || ""}
                      onChange={(e) => handleUpdatePillar(pIdx, "label", e.target.value)}
                      placeholder="01"
                      className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                      Pillar Title
                    </label>
                    <input
                      type="text"
                      value={pillar.title || ""}
                      onChange={(e) => handleUpdatePillar(pIdx, "title", e.target.value)}
                      placeholder="e.g. Dimensional Verification"
                      className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                      Description
                    </label>
                    <input
                      type="text"
                      value={pillar.description || ""}
                      onChange={(e) => handleUpdatePillar(pIdx, "description", e.target.value)}
                      placeholder="Multi-coordinate inspection of core and cavity components..."
                      className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

