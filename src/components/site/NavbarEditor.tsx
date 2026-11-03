"use client";

import React, { useState, useRef } from "react";
import { Navigation, Plus, Trash2, Sparkles, CheckCircle2 } from "lucide-react";
import { ImagePicker } from "@/components/ui/ImagePicker";

interface NavbarEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function NavbarEditor({ data, setData }: NavbarEditorProps) {
  const [newlyAddedId, setNewlyAddedId] = useState<string | null>(null);
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);
  const newCardRef = useRef<HTMLDivElement | null>(null);
  const newCardInputRef = useRef<HTMLInputElement | null>(null);

  // Support both data.navbar.links and data.navbar.menuLinks
  const initialLinks = data?.navbar?.links || (data?.navbar?.menuLinks?.map((m: any, i: number) => ({
    id: `nav-${i + 1}`,
    label: m.label,
    href: m.href,
    hasDropdown: !!m.isMegaMenu,
  }))) || [
    { id: "nav-1", label: "About Us", href: "/about" },
    { id: "nav-2", label: "Products", href: "/products", hasDropdown: true },
    { id: "nav-3", label: "Manufacturing", href: "/manufacturing" },
    { id: "nav-4", label: "Infrastructure", href: "/infrastructure" },
    { id: "nav-5", label: "Industries", href: "/industries" },
    { id: "nav-6", label: "Blogs", href: "/blogs" },
    { id: "nav-7", label: "Contact Us", href: "/contact" },
  ];

  const navbar = {
    logoImage: "/PMlogo.png",
    ctaButtonText: "Request a Quote",
    ctaButtonLink: "#inquiry-section",
    ...(data?.navbar || {}),
    links: initialLinks,
  };

  const updateNavbar = (field: string, val: any) => {
    const updatedNavbar: any = {
      ...navbar,
      [field]: val,
    };

    // Keep both links and menuLinks synchronized so any consumer receives the updated navigation items
    if (field === "links") {
      updatedNavbar.menuLinks = (val || []).map((l: any) => ({
        label: l.label,
        href: l.href,
        isMegaMenu: !!l.hasDropdown || l.href === "/products",
      }));
    }

    setData({
      ...data,
      navbar: updatedNavbar,
    });
  };

  const handleAddNewLink = () => {
    const count = (navbar.links?.length || 0) + 1;
    const newId = `nav-${Date.now()}`;
    const newLink = {
      id: newId,
      label: `Link ${count}`,
      href: "/",
      hasDropdown: false,
    };
    
    updateNavbar("links", [...(navbar.links || []), newLink]);
    setNewlyAddedId(newId);
    setFeedbackToast(`New navigation item "Link ${count}" added successfully!`);

    // Auto-scroll, temporary highlight, and focus on the newly added item
    setTimeout(() => {
      if (newCardRef.current) {
        newCardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      if (newCardInputRef.current) {
        newCardInputRef.current.focus();
        newCardInputRef.current.select();
      }
    }, 100);

    // Fade toast and highlight animation after 4 seconds
    setTimeout(() => {
      setFeedbackToast(null);
      setNewlyAddedId(null);
    }, 4000);
  };

  return (
    <div className="space-y-8 relative">
      {/* Visual Feedback Confirmation Toast */}
      {feedbackToast && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-600 text-white shadow-xl shadow-emerald-600/25 animate-in slide-in-from-top-3 duration-300 font-medium text-xs">
          <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
          <span>{feedbackToast}</span>
        </div>
      )}

      {/* Header Info Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <Navigation className="w-5 h-5 text-[#ff6b00]" />
            Main Website Navbar
          </h2>
        </div>

        <button
          type="button"
          onClick={handleAddNewLink}
          className="px-4 py-2 rounded-xl bg-[#0056b3] hover:bg-[#003d80] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-[#0056b3]/20 transition-all cursor-pointer self-start sm:self-auto shrink-0 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Add Nav Link</span>
        </button>
      </div>

      {/* FORM CONTROLS */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-[#ff6b00]" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Edit Navbar Brand Logo & Action Button
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Logo Picker */}
          <div>
            <ImagePicker
              label="Website Header Brand Logo (Left Side)"
              value={navbar.logoImage || "/PMlogo.png"}
              onChange={(url) => updateNavbar("logoImage", url)}
            />
          </div>

          {/* Favicon / Icon Picker */}
          <div>
            <ImagePicker
              label="Browser Tab Favicon / Icon"
              value={data?.brandIdentity?.faviconUrl || "/favicon.ico"}
              onChange={(url) => {
                setData({
                  ...data,
                  brandIdentity: {
                    ...(data?.brandIdentity || {}),
                    faviconUrl: url,
                  },
                });
              }}
            />
          </div>

          {/* CTA Button Text */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              CTA Action Button Text (Right Side)
            </label>
            <input
              type="text"
              value={navbar.ctaButtonText || ""}
              placeholder="Request a Quote"
              onChange={(e) => updateNavbar("ctaButtonText", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>

          {/* CTA Button Link */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              CTA Button Target Link
            </label>
            <input
              type="text"
              value={navbar.ctaButtonLink || ""}
              placeholder="#inquiry-section or /contact"
              onChange={(e) => updateNavbar("ctaButtonLink", e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-[#0056b3] focus:bg-white"
            />
          </div>
        </div>

        {/* Navigation Menu Links List */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Navigation Menu Items ({navbar.links?.length || 0})
            </h4>

            <button
              type="button"
              onClick={handleAddNewLink}
              className="px-3.5 py-1.5 rounded-xl bg-[#0056b3] hover:bg-[#003d80] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-[#0056b3]/20 transition-all cursor-pointer shrink-0 active:scale-95"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Nav Item</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(navbar.links || []).map((link: any, index: number) => {
              const isNewlyAdded = link.id === newlyAddedId;

              return (
                <div
                  key={link.id || index}
                  ref={isNewlyAdded ? newCardRef : null}
                  className={`p-4 rounded-2xl border transition-all duration-300 space-y-3 relative group ${
                    isNewlyAdded
                      ? "bg-amber-50/70 border-amber-400 ring-2 ring-amber-400/50 shadow-lg scale-[1.02]"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-[#ff6b00] uppercase tracking-wider">
                        Item #{index + 1}
                      </span>
                      {isNewlyAdded && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500 text-white animate-pulse">
                          New
                        </span>
                      )}
                    </div>
                    {navbar.links.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const updated = navbar.links.filter((_: any, i: number) => i !== index);
                          updateNavbar("links", updated);
                        }}
                        title="Delete link"
                        className="p-1 rounded text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                      Menu Label
                    </label>
                    <input
                      ref={isNewlyAdded ? newCardInputRef : null}
                      type="text"
                      value={link.label || ""}
                      placeholder="e.g. Products"
                      onChange={(e) => {
                        const updated = [...navbar.links];
                        updated[index].label = e.target.value;
                        updateNavbar("links", updated);
                      }}
                      className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                      Target URL
                    </label>
                    <input
                      type="text"
                      value={link.href || ""}
                      placeholder="/products"
                      onChange={(e) => {
                        const updated = [...navbar.links];
                        updated[index].href = e.target.value;
                        updateNavbar("links", updated);
                      }}
                      className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
