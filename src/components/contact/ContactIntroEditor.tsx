"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { Sparkles, ShieldCheck, Plus, Trash2 } from "lucide-react";
import { ContactIntroSectionData, ContactIntroBadgeItem } from "@/data/defaultContact";

interface ContactIntroEditorProps {
  intro: ContactIntroSectionData;
  onChange: (intro: ContactIntroSectionData) => void;
}

export function ContactIntroEditor({ intro, onChange }: ContactIntroEditorProps) {
  const currentIntro = intro || {
    badge: "DIRECT TOOLROOM CONSULTATION",
    headingPart1: "Let’s Engineer Your Next",
    headingHighlight: "Precision Mould",
    leadParagraph: "",
    secondaryParagraph: "",
    image: "/contact/contact-office.jpg",
    trustBadges: [],
  };

  const handleUpdateBadge = (index: number, updated: ContactIntroBadgeItem) => {
    const list = [...(currentIntro.trustBadges || [])];
    list[index] = updated;
    onChange({ ...currentIntro, trustBadges: list });
  };

  const handleAddBadge = () => {
    const list = [...(currentIntro.trustBadges || [])];
    list.push({
      title: "New Badge",
      subtitle: "Subtitle",
      iconName: "ShieldCheck",
    });
    onChange({ ...currentIntro, trustBadges: list });
  };

  const handleDeleteBadge = (index: number) => {
    const list = (currentIntro.trustBadges || []).filter((_, i) => i !== index);
    onChange({ ...currentIntro, trustBadges: list });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ff6b00]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Direct Consultation Intro</h2>
            <p className="text-xs text-slate-500">
              Configure the introduction narrative, consultation office photo, and key facility trust badges.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Badge Label
            </label>
            <input
              type="text"
              value={currentIntro.badge || ""}
              onChange={(e) => onChange({ ...currentIntro, badge: e.target.value })}
              placeholder="DIRECT TOOLROOM CONSULTATION"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Heading Prefix
            </label>
            <input
              type="text"
              value={currentIntro.headingPart1 || ""}
              onChange={(e) => onChange({ ...currentIntro, headingPart1: e.target.value })}
              placeholder="Let’s Engineer Your Next"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Heading Highlight (Blue Accent)
            </label>
            <input
              type="text"
              value={currentIntro.headingHighlight || ""}
              onChange={(e) => onChange({ ...currentIntro, headingHighlight: e.target.value })}
              placeholder="Precision Mould"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Primary Lead Narrative
            </label>
            <textarea
              rows={2}
              value={currentIntro.leadParagraph || ""}
              onChange={(e) => onChange({ ...currentIntro, leadParagraph: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none leading-relaxed"
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Secondary Consultation Paragraph
            </label>
            <textarea
              rows={2}
              value={currentIntro.secondaryParagraph || ""}
              onChange={(e) => onChange({ ...currentIntro, secondaryParagraph: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none leading-relaxed"
            />
          </div>

          <div className="md:col-span-3">
            <ImagePicker
              label="Consultation Office / Team Photo"
              value={currentIntro.image || ""}
              onChange={(image) => onChange({ ...currentIntro, image })}
              helperText="Photo of the corporate engineering office or technical consultation desk."
            />
          </div>
        </div>

        {/* TRUST BADGES BUILDER */}
        <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Facility Trust Badges ({currentIntro.trustBadges?.length || 0})
              </h3>
              <p className="text-[11px] text-slate-500">
                Cards displayed under the office image (e.g. ISO 9001:2015, 24-Hour DFM, 5M+ Shot Life).
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddBadge}
              className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-[#0056b3] hover:bg-blue-100 rounded-lg text-xs font-bold transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Badge</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(currentIntro.trustBadges || []).map((badge, bIdx) => (
              <div
                key={bIdx}
                className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center gap-3"
              >
                <div className="grid grid-cols-2 gap-2 flex-1">
                  <input
                    type="text"
                    value={badge.title}
                    onChange={(e) =>
                      handleUpdateBadge(bIdx, { ...badge, title: e.target.value })
                    }
                    placeholder="Title (e.g. ISO 9001:2015)"
                    className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-bold focus:border-[#0056b3] focus:outline-none bg-white"
                  />
                  <input
                    type="text"
                    value={badge.subtitle}
                    onChange={(e) =>
                      handleUpdateBadge(bIdx, { ...badge, subtitle: e.target.value })
                    }
                    placeholder="Subtitle (e.g. Certified Quality)"
                    className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none bg-white"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => handleDeleteBadge(bIdx)}
                  className="p-1.5 text-red-400 hover:text-red-600 rounded-lg"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

