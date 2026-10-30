"use client";

import React from "react";
import {
  Save,
  CheckCircle2,
  RefreshCw,
  Home
} from "lucide-react";

interface NavbarProps {
  onSave?: () => void;
  saving?: boolean;
  savedToast?: boolean;
  onRefresh?: () => void;
  currentSectionTitle?: string;
  onSelectTab?: (tab: string) => void;
}

export function Navbar({ onSave, saving, savedToast, onRefresh, currentSectionTitle, onSelectTab }: NavbarProps) {
  return (
    <header className="h-18 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-20 shadow-xs">
      {/* Left Breadcrumb & Status */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs">
          <button
            type="button"
            onClick={() => onSelectTab && onSelectTab("overview")}
            className="text-slate-500 hover:text-[#0056b3] font-medium transition-colors cursor-pointer"
          >
            Patel Mould Admin
          </button>

          {currentSectionTitle === "Dashboard Overview" ? (
            <>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900 font-extrabold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
                Dashboard Overview
              </span>
            </>
          ) : (
            <>
              <span className="text-slate-300">/</span>
              <button
                type="button"
                onClick={() => onSelectTab && onSelectTab("hero")}
                className="text-[#0056b3] hover:text-[#003d80] font-bold flex items-center gap-1.5 transition-colors cursor-pointer group"
              >
                <Home className="w-3.5 h-3.5 text-[#ff6b00] group-hover:scale-110 transition-transform" />
                <span>Home Page</span>
              </button>

              {currentSectionTitle && (
                <>
                  <span className="text-slate-300">/</span>
                  <span className="text-slate-900 font-extrabold">{currentSectionTitle}</span>
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {onSave && (
          <button
            onClick={onSave}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-[#0056b3] hover:bg-[#003d80] text-white font-bold text-xs transition-all shadow-md shadow-[#0056b3]/20 flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {saving ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-white" />
            ) : savedToast ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
            ) : (
              <Save className="w-3.5 h-3.5 text-white" />
            )}
            <span>{saving ? "Saving Changes..." : savedToast ? "Saved Successfully!" : "Save All Changes"}</span>
          </button>
        )}
      </div>
    </header>
  );
}
