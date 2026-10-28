"use client";

import React, { useState } from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { FolderTree, Sparkles, Layers, CheckCircle2, Plus, Trash2, Edit3, Save } from "lucide-react";
import { ICategoryItem } from "@/models/ProductPageContent";

interface ProductCategoriesEditorProps {
  categories: ICategoryItem[];
  onChange: (categories: ICategoryItem[]) => void;
}

export function ProductCategoriesEditor({ categories, onChange }: ProductCategoriesEditorProps) {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const currentCategory = categories[selectedIdx] || categories[0];

  const handleUpdateCurrent = (field: keyof ICategoryItem, value: any) => {
    const updated = [...categories];
    updated[selectedIdx] = {
      ...updated[selectedIdx],
      [field]: value,
    };
    onChange(updated);
  };

  const handleAddCategory = () => {
    const newCat: ICategoryItem = {
      id: `cat-${Date.now()}`,
      slug: `new-category-${categories.length + 1}`,
      name: "New Category",
      label: "NEW CATEGORY",
      description: "Description for this mold category.",
      image: "/product/pet-preform-mold.png",
    };
    const updated = [...categories, newCat];
    onChange(updated);
    setSelectedIdx(updated.length - 1);
  };

  const handleDeleteCategory = (idx: number) => {
    if (categories.length <= 1) {
      alert("At least one product category is required.");
      return;
    }
    if (confirm(`Are you sure you want to delete category "${categories[idx]?.name}"?`)) {
      const updated = categories.filter((_, i) => i !== idx);
      onChange(updated);
      setSelectedIdx(Math.max(0, idx - 1));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0056b3] text-xs font-bold uppercase tracking-wider mb-2">
            <FolderTree className="w-3.5 h-3.5" />
            <span>Product Page Architecture</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Mold Categories Manager
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl">
            Configure the 3 primary core mold categories used across the catalog tabs, filters, and header navigation dropdown.
          </p>
        </div>

        <button
          onClick={handleAddCategory}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0056b3] text-white text-xs font-bold hover:bg-blue-700 transition shadow-sm cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Category</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Category List Tabs */}
        <div className="lg:col-span-4 space-y-3">
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Core Categories ({categories.length})
            </h3>
            <div className="space-y-2">
              {categories.map((cat, idx) => {
                const isActive = idx === selectedIdx;
                return (
                  <div
                    key={cat.id || idx}
                    onClick={() => setSelectedIdx(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? "bg-blue-50/70 border-[#0056b3] shadow-xs"
                        : "bg-slate-50/50 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          isActive
                            ? "bg-[#0056b3] text-white shadow-xs"
                            : "bg-white border border-slate-200 text-slate-700"
                        }`}
                      >
                        0{idx + 1}
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold text-slate-900 truncate">
                          {cat.name}
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium truncate">
                          slug: /{cat.slug}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#ff6b00] mr-1" />
                      )}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteCategory(idx);
                        }}
                        className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition"
                        title="Delete category"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Category Details Editor */}
        <div className="lg:col-span-8">
          {currentCategory ? (
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" />
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    Editing Category: {currentCategory.name}
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-slate-400">
                  ID: {currentCategory.id}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Category Name (Display)
                  </label>
                  <input
                    type="text"
                    value={currentCategory.name || ""}
                    onChange={(e) => handleUpdateCurrent("name", e.target.value)}
                    placeholder="e.g. Preform & Jar Mold"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Category Label (Uppercase Banner)
                  </label>
                  <input
                    type="text"
                    value={currentCategory.label || ""}
                    onChange={(e) => handleUpdateCurrent("label", e.target.value)}
                    placeholder="e.g. PREFORM & JAR MOULDS"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    URL Slug Filter
                  </label>
                  <input
                    type="text"
                    value={currentCategory.slug || ""}
                    onChange={(e) => handleUpdateCurrent("slug", e.target.value)}
                    placeholder="e.g. preform-jar"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-900 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Category Unique ID
                  </label>
                  <input
                    type="text"
                    value={currentCategory.id || ""}
                    onChange={(e) => handleUpdateCurrent("id", e.target.value)}
                    placeholder="e.g. preform-jar"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-900 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Category Overview Description
                </label>
                <textarea
                  rows={3}
                  value={currentCategory.description || ""}
                  onChange={(e) => handleUpdateCurrent("description", e.target.value)}
                  placeholder="Comprehensive description of this mold category and industrial applications..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                />
              </div>

              {/* Category Showcase Image */}
              <div className="pt-2">
                <ImagePicker
                  label="Category Representative Image"
                  value={currentCategory.image || "/product/pet-preform-mold.png"}
                  onChange={(url) => handleUpdateCurrent("image", url)}
                  helperText="Choose image from /product/ or upload a high-resolution preview"
                />
              </div>
            </div>
          ) : (
            <div className="p-8 bg-white rounded-2xl border border-slate-200 text-center text-slate-400">
              Select or add a category to configure its properties.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
