"use client";

import React, { useState } from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import {
  Factory,
  Plus,
  Trash2,
  Search,
  CheckCircle2,
  HelpCircle,
  Layers,
  ChevronRight,
  ExternalLink,
  BookOpen,
  Boxes,
  AlertCircle,
  X,
  Check,
} from "lucide-react";
import {
  IIndustryItem,
  IIndustryApplicationDetail,
  IIndustryKeyRequirement,
  IIndustryFaq,
} from "@/models/IndustryPageContent";
import { DEFAULT_PRODUCTS } from "@/data/defaultProducts";

interface IndustryListEditorProps {
  industries: IIndustryItem[];
  availableProducts?: Array<{ id: string; slug: string; name: string; category?: string; image?: string }>;
  onChange: (industries: IIndustryItem[]) => void;
  selectedIndustryId?: string;
  onSelectIndustry?: (industryId: string) => void;
  error?: string | null;
}

export function IndustryListEditor({
  industries,
  availableProducts = [],
  onChange,
  selectedIndustryId,
  onSelectIndustry,
  error,
}: IndustryListEditorProps) {
  const [searchFilter, setSearchFilter] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Merge available products from catalog or fallback defaults
  const productOptions = React.useMemo(() => {
    if (availableProducts && availableProducts.length > 0) {
      return availableProducts;
    }
    return DEFAULT_PRODUCTS.map((p) => ({
      id: p.id,
      slug: p.slug,
      name: p.name,
      category: p.category,
      image: p.image,
    }));
  }, [availableProducts]);
  const [activeSubTab, setActiveSubTab] = useState<
    "basic" | "overview" | "requirements" | "applications" | "products" | "faqs"
  >("basic");

  // Determine current active industry
  const activeIndustryIndex = industries.findIndex(
    (ind) => ind.id === selectedIndustryId || ind.slug === selectedIndustryId
  );
  const currentIdx = activeIndustryIndex !== -1 ? activeIndustryIndex : 0;
  const currentIndustry = industries[currentIdx] || industries[0];

  // Validation checks for active industry
  const isNameEmpty = !currentIndustry?.name || currentIndustry.name.trim() === "";
  const isSlugEmpty = !currentIndustry?.slug || currentIndustry.slug.trim() === "";
  const isShortDescEmpty = !currentIndustry?.shortDescription || currentIndustry.shortDescription.trim() === "";
  const isImageEmpty = !currentIndustry?.image || currentIndustry.image.trim() === "";

  const isDuplicateName = Boolean(
    currentIndustry?.name &&
      industries.some(
        (ind, idx) =>
          idx !== currentIdx &&
          ind.name &&
          ind.name.trim().toLowerCase() === currentIndustry.name.trim().toLowerCase()
      )
  );

  const isDuplicateSlug = Boolean(
    currentIndustry?.slug &&
      industries.some(
        (ind, idx) =>
          idx !== currentIdx &&
          ind.slug &&
          ind.slug.trim().toLowerCase() === currentIndustry.slug.trim().toLowerCase()
      )
  );

  const isTouched = Boolean(touched[currentIndustry?.id || currentIdx]);

  const handleUpdateIndustry = (field: keyof IIndustryItem, value: any) => {
    setTouched((prev) => ({
      ...prev,
      [currentIndustry?.id || currentIdx]: true,
    }));
    const updated = [...industries];
    updated[currentIdx] = {
      ...updated[currentIdx],
      [field]: value,
    };
    onChange(updated);
  };

  const handleAddNewIndustry = () => {
    const newId = `industry-${Date.now()}`;
    const newSlug = `new-industry-${industries.length + 1}`;
    const newInd: IIndustryItem = {
      id: newId,
      slug: newSlug,
      name: "New Industry Application",
      badge: "Custom Tooling",
      shortDescription: "Custom precision mould engineering solutions for specialized industrial sectors.",
      heroHeadline: "Specialized Mould Engineering",
      heroSubheadline: "Engineered for high-efficiency cycle times and precision compliance.",
      overviewParagraphs: [
        "Patel Mould Industries engineers high-cavitation precision moulds tailored for industrial production lines.",
        "Our moulds incorporate balanced runner manifolds, conformal cooling, and certified tool steels.",
      ],
      image: "/industries/packaging-clean.jpg",
      keyRequirements: [
        { label: "Precision Tolerances", description: "Sub-micron repeatability across all cavities." },
        { label: "Optimal Cooling", description: "Conformal cooling channels ensuring fast cycle times." },
      ],
      applications: [
        {
          title: "Custom Container Molding",
          description: "High-cavitation container tooling built for 24/7 continuous operation.",
          typicalProducts: ["Standard Bottle 500ml", "Storage Canister"],
        },
      ],
      relatedProductSlugs: ["pet-preform-mold", "isbm-bottle-mold"],
      faqs: [
        {
          question: "What tool steels are used for this industry?",
          answer: "We select certified AISI S136, DIN 1.2316, or P20 based on polymer chemistry and cycle requirements.",
        },
      ],
    };

    const nextList = [...industries, newInd];
    onChange(nextList);
    if (onSelectIndustry) {
      onSelectIndustry(newInd.id);
    }
  };

  const handleDeleteIndustry = (indexToDelete: number) => {
    if (industries.length <= 1) {
      alert("At least one industry sector must remain.");
      return;
    }
    const indName = industries[indexToDelete]?.name || "this industry";
    if (confirm(`Are you sure you want to delete "${indName}"?`)) {
      const filtered = industries.filter((_, idx) => idx !== indexToDelete);
      onChange(filtered);
      if (onSelectIndustry && filtered.length > 0) {
        onSelectIndustry(filtered[0].id);
      }
    }
  };

  // Requirement CRUD
  const handleAddRequirement = () => {
    const list = [...(currentIndustry.keyRequirements || [])];
    list.push({ label: "New Requirement", description: "Describe technical parameter..." });
    handleUpdateIndustry("keyRequirements", list);
  };

  const handleUpdateRequirement = (index: number, field: keyof IIndustryKeyRequirement, val: string) => {
    const list = [...(currentIndustry.keyRequirements || [])];
    list[index] = { ...list[index], [field]: val };
    handleUpdateIndustry("keyRequirements", list);
  };

  const handleDeleteRequirement = (index: number) => {
    const list = (currentIndustry.keyRequirements || []).filter((_, i) => i !== index);
    handleUpdateIndustry("keyRequirements", list);
  };

  // Applications CRUD
  const handleAddApplication = () => {
    const list = [...(currentIndustry.applications || [])];
    list.push({
      title: "New Application Title",
      description: "Application description...",
      typicalProducts: ["Product Item 1", "Product Item 2"],
    });
    handleUpdateIndustry("applications", list);
  };

  const handleUpdateApplication = (index: number, field: keyof IIndustryApplicationDetail, val: any) => {
    const list = [...(currentIndustry.applications || [])];
    list[index] = { ...list[index], [field]: val };
    handleUpdateIndustry("applications", list);
  };

  const handleDeleteApplication = (index: number) => {
    const list = (currentIndustry.applications || []).filter((_, i) => i !== index);
    handleUpdateIndustry("applications", list);
  };

  // Overview Paragraphs CRUD
  const handleAddParagraph = () => {
    const list = [...(currentIndustry.overviewParagraphs || [])];
    list.push("New overview paragraph text explaining manufacturing capabilities...");
    handleUpdateIndustry("overviewParagraphs", list);
  };

  const handleUpdateParagraph = (index: number, val: string) => {
    const list = [...(currentIndustry.overviewParagraphs || [])];
    list[index] = val;
    handleUpdateIndustry("overviewParagraphs", list);
  };

  const handleDeleteParagraph = (index: number) => {
    const list = (currentIndustry.overviewParagraphs || []).filter((_, i) => i !== index);
    handleUpdateIndustry("overviewParagraphs", list);
  };

  // FAQs CRUD
  const handleAddFaq = () => {
    const list = [...(currentIndustry.faqs || [])];
    list.push({
      question: "New Frequently Asked Question?",
      answer: "Technical answer explaining tooling engineering and support...",
    });
    handleUpdateIndustry("faqs", list);
  };

  const handleUpdateFaq = (index: number, field: keyof IIndustryFaq, val: string) => {
    const list = [...(currentIndustry.faqs || [])];
    list[index] = { ...list[index], [field]: val };
    handleUpdateIndustry("faqs", list);
  };

  const handleDeleteFaq = (index: number) => {
    const list = (currentIndustry.faqs || []).filter((_, i) => i !== index);
    handleUpdateIndustry("faqs", list);
  };

  // Related products helper
  const handleRelatedProductSlugsChange = (text: string) => {
    const slugs = text
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    handleUpdateIndustry("relatedProductSlugs", slugs);
  };

  const filteredIndustries = industries.filter((ind) =>
    ind.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    ind.slug.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* LEFT COLUMN: INDUSTRY SECTORS LIST (4 COLS) */}
      <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sticky top-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <div className="flex items-center gap-2">
            <Factory className="w-5 h-5 text-[#0056b3]" />
            <h2 className="text-sm font-bold text-slate-900">Industry Sectors</h2>
          </div>
          <button
            onClick={handleAddNewIndustry}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search sectors..."
            className="w-full pl-9 pr-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
          />
        </div>

        {/* Industry List */}
        <div className="space-y-1.5 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
          {filteredIndustries.map((ind, idx) => {
            const originalIndex = industries.findIndex((x) => x.id === ind.id);
            const isSelected = originalIndex === currentIdx;

            return (
              <div
                key={ind.id || ind.slug}
                onClick={() => onSelectIndustry && onSelectIndustry(ind.id || ind.slug)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? "bg-blue-50/70 border-[#0056b3] shadow-xs"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                      isSelected
                        ? "bg-[#0056b3] text-white"
                        : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p
                        className={`text-xs font-bold truncate ${
                          isSelected ? "text-[#0056b3]" : "text-slate-800"
                        }`}
                      >
                        {ind.name}
                      </p>
                      {ind.isActive === false && (
                        <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-slate-200 text-slate-600 shrink-0">
                          Inactive
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono truncate">
                      /{ind.slug}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteIndustry(originalIndex);
                    }}
                    title="Delete Sector"
                    className="p-1 rounded text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-[#0056b3] translate-x-0.5" : "text-slate-300"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT COLUMN: ACTIVE INDUSTRY EDITOR (8 COLS) */}
      <div className="lg:col-span-8 space-y-5">
        {currentIndustry ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#ff6b00] font-bold bg-[#ff6b00]/10 px-2 py-0.5 rounded-full border border-[#ff6b00]/20">
                  Slug: /{currentIndustry.slug}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {currentIndustry.name}
                </h3>
              </div>

              {/* Enable / Disable (Active / Inactive) Toggle Switch */}
              <label className="flex items-center gap-2 cursor-pointer bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-xl transition-colors shrink-0">
                <input
                  type="checkbox"
                  checked={currentIndustry.isActive !== false}
                  onChange={(e) =>
                    handleUpdateIndustry("isActive", e.target.checked)
                  }
                  className="w-4 h-4 text-[#0056b3] rounded border-slate-300 focus:ring-0 cursor-pointer"
                />
                <span className="text-xs font-bold text-slate-700 select-none">
                  {currentIndustry.isActive !== false ? "Active (Published)" : "Disabled (Hidden)"}
                </span>
              </label>
            </div>

            {/* Sub Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-6">
              {[
                { id: "basic", label: "1. Basic & Card Info" },
                { id: "overview", label: "2. Detail Overview (Story)" },
                { id: "requirements", label: `3. Requirements (${currentIndustry.keyRequirements?.length || 0})` },
                { id: "applications", label: `4. Applications (${currentIndustry.applications?.length || 0})` },
                { id: "products", label: "5. Related Products" },
                { id: "faqs", label: `6. FAQs (${currentIndustry.faqs?.length || 0})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeSubTab === tab.id
                      ? "bg-[#0056b3] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* SUB TAB 1: BASIC & CARD */}
            {activeSubTab === "basic" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Industry Sector Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={currentIndustry.name || ""}
                      onChange={(e) => handleUpdateIndustry("name", e.target.value)}
                      placeholder="e.g. Food & Beverage"
                      className={`w-full px-3.5 py-2 rounded-xl border text-sm focus:outline-none transition-colors ${
                        (isNameEmpty && (Boolean(error) || isTouched)) || isDuplicateName
                          ? "border-red-400 bg-red-50/30 focus:border-red-500"
                          : "border-slate-200 focus:border-[#0056b3]"
                      }`}
                    />
                    {((isNameEmpty && (Boolean(error) || isTouched)) || isDuplicateName) && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {isDuplicateName
                          ? "Industry name already exists. Names must be unique."
                          : "Industry Sector Name is required and cannot be blank."}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      URL Slug (Unique path) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={currentIndustry.slug || ""}
                      onChange={(e) =>
                        handleUpdateIndustry(
                          "slug",
                          e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-")
                        )
                      }
                      placeholder="e.g. food-beverage"
                      className={`w-full px-3.5 py-2 rounded-xl border text-sm font-mono focus:outline-none transition-colors ${
                        (isSlugEmpty && (Boolean(error) || isTouched)) || isDuplicateSlug
                          ? "border-red-400 bg-red-50/30 focus:border-red-500"
                          : "border-slate-200 focus:border-[#0056b3]"
                      }`}
                    />
                    {((isSlugEmpty && (Boolean(error) || isTouched)) || isDuplicateSlug) && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {isDuplicateSlug
                          ? "URL slug already exists. Slugs must be unique."
                          : "URL Slug is required and cannot be blank."}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Badge Text (Card & Detail)
                    </label>
                    <input
                      type="text"
                      value={currentIndustry.badge || ""}
                      onChange={(e) => handleUpdateIndustry("badge", e.target.value)}
                      placeholder="e.g. Food-Grade Precision"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Detail Page Hero Headline
                    </label>
                    <input
                      type="text"
                      value={currentIndustry.heroHeadline || ""}
                      onChange={(e) => handleUpdateIndustry("heroHeadline", e.target.value)}
                      placeholder="e.g. Food & Beverage Packaging Moulds"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Detail Hero Subheadline / Tagline
                    </label>
                    <textarea
                      rows={2}
                      value={currentIndustry.heroSubheadline || ""}
                      onChange={(e) => handleUpdateIndustry("heroSubheadline", e.target.value)}
                      placeholder="Engineered for high-speed cycle times, uniform bottle wall distribution..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Card Short Description (Home & Listing) <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={2}
                      value={currentIndustry.shortDescription || ""}
                      onChange={(e) => handleUpdateIndustry("shortDescription", e.target.value)}
                      placeholder="High-cavitation moulds for PET bottles, mineral water packaging..."
                      className={`w-full px-3.5 py-2 rounded-xl border text-sm focus:outline-none transition-colors ${
                        isShortDescEmpty && (Boolean(error) || isTouched)
                          ? "border-red-400 bg-red-50/30 focus:border-red-500"
                          : "border-slate-200 focus:border-[#0056b3]"
                      }`}
                    />
                    {isShortDescEmpty && (Boolean(error) || isTouched) && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        Card Short Description is required and cannot be blank.
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Sector Publishing Status
                    </label>
                    <select
                      value={currentIndustry.isActive !== false ? "active" : "inactive"}
                      onChange={(e) =>
                        handleUpdateIndustry("isActive", e.target.value === "active")
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none bg-white font-medium"
                    >
                      <option value="active">Active (Visible across Website & Industries Grid)</option>
                      <option value="inactive">Disabled / Inactive (Hidden from Public)</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <ImagePicker
                      label="Sector Image (Card & Banner Background) *"
                      value={currentIndustry.image || ""}
                      onChange={(val) => handleUpdateIndustry("image", val)}
                      helperText="Upload or enter sector image path (e.g. /industries/packaging-clean.jpg)"
                    />
                    {isImageEmpty && (Boolean(error) || isTouched) && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        Sector Image is required and cannot be blank.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* SUB TAB 2: OVERVIEW PARAGRAPHS */}
            {activeSubTab === "overview" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    Paragraphs displayed in the left column under &quot;Precision Moulding Standards for {currentIndustry.name}&quot;.
                  </p>
                  <button
                    onClick={handleAddParagraph}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Paragraph</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {(currentIndustry.overviewParagraphs || []).map((para, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2 relative group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-500 uppercase">
                          Paragraph #{pIdx + 1}
                        </span>
                        <button
                          onClick={() => handleDeleteParagraph(pIdx)}
                          className="text-slate-400 hover:text-red-500 transition-colors p-1"
                          title="Delete paragraph"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <textarea
                        rows={3}
                        value={para}
                        onChange={(e) => handleUpdateParagraph(pIdx, e.target.value)}
                        placeholder="Write detailed industry tooling insights..."
                        className="w-full px-3 py-2 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUB TAB 3: KEY REQUIREMENTS */}
            {activeSubTab === "requirements" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    The checklist cards displayed in the right column under &quot;Key Manufacturing Requirements&quot;.
                  </p>
                  <button
                    onClick={handleAddRequirement}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Requirement</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {(currentIndustry.keyRequirements || []).map((req, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 relative group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0056b3]" />
                          Requirement #{rIdx + 1}
                        </span>
                        <button
                          onClick={() => handleDeleteRequirement(rIdx)}
                          className="text-slate-400 hover:text-red-500 transition-colors p-1"
                          title="Delete requirement"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="md:col-span-1">
                          <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                            Label / Title
                          </label>
                          <input
                            type="text"
                            value={req.label || ""}
                            onChange={(e) => handleUpdateRequirement(rIdx, "label", e.target.value)}
                            placeholder="e.g. Uniform Wall Thickness"
                            className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                            Description
                          </label>
                          <input
                            type="text"
                            value={req.description || ""}
                            onChange={(e) => handleUpdateRequirement(rIdx, "description", e.target.value)}
                            placeholder="e.g. Balanced preform stretch ratios preventing thin spots..."
                            className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUB TAB 4: APPLICATIONS & USE CASES */}
            {activeSubTab === "applications" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    Editorial cards under &quot;Typical Packaging Applications &amp; Use Cases&quot; (Numbered 01, 02, 03).
                  </p>
                  <button
                    onClick={handleAddApplication}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Application</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {(currentIndustry.applications || []).map((app, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 relative group"
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                        <span className="text-xs font-bold text-[#0056b3] font-mono">
                          Application #0{aIdx + 1}
                        </span>
                        <button
                          onClick={() => handleDeleteApplication(aIdx)}
                          className="text-slate-400 hover:text-red-500 transition-colors p-1"
                          title="Delete application"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                            Application Card Title
                          </label>
                          <input
                            type="text"
                            value={app.title || ""}
                            onChange={(e) => handleUpdateApplication(aIdx, "title", e.target.value)}
                            placeholder="e.g. Packaged Drinking Water Bottles"
                            className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                            Description
                          </label>
                          <textarea
                            rows={2}
                            value={app.description || ""}
                            onChange={(e) => handleUpdateApplication(aIdx, "description", e.target.value)}
                            placeholder="Lightweight, high-strength PET preforms engineered for..."
                            className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                            Typical Articles / Products (Comma separated)
                          </label>
                          <input
                            type="text"
                            value={(app.typicalProducts || []).join(", ")}
                            onChange={(e) => {
                              const tags = e.target.value
                                .split(",")
                                .map((t) => t.trim())
                                .filter(Boolean);
                              handleUpdateApplication(aIdx, "typicalProducts", tags);
                            }}
                            placeholder="200ml to 2L Bottles, CSD Bottles with PCO 1881, Alkaline Water Flasks"
                            className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUB TAB 5: RELATED PRODUCTS */}
            {activeSubTab === "products" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-[#0056b3] flex items-start gap-2.5">
                  <Boxes className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Connect Catalog Products:</span> Select products from the searchable dropdown list below. The system automatically maps and stores the corresponding product slugs/IDs.
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Assigned Related Products ({currentIndustry.relatedProductSlugs?.length || 0})
                  </label>

                  {/* Selected Products Tags */}
                  <div className="flex flex-wrap gap-2 p-3 min-h-[50px] bg-slate-50 border border-slate-200 rounded-xl items-center">
                    {(currentIndustry.relatedProductSlugs || []).length === 0 ? (
                      <span className="text-xs text-slate-400">
                        No related products selected yet. Search and select from the dropdown below.
                      </span>
                    ) : (
                      (currentIndustry.relatedProductSlugs || []).map((slug) => {
                        const matchedProduct = productOptions.find(
                          (p) => p.slug === slug || p.id === slug
                        );
                        return (
                          <span
                            key={slug}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3]" />
                            <span>{matchedProduct ? matchedProduct.name : slug}</span>
                            <span className="text-[10px] font-mono text-slate-400 font-normal">
                              ({slug})
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                const nextSlugs = (currentIndustry.relatedProductSlugs || []).filter(
                                  (s) => s !== slug
                                );
                                handleUpdateIndustry("relatedProductSlugs", nextSlugs);
                              }}
                              className="text-slate-400 hover:text-red-600 p-0.5 rounded cursor-pointer transition-colors"
                              title="Remove Product"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </span>
                        );
                      })
                    )}
                  </div>

                  {/* Searchable Product Dropdown / Multi-Select Picker */}
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-600 mb-1">
                      Add Product from Catalog:
                    </label>
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={productSearch}
                        onFocus={() => setProductDropdownOpen(true)}
                        onChange={(e) => {
                          setProductSearch(e.target.value);
                          setProductDropdownOpen(true);
                        }}
                        placeholder="Search product by name or category (e.g. PET Preform, ISBM, EBM)..."
                        className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#0056b3] bg-white shadow-xs"
                      />
                      {productSearch && (
                        <button
                          type="button"
                          onClick={() => setProductSearch("")}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Dropdown Options Menu */}
                    {productDropdownOpen && (
                      <div className="absolute z-30 left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-lg p-1.5 space-y-1">
                        <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                          <span>Select Product to Map</span>
                          <button
                            type="button"
                            onClick={() => setProductDropdownOpen(false)}
                            className="text-xs text-[#0056b3] hover:underline"
                          >
                            Done
                          </button>
                        </div>

                        {productOptions
                          .filter((p) => {
                            if (!productSearch.trim()) return true;
                            const query = productSearch.toLowerCase();
                            return (
                              p.name.toLowerCase().includes(query) ||
                              p.slug.toLowerCase().includes(query) ||
                              (p.category && p.category.toLowerCase().includes(query))
                            );
                          })
                          .map((prod) => {
                            const isAssigned = (currentIndustry.relatedProductSlugs || []).includes(
                              prod.slug
                            );

                            return (
                              <div
                                key={prod.slug}
                                onClick={() => {
                                  const currentList = currentIndustry.relatedProductSlugs || [];
                                  if (isAssigned) {
                                    handleUpdateIndustry(
                                      "relatedProductSlugs",
                                      currentList.filter((s) => s !== prod.slug)
                                    );
                                  } else {
                                    handleUpdateIndustry("relatedProductSlugs", [
                                      ...currentList,
                                      prod.slug,
                                    ]);
                                  }
                                }}
                                className={`p-2 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                                  isAssigned
                                    ? "bg-blue-50 text-[#0056b3] font-semibold"
                                    : "hover:bg-slate-50 text-slate-800"
                                }`}
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div
                                    className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                      isAssigned
                                        ? "bg-[#0056b3] border-[#0056b3] text-white"
                                        : "border-slate-300 bg-white"
                                    }`}
                                  >
                                    {isAssigned && <Check className="w-3 h-3" />}
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-xs font-bold truncate">{prod.name}</div>
                                    <div className="text-[10px] text-slate-400 font-mono truncate">
                                      {prod.category} • /{prod.slug}
                                    </div>
                                  </div>
                                </div>

                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 shrink-0">
                                  {isAssigned ? "Assigned" : "+ Add"}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* SUB TAB 6: FAQS */}
            {activeSubTab === "faqs" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    Industry Sector-specific FAQs rendered in the accordion FAQSection.
                  </p>
                  <button
                    onClick={handleAddFaq}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Sector FAQ</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {(currentIndustry.faqs || []).map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2.5 relative group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                          <HelpCircle className="w-3.5 h-3.5 text-[#ff6b00]" />
                          Question #{fIdx + 1}
                        </span>
                        <button
                          onClick={() => handleDeleteFaq(fIdx)}
                          className="text-slate-400 hover:text-red-500 transition-colors p-1"
                          title="Delete FAQ"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div>
                        <input
                          type="text"
                          value={faq.question || ""}
                          onChange={(e) => handleUpdateFaq(fIdx, "question", e.target.value)}
                          placeholder="Frequently Asked Question..."
                          className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0056b3]"
                        />
                      </div>

                      <div>
                        <textarea
                          rows={2}
                          value={faq.answer || ""}
                          onChange={(e) => handleUpdateFaq(fIdx, "answer", e.target.value)}
                          placeholder="Detailed engineering answer..."
                          className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0056b3]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
