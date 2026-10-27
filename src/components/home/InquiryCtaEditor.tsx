"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import {
  MessageSquareText,
  MessageSquare,
  Sparkles,
  Send,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  FileText,
  Plus,
  Trash2,
} from "lucide-react";

interface InquiryCtaEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function InquiryCtaEditor({ data, setData }: InquiryCtaEditorProps) {
  return (
            <div className="space-y-6">
              {/* Header Box */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 uppercase">
                      Home Page &bull; Section 11
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Technical Quotation Banner &bull; Direct Contact
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#ff6b00]" />
                    Inquiry & Technical Quotation CTA
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Manage the 24-hour turnaround badge, mold requirement headline, DFM assurance features, telephone, email, and quotation form card.
                  </p>
                </div>
              </div>

              {/* LIVE VISUAL PREVIEW OF THE NAVY CTA BANNER (EXACT WEBSITE MATCH) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 uppercase tracking-wider px-1">
                  <span>Live Visual Preview (Website Gradient Navy Banner)</span>
                  <span className="text-[#0056b3]">Interactive Mockup</span>
                </div>

                <div className="bg-gradient-to-br from-[#0b1f3a] via-[#003d80] to-[#0056b3] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-white">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column Preview */}
                    <div className="lg:col-span-6 space-y-4">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#ff6b00] bg-white/10 border border-white/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse"></span>
                        {data?.inquiryCta?.badge || "RAPID 24-HOUR QUOTE TURNAROUND"}
                      </span>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-white">
                        {data?.inquiryCta?.title || "Have a Mold Requirement?"}
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                        {data?.inquiryCta?.description ||
                          "Connect with our senior tooling engineers today. Send us your 2D/3D container drawings or preform specs for a free DFM review and detailed quote within 24 hours."}
                      </p>

                      <div className="space-y-2.5 pt-1">
                        {(
                          data?.inquiryCta?.features || [
                            "Free Design for Manufacturability (DFM) Assessment",
                            "Guaranteed Mold Cycle Time Estimate",
                            "Strict Non-Disclosure Agreement (NDA) Protection",
                          ]
                        ).map((feat: string, fIdx: number) => (
                          <div key={fIdx} className="flex items-center space-x-2.5 text-xs text-slate-100 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold">
                        <div className="flex items-center space-x-2.5 text-slate-200">
                          <Phone className="w-4 h-4 text-[#ff6b00]" />
                          <span>{data?.inquiryCta?.phone || "91+ 7784758347"}</span>
                        </div>
                        <div className="flex items-center space-x-2.5 text-slate-200">
                          <Mail className="w-4 h-4 text-[#ff6b00]" />
                          <span>{data?.inquiryCta?.email || "quotes@plastic-mold.com"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Form Card Preview */}
                    <div className="lg:col-span-6 bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-2xl text-slate-900 space-y-3.5">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#0056b3]" />
                        {data?.inquiryCta?.formTitle || "Request Technical Quotation"}
                      </h3>

                      <div className="grid grid-cols-2 gap-2.5 text-xs">
                        <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-400">
                          John Doe
                        </div>
                        <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-400">
                          john@company.com
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 text-xs">
                        <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-400">
                          +1 (555) 000-0000
                        </div>
                        <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-bold">
                          PET Preform & Jar Mold
                        </div>
                      </div>

                      <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-400 h-16">
                        Specify container size, cavitation count, resin, target cycle time...
                      </div>

                      <div className="w-full py-3 px-4 bg-gradient-to-r from-[#ff6b00] to-[#e56000] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md shadow-orange-500/25">
                        <span>{data?.inquiryCta?.buttonText || "Request a Quote / Send Inquiry"}</span>
                        <Send className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* EDITABLE FORM CONTROLS (LEFT CONTENT & RIGHT FORM) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column Controls */}
                <div className="lg:col-span-7 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" />
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Left Side Headline & Assurance Points
                    </h3>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Top Pill Badge
                    </label>
                    <input
                      type="text"
                      value={data?.inquiryCta?.badge || "RAPID 24-HOUR QUOTE TURNAROUND"}
                      onChange={(e) => {
                        setData({
                          ...data,
                          inquiryCta: { ...data.inquiryCta, badge: e.target.value },
                        });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#ff6b00] focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      placeholder="RAPID 24-HOUR QUOTE TURNAROUND"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Main Heading Title
                    </label>
                    <input
                      type="text"
                      value={data?.inquiryCta?.title || "Have a Mold Requirement?"}
                      onChange={(e) => {
                        setData({
                          ...data,
                          inquiryCta: { ...data.inquiryCta, title: e.target.value },
                        });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      placeholder="Have a Mold Requirement?"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Description Paragraph
                    </label>
                    <textarea
                      rows={3}
                      value={
                        data?.inquiryCta?.description ||
                        "Connect with our senior tooling engineers today. Send us your 2D/3D container drawings or preform specs for a free DFM review and detailed quote within 24 hours."
                      }
                      onChange={(e) => {
                        setData({
                          ...data,
                          inquiryCta: { ...data.inquiryCta, description: e.target.value },
                        });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      placeholder="Enter description..."
                    />
                  </div>

                  {/* 3 Checklist Features */}
                  <div className="space-y-3 pt-1">
                    <div className="flex items-center justify-between">
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        Assurance Points (3 Checkmarks)
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          const feats = [
                            ...(data?.inquiryCta?.features || [
                              "Free Design for Manufacturability (DFM) Assessment",
                              "Guaranteed Mold Cycle Time Estimate",
                              "Strict Non-Disclosure Agreement (NDA) Protection",
                            ]),
                          ];
                          feats.push("New Tooling Guarantee Point");
                          setData({
                            ...data,
                            inquiryCta: { ...data.inquiryCta, features: feats },
                          });
                        }}
                        className="px-2.5 py-1 rounded-lg bg-orange-50 text-[#ff6b00] hover:bg-orange-100 text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Point</span>
                      </button>
                    </div>

                    <div className="space-y-2">
                      {(
                        data?.inquiryCta?.features || [
                          "Free Design for Manufacturability (DFM) Assessment",
                          "Guaranteed Mold Cycle Time Estimate",
                          "Strict Non-Disclosure Agreement (NDA) Protection",
                        ]
                      ).map((feat: string, fIdx: number) => (
                        <div
                          key={fIdx}
                          className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2 group hover:border-[#0056b3]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0" />
                          <input
                            type="text"
                            value={feat}
                            onChange={(e) => {
                              const feats = [
                                ...(data?.inquiryCta?.features || [
                                  "Free Design for Manufacturability (DFM) Assessment",
                                  "Guaranteed Mold Cycle Time Estimate",
                                  "Strict Non-Disclosure Agreement (NDA) Protection",
                                ]),
                              ];
                              feats[fIdx] = e.target.value;
                              setData({
                                ...data,
                                inquiryCta: { ...data.inquiryCta, features: feats },
                              });
                            }}
                            className="w-full bg-transparent text-xs font-semibold text-slate-800 focus:outline-none"
                            placeholder="Feature text..."
                          />
                          {(data?.inquiryCta?.features || []).length > 1 && (
                            <button
                              type="button"
                              onClick={() => {
                                const feats = (data?.inquiryCta?.features || []).filter(
                                  (_: any, i: number) => i !== fIdx
                                );
                                setData({
                                  ...data,
                                  inquiryCta: { ...data.inquiryCta, features: feats },
                                });
                              }}
                              className="text-slate-400 hover:text-red-500 p-1 cursor-pointer"
                              title="Remove point"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column Controls (Contact & Form Details) */}
                <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0056b3]" />
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Contact Numbers & Quotation Form
                    </h3>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Direct Phone Number (Bottom Left)
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#ff6b00] absolute left-3.5 top-3" />
                      <input
                        type="text"
                        value={data?.inquiryCta?.phone || "91+ 7784758347"}
                        onChange={(e) => {
                          setData({
                            ...data,
                            inquiryCta: { ...data.inquiryCta, phone: e.target.value },
                          });
                        }}
                        className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                        placeholder="91+ 7784758347"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Quotation Email Address (Bottom Left)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#ff6b00] absolute left-3.5 top-3" />
                      <input
                        type="email"
                        value={data?.inquiryCta?.email || "quotes@plastic-mold.com"}
                        onChange={(e) => {
                          setData({
                            ...data,
                            inquiryCta: { ...data.inquiryCta, email: e.target.value },
                          });
                        }}
                        className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                        placeholder="quotes@plastic-mold.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Factory Physical Address
                    </label>
                    <input
                      type="text"
                      value={
                        data?.inquiryCta?.address ||
                        "GIDC Industrial Estate, Phase 4, Vatva, Ahmedabad, Gujarat 382445, India"
                      }
                      onChange={(e) => {
                        setData({
                          ...data,
                          inquiryCta: { ...data.inquiryCta, address: e.target.value },
                        });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      placeholder="Enter plant address..."
                    />
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Quotation Form Card Title
                      </label>
                      <input
                        type="text"
                        value={data?.inquiryCta?.formTitle || "Request Technical Quotation"}
                        onChange={(e) => {
                          setData({
                            ...data,
                            inquiryCta: { ...data.inquiryCta, formTitle: e.target.value },
                          });
                        }}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                        placeholder="Request Technical Quotation"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Submit Button Text
                      </label>
                      <input
                        type="text"
                        value={data?.inquiryCta?.buttonText || "Request a Quote / Send Inquiry"}
                        onChange={(e) => {
                          setData({
                            ...data,
                            inquiryCta: { ...data.inquiryCta, buttonText: e.target.value },
                          });
                        }}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#ff6b00] focus:outline-none focus:border-[#0056b3] focus:bg-white"
                        placeholder="Request a Quote / Send Inquiry"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
}
