"use client";

import React, { useState } from "react";
import {
  Tag,
  Plus,
  Trash2,
  FolderTree,
  ArrowUp,
  ArrowDown,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Hash,
} from "lucide-react";
import { IGalleryCategoryItem } from "@/data/defaultGallery";

interface GalleryCategoriesEditorProps {
  categories: IGalleryCategoryItem[];
  onChange: (categories: IGalleryCategoryItem[]) => void;
  galleryItemsCount?: Record<string, number>;
  error?: string | null;
}

export function GalleryCategoriesEditor({
  categories = [],
  onChange,
  galleryItemsCount = {},
  error,
}: GalleryCategoriesEditorProps) {
  const currentCategories = categories || [];
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const activeCategory = currentCategories[selectedIdx] || currentCategories[0];

  // Validation checks for active category
  const isNameEmpty = !activeCategory?.name || activeCategory.name.trim() === "";
  const isDuplicate = Boolean(
    activeCategory?.name &&
      currentCategories.some(
        (cat, idx) =>
          idx !== selectedIdx &&
          cat.name &&
          cat.name.trim().toLowerCase() === activeCategory.name.trim().toLowerCase()
      )
  );

  const showNameError =
    (isNameEmpty && (Boolean(error) || touched[activeCategory?.id || selectedIdx])) ||
    isDuplicate;

  const handleUpdate = (index: number, updatedItem: IGalleryCategoryItem) => {
    const updated = [...currentCategories];
    updated[index] = updatedItem;
    onChange(updated);
  };

  const handleAdd = () => {
    const newId = `gal-cat-${Date.now().toString().slice(-4)}`;
    const newCategory: IGalleryCategoryItem = {
      id: newId,
      name: "New Category",
      slug: `new-category-${Date.now().toString().slice(-4)}`,
      description: "Description for this gallery category showcase",
      badge: "Showcase",
      order: currentCategories.length + 1,
      isActive: true,
    };
    const nextCategories = [...currentCategories, newCategory];
    onChange(nextCategories);
    setSelectedIdx(nextCategories.length - 1);
  };

  const handleDelete = (index: number) => {
    const target = currentCategories[index];
    if (!target) return;

    if (
      confirm(
        `Are you sure you want to remove the category "${target.name}"? Gallery items mapped to this category may need re-categorization.`
      )
    ) {
      const updated = currentCategories.filter((_, i) => i !== index);
      onChange(updated);
      setSelectedIdx((prev) => Math.max(0, Math.min(prev, updated.length - 1)));
    }
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const updated = [...currentCategories];
    const temp = updated[index - 1];
    updated[index - 1] = updated[index];
    updated[index] = temp;
    // Update order numbers
    updated.forEach((c, idx) => {
      c.order = idx + 1;
    });
    onChange(updated);
    setSelectedIdx(index - 1);
  };

  const handleMoveDown = (index: number) => {
    if (index >= currentCategories.length - 1) return;
    const updated = [...currentCategories];
    const temp = updated[index + 1];
    updated[index + 1] = updated[index];
    updated[index] = temp;
    // Update order numbers
    updated.forEach((c, idx) => {
      c.order = idx + 1;
    });
    onChange(updated);
    setSelectedIdx(index + 1);
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
              <FolderTree className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Gallery &amp; Product Categories Manager
              </h2>
              <p className="text-xs text-slate-500">
                Add, edit, reorder, and remove product and facility categories used across gallery filter pills and media tags.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0056b3] text-white text-xs font-bold hover:bg-[#004494] shadow-sm transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Category</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
          <Sparkles className="w-4 h-4 text-[#ff6b00] shrink-0" />
          <span>
            Total configured categories: <strong>{currentCategories.length}</strong>. These categories appear as the interactive filter pills on the website Gallery page and in the admin item editor.
          </span>
        </div>
      </div>

      {/* Two Column Layout: Categories List & Active Category Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left List (4 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
          <div className="flex items-center justify-between px-2 pb-2 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Categories ({currentCategories.length})
            </span>
            <span className="text-[11px] text-slate-400">Order &amp; Status</span>
          </div>

          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {currentCategories.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-xs">
                No categories configured. Click &quot;Add New Category&quot; to begin.
              </div>
            ) : (
              currentCategories.map((cat, idx) => {
                const isSelected = selectedIdx === idx;
                const itemCount = galleryItemsCount[cat.name] || 0;

                return (
                  <div
                    key={cat.id || idx}
                    onClick={() => setSelectedIdx(idx)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? "border-[#0056b3] bg-blue-50/70 shadow-xs"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono shrink-0 ${
                          isSelected
                            ? "bg-[#0056b3] text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-xs font-bold truncate block ${
                              isSelected ? "text-[#0056b3]" : "text-slate-800"
                            }`}
                          >
                            {cat.name || "Untitled Category"}
                          </span>
                          {cat.isActive === false && (
                            <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-slate-200 text-slate-600 shrink-0">
                              Inactive
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 block truncate">
                          /{cat.slug}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <span className="text-[10px] font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">
                        {itemCount} items
                      </span>
                      {/* Up/Down buttons */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMoveUp(idx);
                        }}
                        disabled={idx === 0}
                        title="Move Up"
                        className="p-1 rounded hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-transparent text-slate-500 cursor-pointer"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMoveDown(idx);
                        }}
                        disabled={idx === currentCategories.length - 1}
                        title="Move Down"
                        className="p-1 rounded hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-transparent text-slate-500 cursor-pointer"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          {activeCategory ? (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-blue-50 text-[#0056b3] rounded-md border border-blue-200">
                    ID: {activeCategory.id}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">Edit Category</h3>
                </div>

                <button
                  type="button"
                  onClick={() => handleDelete(selectedIdx)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Category Name <span className="text-red-500">*</span>
                    </label>
                    {isDuplicate && (
                      <span className="text-xs font-semibold text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Category name already exists
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    value={activeCategory.name}
                    onChange={(e) => {
                      setTouched((prev) => ({
                        ...prev,
                        [activeCategory?.id || selectedIdx]: true,
                      }));
                      const newName = e.target.value;
                      handleUpdate(selectedIdx, {
                        ...activeCategory,
                        name: newName,
                        // auto-slug if slug matches old generated pattern
                        slug: activeCategory.slug.startsWith("new-category-")
                          ? newName
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, "-")
                              .replace(/^-|-$/g, "")
                          : activeCategory.slug,
                      });
                    }}
                    placeholder="e.g. Multi-Cavity Moulds"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-semibold focus:outline-none transition-colors ${
                      showNameError
                        ? "border-red-400 bg-red-50/30 focus:border-red-500"
                        : "border-slate-200 focus:border-[#0056b3]"
                    }`}
                  />
                  {showNameError && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {isDuplicate
                        ? "Category already exists. Category names must be unique."
                        : "Category name is required and cannot be blank."}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Category URL Slug <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={activeCategory.slug}
                    onChange={(e) =>
                      handleUpdate(selectedIdx, {
                        ...activeCategory,
                        slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
                      })
                    }
                    placeholder="e.g. multi-cavity-moulds"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-mono focus:border-[#0056b3] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Badge / Tag Label
                  </label>
                  <input
                    type="text"
                    value={activeCategory.badge || ""}
                    onChange={(e) =>
                      handleUpdate(selectedIdx, {
                        ...activeCategory,
                        badge: e.target.value,
                      })
                    }
                    placeholder="e.g. Precision Tooling"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Display Order Sequence
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={activeCategory.order ?? selectedIdx + 1}
                    onChange={(e) =>
                      handleUpdate(selectedIdx, {
                        ...activeCategory,
                        order: parseInt(e.target.value, 10) || selectedIdx + 1,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-mono focus:border-[#0056b3] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Category Status
                  </label>
                  <div className="flex items-center gap-3 pt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeCategory.isActive !== false}
                        onChange={(e) =>
                          handleUpdate(selectedIdx, {
                            ...activeCategory,
                            isActive: e.target.checked,
                          })
                        }
                        className="w-4 h-4 text-[#0056b3] rounded border-slate-300 focus:ring-0 cursor-pointer"
                      />
                      <span className="text-xs font-semibold text-slate-700">
                        Active &amp; Visible in Gallery Filters
                      </span>
                    </label>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Brief Category Description
                  </label>
                  <textarea
                    rows={2}
                    value={activeCategory.description || ""}
                    onChange={(e) =>
                      handleUpdate(selectedIdx, {
                        ...activeCategory,
                        description: e.target.value,
                      })
                    }
                    placeholder="Brief description of products or facilities in this category..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none resize-none"
                  />
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-start gap-2.5 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Changes to category names will immediately update the dropdown options when adding or editing items in <strong>Gallery Items &amp; Media Library</strong>.
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400 text-sm">
              Select a category on the left or click &quot;Add New Category&quot; to configure.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

