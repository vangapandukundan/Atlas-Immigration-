export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col">
            <span className="footer-logo-title">Atlas Immigration</span>
            <p className="footer-desc">
              Your trusted partner for seamless immigration journeys. We provide expert guidance for visas, study abroad programs, and settlement services to help you achieve your global dreams.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <span className="footer-col-title">Quick Links</span>
            <ul className="footer-links">
              <li><a href="#/" className="footer-link">Home</a></li>
              <li><a href="#/about" className="footer-link">About Us</a></li>
              <li><a href="#/services" className="footer-link">Services</a></li>
              <li><a href="#/countries" className="footer-link">Countries</a></li>
              <li><a href="#/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Key Visas */}
          <div className="footer-col">
            <span className="footer-col-title">Our Visas</span>
            <ul className="footer-links">
              <li><a href="#/services" className="footer-link">Study Visa</a></li>
              <li><a href="#/services" className="footer-link">Work Visa</a></li>
              <li><a href="#/services" className="footer-link">PR & Immigration</a></li>
              <li><a href="#/services" className="footer-link">Dependent Visa</a></li>
              <li><a href="#/services" className="footer-link">Tourist Visa</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <span className="footer-col-title">Contact Us</span>
            <div className="footer-contact-details">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📍</span>
                <span className="footer-desc">67/11, LIG Flats, Kukatpally, Phase-4, Telangana, Hyderabad, 500085</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                <a href="tel:+919676655959" className="footer-link">+91 96766 55959</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">✉️</span>
                <a href="mailto:info@atlasimmigration.com" className="footer-link">info@atlasimmigration.com</a>
              </div>
              <div className="footer-contact-item" style={{ marginTop: '0.25rem' }}>
                <span className="footer-contact-icon" style={{ color: '#4ade80' }}>🟢</span>
                <span className="footer-desc" style={{ fontWeight: 600, color: '#fff' }}>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <span>&copy; {new Date().getFullYear()} Atlas Immigration Services. All Rights Reserved.</span>
          <span>Your gateway to global opportunities since 2010.</span>
        </div>
      </div>
    </footer>
  );
}
