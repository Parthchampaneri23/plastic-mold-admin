import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProductSeo {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  canonicalUrl: string;
  schemaJson: string;
}

export interface IProductSpecification {
  label: string;
  value: string;
}

export interface ICustomTechSpec {
  label: string;
  value: string;
}

export interface IDetailedTechSpecs {
  moldType: string;
  cavityDetails: string;
  material: string;
  machineCompatibility: string;
  application: string;
  customSpecs?: ICustomTechSpec[];
}

export interface ICategoryItem {
  id: string; // e.g. 'preform-jar', 'isbm', 'ebm'
  slug: string;
  name: string; // e.g. 'Preform & Jar Mold'
  label: string; // e.g. 'PREFORM & JAR MOULDS'
  description?: string;
  image?: string;
}

export interface IProductFaq {
  question: string;
  answer: string;
}

export interface IProductItem {
  id: string; // unique identifier
  slug: string; // unique URL slug e.g. 'pet-preform-mold'
  name: string;
  category: string; // 'Preform & Jar Mold' | 'ISBM Mold' | 'EBM Mold'
  categorySlug: string; // 'preform-jar' | 'isbm' | 'ebm'
  shortDescription: string;
  overview: string;
  fullDescription: string;
  image: string;
  galleryImages: string[];
  keywords: string[];
  application: string;
  features: string[];
  specifications: IProductSpecification[];
  techSpecs: IDetailedTechSpecs;
  seo: IProductSeo;
  faqs?: IProductFaq[];
  order?: number;
}

export interface IProductsPageHero {
  badge: string;
  heading: string;
  headingHighlight: string;
  description: string;
  backgroundImage?: string;
}

export interface IProductPageContent extends Document {
  hero: IProductsPageHero;
  categories: ICategoryItem[];
  products: IProductItem[];
  updatedAt: Date;
}

const ProductSeoSchema = new Schema(
  {
    metaTitle: { type: String, default: "" },
    metaDescription: { type: String, default: "" },
    metaKeywords: { type: String, default: "" },
    canonicalUrl: { type: String, default: "" },
    schemaJson: { type: String, default: "" },
  },
  { _id: false }
);

const ProductSpecificationSchema = new Schema(
  {
    label: { type: String, default: "" },
    value: { type: String, default: "" },
  },
  { _id: false }
);

const DetailedTechSpecsSchema = new Schema(
  {
    moldType: { type: String, default: "" },
    cavityDetails: { type: String, default: "" },
    material: { type: String, default: "" },
    machineCompatibility: { type: String, default: "" },
    application: { type: String, default: "" },
    customSpecs: [
      {
        label: { type: String, default: "" },
        value: { type: String, default: "" },
      },
    ],
  },
  { _id: false }
);

const CategoryItemSchema = new Schema(
  {
    id: { type: String, required: true },
    slug: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
  },
  { _id: false }
);

const ProductItemSchema = new Schema(
  {
    id: { type: String, required: true },
    slug: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    categorySlug: { type: String, required: true },
    shortDescription: { type: String, default: "" },
    overview: { type: String, default: "" },
    fullDescription: { type: String, default: "" },
    image: { type: String, default: "" },
    galleryImages: [{ type: String }],
    keywords: [{ type: String }],
    application: { type: String, default: "" },
    features: [{ type: String }],
    specifications: [ProductSpecificationSchema],
    techSpecs: DetailedTechSpecsSchema,
    seo: { type: ProductSeoSchema, default: () => ({}) },
    faqs: [
      {
        question: { type: String, default: "" },
        answer: { type: String, default: "" },
      },
    ],
    order: { type: Number, default: 0 },
  },
  { _id: false }
);

const ProductPageContentSchema = new Schema<IProductPageContent>(
  {
    hero: {
      badge: { type: String, default: "PRECISION MOULD CATALOG" },
      heading: { type: String, default: "High-Performance Moulds Engineered for" },
      headingHighlight: { type: String, default: "Zero-Defect Production" },
      description: {
        type: String,
        default:
          "Explore Patel Mould Industries' comprehensive catalog of high-speed PET Preform, Single-Stage ISBM, and Extrusion Blow Moulds (EBM) engineered for beverage, cosmetic, pharma, and industrial packaging.",
      },
      backgroundImage: { type: String, default: "/product/product banner.png" },
    },
    categories: [CategoryItemSchema],
    products: [ProductItemSchema],
  },
  {
    timestamps: true,
  }
);

if (mongoose.models.ProductPageContent) {
  delete mongoose.models.ProductPageContent;
}

export const ProductPageContent: Model<IProductPageContent> =
  mongoose.model<IProductPageContent>("ProductPageContent", ProductPageContentSchema);
