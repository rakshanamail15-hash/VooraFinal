import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Careers.css";
import { Flame, TrendingUp, Handshake, MapPin, FileText, ArrowUpRight, Check } from "lucide-react";

const SERVICE_ID = "service_gab56or";
const TEMPLATE_ID = "template_yfwihyf";
const PUBLIC_KEY = "TQYn-xZzXZNoLUCac";

// Cloudinary Configuration
const CLOUDINARY_UPLOAD_PRESET = "Voora Construction";
const CLOUDINARY_CLOUD_NAME = "tx6il9sl";
const pillars = [
    {
        icon: <Flame size={32} color="#bf953f" />,
        title: "Pushing Boundaries",
        body: "We don't settle for standard. Every project pushes the boundaries of design, sustainability, and community impact.",
    },
    {
        icon: <TrendingUp size={32} color="#bf953f" />,
        title: "Growth, Guaranteed",
        body: "From m   entorship to mastery — our deep investment in professional development means you'll never outgrow us.",
    },
    {
        icon: <Handshake size={32} color="#bf953f" />,
        title: "Visionary Community",
        body: "Work alongside experts who are as passionate about innovation and excellence as you are. Every day.",
    },
];

const stats = [
    { num: "18+", label: "Years of Excellence" },
    { num: "500+", label: "Projects Delivered" },
    { num: "1200+", label: "Families Homed" },
];

const departments = [
    "Architecture & Design",
    "Project Management",
    "Sales & Marketing",
    "Finance & Operations",
    "Legal & Compliance",
    "Technology",
    "Other",
];

const experienceLevels = [
    "0 – 2 years (Fresh / Junior)",
    "3 – 5 years (Mid-level)",
    "6 – 10 years (Senior)",
    "10+ years (Leadership)",
];

export default function VooraCareers() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        experience: "",
        message: "",
    });
    const [fileName, setFileName] = useState("");
    const [dragOver, setDragOver] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const fileInputRef = useRef(null);
    const formRef = useRef();

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) {
            setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
        }
    };


    const handleFile = (file) => {
        if (file) {
            setFileName(file.name);
            if (errors.resume) {
                setErrors((prev) => ({ ...prev, resume: "" }));
            }
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();

        let newErrors = {};

        if (!form.firstName || form.firstName.trim().length < 3) {
            newErrors.firstName = "Name must be at least 3 characters";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.email || !emailRegex.test(form.email)) {
            newErrors.email = "Valid email is required";
        }

        if (!form.phone || form.phone.replace(/\D/g, "").length < 10) {
            newErrors.phone = "Phone must be at least 10 digits";
        }

        if (!form.experience) {
            newErrors.experience = "Job Designation is required";
        }

        const fileInput = fileInputRef.current;
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            newErrors.resume = "Resume is required";
        } else {
            const file = fileInput.files[0];
            const ext = file.name.split('.').pop().toLowerCase();
            if (!['pdf', 'doc', 'docx'].includes(ext)) {
                newErrors.resume = "PDF/DOC/DOCX only";
            } else if (file.size > 10 * 1024 * 1024) {
                newErrors.resume = "Maximum 10MB allowed";
            }
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitError(false);

        try {
            // 1. Upload resume to Cloudinary
            const formData = new FormData();
            formData.append("file", fileInput.files[0]);
            formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

            const cloudinaryRes = await fetch(
                `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/raw/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!cloudinaryRes.ok) {
                const errData = await cloudinaryRes.json();
                console.error("Cloudinary upload error:", errData);
                throw new Error(errData.error?.message || "Failed to upload resume to Cloudinary");
            }

            const cloudinaryData = await cloudinaryRes.json();
            // Using the raw URL since Cloudinary can reject fl_attachment for PDFs
            const resume_url = cloudinaryData.secure_url;

            // 2. Send email via EmailJS with the resume URL
            const templateParams = {
                firstName: form.firstName,
                email: form.email,
                phone: form.phone,
                experience: form.experience,
                message: form.message,
                resume_url: resume_url,
                submitted_at: new Date().toLocaleString(),
            };

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            // 3. Reset form on success
            setSubmitted(true);
            setForm({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                role: "",
                experience: "",
                message: "",
            });
            setFileName("");
            if (fileInput) fileInput.value = "";
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="voora-root">
            {/* ── Hero ── */}
            <section className="v-hero section">
                <h2 className="section-title-white">
                    Dream Big,
                    <br className="br-only" />
                    <span className="accent"> Achieve Bigger</span>
                </h2>        <p className="v-hero-sub">
                    We're a team of innovative thinkers, passionate doers, and visionary
                    leaders. Come help us redefine the future of real estate.
                </p>
                <div className="v-pill">
                    <MapPin size={16} style={{ marginRight: '6px', verticalAlign: 'text-bottom' }} />
                    Shaping environments that inspire and endure
                </div>

                <div className="v-stat-row">
                    {stats.map((s) => (
                        <div className="v-stat" key={s.label}>
                            <span className="v-stat-num">{s.num}</span>
                            <span className="v-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Why Voora ── */}
            <section className="v-section">
                <div className="heading-main-center">
                    <div data-reveal="true" className=" is-visible">
                        <h2 className="section-title">
                            More than a workplace.
                            <br className="br-only" />
                            <span className="accent"> A movement.</span>
                        </h2>
                        <p>
                            We invest deeply in the people who build with us — because your career
                            trajectory is not just supported, it's actively driven forward.
                        </p>
                    </div>
                </div>

                <div className="v-pillars">
                    {pillars.map((p) => (
                        <div className="v-pillar" key={p.title}>
                            <div className="v-pillar-icon">{p.icon}</div>
                            <p className="v-pillar-title">{p.title}</p>
                            <p className="v-pillar-body">{p.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="v-divider" />

            {/* ── Form ── */}
            <section className="v-form-wrap">

                <div className="heading-main-center">
                    <div data-reveal="true" className=" is-visible">
                        <h2 className="section-title">
                            Begin Your
                            <br className="br-only" />
                            <span className="accent"> Journey</span>
                        </h2>

                        <p>
                            Fill in your details and attach your resume. Our team will
                            reach out with the right opportunity for you.
                        </p>
                    </div>
                </div>


                {!submitted ? (
                    <form className="v-form" ref={formRef} onSubmit={handleSubmit} noValidate>
                        <input type="hidden" name="submitted_at" value={new Date().toLocaleString()} />
                        <div className="v-form-grid">
                            <div className="v-field">
                                <label className="v-label" htmlFor="firstName">
                                    Name
                                </label>
                                <input
                                    className="v-input"
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    placeholder="Arjun"
                                    value={form.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && (
                                    <div style={{ color: "#dc2626", fontSize: "13px", marginTop: "6px" }}>
                                        {errors.firstName}
                                    </div>
                                )}
                            </div>

                            {/* Email */}
                            <div className="v-field">
                                <label className="v-label" htmlFor="email">
                                    Email address
                                </label>
                                <input
                                    className="v-input"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="arjun@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <div style={{ color: "#dc2626", fontSize: "13px", marginTop: "6px" }}>
                                        {errors.email}
                                    </div>
                                )}  
                            </div>

                            {/* Phone */}
                            <div className="v-field">
                                <label className="v-label" htmlFor="phone">
                                    Phone number
                                </label>
                                <input
                                    className="v-input"
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && (
                                    <div style={{ color: "#dc2626", fontSize: "13px", marginTop: "6px" }}>
                                        {errors.phone}
                                    </div>
                                )}
                            </div>


                            {/* Experience */}
                            <div className="v-field">
                                <label className="v-label" htmlFor="experience">
                                    Job Designation
                                </label>
                                <select
                                    className="v-select"
                                    id="experience"
                                    name="experience"
                                    value={form.experience}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>
                                        Select Job Designation
                                    </option>
                                    {experienceLevels.map((e) => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
                                {errors.experience && (
                                    <div style={{ color: "#dc2626", fontSize: "13px", marginTop: "6px" }}>
                                        {errors.experience}
                                    </div>
                                )}
                            </div>

                            {/* Message */}
                            <div className="v-field v-field--full">
                                <label className="v-label" htmlFor="message">
                                    Message{" "}
                                    <span className="v-label-optional">(optional)</span>
                                </label>
                                <textarea
                                    className="v-input v-textarea"
                                    id="message"
                                    name="message"
                                    rows={3}
                                    placeholder="Tell us what drives you and what you'd like to build at Voora…"
                                    value={form.message}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Resume upload */}
                            <div className="v-field v-field--full">
                                <label className="v-label">Resume / CV</label>
                                <div
                                    className={`v-upload-zone ${dragOver ? "v-upload-zone--active" : ""}`}
                                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                                    onDragLeave={() => setDragOver(false)}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <input
                                        ref={fileInputRef}
                                        name="resume"
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        style={{ display: "none" }}
                                        onChange={(e) => handleFile(e.target.files[0])}
                                    />
                                    <div className="v-upload-icon">
                                        <FileText size={32} color="#bf953f" />
                                    </div>
                                    <div className="v-upload-text">
                                        Drop your resume here or <span className="v-upload-link">click to browse</span>
                                    </div>
                                    <div className="v-upload-hint">PDF, DOC or DOCX — up to 10 MB</div>
                                    {fileName && (
                                        <div className="v-file-name">
                                            <Check size={16} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} />
                                            {fileName}
                                        </div>
                                    )}
                                </div>
                                {errors.resume && (
                                    <div style={{ color: "#dc2626", fontSize: "13px", marginTop: "6px" }}>
                                        {errors.resume}
                                    </div>
                                )}
                            </div>
                        </div>

                        {submitError && (
                            <div style={{ color: "#dc2626", fontSize: "14px", marginTop: "12px", textAlign: "center" }}>
                                Failed to submit application.<br />Please try again.
                            </div>
                        )}

                        <button type="submit" className="v-btn-primary" disabled={isSubmitting}>
                            <ArrowUpRight size={18} style={{ marginRight: '6px', verticalAlign: 'text-bottom' }} />
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                        </button>
                    </form>
                ) : (
                    <div className="v-success">
                        <div className="v-success-icon">
                            <Check size={48} color="#4caf50" />
                        </div>
                        <h3 className="v-success-title">Application submitted successfully.</h3>
                        <p className="v-success-body">
                            Thank you for reaching out. Our team will review your profile and
                            get back to you shortly.
                        </p>
                    </div>
                )}
            </section>

        </div>
    );
}