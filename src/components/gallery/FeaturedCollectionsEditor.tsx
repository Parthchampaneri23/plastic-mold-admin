"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { Sparkles, Tag, Plus, Trash2 } from "lucide-react";
import { FeaturedCollectionItem, GALLERY_CATEGORIES, GalleryCategory } from "@/data/defaultGallery";

interface FeaturedCollectionsEditorProps {
  collections: FeaturedCollectionItem[];
  onChange: (collections: FeaturedCollectionItem[]) => void;
}

export function FeaturedCollectionsEditor({
  collections = [],
  onChange,
}: FeaturedCollectionsEditorProps) {
  const currentCollections = collections || [];

  const handleUpdate = (index: number, updatedItem: FeaturedCollectionItem) => {
    const updated = [...currentCollections];
    updated[index] = updatedItem;
    onChange(updated);
  };

  const handleAdd = () => {
    const newItem: FeaturedCollectionItem = {
      title: "New Featured Collection",
      tagline: "Highlight Subtitle",
      description: "Brief summary describing this highlighted collection of gallery photos.",
      image: "/infrastructure/facility-hero.jpg",
      category: "Manufacturing Facility",
      badge: "Featured Highlight",
    };
    onChange([...currentCollections, newItem]);
  };

  const handleDelete = (index: number) => {
    if (confirm("Are you sure you want to remove this featured collection card?")) {
      const updated = currentCollections.filter((_, i) => i !== index);
      onChange(updated);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ff6b00]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Featured Gallery Collections</h2>
              <p className="text-xs text-slate-500">
                Manage the 3 curated showcase highlight cards presented right below the hero banner.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0056b3] hover:bg-[#004494] text-white rounded-xl text-xs font-bold transition-all shadow-sm self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Add Featured Card</span>
          </button>
        </div>

        {currentCollections.length === 0 ? (
          <div className="p-8 text-center border-2 border-dashed border-slate-200 rounded-xl text-slate-500 text-sm">
            No featured collections defined. Click "Add Featured Card" to create one.
          </div>
        ) : (
          <div className="space-y-6">
            {currentCollections.map((col, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4 hover:border-slate-300 transition-all"
              >
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0056b3] text-white text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-bold text-slate-800">
                      {col.title || `Collection Card #${idx + 1}`}
                    </span>
                    {col.badge && (
                      <span className="px-2 py-0.5 rounded-md bg-blue-100 text-[#0056b3] text-[11px] font-semibold">
                        {col.badge}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDelete(idx)}
                    className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete card"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Collection Title
                    </label>
                    <input
                      type="text"
                      value={col.title}
                      onChange={(e) => handleUpdate(idx, { ...col, title: e.target.value })}
                      placeholder="e.g. Inside Our Facility"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Target Filter Category (Click Action)
                    </label>
                    <select
                      value={col.category}
                      onChange={(e) =>
                        handleUpdate(idx, { ...col, category: e.target.value as GalleryCategory })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none bg-white"
                    >
                      {GALLERY_CATEGORIES.filter((c) => c !== "All Images").map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Badge Text (Optional)
                    </label>
                    <input
                      type="text"
                      value={col.badge}
                      onChange={(e) => handleUpdate(idx, { ...col, badge: e.target.value })}
                      placeholder="e.g. 25,000+ Sq. Ft. Facility"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none bg-white"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Tagline / Subtitle
                    </label>
                    <input
                      type="text"
                      value={col.tagline}
                      onChange={(e) => handleUpdate(idx, { ...col, tagline: e.target.value })}
                      placeholder="e.g. World-Class Toolroom Infrastructure"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none bg-white"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Brief Description
                    </label>
                    <textarea
                      rows={2}
                      value={col.description}
                      onChange={(e) => handleUpdate(idx, { ...col, description: e.target.value })}
                      placeholder="Short summary of this facility or machinery collection..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none bg-white"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <ImagePicker
                      label="Collection Cover Image"
                      value={col.image}
                      onChange={(image) => handleUpdate(idx, { ...col, image })}
                      helperText="Crisp photo representing this collection."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

