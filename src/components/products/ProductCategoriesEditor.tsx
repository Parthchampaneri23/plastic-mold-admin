"use client";

import React, { useState, useRef, useEffect } from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { FolderTree, Sparkles, Layers, CheckCircle2, Plus, Trash2, Edit3, Save, AlertCircle, ArrowUp, ArrowDown, Globe } from "lucide-react";
import { ICategoryItem } from "@/models/ProductPageContent";

interface ProductCategoriesEditorProps {
  categories: ICategoryItem[];
  onChange: (categories: ICategoryItem[]) => void;
  error?: string | null;
}

export function ProductCategoriesEditor({ categories, onChange, error }: ProductCategoriesEditorProps) {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const currentCategory = categories[selectedIdx] || categories[0];
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const nameInputRef = useRef<HTMLInputElement>(null);

  // If there's an error passed from parent or category name is empty, focus field
  useEffect(() => {
    if (error && (!currentCategory?.name || currentCategory.name.trim() === "")) {
      nameInputRef.current?.focus();
      nameInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [error, currentCategory]);

  const isNameEmpty = !currentCategory?.name || currentCategory.name.trim() === "";
  
  // Check if current category name is duplicate of any other category
  const isDuplicate = Boolean(
    currentCategory?.name &&
    categories.some(
      (cat, idx) =>
        idx !== selectedIdx &&
        cat.name &&
        cat.name.trim().toLowerCase() === currentCategory.name.trim().toLowerCase()
    )
  );

  const showNameError =
    (isNameEmpty && (Boolean(error) || touched[currentCategory?.id || selectedIdx])) ||
    isDuplicate;

  const handleUpdateCurrent = (field: keyof ICategoryItem, value: any) => {
    setTouched((prev) => ({ ...prev, [currentCategory?.id || selectedIdx]: true }));
    const updated = [...categories];
    updated[selectedIdx] = {
      ...updated[selectedIdx],
      [field]: value,
    };
    onChange(updated);
  };

  const handleUpdateSeo = (field: string, value: string) => {
    const updated = [...categories];
    const currentSeo = updated[selectedIdx]?.seo || {
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
      canonicalUrl: "",
      schemaJson: "",
    };
    updated[selectedIdx] = {
      ...updated[selectedIdx],
      seo: {
        ...currentSeo,
        [field]: value,
      },
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
      isActive: true,
    };
    const updated = [...categories, newCat];
    onChange(updated);
    setSelectedIdx(updated.length - 1);
  };

  const handleMoveCategory = (idx: number, direction: "up" | "down", e: React.MouseEvent) => {
    e.stopPropagation();
    const targetIdx = direction === "up" ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= categories.length) return;

    const updated = [...categories];
    const temp = updated[idx];
    updated[idx] = updated[targetIdx];
    updated[targetIdx] = temp;

    // Update order indices
    const ordered = updated.map((c, i) => ({ ...c, order: i + 1 }));
    onChange(ordered);
    setSelectedIdx(targetIdx);
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
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="text-xs font-bold text-slate-900 truncate">
                            {cat.name}
                          </span>
                          {cat.isActive === false && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-200 text-slate-600">
                              Inactive
                            </span>
                          )}
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
                      <div className="flex items-center gap-0.5">
                        <button
                          type="button"
                          disabled={idx === 0}
                          onClick={(e) => handleMoveCategory(idx, "up", e)}
                          className="p-1 text-slate-400 hover:text-[#0056b3] disabled:opacity-20 disabled:hover:text-slate-400 rounded hover:bg-blue-50 transition"
                          title="Move category up"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          disabled={idx === categories.length - 1}
                          onClick={(e) => handleMoveCategory(idx, "down", e)}
                          className="p-1 text-slate-400 hover:text-[#0056b3] disabled:opacity-20 disabled:hover:text-slate-400 rounded hover:bg-blue-50 transition"
                          title="Move category down"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteCategory(idx);
                        }}
                        className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition ml-0.5"
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

              {/* Status Toggle Switch (Active/Inactive) */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Category Visibility Status
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        currentCategory.isActive !== false
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-slate-200 text-slate-700 border border-slate-300"
                      }`}
                    >
                      {currentCategory.isActive !== false ? "Active / Enabled" : "Inactive / Disabled"}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    When inactive, this category is hidden from the website navigation and catalog filters without deleting its data.
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentCategory.isActive !== false}
                    onChange={(e) => handleUpdateCurrent("isActive", e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0056b3]"></div>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="category-name-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Category Name (Display) <span className="text-red-500">*</span>
                    </label>
                    {showNameError && (
                      <span className="text-[11px] font-bold text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-red-500" />
                        <span>
                          {isDuplicate
                            ? "Category already exists."
                            : "Category Name is required"}
                        </span>
                      </span>
                    )}
                  </div>
                  <input
                    ref={nameInputRef}
                    id="category-name-input"
                    type="text"
                    value={currentCategory.name || ""}
                    onBlur={() => setTouched((prev) => ({ ...prev, [currentCategory?.id || selectedIdx]: true }))}
                    onChange={(e) => handleUpdateCurrent("name", e.target.value)}
                    placeholder="e.g. Preform & Jar Mold"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-semibold text-slate-900 transition-all focus:outline-none ${
                      showNameError
                        ? "border-red-500 bg-red-50/50 focus:border-red-600 focus:ring-2 focus:ring-red-500/20"
                        : "border-slate-200 focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                    }`}
                  />
                  {showNameError && (
                    <p className="mt-1 text-[11px] text-red-600 font-medium">
                      {isDuplicate
                        ? "Category already exists. Category names must be unique."
                        : "Please enter a valid name for this category before saving."}
                    </p>
                  )}
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

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Display Sequence / Order
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      value={currentCategory.order !== undefined ? currentCategory.order : selectedIdx + 1}
                      onChange={(e) => {
                        const newOrder = parseInt(e.target.value, 10);
                        if (!isNaN(newOrder)) {
                          handleUpdateCurrent("order", newOrder);
                        }
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                    />
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        disabled={selectedIdx === 0}
                        onClick={(e) => handleMoveCategory(selectedIdx, "up", e)}
                        className="px-2.5 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 rounded-lg text-xs font-bold text-slate-700 flex items-center gap-1 transition"
                        title="Move Up in Sequence"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                        <span>Up</span>
                      </button>
                      <button
                        type="button"
                        disabled={selectedIdx === categories.length - 1}
                        onClick={(e) => handleMoveCategory(selectedIdx, "down", e)}
                        className="px-2.5 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 rounded-lg text-xs font-bold text-slate-700 flex items-center gap-1 transition"
                        title="Move Down in Sequence"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                        <span>Down</span>
                      </button>
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Determines position (1, 2, 3...) across website navigation and catalog filters.
                  </p>
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

              {/* SEO Information Management Section */}
              <div className="pt-4 border-t border-slate-200 space-y-4">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#0056b3]" />
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    SEO Metadata & Search Engine Configurations
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Meta Title (Browser Tab & Search Results)
                    </label>
                    <input
                      type="text"
                      value={currentCategory.seo?.metaTitle || ""}
                      onChange={(e) => handleUpdateSeo("metaTitle", e.target.value)}
                      placeholder={`e.g. ${currentCategory.name || "Category"} Mould Tooling | Patel Mould Industries`}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Canonical URL
                    </label>
                    <input
                      type="text"
                      value={currentCategory.seo?.canonicalUrl || ""}
                      onChange={(e) => handleUpdateSeo("canonicalUrl", e.target.value)}
                      placeholder={`e.g. https://www.patelmould.com/products?category=${currentCategory.slug || "preform-jar"}`}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-900 focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Meta Description (Search Snippet)
                    </label>
                    <textarea
                      rows={2}
                      value={currentCategory.seo?.metaDescription || ""}
                      onChange={(e) => handleUpdateSeo("metaDescription", e.target.value)}
                      placeholder="Concise overview of this mould category for search engine rich snippets and indexing..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Meta Keywords (Comma separated)
                    </label>
                    <input
                      type="text"
                      value={currentCategory.seo?.metaKeywords || ""}
                      onChange={(e) => handleUpdateSeo("metaKeywords", e.target.value)}
                      placeholder="e.g. Preform Mould, PET Jar Mould, High Cavitation Tooling, Patel Mould"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Structured Schema JSON (JSON-LD)
                    </label>
                    <textarea
                      rows={3}
                      value={currentCategory.seo?.schemaJson || ""}
                      onChange={(e) => handleUpdateSeo("schemaJson", e.target.value)}
                      placeholder={`{\n  "@context": "https://schema.org",\n  "@type": "ProductCollection",\n  "name": "${currentCategory.name}"\n}`}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-900 focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>
                </div>
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
