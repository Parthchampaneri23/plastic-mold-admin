import mongoose, { Schema, Document, Model } from "mongoose";

export interface IInquiry extends Document {
  fullName: string;
  email: string;
  phone: string;
  moldCategory?: string;
  projectDetails: string;
  status: "pending" | "reviewed" | "contacted" | "closed";
  createdAt: Date;
  updatedAt: Date;
}

const InquirySchema = new Schema<IInquiry>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, default: "", trim: true },
    moldCategory: { type: String, default: "General / Precision Mould" },
    projectDetails: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "reviewed", "contacted", "closed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Inquiry: Model<IInquiry> =
  mongoose.models.Inquiry || mongoose.model<IInquiry>("Inquiry", InquirySchema);

