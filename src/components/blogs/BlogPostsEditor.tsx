"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ImagePicker } from "@/components/ui/ImagePicker";
import {
  Search,
  Plus,
  Trash2,
  ChevronRight,
  Sparkles,
  BookOpen,
  Calendar,
  Clock,
  User,
  Star,
  FileText,
  Table,
} from "lucide-react";
import { BlogPost, BlogCategoryFilterItem } from "@/data/defaultBlogs";

interface BlogPostsEditorProps {
  posts: BlogPost[];
  categories?: BlogCategoryFilterItem[];
  onChange: (posts: BlogPost[]) => void;
  selectedPostId?: string;
  onSelectPost?: (id: string) => void;
}

export function BlogPostsEditor({
  posts = [],
  categories = [],
  onChange,
  selectedPostId,
  onSelectPost,
}: BlogPostsEditorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");
  const [activeTab, setActiveTab] = useState<
    "basic" | "author" | "intro" | "sections" | "conclusion" | "faqs"
  >("basic");

  // Determine selected post
  const selectedPost = useMemo(() => {
    if (!posts || posts.length === 0) return null;
    if (selectedPostId) {
      const found = posts.find((p) => p.id === selectedPostId);
      if (found) return found;
    }
    return posts[0];
  }, [posts, selectedPostId]);

  // Filter posts for sidebar list
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat =
        selectedCategoryFilter === "all" || post.categorySlug === selectedCategoryFilter;
      return matchesSearch && matchesCat;
    });
  }, [posts, searchQuery, selectedCategoryFilter]);

  const handleToggleFeatured = (targetPostId: string) => {
    const updated = posts.map((p) => ({
      ...p,
      featured: p.id === targetPostId ? !p.featured : false,
    }));
    onChange(updated);
  };

  const handleUpdateCurrentPost = (updatedFields: Partial<BlogPost>) => {
    if (!selectedPost) return;
    const updated = posts.map((post) =>
      post.id === selectedPost.id ? { ...post, ...updatedFields } : post
    );
    onChange(updated);
  };

  const handleAddNewPost = () => {
    const newId = `blog-${Date.now().toString().slice(-6)}`;
    const newPost: BlogPost = {
      id: newId,
      slug: `new-blog-article-${Date.now().toString().slice(-4)}`,
      title: "New Technical Mould Engineering Article",
      shortTitle: "New Technical Article",
      category: "Engineering & Simulation",
      categorySlug: "engineering",
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      readTime: "5 min read",
      author: {
        name: "Technical Team",
        role: "Senior Mould Specialist",
      },
      summary: "Comprehensive summary of this mould engineering topic and key industrial takeaways.",
      image: "/blogs/cycle-time-optimization.jpg",
      featured: false,
      tags: ["Tooling", "Engineering", "Precision"],
      tableOfContents: [
        { id: "section-1", label: "1. Core Overview & Physics" },
      ],
      content: {
        introduction: [
          "Introductory paragraph explaining the industrial challenge and engineering context...",
        ],
        keyTakeaways: [
          "Key actionable takeaway point 1",
          "Key actionable takeaway point 2",
        ],
        sections: [
          {
            heading: "1. Core Overview & Physics",
            subheading: "Understanding the underlying tooling mechanics",
            body: [
              "Detailed explanation of manufacturing methodologies, metallurgical considerations, and cooling circuits.",
            ],
            bulletPoints: [
              "Precision machining tolerances up to ±0.002mm",
              "Hardened tool steel cores for multi-million cycle endurance",
            ],
          },
        ],
        conclusion: [
          "Summary conclusion and technical recommendations for production lines.",
        ],
      },
      relatedProductSlugs: ["pet-preform-mold"],
    };

    onChange([newPost, ...posts]);
    if (onSelectPost) {
      onSelectPost(newPost.id);
    }
  };

  const handleDeletePost = (idToDelete: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      const updated = posts.filter((p) => p.id !== idToDelete);
      onChange(updated);
      if (selectedPost?.id === idToDelete && updated.length > 0) {
        if (onSelectPost) onSelectPost(updated[0].id);
      }
    }
  };

  // Section handling inside content
  const handleAddSection = () => {
    if (!selectedPost) return;
    const currentSections = selectedPost.content?.sections || [];
    const secNum = currentSections.length + 1;
    const newSection = {
      heading: `${secNum}. New Engineering Section`,
      subheading: "Section technical subtitle",
      body: ["Write the detailed paragraph explaining this engineering topic here..."],
      bulletPoints: ["Key technical note 1"],
    };
    handleUpdateCurrentPost({
      content: {
        ...selectedPost.content,
        sections: [...currentSections, newSection],
      },
    });
  };

  const handleUpdateSection = (sIdx: number, updatedFields: any) => {
    if (!selectedPost) return;
    const currentSections = [...(selectedPost.content?.sections || [])];
    currentSections[sIdx] = { ...currentSections[sIdx], ...updatedFields };
    handleUpdateCurrentPost({
      content: {
        ...selectedPost.content,
        sections: currentSections,
      },
    });
  };

  const handleDeleteSection = (sIdx: number) => {
    if (!selectedPost) return;
    const currentSections = (selectedPost.content?.sections || []).filter((_, i) => i !== sIdx);
    handleUpdateCurrentPost({
      content: {
        ...selectedPost.content,
        sections: currentSections,
      },
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* LEFT COLUMN: Blog Posts List */}
      <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col h-[750px]">
        {/* Header + Add button */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 gap-2">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Blog Posts ({posts.length})
            </h3>
            <p className="text-[11px] text-slate-500">Select an article to edit</p>
          </div>
          <button
            type="button"
            onClick={handleAddNewPost}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#0056b3] hover:bg-[#004494] text-white text-xs font-bold transition-all shadow-sm shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Post</span>
          </button>
        </div>

        {/* Filter controls */}
        <div className="py-3 space-y-2 border-b border-slate-100">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, tag, slug..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <select
            value={selectedCategoryFilter}
            onChange={(e) => setSelectedCategoryFilter(e.target.value)}
            className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none bg-slate-50"
          >
            <option value="all">All Categories ({posts.length})</option>
            {categories
              .filter((c) => c.slug !== "all")
              .map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name} ({posts.filter((p) => p.categorySlug === cat.slug).length})
                </option>
              ))}
          </select>
        </div>

        {/* Scrollable Items List */}
        <div className="flex-1 overflow-y-auto space-y-1.5 py-2 pr-1">
          {filteredPosts.length === 0 ? (
            <div className="p-4 text-center text-xs text-slate-400">
              No blog posts found matching filters.
            </div>
          ) : (
            filteredPosts.map((post) => {
              const isSelected = selectedPost?.id === post.id;
              return (
                <div
                  key={post.id}
                  onClick={() => onSelectPost && onSelectPost(post.id)}
                  className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                    isSelected
                      ? "border-[#0056b3] bg-blue-50/50 shadow-xs"
                      : "border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-12 h-12 rounded-lg bg-slate-100 relative overflow-hidden shrink-0 border border-slate-200">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-400">
                        No Img
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 truncate max-w-[120px]">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="text-[9px] font-bold text-[#ff6b00] flex items-center gap-0.5 shrink-0">
                          <Star className="w-2.5 h-2.5 fill-[#ff6b00]" /> Featured
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-xs font-bold truncate ${
                        isSelected ? "text-[#0056b3]" : "text-slate-800"
                      }`}
                    >
                      {post.title}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">
                      {post.date} • {post.readTime}
                    </p>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "text-[#0056b3] translate-x-0.5" : "text-slate-300"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: Active Blog Post Form Editor */}
      <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col">
        {selectedPost ? (
          <div className="space-y-6">
            {/* Header info bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-[#0056b3] font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                    SLUG: /blogs/{selectedPost.slug}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    {selectedPost.category}
                  </span>
                  {selectedPost.featured && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-orange-100 text-[#ff6b00]">
                      ★ Hero Spotlight Post
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-slate-900">{selectedPost.title}</h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleFeatured(selectedPost.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                    selectedPost.featured
                      ? "bg-amber-500 hover:bg-amber-600 text-white border-amber-600 shadow-xs"
                      : "bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-700 border-slate-200"
                  }`}
                  title={
                    selectedPost.featured
                      ? "Currently featured as top hero article. Click to remove."
                      : "Feature this article as the hero spotlight card at the top of the blog page"
                  }
                >
                  <Star
                    className={`w-3.5 h-3.5 ${
                      selectedPost.featured
                        ? "fill-white text-white"
                        : "text-amber-500"
                    }`}
                  />
                  <span>
                    {selectedPost.featured ? "Featured on Top" : "Set as Featured"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDeletePost(selectedPost.id)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Post</span>
                </button>
              </div>
            </div>

            {/* Sub Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab("basic")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === "basic"
                    ? "bg-[#0056b3] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                1. Basic Info & Image
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("author")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === "author"
                    ? "bg-[#0056b3] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                2. Author & Metadata
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("intro")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === "intro"
                    ? "bg-[#0056b3] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                3. Intro & Takeaways
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("sections")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === "sections"
                    ? "bg-[#0056b3] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                4. Article Sections ({selectedPost.content?.sections?.length || 0})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("conclusion")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === "conclusion"
                    ? "bg-[#0056b3] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                5. Conclusion & Products
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("faqs")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === "faqs"
                    ? "bg-[#0056b3] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                6. Article FAQs ({selectedPost.faqs?.length || 0})
              </button>
            </div>

            {/* TAB 1: BASIC INFO & IMAGE */}
            {activeTab === "basic" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Article Title
                    </label>
                    <input
                      type="text"
                      value={selectedPost.title}
                      onChange={(e) => handleUpdateCurrentPost({ title: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Short / Card Title
                    </label>
                    <input
                      type="text"
                      value={selectedPost.shortTitle || ""}
                      onChange={(e) => handleUpdateCurrentPost({ shortTitle: e.target.value })}
                      placeholder="Concise title for cards..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      URL Slug
                    </label>
                    <input
                      type="text"
                      value={selectedPost.slug}
                      onChange={(e) =>
                        handleUpdateCurrentPost({
                          slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Category Display Name
                    </label>
                    <input
                      type="text"
                      value={selectedPost.category}
                      onChange={(e) => handleUpdateCurrentPost({ category: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Category Filter Slug
                    </label>
                    <select
                      value={selectedPost.categorySlug}
                      onChange={(e) =>
                        handleUpdateCurrentPost({
                          categorySlug: e.target.value as any,
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none bg-white font-mono"
                    >
                      <option value="engineering">engineering (Engineering & Simulation)</option>
                      <option value="materials">materials (Materials & Metallurgy)</option>
                      <option value="pharmaceutical">pharmaceutical (Pharmaceutical Packaging)</option>
                      <option value="manufacturing">manufacturing (Mould Design & Tooling)</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Article Summary (Listing Preview)
                    </label>
                    <textarea
                      rows={2}
                      value={selectedPost.summary}
                      onChange={(e) => handleUpdateCurrentPost({ summary: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1 md:col-span-2">
                    <input
                      type="checkbox"
                      id="post-featured"
                      checked={!!selectedPost.featured}
                      onChange={(e) => handleUpdateCurrentPost({ featured: e.target.checked })}
                      className="w-4 h-4 rounded text-[#0056b3] focus:ring-[#0056b3]"
                    />
                    <label htmlFor="post-featured" className="text-xs font-bold text-slate-700 cursor-pointer">
                      Mark as Featured (Hero Spotlight Card on Blog Page)
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <ImagePicker
                    label="Article Cover & Hero Image"
                    value={selectedPost.image}
                    onChange={(image) => handleUpdateCurrentPost({ image })}
                    helperText="Crisp photo representing this engineering topic. Used in banner and listing cards."
                  />
                </div>
              </div>
            )}

            {/* TAB 2: AUTHOR & METADATA */}
            {activeTab === "author" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Author Name
                    </label>
                    <input
                      type="text"
                      value={selectedPost.author?.name || ""}
                      onChange={(e) =>
                        handleUpdateCurrentPost({
                          author: {
                            ...selectedPost.author,
                            name: e.target.value,
                            role: selectedPost.author?.role || "",
                          },
                        })
                      }
                      placeholder="e.g. Ramesh Patel"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Author Role / Designation
                    </label>
                    <input
                      type="text"
                      value={selectedPost.author?.role || ""}
                      onChange={(e) =>
                        handleUpdateCurrentPost({
                          author: {
                            ...selectedPost.author,
                            name: selectedPost.author?.name || "",
                            role: e.target.value,
                          },
                        })
                      }
                      placeholder="e.g. Chief Tooling & CAD/CAM Specialist"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Publication Date
                    </label>
                    <input
                      type="text"
                      value={selectedPost.date}
                      onChange={(e) => handleUpdateCurrentPost({ date: e.target.value })}
                      placeholder="e.g. October 24, 2026"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Estimated Read Time
                    </label>
                    <input
                      type="text"
                      value={selectedPost.readTime}
                      onChange={(e) => handleUpdateCurrentPost({ readTime: e.target.value })}
                      placeholder="e.g. 6 min read"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Tags (Comma separated)
                    </label>
                    <input
                      type="text"
                      value={(selectedPost.tags || []).join(", ")}
                      onChange={(e) =>
                        handleUpdateCurrentPost({
                          tags: e.target.value
                            .split(",")
                            .map((t) => t.trim())
                            .filter(Boolean),
                        })
                      }
                      placeholder="PET Preform, Cycle Time, Conformal Cooling"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: INTRO & TAKEAWAYS */}
            {activeTab === "intro" && (
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between pb-1 mb-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Introduction Paragraphs
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        const currentIntro = selectedPost.content?.introduction || [];
                        handleUpdateCurrentPost({
                          content: {
                            ...selectedPost.content,
                            introduction: [...currentIntro, "New intro paragraph..."],
                          },
                        });
                      }}
                      className="text-xs text-[#0056b3] font-bold hover:underline"
                    >
                      + Add Paragraph
                    </button>
                  </div>

                  <div className="space-y-2">
                    {(selectedPost.content?.introduction || []).map((p, pIdx) => (
                      <div key={pIdx} className="flex gap-2">
                        <textarea
                          rows={2}
                          value={p}
                          onChange={(e) => {
                            const updated = [...(selectedPost.content?.introduction || [])];
                            updated[pIdx] = e.target.value;
                            handleUpdateCurrentPost({
                              content: { ...selectedPost.content, introduction: updated },
                            });
                          }}
                          className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none leading-relaxed"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updated = (selectedPost.content?.introduction || []).filter(
                              (_, i) => i !== pIdx
                            );
                            handleUpdateCurrentPost({
                              content: { ...selectedPost.content, introduction: updated },
                            });
                          }}
                          className="p-1.5 text-red-400 hover:text-red-600 rounded-lg"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between pb-1 mb-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Key Takeaways (Highlight Box)
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        const current = selectedPost.content?.keyTakeaways || [];
                        handleUpdateCurrentPost({
                          content: {
                            ...selectedPost.content,
                            keyTakeaways: [...current, "New key takeaway bullet point..."],
                          },
                        });
                      }}
                      className="text-xs text-[#0056b3] font-bold hover:underline"
                    >
                      + Add Takeaway
                    </button>
                  </div>

                  <div className="space-y-2">
                    {(selectedPost.content?.keyTakeaways || []).map((t, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0056b3] text-[10px] font-bold flex items-center justify-center shrink-0">
                          {tIdx + 1}
                        </span>
                        <input
                          type="text"
                          value={t}
                          onChange={(e) => {
                            const updated = [...(selectedPost.content?.keyTakeaways || [])];
                            updated[tIdx] = e.target.value;
                            handleUpdateCurrentPost({
                              content: { ...selectedPost.content, keyTakeaways: updated },
                            });
                          }}
                          className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updated = (selectedPost.content?.keyTakeaways || []).filter(
                              (_, i) => i !== tIdx
                            );
                            handleUpdateCurrentPost({
                              content: { ...selectedPost.content, keyTakeaways: updated },
                            });
                          }}
                          className="p-1.5 text-red-400 hover:text-red-600 rounded-lg"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: ARTICLE SECTIONS */}
            {activeTab === "sections" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Technical Article Sections
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Add and structure headings, subheadings, paragraphs, and bullet points.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddSection}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-[#0056b3] hover:bg-blue-100 rounded-lg text-xs font-bold transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Section</span>
                  </button>
                </div>

                <div className="space-y-5">
                  {(selectedPost.content?.sections || []).map((sec, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
                    >
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="text-xs font-bold text-slate-800">
                          Section #{sIdx + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleDeleteSection(sIdx)}
                          className="text-red-400 hover:text-red-600 p-1 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                            Heading
                          </label>
                          <input
                            type="text"
                            value={sec.heading}
                            onChange={(e) =>
                              handleUpdateSection(sIdx, { heading: e.target.value })
                            }
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none bg-white font-bold"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                            Subheading
                          </label>
                          <input
                            type="text"
                            value={sec.subheading || ""}
                            onChange={(e) =>
                              handleUpdateSection(sIdx, { subheading: e.target.value })
                            }
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none bg-white"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                            Body Paragraphs (One per line)
                          </label>
                          <textarea
                            rows={3}
                            value={(sec.body || []).join("\n\n")}
                            onChange={(e) =>
                              handleUpdateSection(sIdx, {
                                body: e.target.value.split("\n\n").filter(Boolean),
                              })
                            }
                            placeholder="Enter section paragraphs separated by blank line..."
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none bg-white leading-relaxed"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                            Bullet Points (One per line)
                          </label>
                          <textarea
                            rows={2}
                            value={(sec.bulletPoints || []).join("\n")}
                            onChange={(e) =>
                              handleUpdateSection(sIdx, {
                                bulletPoints: e.target.value.split("\n").filter(Boolean),
                              })
                            }
                            placeholder="Enter bullet points, one on each line..."
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none bg-white"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 5: CONCLUSION & PRODUCTS */}
            {activeTab === "conclusion" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Conclusion Paragraphs (One per line)
                  </label>
                  <textarea
                    rows={4}
                    value={(selectedPost.content?.conclusion || []).join("\n\n")}
                    onChange={(e) =>
                      handleUpdateCurrentPost({
                        content: {
                          ...selectedPost.content,
                          conclusion: e.target.value.split("\n\n").filter(Boolean),
                        },
                      })
                    }
                    placeholder="Concluding thoughts and engineering summary..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none leading-relaxed"
                  />
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Related Product Slugs (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={(selectedPost.relatedProductSlugs || []).join(", ")}
                    onChange={(e) =>
                      handleUpdateCurrentPost({
                        relatedProductSlugs: e.target.value
                          .split(",")
                          .map((s) => s.trim())
                          .filter(Boolean),
                      })
                    }
                    placeholder="pet-preform-mold, pet-jar-mold, cap-closure-mold"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-[#0056b3] focus:outline-none font-mono"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Matching products will automatically render as interactive cards in the "Related Mould Tooling" section on the article page.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 6: ARTICLE FAQS */}
            {activeTab === "faqs" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Technical Article FAQs
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Frequently asked engineering questions displayed in the accordion at the bottom of this article.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const currentFaqs = selectedPost.faqs || [];
                      handleUpdateCurrentPost({
                        faqs: [
                          ...currentFaqs,
                          {
                            question: "New Technical FAQ Question?",
                            answer: "Detailed engineering answer explaining this aspect...",
                          },
                        ],
                      });
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-[#0056b3] hover:bg-blue-100 rounded-lg text-xs font-bold transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add FAQ</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {(selectedPost.faqs || []).length === 0 ? (
                    <div className="p-8 text-center text-xs text-slate-400 border border-dashed border-slate-200 rounded-xl">
                      No custom FAQs defined for this article yet. Click "+ Add FAQ" above to create one.
                    </div>
                  ) : (
                    (selectedPost.faqs || []).map((faq, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
                      >
                        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                          <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-[#0056b3] text-white text-[10px] flex items-center justify-center font-bold">
                              {fIdx + 1}
                            </span>
                            <span>FAQ Item #{fIdx + 1}</span>
                          </span>

                          <button
                            type="button"
                            onClick={() => {
                              const updated = (selectedPost.faqs || []).filter((_, i) => i !== fIdx);
                              handleUpdateCurrentPost({ faqs: updated });
                            }}
                            className="p-1 text-red-400 hover:text-red-600 rounded"
                            title="Delete FAQ"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                            Question
                          </label>
                          <input
                            type="text"
                            value={faq.question}
                            onChange={(e) => {
                              const updated = [...(selectedPost.faqs || [])];
                              updated[fIdx] = { ...updated[fIdx], question: e.target.value };
                              handleUpdateCurrentPost({ faqs: updated });
                            }}
                            placeholder="Enter the engineering question..."
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none bg-white font-bold"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                            Answer
                          </label>
                          <textarea
                            rows={3}
                            value={faq.answer}
                            onChange={(e) => {
                              const updated = [...(selectedPost.faqs || [])];
                              updated[fIdx] = { ...updated[fIdx], answer: e.target.value };
                              handleUpdateCurrentPost({ faqs: updated });
                            }}
                            placeholder="Enter the detailed technical answer..."
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none bg-white leading-relaxed"
                          />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="p-12 text-center text-slate-400 text-sm">
            No blog post selected. Please choose a post from the list on the left or create a new one.
          </div>
        )}
      </div>
    </div>
  );
}

