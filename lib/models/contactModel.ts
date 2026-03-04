import mongoose from "mongoose"

export interface contactObject {
    name: string,
    email: string,
    phone: string,
    service: string,
    message: string,
    company?: string
}

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    service: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    company: { type: String, trim: true }
}, { timestamps: true });

const Contact = mongoose.models.Contact || mongoose.model<contactObject>("Contact", contactSchema);

export default Contact;

