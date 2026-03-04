import connectDB from "@/lib/database/connectDbs";
import Contact, { contactObject } from "@/lib/models/contactModel";
import { sendEmail } from "@/utils/Nodemailer";
import { generateEmailTemplate, generateUserConfirmationTemplate } from "@/utils/emailTemplate";
import { NextRequest, NextResponse } from "next/server";

function isContactData(object: unknown): object is contactObject {
    if (object === null || object === undefined) return false;
    if (typeof object !== "object") return false;
    if (Array.isArray(object)) return false;

    const obj = object as Record<string, unknown>;

    if (
        (typeof obj.email !== "string" || obj.email.trim() === "") ||
        (typeof obj.name !== "string" || obj.name.trim() === "") ||
        (typeof obj.service !== "string" || obj.service.trim() === "") ||
        // phone is required in schema but sometimes marked optional in UI, keeping it required for consistency with schema
        (typeof obj.phone !== "string" || obj.phone.trim() === "") ||
        (typeof obj.message !== "string" || obj.message.trim() === "")
    ) {
        return false;
    }

    return true;
}

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const contactData = await req.json();

        if (!isContactData(contactData)) {
            return NextResponse.json({
                success: false,
                message: "Invalid Contact Data. Please fill all required fields."
            }, { status: 400 });
        }

        const { name, email, company, phone, service, message } = contactData;

        // 1. Save to Database
        const newContact = await Contact.create({
            name,
            email,
            company,
            phone,
            service,
            message
        });

        console.log("✅ Contact saved in DB:", newContact._id);

        // 2. Send Email to Admin
        const adminEmailHtml = generateEmailTemplate(name, message, service, company, phone);
        await sendEmail({
            to: process.env.ADMIN_EMAIL || "info@solvixcore.com",
            subject: `New Inquiry from ${name} - Solvix Core`,
            html: adminEmailHtml,
            text: `New contact form submission from ${name}. Email: ${email}`,
        });

        // 3. Send Confirmation Email to User
        const userEmailHtml = generateUserConfirmationTemplate(name);
        await sendEmail({
            to: email,
            subject: "We've received your message - Solvix Core",
            html: userEmailHtml,
            text: `Hi ${name}, thank you for reaching out! We'll get back to you soon.`,
        });

        return NextResponse.json({
            success: true,
            message: "Message sent successfully! We'll get back to you soon."
        }, { status: 201 });

    } catch (err: any) {
        console.error("❌ Error in contact API route:", {
            message: err.message,
            stack: err.stack
        });

        return NextResponse.json({
            success: false,
            message: "An internal server error occurred. Please try again later."
        }, { status: 500 });
    }
}