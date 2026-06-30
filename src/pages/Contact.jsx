import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    visaType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Contact inquiry:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', country: '', visaType: '' });
    }, 4000);
  };

  const serviceSummaries = [
    { icon: '🎓', title: 'Study Visa', desc: 'USA, UK, Canada, Australia, Europe study permits' },
    { icon: '💼', title: 'Work Visa', desc: 'Skilled, Job Seeker & Employer-Sponsored work routes' },
    { icon: '🌐', title: 'PR & Immigration', desc: 'Canada Express Entry CRS, Australia SkillSelect PR' },
    { icon: '👥', title: 'Dependent Visa', desc: 'Spouse reunification, Parent super visa filings' },
    { icon: '🎯', title: 'Career Guidance', desc: 'University shortlists, SOP writing, Scholarship assistance' }
  ];

  return (
    <div className="contact-page-container">
      {/* Hero Header */}
      <section className="hero-section" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <h1 className="hero-title">Get In Touch</h1>
          <p className="hero-subtitle">
            Get in touch with us for a free consultation. Our team is ready to map your international pathway.
          </p>
        </div>
      </section>

      {/* Main consultation form section */}
      <section className="form-section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="form-grid">
            {/* Left side summaries */}
            <div className="form-info-side">
              <h2 style={{ textAlign: 'left', marginBottom: '0.5rem', color: '#111827' }}>Our Main Offerings</h2>
              <p className="form-info-desc">
                We guide you through the entire administrative sequence. Our advisory services cover a wide selection of visa streams:
              </p>

              <div className="form-info-side-list">
                {serviceSummaries.map((item, idx) => (
                  <div key={idx} className="info-item" style={{ marginBottom: '1.25rem' }}>
                    <span className="info-item-icon">{item.icon}</span>
                    <div>
                      <h4 className="info-item-title">{item.title}</h4>
                      <p className="info-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick contact info */}
              <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#ffffff', borderRadius: '14px', border: '1px solid #e5e7eb' }}>
                <h4 style={{ color: '#111827', marginBottom: '1rem', fontSize: '1rem' }}>Quick Contact</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a href="tel:+919676655959" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#374151', fontSize: '0.9rem', textDecoration: 'none' }}>
                    <span style={{ fontSize: '1.1rem' }}>📞</span> +91 96766 55959
                  </a>
                  <a href="mailto:info@atlasimmigration.com" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#374151', fontSize: '0.9rem', textDecoration: 'none' }}>
                    <span style={{ fontSize: '1.1rem' }}>✉️</span> info@atlasimmigration.com
                  </a>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#374151', fontSize: '0.9rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>⏰</span> Mon–Fri: 9AM – 6PM
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="form-wrapper glass-card">
              <h3 className="form-title">Send Us a Message</h3>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '1rem' }}>✅</span>
                  <h4 style={{ color: '#111827', fontSize: '1.5rem', margin: '0 0 0.75rem 0' }}>Query Sent!</h4>
                  <p style={{ color: '#6b7280', margin: 0 }}>We have successfully logged your callback request. Our visa desks will reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Contact Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="country">Preferred Country *</label>
                    <select
                      id="country"
                      name="country"
                      className="form-control"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Target Country</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Ireland">Ireland</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="visaType">Visa Category *</label>
                    <select
                      id="visaType"
                      name="visaType"
                      className="form-control"
                      value={formData.visaType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Visa Type</option>
                      <option value="Study Visa">Study Visa</option>
                      <option value="Work Visa">Work Visa</option>
                      <option value="Permanent Residency">Permanent Residency (PR)</option>
                      <option value="Dependent Visa">Dependent / Family Visa</option>
                      <option value="Tourist Visa">Tourist Visa</option>
                      <option value="Career Guidance">Career / SOP Counseling</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-pink" style={{ width: '100%', marginTop: '1rem' }}>
                    Submit Inquiry <span>→</span>
                  </button>

                  <a
                    href="https://wa.me/9676655959"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-cta"
                  >
                    <span className="whatsapp-icon">💬</span> Chat Directly on WhatsApp
                  </a>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section style={{ padding: '4rem 0', background: '#ffffff' }}>
        <div className="container">
          <h2 style={{ color: '#111827' }}>Visit Our Office</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            Find our regional headquarters. Drop in for face-to-face discussions and document verifications.
          </p>

          <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: '2rem' }}>
            <iframe
              title="Atlas Immigration Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1234567890!2d78.3800000!3d17.4900000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688bf8244a4abb!2sKukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '1.25rem' }}>
              📍 67/11, LIG Flats, Kukatpally, Phase-4, Telangana, Hyderabad, 500085
            </p>
            <a
              href="https://maps.app.goo.gl/i5QxtQcLmZQR4G376"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Open in Google Maps <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Metadata cards */}
      <section style={{ padding: '0 0 5rem 0', background: '#f8f7ff' }}>
        <div className="container">
          <div className="contact-info-grid">
            <div className="glass-card contact-info-card">
              <span className="contact-info-icon">📞</span>
              <h3 className="contact-info-title">Phone Support</h3>
              <p className="contact-info-val" style={{ margin: '0 0 1rem 0' }}>+91 96766 55959</p>
              <a href="tel:+919676655959" className="btn btn-pink" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>Call Advisor</a>
            </div>
            <div className="glass-card contact-info-card">
              <span className="contact-info-icon">✉️</span>
              <h3 className="contact-info-title">Email Inquiries</h3>
              <p className="contact-info-val" style={{ margin: '0 0 1rem 0' }}>info@atlasimmigration.com</p>
              <a href="mailto:info@atlasimmigration.com" className="btn btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>Send Email</a>
            </div>
            <div className="glass-card contact-info-card">
              <span className="contact-info-icon">🕒</span>
              <h3 className="contact-info-title">Working Hours</h3>
              <p className="contact-info-val" style={{ margin: 0 }}>Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="contact-info-val" style={{ margin: '4px 0 0 0', color: '#16a34a', fontWeight: 600 }}>Weekend: On Appointment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
