"use client";

import React, { useState, useRef } from "react";
import { Upload, Image as ImageIcon, Loader2 } from "lucide-react";

interface ImagePickerProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  helperText?: string;
}

export function ImagePicker({ label, value, onChange, helperText }: ImagePickerProps) {
  const [uploading, setUploading] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setPreviewError(false);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success && data.url) {
        onChange(data.url);
      } else {
        alert(data.message || "Upload failed");
      }
    } catch (err: any) {
      alert("Error uploading file: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          {label}
        </label>
        {helperText && <span className="text-[10px] text-slate-500 font-medium">{helperText}</span>}
      </div>

      <div className="flex items-center gap-3">
        {/* Thumbnail Preview */}
        <div className="w-16 h-16 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden shrink-0 relative group shadow-xs">
          {value && !previewError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={value}
              alt={label}
              className="w-full h-full object-cover rounded-lg"
              onError={() => setPreviewError(true)}
            />
          ) : (
            <ImageIcon className="w-6 h-6 text-slate-400" />
          )}

          {uploading && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <Loader2 className="w-5 h-5 text-[#0056b3] animate-spin" />
            </div>
          )}
        </div>

        {/* Input & Upload Button */}
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            value={value || ""}
            onChange={(e) => {
              setPreviewError(false);
              onChange(e.target.value);
            }}
            placeholder="/Home/Banner1.png or https://..."
            className="flex-1 px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-800 text-xs font-medium focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3] placeholder:text-slate-400 shadow-xs"
          />

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          <button
            type="button"
            disabled={uploading}
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 shrink-0 shadow-xs"
          >
            {uploading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin text-[#0056b3]" />
            ) : (
              <Upload className="w-3.5 h-3.5 text-[#0056b3]" />
            )}
            <span>{uploading ? "Uploading..." : "Upload File"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
