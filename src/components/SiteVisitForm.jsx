import React, { useState } from "react";
import { captureLead } from "../utils/tracker";
import "./SiteVisitForm.css";
import PhoneInput from "react-phone-input-2";

/**
 * SiteVisitForm – Centralized, reusable Site Visit enquiry form (SRD Architecture).
 *
 * Props:
 *   apiEndpoint {string}  – The POST endpoint for this specific project page.
 *   projectName {string}  – Human-readable project name (sent in the payload).
 */
export default function SiteVisitForm({ apiEndpoint, projectName = "General" }) {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    planDuration: "",
    locationPref: "",
    agreed: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const validateForm = () => {
    let newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile Number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Enter a valid mobile number";
    }

    // Designation
    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required";
    }

    // Preferred Duration
    if (!formData.planDuration) {
      newErrors.planDuration = "Please select duration";
    }

    // Preferred Location
    if (!formData.locationPref.trim()) {
      newErrors.locationPref = "Preferred location is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setError(null);
    setSuccess(false);

    const payload = {
      enquiry: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        designation: formData.designation,
        preferred_duration: formData.planDuration,
        preferred_location: formData.locationPref,
        project: projectName,
        submitted_at: new Date().toISOString(),
      },
    };

    captureLead('Site Visit Form', {
      ...formData,
      project: projectName
    });

    // Simulate network delay for UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      designation: "",
      planDuration: "",
      locationPref: "",
      agreed: false,
    });
    setLoading(false);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <>
      <div className="svf-wrapper">
        <div className="heading-main">
          <div data-reveal="true" className="active is-visible">

            <h2 className="section-title">
              Book Your <br className="br-only" />
              <span className="accent">Site Visit</span>
            </h2>
            <p>
              Your Perfect Home Awaits! Don't just view it online—visit the
              property and experience it yourself.
            </p>
          </div>
        </div>

        <div className="svf-card">
          {/* Header */}
          <div className="svf-header">
            <p className="svf-subtitle">
              Fill in your details and our team will get back to you shortly.
            </p>
          </div>

          {/* Form */}
          <form className="svf-form" onSubmit={handleSubmit} noValidate>
            {/* Row 1 */}
            <div className="svf-row">
              <div className="svf-field">
                <label htmlFor="svf-name">Full Name *</label>
                <input
                  id="svf-name"
                  type="text"
                  name="name"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <div
                    style={{
                      color: "#e53935",
                      fontSize: "13px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.name}
                  </div>
                )}
              </div>
              <div className="svf-field">
                <label htmlFor="svf-email">Email Address *</label>
                <input
                  id="svf-email"
                  type="email"
                  name="email"
                  placeholder="e.g. ramesh@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <div
                    style={{
                      color: "#e53935",
                      fontSize: "13px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            {/* Row 2 */}
            <div className="svf-row">
              <div className="svf-field">
                <label htmlFor="svf-phone">Mobile Number *</label>
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={(phone) => {
                    setFormData((prev) => ({
                      ...prev,
                      phone,
                    }));

                    setErrors((prev) => ({
                      ...prev,
                      phone: "",
                    }));
                  }}
                  enableSearch
                  inputStyle={{
                    width: "100%",
                    height: "48px",
                  }}
                  buttonStyle={{
                    border: "1px solid #ddd",
                  }}
                />
                {errors.phone && (
                  <div
                    style={{
                      color: "#e53935",
                      fontSize: "13px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.phone}
                  </div>
                )}
              </div>
              <div className="svf-field">
                <label htmlFor="svf-designation">Designation *</label>
                <input
                  id="svf-designation"
                  type="text"
                  name="designation"
                  placeholder="e.g. Software Engineer"
                  value={formData.designation}
                  onChange={handleChange}
                />
                {errors.designation && (
                  <div
                    style={{
                      color: "#e53935",
                      fontSize: "13px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.designation}
                  </div>
                )}
              </div>
            </div>

            {/* Row 3 */}
            <div className="svf-row">
              <div className="svf-field">
                <label htmlFor="svf-duration">Preferred Duration *</label>
                <select
                  id="svf-duration"
                  name="planDuration"
                  value={formData.planDuration}
                  onChange={handleChange}
                >
                  <option value="">Select duration</option>
                  <option value="immediate">Immediate</option>
                  <option value="1month">Within 1 Month</option>
                  <option value="3months">Within 3 Months</option>
                  <option value="6months">Within 6 Months</option>
                  <option value="12months">Within 12 Months</option>
                </select>
                {errors.planDuration && (
                  <div
                    style={{
                      color: "#e53935",
                      fontSize: "13px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.planDuration}
                  </div>
                )}
              </div>
              <div className="svf-field">
                <label htmlFor="svf-location">Preferred Location *</label>
                <input
                  id="svf-location"
                  type="text"
                  name="locationPref"
                  placeholder="e.g. Chennai, Nungambakkam"
                  value={formData.locationPref}
                  onChange={handleChange}
                />
                {errors.locationPref && (
                  <div
                    style={{
                      color: "#e53935",
                      fontSize: "13px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.locationPref}
                  </div>
                )}
              </div>
            </div>

            {/* Checkbox */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <input
                type="checkbox"
                id="svf-agreed"
                checked={formData.agreed}
                onChange={(e) => setFormData(prev => ({ ...prev, agreed: e.target.checked }))}
                required
                style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#d4af37' }}
              />
              <label htmlFor="svf-agreed" style={{ fontSize: '14px', color: '#64748b', cursor: 'pointer', lineHeight: '1.4' }}>
                I authorize Uttaranchal University and its representative to contact me with updates and notifications via Email,SMS , WhatsApp, and Call. This will Override the registry on DND / NDNC.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`svf-submit${loading ? " svf-loading" : ""}`}
              disabled={loading || !formData.agreed}
            >
              {loading ? (
                <span className="svf-spinner-wrap">
                  <span className="svf-spinner" />
                  Submitting…
                </span>
              ) : (
                "Book Your Site Visit →"
              )}
            </button>

            {/* Feedback */}
            {success && (
              <div className="svf-success">
                ✅ Thank you! We'll contact you shortly to confirm your visit.
              </div>
            )}
            {error && (
              <div className="svf-error">
                ⚠️ {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}