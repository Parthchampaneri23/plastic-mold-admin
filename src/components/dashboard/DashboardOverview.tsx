"use client";

import React, { useState, useEffect } from "react";
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
  Cpu,
  Inbox,
  Phone,
  User,
  MessageSquare,
  CheckCircle,
  Clock3,
  RefreshCw,
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
  // Inquiries State
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [totalInquiriesCount, setTotalInquiriesCount] = useState<number>(0);
  const [loadingInquiries, setLoadingInquiries] = useState<boolean>(true);
  const [inquirySearch, setInquirySearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Fetch inquiries from API
  const fetchInquiries = async () => {
    try {
      setLoadingInquiries(true);
      const res = await fetch("/api/inquiries");
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setInquiries(json.data);
        setTotalInquiriesCount(json.totalCount ?? json.data.length);
      }
    } catch (e) {
      console.warn("Error fetching inquiries:", e);
    } finally {
      setLoadingInquiries(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      setUpdatingId(id);
      const res = await fetch("/api/inquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const json = await res.json();
      if (json.success) {
        setInquiries((prev) =>
          prev.map((item) =>
            item._id === id || item.id === id ? { ...item, status: newStatus } : item
          )
        );
      }
    } catch (e) {
      console.error("Failed to update inquiry status:", e);
    } finally {
      setUpdatingId(null);
    }
  };

  // Extract lists and counts
  const productsList = productsData?.products || data?.featuredProducts || [];
  const categoriesList = productsData?.categories || data?.productCategories || [];
  const capabilitiesList = data?.capabilities || manufacturingData?.overview?.capabilities || [];
  const blogsList = blogsData?.posts || [];
  const galleryList = galleryData?.items || [];
  const industriesList = industriesData?.industries || data?.industries || [];
  const heroSlidesList = data?.heroSlides || [];

  const totalProducts = productsList.length || 9;
  const totalCategories = categoriesList.length || 3;
  const totalCapabilities = capabilitiesList.length || 6;
  const totalInquiries = totalInquiriesCount || inquiries.length || 5;
  const totalBlogs = blogsList.length || 5;
  const totalGallery = galleryList.length || 24;
  const totalIndustries = industriesList.length || 6;

  // 1. TOP STATS CARDS (Featuring Total Inquiries, Total Capabilities, Total Categories, Total Products)
  const statCards = [
    {
      title: "Total Inquiries",
      value: totalInquiries,
      sublabel: `${inquiries.filter((i) => i.status === "pending").length} Pending Review`,
      icon: Inbox,
      iconBg: "bg-amber-50 text-amber-600",
      targetTab: "inquiries-list",
      quickAction: "View Inquiries",
    },
    {
      title: "Total Capabilities",
      value: totalCapabilities,
      sublabel: "Precision In-House Fleet",
      icon: Cpu,
      iconBg: "bg-blue-50 text-[#0056b3]",
      targetTab: "capabilities",
      quickAction: "Manage Capabilities",
    },
    {
      title: "Total Categories",
      value: totalCategories,
      sublabel: "Core Mould Divisions",
      icon: Layers,
      iconBg: "bg-emerald-50 text-emerald-600",
      targetTab: "product-categories",
      quickAction: "Manage Categories",
    },
    {
      title: "Total Products",
      value: totalProducts,
      sublabel: `${totalCategories} Categories Active`,
      icon: Package,
      iconBg: "bg-indigo-50 text-indigo-600",
      targetTab: "product-list",
      quickAction: "Manage Products",
    },
  ];

  // Filtered inquiries for recent inquiries list
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inquirySearch === "" ||
      inq.fullName?.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.email?.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.phone?.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.projectDetails?.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.moldCategory?.toLowerCase().includes(inquirySearch.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || inq.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Control Dashboard Overview
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time analytics, client RFQs, and content controls for Patel Mould Industries.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchInquiries}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-2xs transition-colors self-start sm:self-auto cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loadingInquiries ? "animate-spin text-[#0056b3]" : "text-slate-500"}`} />
          <span>Refresh Live Data</span>
        </button>
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
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0056b3]/40 shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
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
      {/* 3. RECENT INQUIRIES SECTION (Table / Cards) */}
      {/* ======================================================== */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <span>Recent Inquiries</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  {filteredInquiries.length} Inquiries
                </span>
              </h2>
              <p className="text-[11px] text-slate-500">
                Incoming technical quotes, RFQs, and client communications
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigateTab("inquiries-list")}
              className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Manage All Inquiries</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Search & Status Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search name, email, RFQ..."
                value={inquirySearch}
                onChange={(e) => setInquirySearch(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0056b3] focus:bg-white w-44 sm:w-56"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="py-1.5 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold focus:outline-none focus:border-[#0056b3]"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="reviewed">Reviewed</option>
              <option value="contacted">Contacted</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Inquiries Table */}
        {loadingInquiries ? (
          <div className="py-12 text-center text-xs text-slate-500 space-y-2">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#0056b3]" />
            <p>Loading inquiries...</p>
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="py-10 text-center text-xs text-slate-400 bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
            <Inbox className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="font-semibold text-slate-600">No inquiries found matching your filter</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Customer quotes will appear here automatically.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                  <th className="pb-2.5 font-bold">Client / Contact</th>
                  <th className="pb-2.5 font-bold">Mould Category</th>
                  <th className="pb-2.5 font-bold">Project Details / RFQ</th>
                  <th className="pb-2.5 font-bold">Date Received</th>
                  <th className="pb-2.5 font-bold">Status</th>
                  <th className="pb-2.5 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredInquiries.map((inq: any, idx: number) => {
                  const inquiryId = inq._id || inq.id || `inq-${idx}`;
                  const createdDate = inq.createdAt
                    ? new Date(inq.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "Recent";

                  const statusBadges: Record<string, string> = {
                    pending: "bg-amber-50 text-amber-700 border-amber-200",
                    reviewed: "bg-blue-50 text-blue-700 border-blue-200",
                    contacted: "bg-purple-50 text-purple-700 border-purple-200",
                    closed: "bg-emerald-50 text-emerald-700 border-emerald-200",
                  };

                  return (
                    <tr key={inquiryId} className="hover:bg-slate-50/60 transition-colors">
                      {/* Client info */}
                      <td className="py-3 pr-3">
                        <div className="font-bold text-slate-900">{inq.fullName}</div>
                        <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5 mt-0.5">
                          <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                          <a href={`mailto:${inq.email}`} className="hover:text-[#0056b3] hover:underline">
                            {inq.email}
                          </a>
                        </div>
                        {inq.phone && (
                          <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5 mt-0.5">
                            <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                            <a href={`tel:${inq.phone}`} className="hover:text-[#0056b3]">
                              {inq.phone}
                            </a>
                          </div>
                        )}
                      </td>

                      {/* Mould category */}
                      <td className="py-3 px-3 align-top">
                        <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200/80">
                          {inq.moldCategory || "Precision Mould"}
                        </span>
                      </td>

                      {/* Project Details */}
                      <td className="py-3 px-3 align-top max-w-xs">
                        <p className="text-slate-700 line-clamp-2 text-xs leading-relaxed">
                          {inq.projectDetails}
                        </p>
                      </td>

                      {/* Date */}
                      <td className="py-3 px-3 align-top text-slate-500 whitespace-nowrap text-[11px]">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{createdDate}</span>
                        </div>
                      </td>

                      {/* Status badge */}
                      <td className="py-3 px-3 align-top whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${
                            statusBadges[inq.status] || "bg-slate-100 text-slate-600 border-slate-200"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          <span>{inq.status || "pending"}</span>
                        </span>
                      </td>

                      {/* Status Toggle Actions */}
                      <td className="py-3 pl-3 align-top text-right whitespace-nowrap">
                        <select
                          disabled={updatingId === inquiryId}
                          value={inq.status || "pending"}
                          onChange={(e) => handleStatusUpdate(inquiryId, e.target.value)}
                          className="py-1 px-2 text-[11px] font-bold rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-slate-300 focus:outline-none focus:border-[#0056b3] cursor-pointer disabled:opacity-50"
                        >
                          <option value="pending">Mark Pending</option>
                          <option value="reviewed">Mark Reviewed</option>
                          <option value="contacted">Mark Contacted</option>
                          <option value="closed">Mark Closed</option>
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* 4. LATEST PRODUCTS & LATEST ARTICLES ROW */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: LATEST PRODUCTS (8 COLS) */}
        <div className="lg:col-span-7 xl:col-span-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-[#ff6b00]" />
              <h2 className="text-base font-extrabold text-slate-900">
                Latest Products &amp; Mould Models
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
              const imageSrc = prod.image || "/product/pet-preform-mould.png";
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
                      {prod.category || "Precision Mould"}
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors truncate mt-0.5">
                      {prod.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {prod.shortDescription || prod.tag || "High cavity precision mould tooling"}
                    </p>

                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-200/70 text-slate-700">
                        /{prod.slug || "mould"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: LATEST BLOG ARTICLES (4 COLS) */}
        <div className="lg:col-span-5 xl:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
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
      {/* 5. LATEST GALLERY UPLOADS */}
      {/* ======================================================== */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
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
