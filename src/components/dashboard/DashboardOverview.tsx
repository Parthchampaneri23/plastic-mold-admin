"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Package,
  BookOpen,
  Image as ImageIcon,
  Layers,
  Sliders,
  Mail,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Eye,
  Edit3,
  Search,
  Filter,
  PlusCircle,
  Activity,
  Globe,
  Award,
} from "lucide-react";

interface DashboardOverviewProps {
  data: any;
  aboutData: any;
  productsData: any;
  manufacturingData: any;
  infrastructureData: any;
  industriesData: any;
  qualityData: any;
  galleryData: any;
  blogsData: any;
  contactData: any;
  privacyPolicyData: any;
  termsData: any;
  onNavigateTab: (tab: string) => void;
}

export function DashboardOverview({
  data,
  aboutData,
  productsData,
  manufacturingData,
  infrastructureData,
  industriesData,
  qualityData,
  galleryData,
  blogsData,
  contactData,
  privacyPolicyData,
  termsData,
  onNavigateTab,
}: DashboardOverviewProps) {
  const [activeTabFilter, setActiveTabFilter] = useState<"all" | "products" | "blogs" | "gallery">("all");

  // Extract lists and counts
  const productsList = productsData?.products || data?.featuredProducts || [];
  const blogsList = blogsData?.posts || [];
  const galleryList = galleryData?.items || [];
  const industriesList = industriesData?.industries || data?.industries || [];
  const heroSlidesList = data?.heroSlides || [];

  const totalProducts = productsList.length || 9;
  const totalCategories = productsData?.categories?.length || data?.productCategories?.length || 3;
  const totalBlogs = blogsList.length || 5;
  const totalGallery = galleryList.length || 24;
  const totalIndustries = industriesList.length || 6;
  const totalHeroSlides = heroSlidesList.length || 4;

  // 1. TOP STATS CARDS
  const statCards = [
    {
      title: "Total Products",
      value: totalProducts,
      sublabel: `${totalCategories} Categories Active`,
      icon: Package,
      iconBg: "bg-blue-50 text-[#0056b3]",
      targetTab: "product-list",
      quickAction: "Manage Products",
    },
    {
      title: "Blog Articles",
      value: totalBlogs,
      sublabel: "Technical Insights & Guides",
      icon: BookOpen,
      iconBg: "bg-purple-50 text-purple-600",
      targetTab: "blogs-posts",
      quickAction: "Manage Blogs",
    },
    {
      title: "Gallery Media",
      value: totalGallery,
      sublabel: "Toolroom & Machinery Photos",
      icon: ImageIcon,
      iconBg: "bg-amber-50 text-amber-600",
      targetTab: "gallery-items",
      quickAction: "Manage Media",
    },
    {
      title: "Industries Served",
      value: totalIndustries,
      sublabel: "Packaging, Pharma, FMCG & Auto",
      icon: Layers,
      iconBg: "bg-indigo-50 text-indigo-600",
      targetTab: "industry-list",
      quickAction: "Manage Sectors",
    },
  ];

  // Latest products (first 4 items)
  const latestProducts = productsList.slice(0, 4);

  // Latest blogs (first 3 posts)
  const latestBlogs = blogsList.slice(0, 3);

  // Latest gallery items (first 4 items)
  const latestGalleryItems = galleryList.slice(0, 4);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* ======================================================== */}
      {/* 1. TOP HEADER TITLE */}
      {/* ======================================================== */}
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Control Dashboard Overview
        </h1>
      </div>

      {/* ======================================================== */}
      {/* 2. STATS CARDS ROW (Numbers & Counts) */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              onClick={() => onNavigateTab(stat.targetTab)}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0056b3]/40 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-11 h-11 rounded-xl ${stat.iconBg} flex items-center justify-center transition-transform group-hover:scale-105`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  {stat.title}
                </span>

                <div className="text-3xl font-black text-slate-900 mt-1 group-hover:text-[#0056b3] transition-colors">
                  {stat.value}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium truncate max-w-[150px]">
                  {stat.sublabel}
                </span>
                <span className="text-xs font-bold text-[#0056b3] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>{stat.quickAction}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* 3. LATEST PRODUCTS & LATEST ARTICLES ROW */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: LATEST PRODUCTS (8 COLS) */}
        <div className="lg:col-span-7 xl:col-span-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-[#ff6b00]" />
              <h2 className="text-base font-extrabold text-slate-900">
                Latest Products &amp; Mold Models
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigateTab("product-list")}
              className="text-xs font-bold text-[#0056b3] hover:text-[#003d80] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>View All Products</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Product Items List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {latestProducts.map((prod: any, idx: number) => {
              const imageSrc = prod.image || "/product/pet-preform-mold.png";
              return (
                <div
                  key={prod.id || idx}
                  onClick={() => onNavigateTab("product-list")}
                  className="p-3.5 rounded-xl border border-slate-200/90 hover:border-[#0056b3] bg-slate-50/40 hover:bg-blue-50/30 transition-all cursor-pointer group flex items-start gap-3"
                >
                  {/* Thumbnail */}
                  <div className="w-14 h-14 rounded-lg bg-white border border-slate-200 overflow-hidden shrink-0 relative flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageSrc}
                      alt={prod.name || "Product Image"}
                      className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-[#ff6b00] uppercase tracking-wider block truncate">
                      {prod.category || "Precision Mold"}
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors truncate mt-0.5">
                      {prod.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {prod.shortDescription || prod.tag || "High cavity precision mold tooling"}
                    </p>

                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-200/70 text-slate-700">
                        /{prod.slug || "mold"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: LATEST BLOG ARTICLES (4 COLS) */}
        <div className="lg:col-span-5 xl:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                <h2 className="text-base font-extrabold text-slate-900">
                  Latest Blog Articles
                </h2>
              </div>

              <button
                type="button"
                onClick={() => onNavigateTab("blogs-posts")}
                className="text-xs font-bold text-[#0056b3] hover:text-[#003d80] flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>All Articles</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Blog Posts List */}
            <div className="space-y-3 pt-2">
              {latestBlogs.map((post: any, idx: number) => {
                const coverImage = post.coverImage || "/blogs/blog-banner.jpg";
                return (
                  <div
                    key={post.id || idx}
                    onClick={() => onNavigateTab("blogs-posts")}
                    className="p-3 rounded-xl border border-slate-100 hover:border-purple-200 bg-slate-50/50 hover:bg-purple-50/20 transition-all cursor-pointer group flex items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-lg bg-slate-200 overflow-hidden shrink-0 relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-bold uppercase px-1.5 py-0.2 rounded bg-purple-100 text-purple-700">
                          {post.category || "Article"}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {post.readTime || "5 min read"}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-purple-700 transition-colors truncate mt-1">
                        {post.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigateTab("blogs-posts")}
              className="w-full py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer border border-purple-200"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Write or Edit Blog Post</span>
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 4. LATEST GALLERY UPLOADS & SYSTEM STATUS */}
      {/* ======================================================== */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-amber-500" />
            <h2 className="text-base font-extrabold text-slate-900">
              Latest Toolroom &amp; Machinery Gallery Photos
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigateTab("gallery-items")}
            className="text-xs font-bold text-[#0056b3] hover:text-[#003d80] flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View Full Gallery Media</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
          {latestGalleryItems.map((item: any, idx: number) => {
            const imageSrc = item.image || "/infrastructure/facility-hero.jpg";
            return (
              <div
                key={item.id || idx}
                onClick={() => onNavigateTab("gallery-items")}
                className="group rounded-xl border border-slate-200 overflow-hidden bg-slate-50 cursor-pointer hover:border-amber-400 hover:shadow-md transition-all flex flex-col"
              >
                <div className="h-28 w-full bg-slate-900 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-900/80 text-white backdrop-blur-xs">
                      {item.category || "Machinery"}
                    </span>
                  </div>
                </div>

                <div className="p-3 flex-1 flex flex-col justify-between">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5">
                    {item.badge || item.alt || "High precision CNC tooling"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
