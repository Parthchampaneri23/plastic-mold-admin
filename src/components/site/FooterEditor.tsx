"use client";

import React from "react";
import { PanelBottom, Plus, Trash2, Sparkles } from "lucide-react";
import { ImagePicker } from "@/components/ui/ImagePicker";

interface FooterEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function FooterEditor({ data, setData }: FooterEditorProps) {
  const footer = data?.footer || {
    logoImage: "/PMlogo.png",
    description:
      "Patel Mould Industries is an manufacturer specializing in high-speed, multi-cavity PET preform, ISBM, and Extrusion Blow Molds for the beverage, pharmaceutical, packaging, and personal care industries.",
    phone: "91+ 7784758347",
    email: "sales@patelmould.com",
    address: "Patel Mould Park, Phase-IV GIDC, Gujarat, India",
    copyrightText: "© 2026 Patel Mould Industries. All rights reserved.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "Infrastructure", href: "/infrastructure" },
      { label: "Products", href: "/products" },
      { label: "Industries", href: "/industries" },
      { label: "Quality & Testing", href: "/quality" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact Us", href: "/contact" },
    ],
  };

  const updateFooter = (field: string, val: any) => {
    setData({
      ...data,
      footer: {
        ...footer,
        [field]: val,
      },
    });
  };

  const updateSocial = (network: string, val: string) => {
    setData({
      ...data,
      footer: {
        ...footer,
        socialLinks: {
          ...(footer.socialLinks || {}),
          [network]: val,
        },
      },
    });
  };

  return (
    <div className="space-y-8">
      {/* Header Info Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#0056b3]/10 text-[#0056b3] border border-[#0056b3]/20 uppercase">
              Site Manager &bull; Global Footer
            </span>
            <span className="text-xs text-slate-500 font-medium">Dark Navy Footer on All Pages</span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <PanelBottom className="w-5 h-5 text-[#ff6b00]" />
            Global Website Footer
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage the brand logo, company summary, social media URLs, quick links, contact info, and copyright bar.
          </p>
        </div>
      </div>

      {/* FORM CONTROLS */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#ff6b00]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Edit Footer Brand, Description & Contacts
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Footer Logo */}
          <div className="md:col-span-2">
            <ImagePicker
              label="Footer Logo (White / Clean PNG)"
              value={footer.logoImage || "/PMlogo.png"}
              onChange={(url) => updateFooter("logoImage", url)}
              helperText="High-contrast logo displayed against dark navy background"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Company Brief Description
            </label>
            <textarea
              rows={3}
              value={footer.description || ""}
              placeholder="Patel Mould Industries is an manufacturer specializing in..."
              onChange={(e) => updateFooter("description", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Footer Phone Hotline
            </label>
            <input
              type="text"
              value={footer.phone || ""}
              placeholder="e.g. 91+ 7784758347"
              onChange={(e) => updateFooter("phone", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Footer Sales Email
            </label>
            <input
              type="text"
              value={footer.email || ""}
              placeholder="e.g. sales@patelmould.com"
              onChange={(e) => updateFooter("email", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Footer Physical Plant Address
            </label>
            <input
              type="text"
              value={footer.address || ""}
              placeholder="e.g. Patel Mould Park, Phase-IV GIDC, Gujarat, India"
              onChange={(e) => updateFooter("address", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* Copyright Text */}
          <div className="md:col-span-2">
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Copyright Footer Notice
            </label>
            <input
              type="text"
              value={footer.copyrightText || ""}
              placeholder="e.g. © 2026 Patel Mould Industries. All rights reserved."
              onChange={(e) => updateFooter("copyrightText", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Social Media Profile URLs
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">LinkedIn URL</label>
              <input
                type="text"
                value={footer.socialLinks?.linkedin || ""}
                placeholder="https://linkedin.com/company/..."
                onChange={(e) => updateSocial("linkedin", e.target.value)}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:border-[#0056b3]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Facebook URL</label>
              <input
                type="text"
                value={footer.socialLinks?.facebook || ""}
                placeholder="https://facebook.com/..."
                onChange={(e) => updateSocial("facebook", e.target.value)}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:border-[#0056b3]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">X (Twitter) URL</label>
              <input
                type="text"
                value={footer.socialLinks?.twitter || ""}
                placeholder="https://twitter.com/..."
                onChange={(e) => updateSocial("twitter", e.target.value)}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:border-[#0056b3]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Instagram URL</label>
              <input
                type="text"
                value={footer.socialLinks?.instagram || ""}
                placeholder="https://instagram.com/..."
                onChange={(e) => updateSocial("instagram", e.target.value)}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:border-[#0056b3]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">YouTube URL</label>
              <input
                type="text"
                value={footer.socialLinks?.youtube || ""}
                placeholder="https://youtube.com/@..."
                onChange={(e) => updateSocial("youtube", e.target.value)}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:border-[#0056b3]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
