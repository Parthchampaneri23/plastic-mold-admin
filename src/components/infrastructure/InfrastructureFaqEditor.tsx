"use client";

import React from "react";
import { IInfraFaqSection, IInfraFaq } from "@/models/InfrastructurePageContent";
import { HelpCircle, Plus, Trash2 } from "lucide-react";

interface Props {
  data: IInfraFaqSection;
  onChange: (data: IInfraFaqSection) => void;
}

export const InfrastructureFaqEditor: React.FC<Props> = ({ data, onChange }) => {
  const updateField = (field: keyof IInfraFaqSection, val: any) => {
    onChange({ ...data, [field]: val });
  };

  const updateFaq = (index: number, field: keyof IInfraFaq, val: string) => {
    const list = [...(data.faqs || [])];
    list[index] = { ...list[index], [field]: val };
    updateField("faqs", list);
  };

  const addFaq = () => {
    const list = [
      ...(data.faqs || []),
      {
        question: "New Infrastructure & Toolroom Question?",
        answer: "Detailed answer explaining machinery, tolerance controls, or audit procedures.",
      },
    ];
    updateField("faqs", list);
  };

  const removeFaq = (index: number) => {
    const list = (data.faqs || []).filter((_, i) => i !== index);
    updateField("faqs", list);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              10. Facility &amp; Infrastructure FAQs
            </h3>
            <p className="text-xs text-slate-500">
              Manage the technical Q&amp;A accordion displayed near the bottom of the Infrastructure page.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Badge</label>
              <input
                type="text"
                value={data.badge || "TOOLROOM & PLANT CAPABILITIES"}
                onChange={(e) => updateField("badge", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#0056b3]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Title</label>
              <input
                type="text"
                value={data.title || "Facility & Infrastructure FAQs"}
                onChange={(e) => updateField("title", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Subtitle</label>
            <input
              type="text"
              value={data.subtitle || ""}
              onChange={(e) => updateField("subtitle", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-600"
            />
          </div>

          {/* FAQs List */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Infrastructure Questions ({data.faqs?.length || 0})
              </label>
              <button
                type="button"
                onClick={addFaq}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-[#0056b3] text-xs font-bold hover:bg-[#0056b3] hover:text-white transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                Add FAQ
              </button>
            </div>

            <div className="space-y-4">
              {(data.faqs || []).map((faq, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400">
                      FAQ #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFaq(idx)}
                      className="text-slate-400 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Question
                    </label>
                    <input
                      type="text"
                      value={faq.question || ""}
                      onChange={(e) => updateFaq(idx, "question", e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Answer
                    </label>
                    <textarea
                      rows={3}
                      value={faq.answer || ""}
                      onChange={(e) => updateFaq(idx, "answer", e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
