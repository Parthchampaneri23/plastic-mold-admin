"use client";

import React from "react";
import { Sparkles, HelpCircle, Plus, Trash2 } from "lucide-react";

interface AboutFaqEditorProps {
  aboutData: any;
  setAboutData: (data: any) => void;
}

export default function AboutFaqEditor({ aboutData, setAboutData }: AboutFaqEditorProps) {
  const faqSec = aboutData?.faqsSection || {
    badge: "COMPANY HERITAGE & CREDENTIALS",
    title: "Frequently Asked Questions",
    subtitle: "Learn more about our 30+ year tooling journey, engineering accreditations, international mold shipping, and client IP protection.",
    faqs: [],
  };

  const updateSection = (field: string, val: any) => {
    setAboutData({
      ...aboutData,
      faqsSection: {
        ...faqSec,
        [field]: val,
      },
    });
  };

  const updateFaq = (index: number, field: string, val: string) => {
    const list = [...(faqSec.faqs || [])];
    list[index] = { ...list[index], [field]: val };
    updateSection("faqs", list);
  };

  const addFaq = () => {
    const list = [
      ...(faqSec.faqs || []),
      {
        question: "New Question Title",
        answer: "Detailed answer explaining Patel Mould engineering processes...",
      },
    ];
    updateSection("faqs", list);
  };

  const deleteFaq = (index: number) => {
    const list = faqSec.faqs.filter((_: any, i: number) => i !== index);
    updateSection("faqs", list);
  };

  return (
    <div className="space-y-8">
      {/* Header Info Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#0056b3]/10 text-[#0056b3] border border-[#0056b3]/20 uppercase">
              About Page &bull; Section 7
            </span>
            <span className="text-xs text-slate-500 font-medium">About Page FAQ Accordion</span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#0056b3]" />
            About Page FAQs
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage company heritage, credentials, client IP protection, and mold export FAQs.
          </p>
        </div>

        <button
          type="button"
          onClick={addFaq}
          className="px-4 py-2 rounded-xl bg-[#0056b3] hover:bg-[#003d80] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-[#0056b3]/20 transition-all cursor-pointer self-start sm:self-auto shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add FAQ Item</span>
        </button>
      </div>

      {/* Section Header Controls */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#ff6b00]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            FAQ Header &amp; Subtitle
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Eyebrow Badge
            </label>
            <input
              type="text"
              value={faqSec.badge || ""}
              onChange={(e) => updateSection("badge", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Main Title
            </label>
            <input
              type="text"
              value={faqSec.title || ""}
              onChange={(e) => updateSection("title", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
            Subtitle Description
          </label>
          <textarea
            rows={2}
            value={faqSec.subtitle || ""}
            onChange={(e) => updateSection("subtitle", e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800"
          />
        </div>
      </div>

      {/* FAQs List */}
      <div className="space-y-4">
        {(faqSec.faqs || []).map((faq: any, idx: number) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 relative group">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-mono font-bold text-[#0056b3]">QUESTION 0{idx + 1}</span>
              <button
                type="button"
                onClick={() => deleteFaq(idx)}
                className="text-slate-400 hover:text-red-600 transition-colors cursor-pointer flex items-center gap-1 text-xs"
              >
                <Trash2 className="w-4 h-4" />
                <span>Remove</span>
              </button>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Question
              </label>
              <input
                type="text"
                value={faq.question || ""}
                onChange={(e) => updateFaq(idx, "question", e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Answer
              </label>
              <textarea
                rows={3}
                value={faq.answer || ""}
                onChange={(e) => updateFaq(idx, "answer", e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
