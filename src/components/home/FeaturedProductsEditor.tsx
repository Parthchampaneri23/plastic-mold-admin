"use client";

import React from "react";
import { ImagePicker } from "@/components/ui/ImagePicker";
import { PackageCheck, Plus, Trash2, ArrowRight } from "lucide-react";

interface FeaturedProductsEditorProps {
  data: any;
  setData: (data: any) => void;
}

export default function FeaturedProductsEditor({ data, setData }: FeaturedProductsEditorProps) {
  return (
            <div className="space-y-6">
              {/* Header Box */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 uppercase">
                      Home Page &bull; Section 9
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Category Flagship Showcase &bull; Total: {data?.featuredProducts?.length || 0} Products
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
                    <PackageCheck className="w-5 h-5 text-[#ff6b00]" />
                    Featured Mold Products (Flagship Tooling Series)
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Manage the 3 flagship category tooling products (PET Preform Mold, ISBM Bottle Mold, EBM Bottle Mold) with live card preview and details links.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const count = (data?.featuredProducts?.length || 0) + 1;
                    const newProd = {
                      id: `feat-prod-${count}`,
                      slug: `mold-product-${count}`,
                      name: "Custom Precision Mold",
                      category: "Custom Tooling",
                      image: "/product/pet-preform-mold.png",
                      tag: "High Performance",
                      shortDesc: "High-precision production tooling engineered for maximum cycle speed and long tool lifespan.",
                      link: "/products",
                      specifications: [
                        { label: "Mold Type", value: "High-Cavitation" },
                        { label: "Application", value: "Industrial Packaging" },
                      ],
                    };
                    setData({
                      ...data,
                      featuredProducts: [...(data.featuredProducts || []), newProd],
                    });
                  }}
                  className="px-4 py-2 rounded-xl bg-[#0056b3] hover:bg-[#003d80] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-[#0056b3]/20 transition-all cursor-pointer self-start sm:self-auto shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add More Product</span>
                </button>
              </div>

              {/* Main Section Header Settings (Matches Screenshot) */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" />
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Header & Split Description (As Shown on Website)
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Eyebrow Badge Text
                    </label>
                    <input
                      type="text"
                      value={data?.featuredProductsSection?.eyebrowBadge || "CATEGORY FLAGSHIP SHOWCASE"}
                      onChange={(e) => {
                        const fps = { ...(data.featuredProductsSection || {}) };
                        fps.eyebrowBadge = e.target.value;
                        setData({ ...data, featuredProductsSection: fps });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      placeholder="CATEGORY FLAGSHIP SHOWCASE"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Headline (Line 1 - Dark)
                    </label>
                    <input
                      type="text"
                      value={data?.featuredProductsSection?.headlineMain || "Featured Mold Products."}
                      onChange={(e) => {
                        const fps = { ...(data.featuredProductsSection || {}) };
                        fps.headlineMain = e.target.value;
                        setData({ ...data, featuredProductsSection: fps });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      placeholder="Featured Mold Products."
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Headline Highlight (Line 2 - Blue)
                    </label>
                    <input
                      type="text"
                      value={data?.featuredProductsSection?.headlineHighlight || "Flagship Tooling Series."}
                      onChange={(e) => {
                        const fps = { ...(data.featuredProductsSection || {}) };
                        fps.headlineHighlight = e.target.value;
                        setData({ ...data, featuredProductsSection: fps });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0056b3] focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      placeholder="Flagship Tooling Series."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Section Description (Right Column with Vertical Accent Bar)
                  </label>
                  <textarea
                    rows={2}
                    value={
                      data?.featuredProductsSection?.description ||
                      "Explore flagship high-performance tooling solutions engineered for each of our 3 core mold categories with guaranteed 5M+ cycle tool life."
                    }
                    onChange={(e) => {
                      const fps = { ...(data.featuredProductsSection || {}) };
                      fps.description = e.target.value;
                      setData({ ...data, featuredProductsSection: fps });
                    }}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                    placeholder="Enter section description..."
                  />
                </div>
              </div>

              {/* Product Cards Grid Matching Exact Website Design in Screenshot */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data?.featuredProducts?.map((product: any, index: number) => (
                  <div
                    key={product.id || index}
                    className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-[#0056b3] transition-all duration-300 flex flex-col justify-between space-y-4 group"
                  >
                    {/* Header Row: Product Label and Delete Button */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Product #{index + 1}: {product.name}
                      </span>
                      {data.featuredProducts.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            if (confirm(`Delete "${product.name}"?`)) {
                              const updated = data.featuredProducts.filter((_: any, i: number) => i !== index);
                              setData({ ...data, featuredProducts: updated });
                            }
                          }}
                          title="Delete product"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Image Preview & Picker */}
                    <div className="space-y-2">
                      <div className="relative h-56 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner group/img">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.image || "/product/pet-preform-mold.png"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <ImagePicker
                        label="Product Mold Photo"
                        value={product.image || "/product/pet-preform-mold.png"}
                        onChange={(url) => {
                          const updated = [...data.featuredProducts];
                          updated[index].image = url;
                          setData({ ...data, featuredProducts: updated });
                        }}
                        helperText="Upload new photo or choose from /product/..."
                      />
                    </div>

                    {/* Product Name Title Input */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Product Title (e.g. PET Preform Mold)
                      </label>
                      <input
                        type="text"
                        value={product.name || ""}
                        placeholder="e.g. PET Preform Mold"
                        onChange={(e) => {
                          const updated = [...data.featuredProducts];
                          updated[index].name = e.target.value;
                          setData({ ...data, featuredProducts: updated });
                        }}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      />
                    </div>

                    {/* Product Description */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Short Description
                      </label>
                      <textarea
                        rows={3}
                        value={product.shortDesc || ""}
                        placeholder="High-speed preform moulds built for smooth, reliable bottle production..."
                        onChange={(e) => {
                          const updated = [...data.featuredProducts];
                          updated[index].shortDesc = e.target.value;
                          setData({ ...data, featuredProducts: updated });
                        }}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-[#0056b3] focus:bg-white leading-relaxed"
                      />
                    </div>

                    {/* Target Link for "View Product Details ->" Button */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Details Button Target Link
                      </label>
                      <input
                        type="text"
                        value={product.link || `/products/${product.slug || "pet-preform-mold"}#details`}
                        placeholder="/products/pet-preform-mold#details"
                        onChange={(e) => {
                          const updated = [...data.featuredProducts];
                          updated[index].link = e.target.value;
                          setData({ ...data, featuredProducts: updated });
                        }}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-[#0056b3] focus:bg-white"
                      />
                    </div>

                    {/* Action Button Visual Preview (Matches Screenshot Button) */}
                    <div className="pt-2">
                      <div className="w-full py-2.5 px-4 rounded-xl border border-blue-100 bg-blue-50/70 font-bold text-[#0056b3] text-xs flex items-center justify-center gap-2 group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3] transition-all duration-300">
                        <span>View Product Details</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  );
}
