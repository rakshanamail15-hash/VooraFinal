import React from "react";
import "./PrivacyPolicy.css";
import { ShieldCheck, Lock, FileText, Globe, Bell, Mails, Settings, RefreshCcw } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="privacy-root">
            {/* ── Hero ── */}
            <section className="privacy-hero">
                <div className="privacy-hero-content">
                    <div className="privacy-badge">
                        <ShieldCheck size={18} />
                        <span>Trust & Transparency</span>
                    </div>
                    <h1 className="privacy-title">
                        Safeguarding Your <span className="accent">Privacy</span>
                    </h1>
                    <p className="privacy-hero-sub">
                        At Voora Property Developers, we are committed to protecting the privacy and security of our valued customers. This privacy policy outlines how we collect, use, and safeguard the information you provide when engaging with our website and services.
                    </p>
                </div>
            </section>

            {/* ── Content ── */}
            <section className="privacy-content-wrap">
                <div className="privacy-container">

                    <div className="privacy-block">
                        <div className="privacy-block-header">
                            <div className="privacy-icon"><FileText size={28} /></div>
                            <h3>Information We Collect</h3>
                        </div>
                        <p>
                            When you voluntarily interact with our website, such as by sending us an email or filling out a form, we retain this information to respond to your inquiries effectively. The specific data we may collect includes your name, email address, and phone number. Please note that you may visit our website anonymously without providing any personal information.
                        </p>
                    </div>

                    <div className="privacy-block">
                        <div className="privacy-block-header">
                            <div className="privacy-icon"><Bell size={28} /></div>
                            <h3>Consent and Use of Personal Data</h3>
                        </div>
                        <p>
                            By submitting your personal information through our website, you grant us permission to use, process, and store this data in accordance with this privacy policy. We reserve the right to contact you via call, SMS, email, or WhatsApp regarding our products and offers, even if your number has an active DND (Do Not Disturb) registration.
                        </p>
                    </div>

                    <div className="privacy-block">
                        <div className="privacy-block-header">
                            <div className="privacy-icon"><Lock size={28} /></div>
                            <h3>Safeguarding Your Data</h3>
                        </div>
                        <p>
                            The security of your personal data is of the utmost importance to us. We have implemented a range of robust strategies, controls, and measures to ensure the confidentiality and integrity of your information. These security measures are continuously reviewed and updated to keep pace with evolving threats and technological advancements.
                        </p>
                    </div>

                    <div className="privacy-block">
                        <div className="privacy-block-header">
                            <div className="privacy-icon"><Globe size={28} /></div>
                            <h3>Cookie Policy</h3>
                        </div>
                        <p>
                            Like many websites, Voora Property Developers utilises cookies to enhance your browsing experience. Cookies are small text files stored on your device and help us understand how you interact with our website, allowing us to optimise and improve our services.
                        </p>
                    </div>

                    <div className="privacy-block">
                        <div className="privacy-block-header">
                            <div className="privacy-icon"><ShieldCheck size={28} /></div>
                            <h3>Our Commitment to Privacy</h3>
                        </div>
                        <p>At Voora Property Developers, we are committed to the following principles regarding your personal data:</p>
                        <ul className="privacy-list">
                            <li>Keep your personal data safe and process it only on a valid legal basis.</li>
                            <li>Maintaining accurate records and correcting any inaccurate personal data.</li>
                            <li>Deleting your personal data once it is no longer needed for the purpose for which it was collected.</li>
                            <li>Assisting you in accessing your personal data upon request.</li>
                            <li>Not selling your personal data to third parties.</li>
                            <li>Providing options for you to manage and review your marketing preferences.</li>
                        </ul>
                    </div>

                    <div className="privacy-block">
                        <div className="privacy-block-header">
                            <div className="privacy-icon"><Settings size={28} /></div>
                            <h3>Third-Party Social Media Services</h3>
                        </div>
                        <p>
                            Voora Property Developers allows you to create an account and log in using various third-party social media services, such as Google, Facebook, Twitter, LinkedIn, and Instagram. If you choose to register or grant us access through one of these services, we may collect personal data that is associated with your social media account, such as your name, email address, and social media activities.
                        </p>
                    </div>

                    <div className="privacy-block">
                        <div className="privacy-block-header">
                            <div className="privacy-icon"><Globe size={28} /></div>
                            <h3 >Links to Other Websites</h3>
                        </div>
                        <p>
                            Our website may contain links to other sites not operated by Voora Property Developers. We have no control over the content, privacy policies, or practices of these third-party websites, and we strongly advise reviewing the privacy policies of any site you visit.
                        </p>
                    </div>

                    <div className="privacy-block">
                        <div className="privacy-block-header">
                            <div className="privacy-icon"><RefreshCcw size={28} /></div>
                            <h3>Changes to the Privacy Policy</h3>
                        </div>
                        <p>
                            Voora Property Developers reserves the right to update this privacy policy from time to time. We encourage you to periodically review this page to stay informed about any changes and ensure you are comfortable with our privacy practices.
                        </p>
                        <p>
                            By using our website and services, you acknowledge and agree to the terms of this privacy policy. Your continued use of our platform signifies your acceptance of these guidelines.
                        </p>
                    </div>

                    <div className="privacy-block">
                        <div className="privacy-block-header">
                            <div className="privacy-icon"><Mails size={28} /></div>
                            <h3>Contact Us</h3>
                        </div>
                        <p>
                            If you have any questions or concerns regarding this privacy policy, please contact us at <strong>vpd@voora.co.in</strong>. We value your trust and are committed to addressing any privacy-related inquiries you may have.
                        </p>
                    </div>

                    <div className="privacy-block">
                        <div className="privacy-block-header">
                            <div className="privacy-icon"><Mails size={28} /></div>
                            <h3>Changes to the Privacy Policy</h3>
                        </div>
                        <p>
                            Voora Property Developers reserves the right to update this privacy policy from time to time. We encourage you to periodically review this page to stay informed about any changes and ensure you are comfortable with our privacy practices.                        </p>
                        <p>By using our website and services, you acknowledge and agree to the terms of this privacy policy. Your continued use of our platform signifies your acceptance of these guidelines.</p>
                        <p>At Voora Property Developers, we are dedicated to building lasting relationships with our customers based on trust and transparency. We are committed to safeguarding your personal data and ensuring your privacy is protected throughout your journey with us.</p> </div>
                </div>
            </section>
        </div>
    );
}
