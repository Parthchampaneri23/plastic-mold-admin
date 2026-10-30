"use client";

import React from "react";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";

interface TopBarEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function TopBarEditor({ data, setData }: TopBarEditorProps) {
  const topBar = data?.topBar || {
    phone: "91+ 7784758347",
    email: "sales@patelmould.com",
    address: "Patel Mould Park, Phase-IV GIDC, Gujarat, India",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Precision+Mould+Park+Phase+IV+GIDC+Vatva+Gujarat+India",
  };

  const updateField = (field: string, val: string) => {
    setData({
      ...data,
      topBar: {
        ...topBar,
        [field]: val,
      },
    });
  };

  return (
    <div className="space-y-8">
      {/* Header Info Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#ff6b00]" />
            Top Bar (Contact & Location Bar)
          </h2>
        </div>
      </div>

      {/* FORM CONTROLS */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#ff6b00]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Edit Top Bar Contact Details
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Number */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#ff6b00]" />
              <span>Direct Hotline Phone Number</span>
            </label>
            <input
              type="text"
              value={topBar.phone || ""}
              placeholder="e.g. 91+ 7784758347"
              onChange={(e) => updateField("phone", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#0056b3]" />
              <span>Sales & Inquiries Email</span>
            </label>
            <input
              type="text"
              value={topBar.email || ""}
              placeholder="e.g. sales@patelmould.com"
              onChange={(e) => updateField("email", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Company Physical Location */}
          <div className="md:col-span-2">
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ff6b00]" />
              <span>Company Plant Address / Location (Right Side)</span>
            </label>
            <input
              type="text"
              value={topBar.address || ""}
              placeholder="e.g. Patel Mould Park, Phase-IV GIDC, Gujarat, India"
              onChange={(e) => updateField("address", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Google Maps Link */}
          <div className="md:col-span-2">
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Google Maps Target Link
            </label>
            <input
              type="text"
              value={topBar.mapsUrl || ""}
              placeholder="https://www.google.com/maps/search/?api=1&query=..."
              onChange={(e) => updateField("mapsUrl", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
