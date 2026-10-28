"use client";

import React, { useState } from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import {
  Package,
  Plus,
  Trash2,
  Search,
  Globe,
  Settings,
  Layers,
  Sparkles,
  ExternalLink,
  Code,
  FileText,
  ListPlus,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import {
  IProductItem,
  ICategoryItem,
  IProductSpecification,
  IProductFaq,
} from "@/models/ProductPageContent";

interface ProductListEditorProps {
  products: IProductItem[];
  categories: ICategoryItem[];
  onChange: (products: IProductItem[]) => void;
  selectedProductId?: string;
  onSelectProduct?: (productId: string) => void;
}

export function ProductListEditor({
  products,
  categories,
  onChange,
  selectedProductId,
  onSelectProduct,
}: ProductListEditorProps) {
  const [searchFilter, setSearchFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [activeSubTab, setActiveSubTab] = useState<
    "basic" | "descriptions" | "specs" | "features" | "gallery" | "seo" | "faqs"
  >("basic");

  // Determine current active product
  const activeProductIndex = products.findIndex(
    (p) => p.id === selectedProductId || p.slug === selectedProductId
  );
  const currentIdx = activeProductIndex !== -1 ? activeProductIndex : 0;
  const currentProduct = products[currentIdx] || products[0];

  const handleUpdateProduct = (field: keyof IProductItem, value: any) => {
    const updated = [...products];
    updated[currentIdx] = {
      ...updated[currentIdx],
      [field]: value,
    };
    onChange(updated);
  };

  const handleUpdateTechSpecs = (field: string, value: string) => {
    const updated = [...products];
    updated[currentIdx] = {
      ...updated[currentIdx],
      techSpecs: {
        ...(updated[currentIdx].techSpecs || {
          moldType: "",
          cavityDetails: "",
          material: "",
          machineCompatibility: "",
          application: "",
          customSpecs: [],
        }),
        [field]: value,
      },
    };
    onChange(updated);
  };

  const handleAddCustomTechSpec = () => {
    const existing = currentProduct.techSpecs?.customSpecs || [];
    const updated = [...products];
    updated[currentIdx] = {
      ...updated[currentIdx],
      techSpecs: {
        ...(updated[currentIdx].techSpecs || {
          moldType: "",
          cavityDetails: "",
          material: "",
          machineCompatibility: "",
          application: "",
        }),
        customSpecs: [...existing, { label: "New Tech Spec", value: "Value / Details" }],
      },
    };
    onChange(updated);
  };

  const handleUpdateCustomTechSpec = (idx: number, field: "label" | "value", val: string) => {
    const existing = [...(currentProduct.techSpecs?.customSpecs || [])];
    existing[idx] = { ...existing[idx], [field]: val };
    const updated = [...products];
    updated[currentIdx] = {
      ...updated[currentIdx],
      techSpecs: {
        ...updated[currentIdx].techSpecs,
        customSpecs: existing,
      },
    };
    onChange(updated);
  };

  const handleDeleteCustomTechSpec = (idx: number) => {
    const existing = (currentProduct.techSpecs?.customSpecs || []).filter((_, i) => i !== idx);
    const updated = [...products];
    updated[currentIdx] = {
      ...updated[currentIdx],
      techSpecs: {
        ...updated[currentIdx].techSpecs,
        customSpecs: existing,
      },
    };
    onChange(updated);
  };

  const handleUpdateSeo = (field: string, value: string) => {
    const updated = [...products];
    updated[currentIdx] = {
      ...updated[currentIdx],
      seo: {
        ...(updated[currentIdx].seo || {
          metaTitle: "",
          metaDescription: "",
          metaKeywords: "",
          canonicalUrl: "",
          schemaJson: "",
        }),
        [field]: value,
      },
    };
    onChange(updated);
  };

  // Specifications items
  const handleAddSpec = () => {
    const currentSpecs = currentProduct.specifications || [];
    handleUpdateProduct("specifications", [
      ...currentSpecs,
      { label: "New Spec", value: "Custom Value" },
    ]);
  };

  const handleUpdateSpec = (idx: number, field: "label" | "value", val: string) => {
    const currentSpecs = [...(currentProduct.specifications || [])];
    currentSpecs[idx] = { ...currentSpecs[idx], [field]: val };
    handleUpdateProduct("specifications", currentSpecs);
  };

  const handleDeleteSpec = (idx: number) => {
    const currentSpecs = (currentProduct.specifications || []).filter(
      (_, i) => i !== idx
    );
    handleUpdateProduct("specifications", currentSpecs);
  };

  // Features list
  const handleAddFeature = () => {
    const currentFeatures = currentProduct.features || [];
    handleUpdateProduct("features", [...currentFeatures, "New Key Feature"]);
  };

  const handleUpdateFeature = (idx: number, val: string) => {
    const currentFeatures = [...(currentProduct.features || [])];
    currentFeatures[idx] = val;
    handleUpdateProduct("features", currentFeatures);
  };

  const handleDeleteFeature = (idx: number) => {
    const currentFeatures = (currentProduct.features || []).filter(
      (_, i) => i !== idx
    );
    handleUpdateProduct("features", currentFeatures);
  };

  // Keywords list
  const handleKeywordsChange = (val: string) => {
    const keywords = val
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);
    handleUpdateProduct("keywords", keywords);
  };

  // Gallery images list
  const handleAddGalleryImage = (url: string) => {
    const gallery = currentProduct.galleryImages || [];
    if (!gallery.includes(url)) {
      handleUpdateProduct("galleryImages", [...gallery, url]);
    }
  };

  const handleDeleteGalleryImage = (idx: number) => {
    const gallery = (currentProduct.galleryImages || []).filter((_, i) => i !== idx);
    handleUpdateProduct("galleryImages", gallery);
  };

  // FAQs list handlers
  const handleAddFaq = () => {
    const currentFaqs = currentProduct.faqs || [];
    handleUpdateProduct("faqs", [
      ...currentFaqs,
      {
        question: "New Technical FAQ Question?",
        answer: "Detailed answer regarding tooling, steel grade, cycle time, or machine specs.",
      },
    ]);
  };

  const handleUpdateFaq = (idx: number, field: "question" | "answer", val: string) => {
    const currentFaqs = [...(currentProduct.faqs || [])];
    currentFaqs[idx] = { ...currentFaqs[idx], [field]: val };
    handleUpdateProduct("faqs", currentFaqs);
  };

  const handleDeleteFaq = (idx: number) => {
    const currentFaqs = (currentProduct.faqs || []).filter((_, i) => i !== idx);
    handleUpdateProduct("faqs", currentFaqs);
  };

  // Add new product
  const handleAddProduct = () => {
    const newSlug = `new-mold-product-${Date.now()}`;
    const newProd: IProductItem = {
      id: newSlug,
      slug: newSlug,
      name: "New Precision Mold Tooling",
      category: categories[0]?.name || "Preform & Jar Mold",
      categorySlug: categories[0]?.slug || "preform-jar",
      shortDescription: "High-precision mould engineered for continuous production.",
      overview: "Overview of mold tooling features, cavitation, and engineering quality.",
      fullDescription:
        "Comprehensive description detailing metallurgical tool steels, cycle time optimizations, and cooling layouts.",
      image: "/product/pet-preform-mold.png",
      galleryImages: [
        "/product/pet-preform-mold.png",
        "/product/high-cavitation-preform-mold.png",
      ],
      keywords: ["Mold", "Packaging", "Tooling", "High Speed"],
      application: "Packaging & Bottling",
      features: [
        "Precision hardened tool steel components",
        "Optimized cooling circuit geometry",
        "Balanced flow runner manifold",
      ],
      specifications: [
        { label: "Mold Type", value: "Injection Tooling" },
        { label: "Cavitation", value: "Custom Configurable" },
      ],
      techSpecs: {
        moldType: "High Precision Injection Mould",
        cavityDetails: "Custom (Single to Multi-Cavity)",
        material: "S136 Hardened Stainless Steel",
        machineCompatibility: "Universal Machine Interfacing",
        application: "Beverage & Packaging",
      },
      seo: {
        metaTitle: "New Precision Mold | Patel Mould Industries",
        metaDescription: "High quality custom molds manufactured by Patel Mould Industries.",
        metaKeywords: "Mold, Patel Mould Industries, Tooling",
        canonicalUrl: `https://www.patelmould.com/products/${newSlug}`,
        schemaJson: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "New Precision Mold",
            image: "https://www.patelmould.com/product/pet-preform-mold.png",
            brand: { "@type": "Brand", name: "Patel Mould Industries" },
          },
          null,
          2
        ),
      },
      order: products.length + 1,
    };

    const updated = [...products, newProd];
    onChange(updated);
    if (onSelectProduct) onSelectProduct(newProd.id);
  };

  // Delete product
  const handleDeleteProduct = (prodId: string, name: string) => {
    if (products.length <= 1) {
      alert("At least one product is required.");
      return;
    }
    if (confirm(`Are you sure you want to delete product "${name}"?`)) {
      const updated = products.filter((p) => p.id !== prodId && p.slug !== prodId);
      onChange(updated);
      if (onSelectProduct && updated[0]) {
        onSelectProduct(updated[0].id);
      }
    }
  };

  // Filtered list of products for left sidebar
  const filteredProducts = products.filter((prod) => {
    if (categoryFilter !== "all" && prod.categorySlug !== categoryFilter) {
      return false;
    }
    if (searchFilter.trim() !== "") {
      const q = searchFilter.toLowerCase();
      const matchName = prod.name.toLowerCase().includes(q);
      const matchCat = prod.category.toLowerCase().includes(q);
      const matchSlug = prod.slug.toLowerCase().includes(q);
      return matchName || matchCat || matchSlug;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0056b3] text-xs font-bold uppercase tracking-wider mb-2">
            <Package className="w-3.5 h-3.5" />
            <span>Product Catalog Dynamic Manager</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Products & SEO Catalog ({products.length} Products)
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl">
            Full management of all 9 products across Preform & Jar, ISBM, and EBM moulds with specifications, technical tables, and complete SEO parameters.
          </p>
        </div>

        <button
          onClick={handleAddProduct}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0056b3] text-white text-xs font-bold hover:bg-blue-700 transition shadow-sm cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Main Grid: Left Products List + Right Tabbed Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Product Selector with Search & Filter */}
        <div className="lg:col-span-4 space-y-3">
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0056b3]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <button
                type="button"
                onClick={() => setCategoryFilter("all")}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition ${
                  categoryFilter === "all"
                    ? "bg-[#0056b3] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All ({products.length})
              </button>
              {categories.map((c) => {
                const count = products.filter((p) => p.categorySlug === c.slug).length;
                return (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => setCategoryFilter(c.slug)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition ${
                      categoryFilter === c.slug
                        ? "bg-[#0056b3] text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {c.slug} ({count})
                  </button>
                );
              })}
            </div>

            {/* Products List */}
            <div className="space-y-2 max-h-[620px] overflow-y-auto pr-1">
              {filteredProducts.map((prod) => {
                const isSelected =
                  prod.id === currentProduct?.id || prod.slug === currentProduct?.slug;

                return (
                  <div
                    key={prod.id || prod.slug}
                    onClick={() => onSelectProduct && onSelectProduct(prod.id || prod.slug)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-blue-50/80 border-[#0056b3] shadow-xs"
                        : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Product Thumbnail */}
                      <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={prod.image || "/product/pet-preform-mold.png"}
                          alt={prod.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold text-slate-900 truncate">
                          {prod.name}
                        </div>
                        <div className="text-[10px] text-[#0056b3] font-semibold truncate">
                          {prod.category}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
                      )}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteProduct(prod.id || prod.slug, prod.name);
                        }}
                        className="p-1 text-slate-300 hover:text-red-500 rounded transition"
                        title="Delete product"
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

        {/* Right Column: Tabbed Product Editor */}
        <div className="lg:col-span-8">
          {currentProduct ? (
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-6">
              {/* Product Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" />
                    <h3 className="text-base font-bold text-slate-900">
                      {currentProduct.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    URL: /products/{currentProduct.slug}
                  </p>
                </div>

                <a
                  href={`http://localhost:3000/products/${currentProduct.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#0056b3]" />
                  <span>Preview Page</span>
                </a>
              </div>

              {/* Sub Navigation Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
                {[
                  { id: "basic", label: "1. Basic & Images", icon: Package },
                  { id: "descriptions", label: "2. Descriptions & Overview", icon: FileText },
                  { id: "specs", label: "3. Specs & Tech Table", icon: Settings },
                  { id: "features", label: "4. Features & Keywords", icon: ListPlus },
                  { id: "gallery", label: "5. Gallery Images", icon: Layers },
                  { id: "seo", label: "6. SEO & Schema", icon: Globe },
                  { id: "faqs", label: "7. FAQs", icon: HelpCircle },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeSubTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveSubTab(tab.id as any)}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                        isActive
                          ? "bg-[#0056b3] text-white shadow-xs"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* SUB TAB 1: BASIC INFO & PRIMARY IMAGE */}
              {activeSubTab === "basic" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Product Name
                      </label>
                      <input
                        type="text"
                        value={currentProduct.name || ""}
                        onChange={(e) => handleUpdateProduct("name", e.target.value)}
                        placeholder="e.g. PET Preform Mold"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#0056b3]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        URL Slug
                      </label>
                      <input
                        type="text"
                        value={currentProduct.slug || ""}
                        onChange={(e) => handleUpdateProduct("slug", e.target.value)}
                        placeholder="e.g. pet-preform-mold"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-900 focus:outline-none focus:border-[#0056b3]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Parent Category
                      </label>
                      <select
                        value={currentProduct.categorySlug || ""}
                        onChange={(e) => {
                          const chosen = categories.find((c) => c.slug === e.target.value);
                          if (chosen) {
                            handleUpdateProduct("categorySlug", chosen.slug);
                            handleUpdateProduct("category", chosen.name);
                          }
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#0056b3] bg-white"
                      >
                        {categories.map((c) => (
                          <option key={c.slug} value={c.slug}>
                            {c.name} ({c.slug})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Primary Application Field
                      </label>
                      <input
                        type="text"
                        value={currentProduct.application || ""}
                        onChange={(e) => handleUpdateProduct("application", e.target.value)}
                        placeholder="e.g. Beverage & Packaging"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#0056b3]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <ImagePicker
                      label="Main Showcase Image"
                      value={currentProduct.image || "/product/pet-preform-mold.png"}
                      onChange={(url) => handleUpdateProduct("image", url)}
                      helperText="Images located in /product/ on website"
                    />
                  </div>
                </div>
              )}

              {/* SUB TAB 2: DESCRIPTIONS & OVERVIEW */}
              {activeSubTab === "descriptions" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Short Description (Card Subtitle)
                    </label>
                    <textarea
                      rows={2}
                      value={currentProduct.shortDescription || ""}
                      onChange={(e) => handleUpdateProduct("shortDescription", e.target.value)}
                      placeholder="Brief teaser for product cards..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Product Overview (Highlighted White Box)
                    </label>
                    <textarea
                      rows={3}
                      value={currentProduct.overview || ""}
                      onChange={(e) => handleUpdateProduct("overview", e.target.value)}
                      placeholder="Overview block on product detail page..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Engineering Description
                    </label>
                    <textarea
                      rows={4}
                      value={currentProduct.fullDescription || ""}
                      onChange={(e) => handleUpdateProduct("fullDescription", e.target.value)}
                      placeholder="Full engineering description with material specs, cooling circuits, and simulation details..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>
                </div>
              )}

              {/* SUB TAB 3: SPECS & TECHNICAL TABLE */}
              {activeSubTab === "specs" && (
                <div className="space-y-6">
                  {/* Detailed Tech Specs Table */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Settings className="w-4 h-4 text-[#0056b3]" />
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                          Technical Specifications Table
                        </h4>
                      </div>

                      {/* Add Button as requested by user */}
                      <button
                        type="button"
                        onClick={handleAddCustomTechSpec}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-bold hover:bg-blue-700 transition shadow-xs cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Tech Spec</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Mould Type
                        </label>
                        <input
                          type="text"
                          value={currentProduct.techSpecs?.moldType || ""}
                          onChange={(e) => handleUpdateTechSpecs("moldType", e.target.value)}
                          placeholder="e.g. PET Preform Injection Mould"
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-900 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Cavity Details / Range
                        </label>
                        <input
                          type="text"
                          value={currentProduct.techSpecs?.cavityDetails || ""}
                          onChange={(e) => handleUpdateTechSpecs("cavityDetails", e.target.value)}
                          placeholder="e.g. Custom Configurable (8 to 96 Cavities)"
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-900 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Core & Cavity Material
                        </label>
                        <input
                          type="text"
                          value={currentProduct.techSpecs?.material || ""}
                          onChange={(e) => handleUpdateTechSpecs("material", e.target.value)}
                          placeholder="e.g. S136 Stainless Steel / Hardened Tool Steel"
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-900 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Machine Compatibility
                        </label>
                        <input
                          type="text"
                          value={currentProduct.techSpecs?.machineCompatibility || ""}
                          onChange={(e) => handleUpdateTechSpecs("machineCompatibility", e.target.value)}
                          placeholder="e.g. Husky, Netstal, KraussMaffei & standard machines"
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-900 bg-white"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Application Field / End-Use
                        </label>
                        <input
                          type="text"
                          value={currentProduct.techSpecs?.application || ""}
                          onChange={(e) => handleUpdateTechSpecs("application", e.target.value)}
                          placeholder="e.g. Mineral Water, Carbonated Soft Drinks & Juice Packaging"
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-900 bg-white"
                        />
                      </div>
                    </div>

                    {/* Dynamic Custom Technical Specs Rows */}
                    {currentProduct.techSpecs?.customSpecs && currentProduct.techSpecs.customSpecs.length > 0 && (
                      <div className="pt-3 border-t border-slate-200 space-y-2.5">
                        <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          Custom Table Specifications ({currentProduct.techSpecs.customSpecs.length})
                        </span>
                        <div className="space-y-2">
                          {currentProduct.techSpecs.customSpecs.map((spec, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-3">
                              <input
                                type="text"
                                value={spec.label}
                                onChange={(e) => handleUpdateCustomTechSpec(sIdx, "label", e.target.value)}
                                placeholder="Spec Label (e.g. Cooling Cycle)"
                                className="w-1/3 px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-900 bg-white"
                              />
                              <input
                                type="text"
                                value={spec.value}
                                onChange={(e) => handleUpdateCustomTechSpec(sIdx, "value", e.target.value)}
                                placeholder="Spec Value (e.g. 12 - 15 Seconds)"
                                className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-900 bg-white"
                              />
                              <button
                                type="button"
                                onClick={() => handleDeleteCustomTechSpec(sIdx)}
                                className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition"
                                title="Delete row"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* General Specifications List */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Key Specifications ({currentProduct.specifications?.length || 0})
                      </h4>
                      <button
                        type="button"
                        onClick={handleAddSpec}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 text-[#0056b3] text-xs font-bold hover:bg-blue-100 transition"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Specification</span>
                      </button>
                    </div>

                    <div className="space-y-2">
                      {(currentProduct.specifications || []).map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <input
                            type="text"
                            value={spec.label}
                            onChange={(e) => handleUpdateSpec(idx, "label", e.target.value)}
                            placeholder="Label (e.g. Production)"
                            className="w-1/3 px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-900"
                          />
                          <input
                            type="text"
                            value={spec.value}
                            onChange={(e) => handleUpdateSpec(idx, "value", e.target.value)}
                            placeholder="Value (e.g. High Volume)"
                            className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-900"
                          />
                          <button
                            type="button"
                            onClick={() => handleDeleteSpec(idx)}
                            className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SUB TAB 4: FEATURES & KEYWORDS */}
              {activeSubTab === "features" && (
                <div className="space-y-6">
                  {/* Features List */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Key Performance Features ({currentProduct.features?.length || 0})
                      </h4>
                      <button
                        type="button"
                        onClick={handleAddFeature}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 text-[#0056b3] text-xs font-bold hover:bg-blue-100 transition"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Feature</span>
                      </button>
                    </div>

                    <div className="space-y-2">
                      {(currentProduct.features || []).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0056b3] flex items-center justify-center text-[10px] font-bold shrink-0">
                            {idx + 1}
                          </span>
                          <input
                            type="text"
                            value={feat}
                            onChange={(e) => handleUpdateFeature(idx, e.target.value)}
                            placeholder="Enter feature highlight..."
                            className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-900"
                          />
                          <button
                            type="button"
                            onClick={() => handleDeleteFeature(idx)}
                            className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Keywords Input */}
                  <div className="pt-2 border-t border-slate-100">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Product Search Keywords (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={(currentProduct.keywords || []).join(", ")}
                      onChange={(e) => handleKeywordsChange(e.target.value)}
                      placeholder="e.g. PET, Preform, Packaging, High Volume, Bottling"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0056b3]"
                    />
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {(currentProduct.keywords || []).map((k, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold"
                        >
                          #{k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SUB TAB 5: GALLERY IMAGES */}
              {activeSubTab === "gallery" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Gallery Images ({currentProduct.galleryImages?.length || 0})
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Multi-angle product photographs shown in the product detail gallery slider.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {(currentProduct.galleryImages || []).map((imgUrl, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-2 relative group"
                      >
                        <div className="h-32 rounded-lg bg-white border border-slate-200 overflow-hidden flex items-center justify-center">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={imgUrl}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <input
                          type="text"
                          value={imgUrl}
                          onChange={(e) => {
                            const currentG = [...(currentProduct.galleryImages || [])];
                            currentG[idx] = e.target.value;
                            handleUpdateProduct("galleryImages", currentG);
                          }}
                          className="w-full px-2.5 py-1.5 rounded-md border border-slate-200 text-[11px] font-mono text-slate-700 bg-white"
                        />
                        <button
                          type="button"
                          onClick={() => handleDeleteGalleryImage(idx)}
                          className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition shadow-sm"
                          title="Remove image"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add New Gallery Image via ImagePicker */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mt-4">
                    <ImagePicker
                      label="Upload or Pick Additional Gallery Image"
                      value=""
                      onChange={(url) => handleAddGalleryImage(url)}
                      helperText="Pick or upload image to append to gallery"
                    />
                  </div>
                </div>
              )}

              {/* SUB TAB 6: SEO METADATA & SCHEMA.ORG */}
              {activeSubTab === "seo" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-[#0056b3] font-medium flex items-center gap-2">
                    <Globe className="w-4 h-4 shrink-0 text-[#ff6b00]" />
                    <span>
                      Configure Google indexing, meta tags, and structured JSON-LD Schema markup for this product.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Meta Title Tag
                    </label>
                    <input
                      type="text"
                      value={currentProduct.seo?.metaTitle || ""}
                      onChange={(e) => handleUpdateSeo("metaTitle", e.target.value)}
                      placeholder="e.g. PET Preform Mold | High-Speed Multi-Cavity Moulds | Patel Mould Industries"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#0056b3]"
                    />
                    <div className="text-[10px] text-slate-400 mt-1 flex justify-between">
                      <span>Recommended: 50-60 characters</span>
                      <span>{(currentProduct.seo?.metaTitle || "").length} chars</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Meta Description Tag
                    </label>
                    <textarea
                      rows={2}
                      value={currentProduct.seo?.metaDescription || ""}
                      onChange={(e) => handleUpdateSeo("metaDescription", e.target.value)}
                      placeholder="e.g. Engineered PET preform moulds with balanced hot runner systems and 5M+ shot lifespan."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0056b3]"
                    />
                    <div className="text-[10px] text-slate-400 mt-1 flex justify-between">
                      <span>Recommended: 140-160 characters</span>
                      <span>{(currentProduct.seo?.metaDescription || "").length} chars</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Meta Keywords
                      </label>
                      <input
                        type="text"
                        value={currentProduct.seo?.metaKeywords || ""}
                        onChange={(e) => handleUpdateSeo("metaKeywords", e.target.value)}
                        placeholder="e.g. PET Preform Mold, Injection Mold, Patel Mould"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0056b3]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Canonical URL Link
                      </label>
                      <input
                        type="text"
                        value={currentProduct.seo?.canonicalUrl || ""}
                        onChange={(e) => handleUpdateSeo("canonicalUrl", e.target.value)}
                        placeholder="https://www.patelmould.com/products/pet-preform-mold"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-900 focus:outline-none focus:border-[#0056b3]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        JSON-LD Structured Data (Schema.org)
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          const autoSchema = {
                            "@context": "https://schema.org",
                            "@type": "Product",
                            name: currentProduct.name,
                            image: `https://www.patelmould.com${currentProduct.image}`,
                            description: currentProduct.shortDescription || currentProduct.overview,
                            brand: {
                              "@type": "Brand",
                              name: "Patel Mould Industries",
                            },
                            category: currentProduct.category,
                          };
                          handleUpdateSeo("schemaJson", JSON.stringify(autoSchema, null, 2));
                        }}
                        className="text-[11px] font-bold text-[#0056b3] hover:underline"
                      >
                        Auto-Generate Schema
                      </button>
                    </div>
                    <textarea
                      rows={7}
                      value={currentProduct.seo?.schemaJson || ""}
                      onChange={(e) => handleUpdateSeo("schemaJson", e.target.value)}
                      placeholder='{\n  "@context": "https://schema.org",\n  "@type": "Product",\n  "name": "..." \n}'
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-900 bg-slate-50 focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>
                </div>
              )}

              {/* SUB TAB 7: PRODUCT-SPECIFIC FAQS */}
              {activeSubTab === "faqs" && (
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-blue-50/70 border border-blue-200">
                    <div className="flex items-center gap-2.5">
                      <HelpCircle className="w-5 h-5 text-[#0056b3] shrink-0" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                          Product Technical FAQs ({currentProduct.faqs?.length || 0})
                        </h4>
                        <p className="text-[11px] text-slate-600">
                          Frequently asked questions displayed in the accordion on this product&apos;s detail page.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleAddFaq}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0056b3] text-white text-xs font-bold hover:bg-blue-700 transition shadow-xs cursor-pointer shrink-0"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add FAQ</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {(currentProduct.faqs || []).map((faq, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3 hover:border-slate-300 transition"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 text-[#0056b3] flex items-center justify-center text-xs font-bold shrink-0">
                            Q{fIdx + 1}
                          </span>
                          <input
                            type="text"
                            value={faq.question}
                            onChange={(e) => handleUpdateFaq(fIdx, "question", e.target.value)}
                            placeholder="Enter technical question..."
                            className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-900 bg-white focus:outline-none focus:border-[#0056b3]"
                          />
                          <button
                            type="button"
                            onClick={() => handleDeleteFaq(fIdx)}
                            className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition shrink-0"
                            title="Delete FAQ"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="pl-9">
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Answer
                          </label>
                          <textarea
                            rows={3}
                            value={faq.answer}
                            onChange={(e) => handleUpdateFaq(fIdx, "answer", e.target.value)}
                            placeholder="Enter detailed technical answer..."
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:border-[#0056b3]"
                          />
                        </div>
                      </div>
                    ))}

                    {(!currentProduct.faqs || currentProduct.faqs.length === 0) && (
                      <div className="p-8 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-white">
                        <HelpCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                        <p className="text-xs font-bold text-slate-600">No FAQs added for this product yet.</p>
                        <p className="text-[11px] text-slate-400 mt-1">Click &quot;Add FAQ&quot; above to create technical Q&amp;As for customers.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 bg-white rounded-2xl border border-slate-200 text-center text-slate-400">
              Select a product from the list to view and edit its details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
