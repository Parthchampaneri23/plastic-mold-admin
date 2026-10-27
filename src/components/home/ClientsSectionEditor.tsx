"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { Award, Plus, Trash2, Star, Sparkles, Users, Building2 } from "lucide-react";

interface ClientsSectionEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function ClientsSectionEditor({ data, setData }: ClientsSectionEditorProps) {
  return (
            <div className="space-y-6">
              {/* Header Box */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 uppercase">
                      Home Page &bull; Section 10
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Valued Clients &bull; Marquee Logos &bull; Customer Testimonials
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#ff6b00]" />
                    Valued Clients & Customer Success
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Manage the client section header, animated scrolling marquee client logos (Astral, Bisleri, Mankind, Supreme, etc.), and verified plant manager testimonials.
                  </p>
                </div>
              </div>

              {/* Main Section Header Settings (Matches Screenshot) */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" />
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Header & Split Description (As Shown on Website)
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Eyebrow Badge Text
                    </label>
                    <input
                      type="text"
                      value={data?.clientsSection?.eyebrowBadge || "TRUSTED INDIAN INDUSTRY LEADERS"}
                      onChange={(e) => {
                        const cs = { ...(data.clientsSection || {}) };
                        cs.eyebrowBadge = e.target.value;
                        setData({ ...data, clientsSection: cs });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      placeholder="TRUSTED INDIAN INDUSTRY LEADERS"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Headline (Line 1 - Dark)
                    </label>
                    <input
                      type="text"
                      value={data?.clientsSection?.headlineMain || "Valued Clients &"}
                      onChange={(e) => {
                        const cs = { ...(data.clientsSection || {}) };
                        cs.headlineMain = e.target.value;
                        setData({ ...data, clientsSection: cs });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      placeholder="Valued Clients &"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Headline Highlight (Line 2 - Blue)
                    </label>
                    <input
                      type="text"
                      value={data?.clientsSection?.headlineHighlight || "Customer Success."}
                      onChange={(e) => {
                        const cs = { ...(data.clientsSection || {}) };
                        cs.headlineHighlight = e.target.value;
                        setData({ ...data, clientsSection: cs });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      placeholder="Customer Success."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-8">
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Section Description (Right Column with Vertical Accent Bar)
                    </label>
                    <textarea
                      rows={2}
                      value={
                        data?.clientsSection?.description ||
                        "Partnering with India's premier beverage bottlers, FMCG conglomerates, and pharmaceutical packaging leaders nationwide."
                      }
                      onChange={(e) => {
                        const cs = { ...(data.clientsSection || {}) };
                        cs.description = e.target.value;
                        setData({ ...data, clientsSection: cs });
                      }}
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      placeholder="Enter description..."
                    />
                  </div>

                  <div className="md:col-span-4 space-y-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Micro Badge 1 (Blue Pill)
                      </label>
                      <input
                        type="text"
                        value={data?.clientsSection?.pill1Text || "25+ Cities Across India"}
                        onChange={(e) => {
                          const cs = { ...(data.clientsSection || {}) };
                          cs.pill1Text = e.target.value;
                          setData({ ...data, clientsSection: cs });
                        }}
                        className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
                        placeholder="25+ Cities Across India"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Micro Badge 2 (Orange Pill)
                      </label>
                      <input
                        type="text"
                        value={data?.clientsSection?.pill2Text || "Trusted Since 1994"}
                        onChange={(e) => {
                          const cs = { ...(data.clientsSection || {}) };
                          cs.pill2Text = e.target.value;
                          setData({ ...data, clientsSection: cs });
                        }}
                        className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                        placeholder="Trusted Since 1994"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CLIENT LOGOS MARQUEE SLIDER SECTION (EXACT SCREENSHOT MATCH) */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#0056b3]" />
                      Client Brand Logos (Continuous Moving Slider on Website)
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      These logos appear inside the continuous marquee carousel (Astral Pipes, Bisleri, Mankind, Supreme, etc.).
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const count = (data?.clientLogoImages?.length || 0) + 1;
                      const newLogo = {
                        id: `c${count}`,
                        name: `Client Logo ${count}`,
                        image: "/Home/client1.png",
                      };
                      setData({
                        ...data,
                        clientLogoImages: [...(data.clientLogoImages || []), newLogo],
                      });
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#0056b3] hover:bg-[#003d80] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Client Logo</span>
                  </button>
                </div>

                {/* Marquee Live Visual Bar Preview */}
                <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                    <span>Live Carousel Preview</span>
                    <span className="text-[#0056b3]">Total: {data?.clientLogoImages?.length || 0} Logos Loaded</span>
                  </div>

                  <div className="flex items-center gap-4 overflow-x-auto py-2 px-1">
                    {(data?.clientLogoImages || []).map((logo: any, idx: number) => (
                      <div
                        key={logo.id || idx}
                        className="w-40 sm:w-48 h-20 bg-white rounded-xl border border-slate-200 p-3 flex items-center justify-center shrink-0 shadow-xs relative group"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={logo.image || "/Home/client1.png"}
                          alt={logo.name || "Client Logo"}
                          className="max-h-12 w-auto object-contain"
                        />
                        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-slate-400">
                          #{idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grid of Logo Editors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                  {(data?.clientLogoImages || []).map((logo: any, idx: number) => (
                    <div
                      key={logo.id || idx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-[#0056b3] transition-all space-y-3 group"
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Logo #{idx + 1}: {logo.name || `Client ${idx + 1}`}
                        </span>

                        {(data?.clientLogoImages || []).length > 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(`Remove logo "${logo.name}"?`)) {
                                const updated = data.clientLogoImages.filter(
                                  (_: any, i: number) => i !== idx
                                );
                                setData({ ...data, clientLogoImages: updated });
                              }
                            }}
                            className="p-1 text-slate-400 hover:text-red-500 rounded cursor-pointer"
                            title="Remove logo"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      {/* Logo Image Preview & ImagePicker */}
                      <div className="h-24 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-3 shadow-inner">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={logo.image || "/Home/client1.png"}
                          alt={logo.name}
                          className="max-h-16 w-auto object-contain"
                        />
                      </div>

                      <ImagePicker
                        label="Client Logo Image"
                        value={logo.image || "/Home/client1.png"}
                        onChange={(url) => {
                          const updated = [...(data.clientLogoImages || [])];
                          updated[idx].image = url;
                          setData({ ...data, clientLogoImages: updated });
                        }}
                        helperText="Choose /Home/client1.png, client2.webp, etc."
                      />

                      <div>
                        <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                          Client / Company Name
                        </label>
                        <input
                          type="text"
                          value={logo.name || ""}
                          placeholder="e.g. Astral Pipes"
                          onChange={(e) => {
                            const updated = [...(data.clientLogoImages || [])];
                            updated[idx].name = e.target.value;
                            setData({ ...data, clientLogoImages: updated });
                          }}
                          className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TESTIMONIALS SECTION */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#ff6b00]" />
                      Customer Testimonials & Feedback
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Manage authentic client quotes, company positions, and ratings displayed on the homepage slider.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const count = (data?.indianTestimonials?.length || 0) + 1;
                      const newTestimonial = {
                        id: `it${count}`,
                        author: "New Client Executive",
                        position: "Operations Director",
                        company: "Reputed Packaging Ltd.",
                        location: "Mumbai, Maharashtra",
                        rating: 5,
                        quote:
                          "Patel Mould delivered high-precision tooling with unmatched cycle time consistency and extraordinary longevity.",
                      };
                      setData({
                        ...data,
                        indianTestimonials: [...(data.indianTestimonials || []), newTestimonial],
                      });
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#0056b3] hover:bg-[#003d80] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Testimonial</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {(data?.indianTestimonials || []).map((item: any, index: number) => (
                    <div
                      key={item.id || index}
                      className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-[#0056b3] transition-all space-y-3 group"
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                        <span className="text-xs font-bold text-[#0056b3]">
                          {item.company || `Client ${index + 1}`}
                        </span>

                        <div className="flex items-center gap-2">
                          <span className="text-xs text-amber-500 font-bold">
                            {"★".repeat(item.rating || 5)}
                          </span>

                          {(data?.indianTestimonials || []).length > 1 && (
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Delete testimonial from "${item.author}"?`)) {
                                  const updated = data.indianTestimonials.filter(
                                    (_: any, i: number) => i !== index
                                  );
                                  setData({ ...data, indianTestimonials: updated });
                                }
                              }}
                              className="text-slate-400 hover:text-red-500 p-1 cursor-pointer"
                              title="Delete testimonial"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Author Name
                          </label>
                          <input
                            type="text"
                            value={item.author || ""}
                            placeholder="Author Name"
                            onChange={(e) => {
                              const updated = [...data.indianTestimonials];
                              updated[index].author = e.target.value;
                              setData({ ...data, indianTestimonials: updated });
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Designation / Position
                          </label>
                          <input
                            type="text"
                            value={item.position || ""}
                            placeholder="e.g. VP Technical Operations"
                            onChange={(e) => {
                              const updated = [...data.indianTestimonials];
                              updated[index].position = e.target.value;
                              setData({ ...data, indianTestimonials: updated });
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            value={item.company || ""}
                            placeholder="e.g. Bisleri International"
                            onChange={(e) => {
                              const updated = [...data.indianTestimonials];
                              updated[index].company = e.target.value;
                              setData({ ...data, indianTestimonials: updated });
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            value={item.location || ""}
                            placeholder="e.g. Mumbai, Maharashtra"
                            onChange={(e) => {
                              const updated = [...data.indianTestimonials];
                              updated[index].location = e.target.value;
                              setData({ ...data, indianTestimonials: updated });
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Testimonial Quote
                        </label>
                        <textarea
                          rows={3}
                          value={item.quote || ""}
                          placeholder="Client review / quote..."
                          onChange={(e) => {
                            const updated = [...data.indianTestimonials];
                            updated[index].quote = e.target.value;
                            setData({ ...data, indianTestimonials: updated });
                          }}
                          className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] leading-relaxed italic"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  );
}
