"use client";

import React from "react";
import { Tag, Plus, Trash2, Layers } from "lucide-react";
import { BlogCategoryFilterItem } from "@/data/defaultBlogs";

interface BlogCategoriesEditorProps {
  categories: BlogCategoryFilterItem[];
  onChange: (categories: BlogCategoryFilterItem[]) => void;
}

export function BlogCategoriesEditor({
  categories = [],
  onChange,
}: BlogCategoriesEditorProps) {
  const currentCategories = categories || [];

  const handleUpdate = (index: number, updatedItem: BlogCategoryFilterItem) => {
    const updated = [...currentCategories];
    updated[index] = updatedItem;
    onChange(updated);
  };

  const handleAdd = () => {
    const newCategory: BlogCategoryFilterItem = {
      name: "New Category",
      slug: `category-${Date.now().toString().slice(-4)}`,
    };
    onChange([...currentCategories, newCategory]);
  };

  const handleDelete = (index: number) => {
    if (confirm("Are you sure you want to remove this category filter?")) {
      const updated = currentCategories.filter((_, i) => i !== index);
      onChange(updated);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Blog Filter Categories</h2>
              <p className="text-xs text-slate-500">
                Manage the category pills displayed at the top of the blog listings page.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0056b3] hover:bg-[#004494] text-white rounded-xl text-xs font-bold transition-all shadow-sm self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Add Category</span>
          </button>
        </div>

        <div className="space-y-3">
          {currentCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row items-center gap-3 hover:border-slate-300 transition-all"
            >
              <span className="w-6 h-6 rounded-full bg-[#0056b3] text-white text-xs font-bold flex items-center justify-center shrink-0">
                {idx + 1}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 w-full">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={cat.name}
                    onChange={(e) => handleUpdate(idx, { ...cat, name: e.target.value })}
                    placeholder="e.g. Engineering & Simulation"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none bg-white font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Category Slug
                  </label>
                  <input
                    type="text"
                    value={cat.slug}
                    onChange={(e) =>
                      handleUpdate(idx, {
                        ...cat,
                        slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
                      })
                    }
                    placeholder="e.g. engineering, materials"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none bg-white font-mono"
                  />
                </div>
              </div>

              {cat.slug !== "all" && (
                <button
                  type="button"
                  onClick={() => handleDelete(idx)}
                  className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                  title="Delete category"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

