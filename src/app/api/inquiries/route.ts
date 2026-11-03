import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Inquiry } from "@/models/Inquiry";

// Default seed inquiries if none exist yet
const DEFAULT_INQUIRIES = [
  {
    fullName: "Rajesh Sharma",
    email: "rajesh.sharma@apexpolymers.com",
    phone: "+91 98251 43210",
    moldCategory: "PET Preform & Jar Mould",
    projectDetails: "Need 48-cavity hot runner PET preform mould for 28mm PCO 1881 water bottles. Cycle time target < 9.5 sec.",
    status: "pending",
    createdAt: new Date(Date.now() - 1000 * 60 * 35), // 35 minutes ago
  },
  {
    fullName: "Ananya Deshmukh",
    email: "a.deshmukh@omnipack.co.in",
    phone: "+91 97234 88765",
    moldCategory: "Single-Stage ISBM Mould",
    projectDetails: "RFQ for 4-cavity ISBM container moulds (Aoki / Nissei ASB compatible) for 250ml pharmaceutical syrup bottles.",
    status: "reviewed",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
  },
  {
    fullName: "Michael Van der Berg",
    email: "m.berg@eurocaptech.de",
    phone: "+49 89 2441 5920",
    moldCategory: "Extrusion Blow Mould (EBM)",
    projectDetails: "Quotation requested for 5L HDPE Jerrycan extrusion blow mould with deflashing unit and interchangeable neck inserts.",
    status: "contacted",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 18), // 18 hours ago
  },
  {
    fullName: "Vikram Singhania",
    email: "vikram@sunshinebeverages.in",
    phone: "+91 98980 11223",
    moldCategory: "PET Preform & Jar Mould",
    projectDetails: "Wide-mouth jar mould tooling for 83mm neck confectionery containers, 12-cavity configuration.",
    status: "pending",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26), // 1 day ago
  },
  {
    fullName: "Suresh Patel",
    email: "suresh@vadodara-packaging.com",
    phone: "+91 94260 55432",
    moldCategory: "Extrusion Blow Mould (EBM)",
    projectDetails: "Multi-cavity EBM bottle mould for 500ml lubricant motor oil containers with view strip tooling.",
    status: "reviewed",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
  },
];

export async function GET() {
  try {
    await connectDB();

    let count = await Inquiry.countDocuments();
    if (count === 0) {
      await Inquiry.insertMany(DEFAULT_INQUIRIES);
    }

    const inquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(50).lean();
    const totalCount = await Inquiry.countDocuments();

    return NextResponse.json({
      success: true,
      data: inquiries,
      totalCount,
    });
  } catch (error: any) {
    console.error("GET /api/inquiries error:", error);
    // Graceful fallback to default in-memory list if DB temporarily unavailable
    return NextResponse.json({
      success: true,
      data: DEFAULT_INQUIRIES,
      totalCount: DEFAULT_INQUIRIES.length,
    });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();

    const { fullName, email, phone, moldCategory, projectDetails } = body;
    if (!fullName || !email || !projectDetails) {
      return NextResponse.json(
        { success: false, message: "Full Name, Email, and Project Details are required." },
        { status: 400 }
      );
    }

    const newInquiry = await Inquiry.create({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: (phone || "").trim(),
      moldCategory: moldCategory || "General / Precision Mould",
      projectDetails: projectDetails.trim(),
      status: "pending",
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry saved successfully",
      data: newInquiry,
    });
  } catch (error: any) {
    console.error("POST /api/inquiries error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Failed to record inquiry" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: "ID and status are required." },
        { status: 400 }
      );
    }

    const updated = await Inquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      message: "Inquiry status updated",
      data: updated,
    });
  } catch (error: any) {
    console.error("PATCH /api/inquiries error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Failed to update inquiry status" },
      { status: 500 }
    );
  }
}

