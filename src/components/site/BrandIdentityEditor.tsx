"use client";

import React from "react";
import { Image as ImageIcon, Sparkles, Globe, ShieldCheck } from "lucide-react";
import { ImagePicker } from "@/components/ui/ImagePicker";

interface BrandIdentityEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function BrandIdentityEditor({
  data,
  setData,
}: BrandIdentityEditorProps) {
  const brand = data?.brandIdentity || {
    logoImage: data?.navbar?.logoImage || "/PMlogo.png",
    logoAlt: data?.navbar?.logoAlt || "Patel Mould Industries",
    footerLogoImage: data?.footer?.logoImage || "/PMlogo.png",
    faviconUrl: "/favicon.ico",
    appleTouchIconUrl: "/icon-192.png",
    siteTitle: "Patel Mould Industries",
    siteTagline: "Precision Plastic Mould Manufacturer",
  };

  const updateBrand = (field: string, val: any) => {
    const updatedBrand = {
      ...brand,
      [field]: val,
    };

    // Keep navbar.logoImage, navbar.logoAlt and footer.logoImage in sync automatically
    const updatedData = {
      ...data,
      brandIdentity: updatedBrand,
      navbar: {
        ...(data?.navbar || {}),
        logoImage: field === "logoImage" ? val : data?.navbar?.logoImage || val,
        logoAlt: field === "logoAlt" ? val : data?.navbar?.logoAlt || val,
      },
      footer: {
        ...(data?.footer || {}),
        logoImage:
          field === "footerLogoImage"
            ? val
            : field === "logoImage" && !data?.footer?.logoImage
              ? val
              : data?.footer?.logoImage || val,
      },
    };

    setData(updatedData);
  };

  return (
    <div className="space-y-8">
      {/* Header Info Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-[#ff6b00]" />
            Logo &amp; Favicon Manager
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Configure the primary website header logo, footer logo, browser tab favicon, and mobile touch icons. Changes will dynamically reflect across the website and browser tabs.
          </p>
        </div>
      </div>

      {/* 1. BRAND LOGO SECTION */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#0056b3]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Brand Logo Configuration (Header &amp; Footer)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Header Logo */}
          <div>
            <ImagePicker
              label="Primary Header Brand Logo"
              value={brand.logoImage || "/PMlogo.png"}
              onChange={(url) => updateBrand("logoImage", url)}
            />
          </div>

          {/* Footer Logo */}
          <div>
            <ImagePicker
              label="Footer Brand Logo"
              value={brand.footerLogoImage || brand.logoImage || "/PMlogo.png"}
              onChange={(url) => updateBrand("footerLogoImage", url)}
            />
          </div>

          {/* Brand Logo Alt Text */}
          <div className="md:col-span-2">
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Logo Alt Text (SEO &amp; Accessibility)
            </label>
            <input
              type="text"
              value={brand.logoAlt || "Patel Mould Industries"}
              onChange={(e) => updateBrand("logoAlt", e.target.value)}
              placeholder="e.g. Patel Mould Industries - Precision Plastic Mould Manufacturer"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* 2. FAVICON & BROWSER IDENTITY SECTION */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Globe className="w-4 h-4 text-[#ff6b00]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Browser Favicon &amp; App Icons
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Favicon URL */}
          <div>
            <ImagePicker
              label="Browser Tab Favicon (.ico or .png)"
              value={brand.faviconUrl || "/favicon.ico"}
              onChange={(url) => updateBrand("faviconUrl", url)}
            />
          </div>

          {/* Apple / High-Res Touch Icon */}
          <div>
            <ImagePicker
              label="Mobile / Apple Touch Icon (192x192 / 512x512)"
              value={brand.appleTouchIconUrl || "/icon-192.png"}
              onChange={(url) => updateBrand("appleTouchIconUrl", url)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

