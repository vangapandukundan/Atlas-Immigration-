import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { value: '98%', label: 'Success Rate', desc: 'Industry-leading visa approval rating' },
    { value: '15+ Yrs', label: 'Experience', desc: 'Trusted professional migration expertise' },
    { value: '50+', label: 'Expert Consultants', desc: 'Registered and dedicated professionals' },
    { value: '30+', label: 'Countries', desc: 'Global immigration & schooling programs' }
  ];

  const milestones = [
    { step: '01', title: 'The Beginning', subtitle: 'Founded', desc: 'Atlas Immigration Service was founded with a clear vision: to simplify the complex visa and relocation process for individuals and families worldwide.' },
    { step: '02', title: 'First Major Success', subtitle: '100+ Clients Helped', desc: 'Successfully guided over 100 families and students to their dream destinations, cementing our early reputation for high integrity and client success.' },
    { step: '03', title: 'Expansion Era', subtitle: '5 Cities', desc: 'Expanded physical operations to five major administrative hubs, bringing personalized counselling closer to regional applicant communities.' },
    { step: '04', title: 'Digital Innovation', subtitle: 'Digital Platform Launch', desc: 'Launched our modern online portal. Enabled clients to securely upload files, track application timelines, and consult digital experts anywhere on the globe.' },
    { step: '05', title: 'Global Recognition', subtitle: 'Industry Leader', desc: 'Recognized as one of the country\'s top-tier consultant firms, celebrating over 10,000 successful visa approvals across study, work, and permanent residency.' }
  ];

  const teamMembers = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', initials: 'RK', bio: '20+ years experience in international immigration law and visa consulting.' },
    { name: 'Priya Nair', role: 'Head of Study Visas', initials: 'PN', bio: 'Expert in US, UK, Canada & Australia student visa pathways.' },
    { name: 'Arjun Mehta', role: 'PR & Immigration Lead', initials: 'AM', bio: 'Specialist in Canada Express Entry and Australia SkillSelect processes.' },
    { name: 'Sindhu Rao', role: 'Client Success Manager', initials: 'SR', bio: 'Dedicated to ensuring every client has a smooth and stress-free journey.' }
  ];

  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            About Atlas Immigration
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hero-subtitle"
          >
            Your gateway to global opportunities. With over 15 years of industry excellence, we make international migration simple, transparent, and successful.
          </motion.p>
        </div>
      </section>

      {/* Impact Stats Grid */}
      <section style={{ padding: '4rem 0', background: '#f8f7ff' }}>
        <div className="container">
          <h2 style={{ color: '#111827', textAlign: 'center', marginBottom: '0.25rem' }}>Our Impact in Numbers</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            Discover the metrics that define our success and our commitment to helping clients build new beginnings.
          </p>

          <motion.div 
            className="impact-stats"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="impact-stat-card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -5 }}
              >
                <span className="impact-stat-num">{stat.value}</span>
                <span className="impact-stat-label">{stat.label}</span>
                <span className="impact-stat-desc">{stat.desc}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Foundation - Tabs */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container">
          <h2>Our Foundation</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            We are driven by a deep sense of responsibility. Explore the core principles that support every single client folder we submit.
          </p>

          <div className="tabs-container">
            {['mission', 'vision', 'values'].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                style={{ position: 'relative' }}
              >
                Our {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="aboutTabUnderline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'var(--primary)',
                      borderRadius: '3px'
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="tab-content" style={{ minHeight: '220px' }}>
            <AnimatePresence mode="wait">
              {activeTab === 'mission' && (
                <motion.div 
                  key="mission"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card" 
                  style={{ padding: '2.5rem', textAlign: 'left' }}
                >
                  <h3 style={{ color: '#111827', fontSize: '1.6rem', marginBottom: '1rem' }}>Empowering Dreams Worldwide</h3>
                  <p style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: '1.75', margin: 0 }}>
                    Our Mission is to empower individuals and families with seamless immigration solutions, turning aspirations of global mobility into reality. We are committed to providing personalized guidance that ensures every client's journey is successful and stress-free. By offering honest advice and strict document reviews, we protect our applicants from common pitfalls and streamline their pathways to settlement.
                  </p>
                </motion.div>
              )}

              {activeTab === 'vision' && (
                <motion.div 
                  key="vision"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card" 
                  style={{ padding: '2.5rem', textAlign: 'left' }}
                >
                  <h3 style={{ color: '#111827', fontSize: '1.6rem', marginBottom: '1rem' }}>Redefining Global Relocation</h3>
                  <p style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: '1.75', margin: 0 }}>
                    Our Vision is to be the leading global immigration consultancy, recognized for our absolute integrity, client-centric values, and unmatched record of success. We seek to build a borderless framework of opportunity where talent, research, and family dreams find their perfect global home. We continuously refine our technological systems to adapt to changing immigration laws dynamically.
                  </p>
                </motion.div>
              )}

              {activeTab === 'values' && (
                <motion.div 
                  key="values"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card" 
                  style={{ padding: '2.5rem', textAlign: 'left' }}
                >
                  <h3 style={{ color: '#111827', fontSize: '1.6rem', marginBottom: '1rem' }}>Our Five Core Values</h3>
                  <p style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1rem' }}>
                    We hold ourselves to the highest ethical benchmarks. Our client relationships are anchored on:
                  </p>
                  <ul style={{ color: '#6b7280', paddingLeft: '1.5rem', margin: 0, lineHeight: '1.9' }}>
                    <li><strong style={{ color: '#374151' }}>Absolute Transparency:</strong> No hidden costs, no unrealistic promises.</li>
                    <li><strong style={{ color: '#374151' }}>Excellence:</strong> Deep subject matter knowledge and rigorous document reviews.</li>
                    <li><strong style={{ color: '#374151' }}>Empathy:</strong> We recognize that behind every file is a life story and family dream.</li>
                    <li><strong style={{ color: '#374151' }}>Innovation:</strong> Deploying digital tools for smooth updates and processing checks.</li>
                    <li><strong style={{ color: '#374151' }}>Collaboration:</strong> Working closely with academic networks, employers, and immigration agencies.</li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section style={{ padding: '5rem 0', background: '#f8f7ff' }}>
        <div className="container">
          <h2>Meet Our Expert Team</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            Our certified immigration consultants bring decades of combined experience across every visa category and destination.
          </p>

          <motion.div 
            className="team-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={idx} 
                className="glass-card" 
                style={{ textAlign: 'center', padding: '2rem 1.5rem' }}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -8 }}
              >
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                  fontSize: '1.25rem', fontWeight: '800', color: '#ffffff',
                  boxShadow: '0 6px 18px rgba(139, 92, 246, 0.3)'
                }}>
                  {member.initials}
                </div>
                <h3 style={{ color: '#111827', fontSize: '1rem', marginBottom: '0.2rem' }}>{member.name}</h3>
                <p style={{ color: '#7c3aed', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.75rem' }}>{member.role}</p>
                <p style={{ color: '#6b7280', fontSize: '0.82rem', lineHeight: '1.5', margin: 0 }}>{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container">
          <h2>Our Journey of Excellence</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            Discover the key milestones that shaped our growth, expansion, and service offerings.
          </p>

          <motion.div 
            className="milestones-timeline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
          >
            {milestones.map((m, idx) => (
              <motion.div 
                key={idx} 
                className="milestone-item"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                }}
              >
                <span className="milestone-year">{m.step}</span>
                <div>
                  <h3 className="milestone-title">
                    {m.title}
                    <span style={{ fontSize: '0.88rem', color: '#7c3aed', fontWeight: 600, marginLeft: '0.5rem' }}>— {m.subtitle}</span>
                  </h3>
                  <p className="milestone-desc">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Box */}
      <section style={{ padding: '3rem 0 6rem 0', background: '#f8f7ff' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-banner" 
            style={{ margin: 0 }}
          >
            <h3 style={{ fontSize: '2rem', color: '#111827', marginBottom: '1rem' }}>Start Your Journey with Atlas</h3>
            <p className="cta-banner-text">
              Join thousands of students, professionals, and families who have successfully settled abroad through our guidance.
            </p>
            <div className="cta-banner-actions">
              <a href="#/contact" className="btn btn-pink">Get Free Consultation <span>→</span></a>
              <a href="#/services" className="btn btn-secondary">Explore Visa Services</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
