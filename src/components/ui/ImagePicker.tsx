"use client";

import React, { useState, useRef } from "react";
import { Upload, Image as ImageIcon, Loader2, Eye, X, ExternalLink, AlertCircle } from "lucide-react";
import { getImageMetadata } from "@/data/defaultImageMetadata";

interface ImagePickerProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  helperText?: string;
  description?: string;
  imageName?: string;
  onImageNameChange?: (name: string) => void;
  imageAlt?: string;
  onImageAltChange?: (alt: string) => void;
  showSeoFields?: boolean;
}

export function ImagePicker({
  label,
  value,
  onChange,
  helperText,
  description,
  imageName,
  onImageNameChange,
  imageAlt,
  onImageAltChange,
  showSeoFields = true,
}: ImagePickerProps) {
  const [uploading, setUploading] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formatError, setFormatError] = useState<string | null>(null);

  // Compute default prefill from central registry based on current image path and label
  const defaultMeta = React.useMemo(() => {
    return getImageMetadata(value, label);
  }, [value, label]);

  // Internal state: initialized with prop if provided, else default metadata
  const [internalName, setInternalName] = useState(imageName ?? defaultMeta.name);
  const [internalAlt, setInternalAlt] = useState(imageAlt ?? defaultMeta.alt);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Keep internal states in sync if props or current image change
  React.useEffect(() => {
    if (imageName !== undefined && imageName !== "") {
      setInternalName(imageName);
    } else {
      setInternalName(defaultMeta.name);
    }
  }, [imageName, defaultMeta.name]);

  React.useEffect(() => {
    if (imageAlt !== undefined && imageAlt !== "") {
      setInternalAlt(imageAlt);
    } else {
      setInternalAlt(defaultMeta.alt);
    }
  }, [imageAlt, defaultMeta.alt]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFormatError(null);

    // Client-side file format validation
    const ALLOWED_MIME_TYPES = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/svg+xml",
    ];
    const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"];
    const ext = file.name ? ("." + file.name.split(".").pop()).toLowerCase() : "";
    const isMimeValid = ALLOWED_MIME_TYPES.includes((file.type || "").toLowerCase());
    const isExtValid = ALLOWED_EXTENSIONS.includes(ext);

    if (!isMimeValid && !isExtValid) {
      setFormatError("Unsupported file format. Please upload JPG, PNG, or WEBP files only.");
      // Reset input value so user can retry same file name if needed
      e.target.value = "";
      return;
    }

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
        setFormatError(data.message || "Upload failed. Unsupported file format.");
      }
    } catch (err: any) {
      setFormatError("Error uploading file: " + err.message);
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const hasValidImage = Boolean(value && !previewError);

  return (
    <>
      <div className="space-y-1.5 w-full min-w-0">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            {label}
          </label>
          {helperText && <span className="text-[10px] text-slate-500 font-medium">{helperText}</span>}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full min-w-0">
          {/* Thumbnail Preview with Click-to-Enlarge Overlay */}
          <div
            onClick={() => hasValidImage && setIsModalOpen(true)}
            title={hasValidImage ? "Click to preview full image" : ""}
            className={`w-16 h-16 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden shrink-0 relative group shadow-xs transition-all ${hasValidImage ? "cursor-pointer hover:border-[#0056b3] hover:shadow-md ring-1 ring-transparent hover:ring-[#0056b3]/30" : ""
              }`}
          >
            {hasValidImage ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={value}
                  alt={label}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
                  onError={() => setPreviewError(true)}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity rounded-lg text-white">
                  <Eye className="w-5 h-5 text-white drop-shadow" />
                  <span className="text-[8px] font-bold uppercase tracking-wider mt-0.5">View</span>
                </div>
              </>
            ) : (
              <ImageIcon className="w-6 h-6 text-slate-400" />
            )}

            {uploading && (
              <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
                <Loader2 className="w-5 h-5 text-[#0056b3] animate-spin" />
              </div>
            )}
          </div>

          {/* Input & Upload Button Controls */}
          <div className="flex-1 flex flex-wrap sm:flex-nowrap gap-2 min-w-0 w-full">
            <input
              type="text"
              value={value || ""}
              onChange={(e) => {
                setPreviewError(false);
                onChange(e.target.value);
              }}
              placeholder="/Home/Banner1.png or https://..."
              className="min-w-0 flex-1 w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-800 text-xs font-medium focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3] placeholder:text-slate-400 shadow-xs"
            />

            <div className="flex items-center gap-1.5 shrink-0">
              {/* Quick Preview Button */}
              {hasValidImage && (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  title="Preview image in full view"
                  className="px-2.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#0056b3] border border-blue-200 text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shadow-xs shrink-0"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Preview</span>
                </button>
              )}

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
                className="hidden"
              />

              <button
                type="button"
                disabled={uploading}
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 shrink-0 shadow-xs"
              >
                {uploading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#0056b3]" />
                ) : (
                  <Upload className="w-3.5 h-3.5 text-[#0056b3]" />
                )}
                <span className="whitespace-nowrap">{uploading ? "Uploading..." : "Upload File"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Validation Error Banner for unsupported format */}
        {formatError && (
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span className="flex-1">{formatError}</span>
            <button
              type="button"
              onClick={() => setFormatError(null)}
              className="text-red-500 hover:text-red-700 p-0.5 rounded cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Image Name & Image Alt (SEO) Fields */}
        {showSeoFields && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1.5 pl-0 sm:pl-[76px]">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1 flex items-center gap-1">
                <span>Image Name</span>
                <span className="text-[10px] text-slate-400 font-normal"></span>
              </label>
              <input
                type="text"
                value={imageName !== undefined ? imageName : internalName}
                onChange={(e) => {
                  const newVal = e.target.value;
                  setInternalName(newVal);
                  if (onImageNameChange) onImageNameChange(newVal);
                }}
                placeholder="e.g. Hero Banner 1 / Injection Mold"
                className="w-full px-3 py-2 bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-200 rounded-lg text-slate-800 text-xs font-medium focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3] placeholder:text-slate-400 transition-colors shadow-xs"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1 flex items-center gap-1">
                <span>Image Alt</span>
                <span className="text-[10px] text-[#ff6b00] font-semibold tracking-wide"></span>
              </label>
              <input
                type="text"
                value={imageAlt !== undefined ? imageAlt : internalAlt}
                onChange={(e) => {
                  const newVal = e.target.value;
                  setInternalAlt(newVal);
                  if (onImageAltChange) onImageAltChange(newVal);
                }}
                placeholder="e.g. High precision multi-cavity preform mold"
                className="w-full px-3 py-2 bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-200 rounded-lg text-slate-800 text-xs font-medium focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3] placeholder:text-slate-400 transition-colors shadow-xs"
              />
            </div>
          </div>
        )}
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL PREVIEW */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2.5 min-w-0 pr-4">
                <ImageIcon className="w-4 h-4 text-[#0056b3] shrink-0" />
                <span className="text-xs font-bold text-slate-900 truncate">
                  {label}
                </span>
                <span className="text-[11px] font-mono text-slate-500 truncate hidden sm:inline">
                  ({value})
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={value}
                  target="_blank"
                  rel="noreferrer"
                  title="Open original image in new tab"
                  className="p-1.5 rounded-lg text-slate-600 hover:text-[#0056b3] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-200/70 transition-colors cursor-pointer"
                  title="Close preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="p-4 sm:p-6 bg-slate-900/95 flex items-center justify-center overflow-auto max-h-[calc(90vh-60px)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={value}
                alt={label}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

