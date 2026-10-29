"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Plus,
  Trash2,
  ExternalLink,
  Send,
  Share2,
} from "lucide-react";
import {
  ContactDirectSectionData,
  ContactChannelCard,
} from "@/data/defaultContact";

interface ContactDirectEditorProps {
  direct: ContactDirectSectionData;
  onChange: (direct: ContactDirectSectionData) => void;
}

export function ContactDirectEditor({
  direct,
  onChange,
}: ContactDirectEditorProps) {
  const currentDirect = direct || {
    badge: "REACH OUR FACILITY",
    headingPart1: "Corporate Campus &",
    headingHighlight: "Contact Information",
    description: "",
    channels: [],
    mapEmbedUrl: "",
    mapAddressTitle: "",
    mapAddressDetail: "",
    mapCoordinates: "",
    mapDirectionUrl: "",
    socialLinkedIn: "",
    socialFacebook: "",
    socialYouTube: "",
    socialInstagram: "",
    quickForm: {
      formBadge: "DIRECT MESSAGE DESK",
      formTitle: "Send Us a Direct Message",
      formSubtitle: "For factory visit requests, distributor partnerships, or administrative communications.",
      submitButtonText: "Send Direct Message",
      successTitle: "Thank You! Your message is sent.",
      successMessage: "Your message has been securely delivered to our plant coordination desk in Gujarat.",
      supportPhone: "+91 77847 58347",
      responseWindow: "Within 4 to 8 hours",
    },
  };

  const quickForm = currentDirect.quickForm || {
    formBadge: "DIRECT MESSAGE DESK",
    formTitle: "Send Us a Direct Message",
    formSubtitle: "For factory visit requests, distributor partnerships, or administrative communications.",
    submitButtonText: "Send Direct Message",
    successTitle: "Thank You! Your message is sent.",
    successMessage: "Your message has been securely delivered to our plant coordination desk in Gujarat.",
    supportPhone: "+91 77847 58347",
    responseWindow: "Within 4 to 8 hours",
  };

  const handleUpdateChannel = (
    index: number,
    updatedChannel: ContactChannelCard
  ) => {
    const list = [...(currentDirect.channels || [])];
    list[index] = updatedChannel;
    onChange({ ...currentDirect, channels: list });
  };

  const handleAddChannel = () => {
    const newCh: ContactChannelCard = {
      title: "New Communication Channel",
      lines: ["Line 1 info", "Line 2 info"],
      actionLabel: "Contact Us",
      actionUrl: "tel:+917784758347",
      iconType: "phone",
    };
    onChange({
      ...currentDirect,
      channels: [...(currentDirect.channels || []), newCh],
    });
  };

  const handleRemoveChannel = (index: number) => {
    const list = [...(currentDirect.channels || [])];
    list.splice(index, 1);
    onChange({ ...currentDirect, channels: list });
  };

  return (
    <div className="space-y-6">
      {/* 1. SECTION HEADLINE */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Direct Contact Section</h2>
            <p className="text-xs text-slate-500">
              Configure the reach our facility section, contact cards, and interactive Google Map.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Badge Text
            </label>
            <input
              type="text"
              value={currentDirect.badge || ""}
              onChange={(e) =>
                onChange({ ...currentDirect, badge: e.target.value })
              }
              placeholder="REACH OUR FACILITY"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Heading Part 1
            </label>
            <input
              type="text"
              value={currentDirect.headingPart1 || ""}
              onChange={(e) =>
                onChange({ ...currentDirect, headingPart1: e.target.value })
              }
              placeholder="Corporate Campus &"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Heading Highlight (Blue)
            </label>
            <input
              type="text"
              value={currentDirect.headingHighlight || ""}
              onChange={(e) =>
                onChange({ ...currentDirect, headingHighlight: e.target.value })
              }
              placeholder="Contact Information"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none text-[#0056b3] font-bold"
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Section Description Paragraph
            </label>
            <textarea
              rows={2}
              value={currentDirect.description || ""}
              onChange={(e) =>
                onChange({ ...currentDirect, description: e.target.value })
              }
              placeholder="Visit our 15,000 m² high-precision toolroom..."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* 2. 4 DIRECT CHANNEL CARDS */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Direct Contact Channel Cards ({currentDirect.channels?.length || 0})
            </h2>
            <p className="text-xs text-slate-500">
              Cards for Plant Campus, Telephone Lines, Corporate Email, and WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddChannel}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0056b3] hover:bg-blue-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Card</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(currentDirect.channels || []).map((ch, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#0056b3] uppercase">
                  Channel #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveChannel(idx)}
                  className="p-1 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                  title="Remove Card"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Card Title
                  </label>
                  <input
                    type="text"
                    value={ch.title}
                    onChange={(e) =>
                      handleUpdateChannel(idx, { ...ch, title: e.target.value })
                    }
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Icon Type
                  </label>
                  <select
                    value={ch.iconType}
                    onChange={(e) =>
                      handleUpdateChannel(idx, {
                        ...ch,
                        iconType: e.target.value as any,
                      })
                    }
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#0056b3]"
                  >
                    <option value="location">Location (MapPin)</option>
                    <option value="phone">Phone (Telephone)</option>
                    <option value="email">Email (Envelope)</option>
                    <option value="whatsapp">WhatsApp (Chat)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Content Lines (One line per entry, separated by commas or line breaks)
                </label>
                <textarea
                  rows={2}
                  value={(ch.lines || []).join("\n")}
                  onChange={(e) =>
                    handleUpdateChannel(idx, {
                      ...ch,
                      lines: e.target.value.split("\n"),
                    })
                  }
                  placeholder="Enter each line on a new row..."
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#0056b3]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Action Button Label
                  </label>
                  <input
                    type="text"
                    value={ch.actionLabel || ""}
                    onChange={(e) =>
                      handleUpdateChannel(idx, {
                        ...ch,
                        actionLabel: e.target.value,
                      })
                    }
                    placeholder="e.g. Call Technical Line"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#0056b3]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Action Link / URL
                  </label>
                  <input
                    type="text"
                    value={ch.actionUrl || ""}
                    onChange={(e) =>
                      handleUpdateChannel(idx, {
                        ...ch,
                        actionUrl: e.target.value,
                      })
                    }
                    placeholder="tel:+91... or mailto:... or https://..."
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#0056b3] font-mono"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. GOOGLE MAP INTERACTIVE EMBED & DIRECTIONS */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
            <ExternalLink className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Google Map Integration &amp; Facility Coordinates</h2>
            <p className="text-xs text-slate-500">
              Configure the interactive Google Map iframe embed, direct directions link, and factory address bar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Google Maps Embed URL (Iframe src)
            </label>
            <input
              type="text"
              value={currentDirect.mapEmbedUrl || ""}
              onChange={(e) =>
                onChange({ ...currentDirect, mapEmbedUrl: e.target.value })
              }
              placeholder="https://maps.google.com/maps?q=..."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Map Campus Title
            </label>
            <input
              type="text"
              value={currentDirect.mapAddressTitle || ""}
              onChange={(e) =>
                onChange({ ...currentDirect, mapAddressTitle: e.target.value })
              }
              placeholder="Patel Mould Industries Corporate Toolroom"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Geographical Coordinates
            </label>
            <input
              type="text"
              value={currentDirect.mapCoordinates || ""}
              onChange={(e) =>
                onChange({ ...currentDirect, mapCoordinates: e.target.value })
              }
              placeholder="Coordinates: 22.9587° N, 72.6375° E"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none font-mono"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Campus Detailed Address Bar
            </label>
            <input
              type="text"
              value={currentDirect.mapAddressDetail || ""}
              onChange={(e) =>
                onChange({ ...currentDirect, mapAddressDetail: e.target.value })
              }
              placeholder="Phase-IV GIDC Industrial Estate, Vatva, Ahmedabad, Gujarat 382445, India."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Direct Google Maps Link (&quot;Open Direct in Google Maps&quot;)
            </label>
            <input
              type="text"
              value={currentDirect.mapDirectionUrl || ""}
              onChange={(e) =>
                onChange({ ...currentDirect, mapDirectionUrl: e.target.value })
              }
              placeholder="https://www.google.com/maps/search/?api=1&query=..."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none font-mono"
            />
          </div>
        </div>

        {/* Live Map Preview */}
        {currentDirect.mapEmbedUrl && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-700 mb-2">Live Map Preview</p>
            <div className="w-full h-48 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <iframe
                title="Admin Preview Map"
                src={currentDirect.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>

      {/* 4. GENERAL CONTACT MESSAGE FORM CONFIGURATION (RIGHT SIDE OF MAP) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ff6b00]">
            <Send className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Direct Contact Message Form Settings</h2>
            <p className="text-xs text-slate-500">
              Configure titles, button text, turnaround time, support hotline, and confirmation messages for the quick contact form.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Form Badge Text
            </label>
            <input
              type="text"
              value={quickForm.formBadge || ""}
              onChange={(e) =>
                onChange({
                  ...currentDirect,
                  quickForm: { ...quickForm, formBadge: e.target.value },
                })
              }
              placeholder="DIRECT MESSAGE DESK"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Form Title
            </label>
            <input
              type="text"
              value={quickForm.formTitle || ""}
              onChange={(e) =>
                onChange({
                  ...currentDirect,
                  quickForm: { ...quickForm, formTitle: e.target.value },
                })
              }
              placeholder="Send Us a Direct Message"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Form Subtitle
            </label>
            <input
              type="text"
              value={quickForm.formSubtitle || ""}
              onChange={(e) =>
                onChange({
                  ...currentDirect,
                  quickForm: { ...quickForm, formSubtitle: e.target.value },
                })
              }
              placeholder="For factory visit requests, distributor partnerships..."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Submit Button Text
            </label>
            <input
              type="text"
              value={quickForm.submitButtonText || ""}
              onChange={(e) =>
                onChange({
                  ...currentDirect,
                  quickForm: { ...quickForm, submitButtonText: e.target.value },
                })
              }
              placeholder="Send Direct Message"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Estimated Response Window
            </label>
            <input
              type="text"
              value={quickForm.responseWindow || ""}
              onChange={(e) =>
                onChange({
                  ...currentDirect,
                  quickForm: { ...quickForm, responseWindow: e.target.value },
                })
              }
              placeholder="Within 4 to 8 hours"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Direct Phone Support Number
            </label>
            <input
              type="text"
              value={quickForm.supportPhone || ""}
              onChange={(e) =>
                onChange({
                  ...currentDirect,
                  quickForm: { ...quickForm, supportPhone: e.target.value },
                })
              }
              placeholder="+91 77847 58347"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Success Confirmation Title
            </label>
            <input
              type="text"
              value={quickForm.successTitle || ""}
              onChange={(e) =>
                onChange({
                  ...currentDirect,
                  quickForm: { ...quickForm, successTitle: e.target.value },
                })
              }
              placeholder="Thank You! Your message is sent."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none font-semibold text-emerald-700"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Success Confirmation Note
            </label>
            <textarea
              rows={2}
              value={quickForm.successMessage || ""}
              onChange={(e) =>
                onChange({
                  ...currentDirect,
                  quickForm: { ...quickForm, successMessage: e.target.value },
                })
              }
              placeholder="Your message has been securely delivered to our plant coordination desk..."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* 5. SOCIAL MEDIA CHANNELS STRIP */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Social Media Channel Links</h2>
            <p className="text-xs text-slate-500">
              Configure URLs for LinkedIn, Facebook, YouTube, and Instagram displayed below the Google Map.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              LinkedIn Profile URL
            </label>
            <input
              type="text"
              value={currentDirect.socialLinkedIn || ""}
              onChange={(e) =>
                onChange({ ...currentDirect, socialLinkedIn: e.target.value })
              }
              placeholder="https://linkedin.com/company/patelmould"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Facebook Page URL
            </label>
            <input
              type="text"
              value={currentDirect.socialFacebook || ""}
              onChange={(e) =>
                onChange({ ...currentDirect, socialFacebook: e.target.value })
              }
              placeholder="https://facebook.com/patelmould"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              YouTube Channel URL
            </label>
            <input
              type="text"
              value={currentDirect.socialYouTube || ""}
              onChange={(e) =>
                onChange({ ...currentDirect, socialYouTube: e.target.value })
              }
              placeholder="https://youtube.com/@patelmould"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Instagram Profile URL
            </label>
            <input
              type="text"
              value={currentDirect.socialInstagram || ""}
              onChange={(e) =>
                onChange({ ...currentDirect, socialInstagram: e.target.value })
              }
              placeholder="https://instagram.com/patelmould"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#0056b3] focus:outline-none font-mono"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
