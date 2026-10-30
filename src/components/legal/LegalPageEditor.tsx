"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Scale,
  Plus,
  Trash2,
  Image as ImageIcon,
  HelpCircle,
  FileText,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  LegalPageContentData,
  LegalSectionItem,
} from "@/data/defaultLegal";

interface LegalPageEditorProps {
  pageType: "privacy-policy" | "terms-and-conditions";
  pageTitle: string;
  data: LegalPageContentData;
  onChange: (updatedData: LegalPageContentData) => void;
}

export function LegalPageEditor({
  pageType,
  pageTitle,
  data,
  onChange,
}: LegalPageEditorProps) {
  const [activeSectionIdx, setActiveSectionIdx] = useState<number | null>(0);

  const hero = data.hero || {
    titlePrimary: "",
    titleHighlight: "",
    breadcrumbLabel: "",
    badgeLabel: "",
    lastUpdated: "",
    bannerImage: "/About/about banner.png",
  };

  const noticeBanner = data.noticeBanner || {
    title: "",
    description: "",
  };

  const sidebarCard = data.sidebarCard || {
    title: "",
    description: "",
    email: "",
    phone: "",
    address: "",
    buttonLabel: "",
    buttonUrl: "/contact",
  };

  const sections = data.sections || [];
  const bottomLink = data.bottomLink || {
    promptText: "",
    linkText: "",
    linkUrl: "",
  };

  // Section handling
  const handleAddSection = () => {
    const newSec: LegalSectionItem = {
      id: `section-${Date.now()}`,
      title: `${sections.length + 1}. New Legal Section`,
      iconName: pageType === "privacy-policy" ? "ShieldCheck" : "Scale",
      paragraphs: ["Write section introductory paragraphs here..."],
      bulletPoints: [],
    };
    const updated = [...sections, newSec];
    onChange({ ...data, sections: updated });
    setActiveSectionIdx(updated.length - 1);
  };

  const handleRemoveSection = (idx: number) => {
    if (!confirm("Are you sure you want to remove this legal section?")) return;
    const updated = [...sections];
    updated.splice(idx, 1);
    onChange({ ...data, sections: updated });
    if (activeSectionIdx === idx) {
      setActiveSectionIdx(null);
    } else if (activeSectionIdx !== null && activeSectionIdx > idx) {
      setActiveSectionIdx(activeSectionIdx - 1);
    }
  };

  const handleUpdateSection = (idx: number, updatedItem: LegalSectionItem) => {
    const updated = [...sections];
    updated[idx] = updatedItem;
    onChange({ ...data, sections: updated });
  };

  return (
    <div className="space-y-8 pb-12">
      {/* 1. HERO BANNER SETTINGS */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            {pageType === "privacy-policy" ? (
              <ShieldCheck className="w-5 h-5" />
            ) : (
              <Scale className="w-5 h-5" />
            )}
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">{pageTitle} — Hero Banner</h2>
            <p className="text-xs text-slate-500">
              Configure banner headline, badge pill, last updated date, and background visual.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Title Primary
            </label>
            <input
              type="text"
              value={hero.titlePrimary}
              onChange={(e) =>
                onChange({
                  ...data,
                  hero: { ...hero, titlePrimary: e.target.value },
                })
              }
              placeholder="e.g. Privacy or Terms &"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Title Highlight (Gradient)
            </label>
            <input
              type="text"
              value={hero.titleHighlight}
              onChange={(e) =>
                onChange({
                  ...data,
                  hero: { ...hero, titleHighlight: e.target.value },
                })
              }
              placeholder="e.g. Policy or Conditions"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-semibold text-[#ff6b00]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Breadcrumb Label
            </label>
            <input
              type="text"
              value={hero.breadcrumbLabel}
              onChange={(e) =>
                onChange({
                  ...data,
                  hero: { ...hero, breadcrumbLabel: e.target.value },
                })
              }
              placeholder="e.g. Privacy Policy"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Badge Pill Text
            </label>
            <input
              type="text"
              value={hero.badgeLabel}
              onChange={(e) =>
                onChange({
                  ...data,
                  hero: { ...hero, badgeLabel: e.target.value },
                })
              }
              placeholder="e.g. Data Protection & NDA"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Effective / Last Updated Date
            </label>
            <input
              type="text"
              value={hero.lastUpdated}
              onChange={(e) =>
                onChange({
                  ...data,
                  hero: { ...hero, lastUpdated: e.target.value },
                })
              }
              placeholder="e.g. March 2026"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Banner Background Image Path
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={hero.bannerImage || ""}
                onChange={(e) =>
                  onChange({
                    ...data,
                    hero: { ...hero, bannerImage: e.target.value },
                  })
                }
                placeholder="/About/about banner.png"
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-mono text-xs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. TOP NOTICE BANNER */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ff6b00]">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Top Notice Callout Box</h2>
            <p className="text-xs text-slate-500">
              The highlighted introductory announcement box displayed at the top of the policy articles.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Notice Box Title
            </label>
            <input
              type="text"
              value={noticeBanner.title}
              onChange={(e) =>
                onChange({
                  ...data,
                  noticeBanner: { ...noticeBanner, title: e.target.value },
                })
              }
              placeholder="e.g. Corporate Commitment to Customer Privacy"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-semibold text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Notice Box Content Description
            </label>
            <textarea
              rows={2}
              value={noticeBanner.description}
              onChange={(e) =>
                onChange({
                  ...data,
                  noticeBanner: {
                    ...noticeBanner,
                    description: e.target.value,
                  },
                })
              }
              placeholder="This document establishes our transparent data practices..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* 3. SIDEBAR QUICK CONTACT & NDA CARD */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Sticky Sidebar Action Card</h2>
            <p className="text-xs text-slate-500">
              The contact assistance and NDA request card displayed alongside the table of contents.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Card Title
            </label>
            <input
              type="text"
              value={sidebarCard.title}
              onChange={(e) =>
                onChange({
                  ...data,
                  sidebarCard: { ...sidebarCard, title: e.target.value },
                })
              }
              placeholder="e.g. Require an NDA First?"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Card Description
            </label>
            <input
              type="text"
              value={sidebarCard.description}
              onChange={(e) =>
                onChange({
                  ...data,
                  sidebarCard: { ...sidebarCard, description: e.target.value },
                })
              }
              placeholder="We execute strict mutual Non-Disclosure Agreements..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Official Email
            </label>
            <input
              type="email"
              value={sidebarCard.email}
              onChange={(e) =>
                onChange({
                  ...data,
                  sidebarCard: { ...sidebarCard, email: e.target.value },
                })
              }
              placeholder="sales@patelmould.com"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Direct Phone Hotline
            </label>
            <input
              type="text"
              value={sidebarCard.phone}
              onChange={(e) =>
                onChange({
                  ...data,
                  sidebarCard: { ...sidebarCard, phone: e.target.value },
                })
              }
              placeholder="+91 77847 58347"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Facility Address / City
            </label>
            <input
              type="text"
              value={sidebarCard.address}
              onChange={(e) =>
                onChange({
                  ...data,
                  sidebarCard: { ...sidebarCard, address: e.target.value },
                })
              }
              placeholder="Phase-IV GIDC, Gujarat, India"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              CTA Button Label
            </label>
            <input
              type="text"
              value={sidebarCard.buttonLabel}
              onChange={(e) =>
                onChange({
                  ...data,
                  sidebarCard: { ...sidebarCard, buttonLabel: e.target.value },
                })
              }
              placeholder="Contact Legal & Engineering"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-semibold text-[#ff6b00]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              CTA Button Destination URL
            </label>
            <input
              type="text"
              value={sidebarCard.buttonUrl}
              onChange={(e) =>
                onChange({
                  ...data,
                  sidebarCard: { ...sidebarCard, buttonUrl: e.target.value },
                })
              }
              placeholder="/contact"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-mono"
            />
          </div>
        </div>
      </div>

      {/* 4. LEGAL ARTICLES / SECTIONS LIST */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Policy Articles &amp; Clauses ({sections.length})
            </h2>
            <p className="text-xs text-slate-500">
              Add, remove, re-order, and edit full text, highlighted boxes, and bullet lists for each policy section.
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddSection}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0056b3] hover:bg-blue-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Article / Section</span>
          </button>
        </div>

        <div className="space-y-3">
          {sections.map((sec, idx) => {
            const isExpanded = activeSectionIdx === idx;
            return (
              <div
                key={sec.id || idx}
                className={`rounded-xl border transition-all ${
                  isExpanded
                    ? "border-[#0056b3] bg-blue-50/20 shadow-xs"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {/* Section Header Accordion Bar */}
                <div
                  className="flex items-center justify-between p-4 cursor-pointer select-none"
                  onClick={() => setActiveSectionIdx(isExpanded ? null : idx)}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-100 text-[#0056b3] flex items-center justify-center text-xs font-mono font-bold">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-slate-900 text-sm">
                      {sec.title}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      #{sec.id}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveSection(idx);
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                      title="Remove section"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="p-1 text-slate-400">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Section Expanded Content Editor */}
                {isExpanded && (
                  <div className="p-5 pt-0 border-t border-slate-100 space-y-5 mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Article Title
                        </label>
                        <input
                          type="text"
                          value={sec.title}
                          onChange={(e) =>
                            handleUpdateSection(idx, {
                              ...sec,
                              title: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:border-[#0056b3] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          HTML Anchor ID (URL Slug)
                        </label>
                        <input
                          type="text"
                          value={sec.id}
                          onChange={(e) =>
                            handleUpdateSection(idx, {
                              ...sec,
                              id: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono focus:border-[#0056b3] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Paragraphs */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Body Paragraphs (One paragraph per box)
                        </label>
                        <button
                          type="button"
                          onClick={() =>
                            handleUpdateSection(idx, {
                              ...sec,
                              paragraphs: [...(sec.paragraphs || []), ""],
                            })
                          }
                          className="text-xs text-[#0056b3] hover:underline font-semibold"
                        >
                          + Add Paragraph
                        </button>
                      </div>

                      <div className="space-y-2">
                        {(sec.paragraphs || []).map((p, pIdx) => (
                          <div key={pIdx} className="flex gap-2 items-start">
                            <textarea
                              rows={3}
                              value={p}
                              onChange={(e) => {
                                const newP = [...(sec.paragraphs || [])];
                                newP[pIdx] = e.target.value;
                                handleUpdateSection(idx, {
                                  ...sec,
                                  paragraphs: newP,
                                });
                              }}
                              placeholder="Type paragraph content..."
                              className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs leading-relaxed focus:border-[#0056b3] focus:outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const newP = [...(sec.paragraphs || [])];
                                newP.splice(pIdx, 1);
                                handleUpdateSection(idx, {
                                  ...sec,
                                  paragraphs: newP,
                                });
                              }}
                              className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                              title="Delete paragraph"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Bullet Points / Clauses
                        </label>
                        <button
                          type="button"
                          onClick={() =>
                            handleUpdateSection(idx, {
                              ...sec,
                              bulletPoints: [...(sec.bulletPoints || []), ""],
                            })
                          }
                          className="text-xs text-[#0056b3] hover:underline font-semibold"
                        >
                          + Add Bullet Point
                        </button>
                      </div>

                      <div className="space-y-2">
                        {(sec.bulletPoints || []).map((bp, bpIdx) => (
                          <div key={bpIdx} className="flex gap-2 items-center">
                            <span className="w-4 text-center text-xs text-slate-400">•</span>
                            <input
                              type="text"
                              value={bp}
                              onChange={(e) => {
                                const newBp = [...(sec.bulletPoints || [])];
                                newBp[bpIdx] = e.target.value;
                                handleUpdateSection(idx, {
                                  ...sec,
                                  bulletPoints: newBp,
                                });
                              }}
                              placeholder="e.g. Specification details..."
                              className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const newBp = [...(sec.bulletPoints || [])];
                                newBp.splice(bpIdx, 1);
                                handleUpdateSection(idx, {
                                  ...sec,
                                  bulletPoints: newBp,
                                });
                              }}
                              className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                              title="Delete bullet point"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Optional Highlight Box */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Featured Alert Box (Optional)
                        </label>
                        {sec.highlightBox ? (
                          <button
                            type="button"
                            onClick={() =>
                              handleUpdateSection(idx, {
                                ...sec,
                                highlightBox: undefined,
                              })
                            }
                            className="text-[11px] text-red-500 hover:underline font-semibold"
                          >
                            Remove Alert Box
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() =>
                              handleUpdateSection(idx, {
                                ...sec,
                                highlightBox: {
                                  title: "Special Technical Guarantee",
                                  text: "Important clause text...",
                                  type: "info",
                                },
                              })
                            }
                            className="text-[11px] text-[#0056b3] hover:underline font-semibold"
                          >
                            + Add Alert Box
                          </button>
                        )}
                      </div>

                      {sec.highlightBox && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 mb-1">
                              Box Title
                            </label>
                            <input
                              type="text"
                              value={sec.highlightBox.title || ""}
                              onChange={(e) =>
                                handleUpdateSection(idx, {
                                  ...sec,
                                  highlightBox: {
                                    ...sec.highlightBox!,
                                    title: e.target.value,
                                  },
                                })
                              }
                              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 mb-1">
                              Color Style
                            </label>
                            <select
                              value={sec.highlightBox.type || "info"}
                              onChange={(e) =>
                                handleUpdateSection(idx, {
                                  ...sec,
                                  highlightBox: {
                                    ...sec.highlightBox!,
                                    type: e.target.value as any,
                                  },
                                })
                              }
                              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                            >
                              <option value="info">Blue (Confidentiality / Info)</option>
                              <option value="success">Green (Warranty / Guarantee)</option>
                              <option value="warning">Orange (Caution / Notice)</option>
                            </select>
                          </div>

                          <div className="sm:col-span-3">
                            <label className="block text-[11px] font-bold text-slate-600 mb-1">
                              Highlighted Box Text
                            </label>
                            <textarea
                              rows={2}
                              value={sec.highlightBox.text || ""}
                              onChange={(e) =>
                                handleUpdateSection(idx, {
                                  ...sec,
                                  highlightBox: {
                                    ...sec.highlightBox!,
                                    text: e.target.value,
                                  },
                                })
                              }
                              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. BOTTOM NAVIGATION LINK */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Bottom Page Quick-Jump Link</h2>
            <p className="text-xs text-slate-500">
              The cross-link at the very bottom linking visitors to the alternate legal document.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Prompt Text
            </label>
            <input
              type="text"
              value={bottomLink.promptText}
              onChange={(e) =>
                onChange({
                  ...data,
                  bottomLink: { ...bottomLink, promptText: e.target.value },
                })
              }
              placeholder="e.g. Looking for our commercial terms & manufacturing conditions?"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Link Button Text
            </label>
            <input
              type="text"
              value={bottomLink.linkText}
              onChange={(e) =>
                onChange({
                  ...data,
                  bottomLink: { ...bottomLink, linkText: e.target.value },
                })
              }
              placeholder="e.g. View Terms & Conditions"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-semibold text-[#0056b3]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Target URL
            </label>
            <input
              type="text"
              value={bottomLink.linkUrl}
              onChange={(e) =>
                onChange({
                  ...data,
                  bottomLink: { ...bottomLink, linkUrl: e.target.value },
                })
              }
              placeholder="/terms"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-mono"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

