import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { captureLead } from '../utils/tracker';
import './LeadForm.css';

export default function LeadForm({ projectName = '', triggerLabel = 'Enquire Now' }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const fData = new FormData(e.target);
    const formData = {
      name: fData.get('name') || '',
      phone: fData.get('phone') || '',
      email: fData.get('email') || '',
      project: fData.get('project') || projectName || '',
      date: fData.get('date') || '',
      message: fData.get('message') || '',
    };

    captureLead('Project Enquiry Lead Form', formData);

    setSent(true);
    e.target.reset();
    setTimeout(() => {
      setSent(false);
      setOpen(false);
    }, 2500);
  };

  return (
    <>
      {/* Trigger button */}
      <button className="lf-trigger-btn" onClick={() => setOpen(true)}>
        {triggerLabel}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lf-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="lf-modal"
              initial={{ y: 60, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button className="lf-close" onClick={() => setOpen(false)}>✕</button>

              <div className="lf-header">
                <span className="lf-badge">FREE CONSULTATION</span>
                <h2>Book a Site Visit</h2>
                {projectName && <p className="lf-project">{projectName}</p>}
              </div>

              {sent ? (
                <div className="lf-success">
                  <span>✅</span>
                  <p>Thank you! Our team will contact you shortly.</p>
                </div>
              ) : (
                <form className="lf-form" onSubmit={handleSubmit}>
                  <div className="lf-row">
                    <div className="lf-group">
                      <label>Full Name *</label>
                      <input type="text" name="name" required placeholder="Enter your full name" />
                    </div>
                    <div className="lf-group">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" pattern="[0-9+\s]{10,15}" />
                    </div>
                  </div>

                  <div className="lf-row">
                    <div className="lf-group">
                      <label>Email Address</label>
                      <input type="email" name="email" placeholder="your@email.com" />
                    </div>
                    <div className="lf-group">
                      <label>Project Interest *</label>
                      <select name="project" required defaultValue={projectName || ''}>
                        <option value="" disabled>Select a project</option>
                        <option value="Voora One Sea">Voora One Sea</option>
                        <option value="Voora Agastya Heights">Voora Agastya Heights</option>
                        <option value="Voora Westside">Voora Westside</option>
                        <option value="Voora Beckford">Voora Beckford</option>
                        <option value="Voora Highway Haven">Voora Highway Haven</option>
                        <option value="Voora Vidyasagar T-Block">Voora Vidyasagar T-Block</option>
                        <option value="Voora Ocean's 27">Voora Ocean's 27</option>
                        <option value="Voora Tech Edge">Voora Tech Edge</option>
                      </select>
                    </div>
                  </div>

                  <div className="lf-group lf-full">
                    <label>Preferred Visit Date</label>
                    <input type="date" name="date" min={new Date().toISOString().split('T')[0]} />
                  </div>

                  <div className="lf-group lf-full">
                    <label>Message / Budget Range</label>
                    <textarea name="message" rows="3" placeholder="Tell us about your requirements…"></textarea>
                  </div>

                  <button type="submit" className="lf-submit">
                    Book Free Site Visit →
                  </button>
                  <p className="lf-disclaimer">
                    By submitting, you agree to be contacted by Voora Group regarding your enquiry.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}