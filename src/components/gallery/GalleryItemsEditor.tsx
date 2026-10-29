"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ImagePicker } from "@/components/ui/ImagePicker";
import {
  Search,
  Plus,
  Trash2,
  SlidersHorizontal,
  ChevronRight,
  ExternalLink,
  Layers,
  Sparkles,
  Info,
  CheckCircle2,
} from "lucide-react";
import {
  GalleryItem,
  GALLERY_CATEGORIES,
  GalleryCategory,
} from "@/data/defaultGallery";

interface GalleryItemsEditorProps {
  items: GalleryItem[];
  onChange: (items: GalleryItem[]) => void;
  selectedItemId?: string;
  onSelectItem?: (id: string) => void;
}

export function GalleryItemsEditor({
  items = [],
  onChange,
  selectedItemId,
  onSelectItem,
}: GalleryItemsEditorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<"basic" | "descriptions" | "highlights" | "specs">("basic");

  // Determine selected item
  const selectedItem = useMemo(() => {
    if (!items || items.length === 0) return null;
    if (selectedItemId) {
      const found = items.find((i) => i.id === selectedItemId);
      if (found) return found;
    }
    return items[0];
  }, [items, selectedItemId]);

  // Filter items for sidebar list
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.badge.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat =
        selectedCategoryFilter === "All" || item.category === selectedCategoryFilter;
      return matchesSearch && matchesCat;
    });
  }, [items, searchQuery, selectedCategoryFilter]);

  const handleUpdateCurrentItem = (updatedFields: Partial<GalleryItem>) => {
    if (!selectedItem) return;
    const updated = items.map((item) =>
      item.id === selectedItem.id ? { ...item, ...updatedFields } : item
    );
    onChange(updated);
  };

  const handleAddNewItem = () => {
    const newId = `gal-${Date.now().toString().slice(-6)}`;
    const newItem: GalleryItem = {
      id: newId,
      slug: `new-gallery-item-${Date.now().toString().slice(-4)}`,
      title: "New Gallery Photo / Item",
      category: "Manufacturing Facility",
      image: "/infrastructure/facility-hero.jpg",
      alt: "Patel Mould Industries Precision Manufacturing",
      badge: "New Item",
      shortDescription: "Short summary description for gallery grid preview.",
      fullDescription: "Detailed multi-paragraph description for dedicated item page.",
      aspectRatio: "landscape",
      featured: false,
      featuredCollection: "Inside Our Facility",
      keyHighlights: [
        "High precision manufacturing tolerance",
        "Clean climate-controlled environment",
        "Rigorous dimensional verification",
      ],
      specifications: [
        { label: "Material / Type", value: "Standard / Custom" },
        { label: "Accuracy", value: "±0.005 mm" },
      ],
      applicationContext: "Engineered for high-volume rigid packaging mold tooling.",
      relatedCategoryLink: "/infrastructure",
    };

    onChange([newItem, ...items]);
    if (onSelectItem) {
      onSelectItem(newItem.id);
    }
  };

  const handleDeleteItem = (idToDelete: string) => {
    if (confirm("Are you sure you want to delete this gallery item?")) {
      const updated = items.filter((i) => i.id !== idToDelete);
      onChange(updated);
      if (selectedItem?.id === idToDelete && updated.length > 0) {
        if (onSelectItem) onSelectItem(updated[0].id);
      }
    }
  };

  // Highlights handlers
  const handleAddHighlight = () => {
    if (!selectedItem) return;
    const currentHighlights = selectedItem.keyHighlights || [];
    handleUpdateCurrentItem({
      keyHighlights: [...currentHighlights, "New key capability highlight"],
    });
  };

  const handleUpdateHighlight = (index: number, val: string) => {
    if (!selectedItem) return;
    const currentHighlights = [...(selectedItem.keyHighlights || [])];
    currentHighlights[index] = val;
    handleUpdateCurrentItem({ keyHighlights: currentHighlights });
  };

  const handleDeleteHighlight = (index: number) => {
    if (!selectedItem) return;
    const currentHighlights = (selectedItem.keyHighlights || []).filter((_, i) => i !== index);
    handleUpdateCurrentItem({ keyHighlights: currentHighlights });
  };

  // Specs handlers
  const handleAddSpec = () => {
    if (!selectedItem) return;
    const currentSpecs = selectedItem.specifications || [];
    handleUpdateCurrentItem({
      specifications: [...currentSpecs, { label: "New Spec", value: "Value" }],
    });
  };

  const handleUpdateSpec = (index: number, field: "label" | "value", val: string) => {
    if (!selectedItem) return;
    const currentSpecs = [...(selectedItem.specifications || [])];
    currentSpecs[index] = { ...currentSpecs[index], [field]: val };
    handleUpdateCurrentItem({ specifications: currentSpecs });
  };

  const handleDeleteSpec = (index: number) => {
    if (!selectedItem) return;
    const currentSpecs = (selectedItem.specifications || []).filter((_, i) => i !== index);
    handleUpdateCurrentItem({ specifications: currentSpecs });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* LEFT COLUMN: Gallery Item Selector List */}
      <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col h-[750px]">
        {/* Header + Add button */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 gap-2">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Gallery Items ({items.length})
            </h3>
            <p className="text-[11px] text-slate-500">Select an item to edit details</p>
          </div>
          <button
            type="button"
            onClick={handleAddNewItem}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#0056b3] hover:bg-[#004494] text-white text-xs font-bold transition-all shadow-sm shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Item</span>
          </button>
        </div>

        {/* Filter controls */}
        <div className="py-3 space-y-2 border-b border-slate-100">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, slug..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <select
            value={selectedCategoryFilter}
            onChange={(e) => setSelectedCategoryFilter(e.target.value)}
            className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none bg-slate-50"
          >
            <option value="All">All Categories ({items.length})</option>
            {GALLERY_CATEGORIES.filter((c) => c !== "All Images").map((cat) => (
              <option key={cat} value={cat}>
                {cat} ({items.filter((i) => i.category === cat).length})
              </option>
            ))}
          </select>
        </div>

        {/* Scrollable Items List */}
        <div className="flex-1 overflow-y-auto space-y-1.5 py-2 pr-1">
          {filteredItems.length === 0 ? (
            <div className="p-4 text-center text-xs text-slate-400">
              No gallery items found matching filters.
            </div>
          ) : (
            filteredItems.map((item) => {
              const isSelected = selectedItem?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectItem && onSelectItem(item.id)}
                  className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                    isSelected
                      ? "border-[#0056b3] bg-blue-50/50 shadow-xs"
                      : "border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-12 h-12 rounded-lg bg-slate-100 relative overflow-hidden shrink-0 border border-slate-200">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-400">
                        No Img
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 truncate max-w-[130px]">
                        {item.category}
                      </span>
                      {item.badge && (
                        <span className="text-[9px] font-semibold text-[#ff6b00] truncate">
                          • {item.badge}
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-xs font-bold truncate ${
                        isSelected ? "text-[#0056b3]" : "text-slate-800"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">/{item.slug}</p>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "text-[#0056b3] translate-x-0.5" : "text-slate-300"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: Active Gallery Item Form Editor */}
      <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col">
        {selectedItem ? (
          <div className="space-y-6">
            {/* Header info bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-[#0056b3] font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                    SLUG: /gallery/{selectedItem.slug}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    {selectedItem.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900">{selectedItem.title}</h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleDeleteItem(selectedItem.id)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Item</span>
                </button>
              </div>
            </div>

            {/* Sub Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <button
                type="button"
                onClick={() => setActiveTab("basic")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "basic"
                    ? "bg-[#0056b3] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                1. Basic Info & Image
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("descriptions")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "descriptions"
                    ? "bg-[#0056b3] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                2. Descriptions & Context
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("highlights")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "highlights"
                    ? "bg-[#0056b3] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                3. Key Highlights ({selectedItem.keyHighlights?.length || 0})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("specs")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "specs"
                    ? "bg-[#0056b3] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                4. Specifications ({selectedItem.specifications?.length || 0})
              </button>
            </div>

            {/* TAB 1: BASIC INFO & IMAGE */}
            {activeTab === "basic" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Item Title
                    </label>
                    <input
                      type="text"
                      value={selectedItem.title}
                      onChange={(e) => handleUpdateCurrentItem({ title: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      URL Slug
                    </label>
                    <input
                      type="text"
                      value={selectedItem.slug}
                      onChange={(e) =>
                        handleUpdateCurrentItem({
                          slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Category
                    </label>
                    <select
                      value={selectedItem.category}
                      onChange={(e) =>
                        handleUpdateCurrentItem({
                          category: e.target.value as any,
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none bg-white"
                    >
                      {GALLERY_CATEGORIES.filter((c) => c !== "All Images").map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Badge Text (Card Tag)
                    </label>
                    <input
                      type="text"
                      value={selectedItem.badge}
                      onChange={(e) => handleUpdateCurrentItem({ badge: e.target.value })}
                      placeholder="e.g. Main Facility, 5-Axis CNC"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Grid Aspect Ratio
                    </label>
                    <select
                      value={selectedItem.aspectRatio || "landscape"}
                      onChange={(e) =>
                        handleUpdateCurrentItem({
                          aspectRatio: e.target.value as any,
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none bg-white"
                    >
                      <option value="landscape">Landscape (Standard 4:3)</option>
                      <option value="square">Square (1:1)</option>
                      <option value="portrait">Portrait (Tall 3:4)</option>
                      <option value="wide">Wide (16:9 Banner)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Image Alt Text (SEO)
                    </label>
                    <input
                      type="text"
                      value={selectedItem.alt}
                      onChange={(e) => handleUpdateCurrentItem({ alt: e.target.value })}
                      placeholder="Descriptive alt text for image indexing"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <ImagePicker
                    label="Item Photo / High-Res Image"
                    value={selectedItem.image}
                    onChange={(image) => handleUpdateCurrentItem({ image })}
                    helperText="Upload or enter crisp photo path. Used in masonry grid, lightbox preview, and full detail page."
                  />
                </div>
              </div>
            )}

            {/* TAB 2: DESCRIPTIONS & CONTEXT */}
            {activeTab === "descriptions" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Short Description (Grid Card & Lightbox Subtitle)
                  </label>
                  <textarea
                    rows={2}
                    value={selectedItem.shortDescription}
                    onChange={(e) =>
                      handleUpdateCurrentItem({ shortDescription: e.target.value })
                    }
                    placeholder="Short 1-2 sentence description shown on cards and hover states..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Narrative Description (Detail Page)
                  </label>
                  <textarea
                    rows={4}
                    value={selectedItem.fullDescription}
                    onChange={(e) =>
                      handleUpdateCurrentItem({ fullDescription: e.target.value })
                    }
                    placeholder="Comprehensive explanation of the tooling station, technical tolerances, and manufacturing role..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none leading-relaxed"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Application Context
                    </label>
                    <textarea
                      rows={2}
                      value={selectedItem.applicationContext || ""}
                      onChange={(e) =>
                        handleUpdateCurrentItem({ applicationContext: e.target.value })
                      }
                      placeholder="e.g. Central production hub serving FMCG and beverage packaging..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Related Page Link (Back Reference)
                    </label>
                    <input
                      type="text"
                      value={selectedItem.relatedCategoryLink || ""}
                      onChange={(e) =>
                        handleUpdateCurrentItem({ relatedCategoryLink: e.target.value })
                      }
                      placeholder="/infrastructure, /manufacturing, /products..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: KEY HIGHLIGHTS */}
            {activeTab === "highlights" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Key Highlights & Features
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Bullet points displayed on the dedicated item detail page.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddHighlight}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-[#0056b3] hover:bg-blue-100 rounded-lg text-xs font-bold transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Highlight</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {(selectedItem.keyHighlights || []).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold flex items-center justify-center shrink-0">
                        {hIdx + 1}
                      </span>
                      <input
                        type="text"
                        value={highlight}
                        onChange={(e) => handleUpdateHighlight(hIdx, e.target.value)}
                        placeholder="Highlight description..."
                        className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteHighlight(hIdx)}
                        className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: SPECIFICATIONS */}
            {activeTab === "specs" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Technical Specifications & Parameters
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Key/Value pair specifications table displayed on the detail page.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddSpec}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-[#0056b3] hover:bg-blue-100 rounded-lg text-xs font-bold transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Specification</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {(selectedItem.specifications || []).map((spec, sIdx) => (
                    <div key={sIdx} className="grid grid-cols-12 gap-2 items-center">
                      <input
                        type="text"
                        value={spec.label}
                        onChange={(e) => handleUpdateSpec(sIdx, "label", e.target.value)}
                        placeholder="Spec Label (e.g. Accuracy)"
                        className="col-span-5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none font-semibold text-slate-700"
                      />
                      <input
                        type="text"
                        value={spec.value}
                        onChange={(e) => handleUpdateSpec(sIdx, "value", e.target.value)}
                        placeholder="Value (e.g. ±0.002 mm)"
                        className="col-span-6 px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteSpec(sIdx)}
                        className="col-span-1 p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="p-12 text-center text-slate-400 text-sm">
            No item selected. Please choose an item from the list on the left or create a new one.
          </div>
        )}
      </div>
    </div>
  );
}
