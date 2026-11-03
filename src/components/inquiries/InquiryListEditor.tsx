"use client";

import React, { useState, useEffect } from "react";
import {
  Inbox,
  Search,
  RefreshCw,
  Mail,
  Phone,
  Clock,
  Filter,
  CheckCircle2,
  AlertCircle,
  Clock3,
  Calendar,
  Layers,
  FileText,
  Trash2,
  Eye,
  Check,
  ChevronDown,
} from "lucide-react";

interface InquiryItem {
  _id?: string;
  id?: string;
  fullName: string;
  email: string;
  phone?: string;
  moldCategory?: string;
  projectDetails: string;
  status: "pending" | "reviewed" | "contacted" | "closed";
  createdAt: string;
}

export function InquiryListEditor() {
  const [inquiries, setInquiries] = useState<InquiryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryItem | null>(null);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/inquiries");
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setInquiries(json.data);
      }
    } catch (e) {
      console.error("Error loading inquiries:", e);
    } finally {
      setLoading(false);
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
            (item._id === id || item.id === id)
              ? { ...item, status: newStatus as any }
              : item
          )
        );
        if (selectedInquiry && (selectedInquiry._id === id || selectedInquiry.id === id)) {
          setSelectedInquiry({ ...selectedInquiry, status: newStatus as any });
        }
      }
    } catch (e) {
      console.error("Failed to update status:", e);
    } finally {
      setUpdatingId(null);
    }
  };

  // Unique categories for filter
  const categories = Array.from(
    new Set(inquiries.map((i) => i.moldCategory).filter(Boolean))
  );

  // Filtered list
  const filtered = inquiries.filter((inq) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      query === "" ||
      inq.fullName?.toLowerCase().includes(query) ||
      inq.email?.toLowerCase().includes(query) ||
      inq.phone?.toLowerCase().includes(query) ||
      inq.projectDetails?.toLowerCase().includes(query) ||
      inq.moldCategory?.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "all" || inq.status === statusFilter;

    const matchesCat =
      categoryFilter === "all" || inq.moldCategory === categoryFilter;

    return matchesSearch && matchesStatus && matchesCat;
  });

  const countByStatus = (st: string) =>
    inquiries.filter((i) => i.status === st).length;

  const statusBadges: Record<string, string> = {
    pending: "bg-amber-50 text-amber-700 border-amber-200",
    reviewed: "bg-blue-50 text-blue-700 border-blue-200",
    contacted: "bg-purple-50 text-purple-700 border-purple-200",
    closed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 1. Header & Summary Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#ff6b00] uppercase tracking-wider font-mono">
            <span>LEAD DESK &amp; INQUIRY MANAGEMENT</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
            Customer Inquiries &amp; Quotation Requests
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Review, filter, track and respond to RFQs received through the website contact &amp; product inquiry desks.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchInquiries}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold shadow-2xs transition-colors self-start sm:self-auto cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-[#0056b3]" : "text-slate-500"}`} />
          <span>Refresh Inquiries</span>
        </button>
      </div>

      {/* 2. Status Quick-Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div
          onClick={() => setStatusFilter("all")}
          className={`p-4 rounded-2xl bg-white border cursor-pointer transition-all ${
            statusFilter === "all" ? "border-[#0056b3] shadow-xs" : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            All Inquiries
          </span>
          <div className="text-2xl font-black text-slate-900 mt-1">
            {inquiries.length}
          </div>
        </div>

        <div
          onClick={() => setStatusFilter("pending")}
          className={`p-4 rounded-2xl bg-white border cursor-pointer transition-all ${
            statusFilter === "pending" ? "border-amber-500 shadow-xs" : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
            Pending Review
          </span>
          <div className="text-2xl font-black text-amber-700 mt-1">
            {countByStatus("pending")}
          </div>
        </div>

        <div
          onClick={() => setStatusFilter("reviewed")}
          className={`p-4 rounded-2xl bg-white border cursor-pointer transition-all ${
            statusFilter === "reviewed" ? "border-blue-500 shadow-xs" : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
            Technical Review
          </span>
          <div className="text-2xl font-black text-[#0056b3] mt-1">
            {countByStatus("reviewed")}
          </div>
        </div>

        <div
          onClick={() => setStatusFilter("contacted")}
          className={`p-4 rounded-2xl bg-white border cursor-pointer transition-all ${
            statusFilter === "contacted" ? "border-purple-500 shadow-xs" : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider block">
            Contacted / Quoted
          </span>
          <div className="text-2xl font-black text-purple-700 mt-1">
            {countByStatus("contacted")}
          </div>
        </div>
      </div>

      {/* 3. Filter Bar & Search */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by client name, email, phone number, RFQ specification..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0056b3] focus:bg-white transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Status Dropdown */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold focus:outline-none focus:border-[#0056b3]"
          >
            <option value="all">All Statuses ({inquiries.length})</option>
            <option value="pending">Pending ({countByStatus("pending")})</option>
            <option value="reviewed">Reviewed ({countByStatus("reviewed")})</option>
            <option value="contacted">Contacted ({countByStatus("contacted")})</option>
            <option value="closed">Closed ({countByStatus("closed")})</option>
          </select>

          {/* Category Dropdown */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold focus:outline-none focus:border-[#0056b3]"
          >
            <option value="all">All Mould Categories</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 4. Inquiries Data Table */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
        {loading ? (
          <div className="py-16 text-center text-xs text-slate-500 space-y-2">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#0056b3]" />
            <p className="font-semibold">Loading customer inquiries...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center text-xs text-slate-400 space-y-2">
            <Inbox className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-sm font-bold text-slate-700">No Inquiries Found</p>
            <p className="text-slate-400 max-w-sm mx-auto">
              No inquiry records match your active search or filters. Try resetting the filter parameters above.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                  <th className="pb-3 pr-4 font-bold">Client / Company</th>
                  <th className="pb-3 px-3 font-bold">Mould Category</th>
                  <th className="pb-3 px-3 font-bold">Project Details / Technical Scope</th>
                  <th className="pb-3 px-3 font-bold">Submitted Date</th>
                  <th className="pb-3 px-3 font-bold">Status</th>
                  <th className="pb-3 pl-3 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((inq: any, idx: number) => {
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

                  return (
                    <tr
                      key={inquiryId}
                      className="hover:bg-blue-50/20 transition-colors group cursor-pointer"
                      onClick={() => setSelectedInquiry(inq)}
                    >
                      {/* Client */}
                      <td className="py-3.5 pr-4 align-top">
                        <div className="font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors">
                          {inq.fullName}
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                          <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                          <a
                            href={`mailto:${inq.email}`}
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-[#0056b3] hover:underline"
                          >
                            {inq.email}
                          </a>
                        </div>
                        {inq.phone && (
                          <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                            <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                            <a
                              href={`tel:${inq.phone}`}
                              onClick={(e) => e.stopPropagation()}
                              className="hover:text-[#0056b3]"
                            >
                              {inq.phone}
                            </a>
                          </div>
                        )}
                      </td>

                      {/* Mould Category */}
                      <td className="py-3.5 px-3 align-top whitespace-nowrap">
                        <span className="inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                          {inq.moldCategory || "Precision Mould"}
                        </span>
                      </td>

                      {/* Project Details */}
                      <td className="py-3.5 px-3 align-top max-w-sm">
                        <p className="text-slate-700 line-clamp-2 text-xs leading-relaxed font-normal">
                          {inq.projectDetails}
                        </p>
                      </td>

                      {/* Date */}
                      <td className="py-3.5 px-3 align-top text-slate-500 whitespace-nowrap text-[11px]">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{createdDate}</span>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-3 align-top whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${
                            statusBadges[inq.status] || "bg-slate-100 text-slate-600 border-slate-200"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          <span>{inq.status || "pending"}</span>
                        </span>
                      </td>

                      {/* Action */}
                      <td
                        className="py-3.5 pl-3 align-top text-right whitespace-nowrap"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <select
                          disabled={updatingId === inquiryId}
                          value={inq.status || "pending"}
                          onChange={(e) => handleStatusUpdate(inquiryId, e.target.value)}
                          className="py-1 px-2.5 text-[11px] font-bold rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-slate-300 focus:outline-none focus:border-[#0056b3] cursor-pointer disabled:opacity-50"
                        >
                          <option value="pending">Pending</option>
                          <option value="reviewed">Reviewed</option>
                          <option value="contacted">Contacted</option>
                          <option value="closed">Closed</option>
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

      {/* 5. Detail Modal for Selected Inquiry */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-2xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0056b3]">
                  Quotation Request Details
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                  {selectedInquiry.fullName}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedInquiry(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Email Address</span>
                <a
                  href={`mailto:${selectedInquiry.email}`}
                  className="font-bold text-[#0056b3] hover:underline mt-0.5 block truncate"
                >
                  {selectedInquiry.email}
                </a>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Phone Number</span>
                <a
                  href={`tel:${selectedInquiry.phone || ""}`}
                  className="font-bold text-slate-800 hover:text-[#0056b3] mt-0.5 block truncate"
                >
                  {selectedInquiry.phone || "Not provided"}
                </a>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Mould Category</span>
                <span className="font-bold text-slate-800 mt-0.5 block">
                  {selectedInquiry.moldCategory || "General / Precision Mould"}
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Status</span>
                <span
                  className={`inline-block mt-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${
                    statusBadges[selectedInquiry.status] || "bg-slate-100"
                  }`}
                >
                  {selectedInquiry.status}
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                Project Details / Technical RFQ
              </span>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed max-h-48 overflow-y-auto whitespace-pre-wrap">
                {selectedInquiry.projectDetails}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Update Status:</span>
                <select
                  value={selectedInquiry.status}
                  onChange={(e) =>
                    handleStatusUpdate(
                      (selectedInquiry._id || selectedInquiry.id) as string,
                      e.target.value
                    )
                  }
                  className="py-1.5 px-3 text-xs font-bold rounded-xl bg-white border border-slate-200 text-slate-700 focus:outline-none focus:border-[#0056b3] cursor-pointer"
                >
                  <option value="pending">Pending</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="contacted">Contacted</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${selectedInquiry.email}?subject=RE: Patel Mould Inquiry - ${selectedInquiry.moldCategory || "Mould Tooling"}`}
                  className="px-4 py-2 rounded-xl bg-[#0056b3] hover:bg-blue-800 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Reply via Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

