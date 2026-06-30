import { useState } from 'react';

export default function Career() {
  const [perkTab, setPerkTab] = useState('growth');
  const [journeyTab, setJourneyTab] = useState('app');
  const [canadaTab, setCanadaTab] = useState('ee');
  const [applyJob, setApplyJob] = useState(null);
  const [applySubmitted, setApplySubmitted] = useState(false);

  const jobs = [
    { id: 1, title: 'MERN Stack Developer', dept: 'Development', loc: 'Hyderabad, India', type: 'Full-time', desc: 'Responsible for building, managing, and optimizing our client-facing digital application platforms. You will handle database structures, security audits, and clean React responsive user interfaces.' },
    { id: 2, title: 'Software Developer', dept: 'IT Systems', loc: 'Hyderabad, India', type: 'Full-time', desc: 'Focuses on integrating back-end services, creating automated script testing pipelines, and maintaining core API modules for our migration assessment tools.' }
  ];

  const benefitsData = {
    growth: { title: 'Professional Growth', sub: 'Continuous learning and career development paths', items: ['Annual training budget of $2,000 for certifications and professional development courses.', 'Structured mentorship program pairing you with senior immigration experts.', 'Full support, study guidance, and fee sponsorships for RCIC accreditation.', 'Clear career progression pathways reviewed bi-annually.'] },
    health: { title: 'Health & Wellness', sub: 'Supporting your physical and mental well-being', items: ['Premium family health cover including dental and optical care.', 'Annual comprehensive health checkup allowance.', 'Access to physical fitness memberships and gym discounts.', '24/7 confidential employee mental health and counselling support program.'] },
    balance: { title: 'Work-Life Balance', sub: 'Time to rest, recharge, and work flexibly', items: ['Generous paid annual leave starting at 20 days + public holidays.', 'Flexible working hours with core online hours overlap.', 'Hybrid and remote work arrangements based on roles.', 'Paid parental leave and emergency family care days.'] },
    env: { title: 'Great Environment', sub: 'Sleek workspaces and collaborative team spirit', items: ['Modern, light-filled office layouts with premium ergonomic setups.', 'Free catered weekly lunches, fresh fruits, and artisan coffees.', 'Regular team-building events, annual offsite retreats, and festive parties.', 'Collaborative break rooms equipped with brainstorm tools and casual seating.'] }
  };

  const journeySteps = {
    app: { title: 'Application', sub: 'First impressions matter', details: 'Begin your journey with a thoughtful application that showcases your unique talents, coding portfolios, or advisory credentials.', time: '15-20 minutes', docs: 'Resume & Cover Letter', response: 'Within 3 business days', quote: 'The application process was straightforward and allowed me to truly express my passion for helping others.', author: 'Sarah K. (Senior Immigration Consultant)' },
    eval: { title: 'Evaluation', sub: 'Demonstrate your capabilities', details: 'We evaluate your alignment with the role through structured conversations. For developer positions, this includes a short, non-complex coding task.', time: '1-2 hours', docs: 'Case Study / Skill assessment', response: 'Within 5 business days', quote: 'The assessment was very practical and mirrored real day-to-day challenges of our clients.', author: 'Nithin P. (MERN Stack Lead)' },
    connect: { title: 'Connection', sub: 'Meet the team and visit our workspace', details: 'Interact with potential peers, get a tour of our office (or a virtual equivalent), and run through an informal Q&A session.', time: '30-45 minutes', docs: 'Casual conversation', response: 'Within 2 business days', quote: 'Meeting the team before accepting the offer made me certain about joining the Atlas family.', author: 'Neha S. (IT Business Analyst)' },
    integrate: { title: 'Integration', sub: 'Welcome to your new home', details: 'A comprehensive onboarding process with an assigned workspace buddy, training videos, tool introductions, and your first 90-day checklist.', time: '1st week', docs: 'Signed contract & onboarding guide', response: 'Immediate placement', quote: 'My mentor helped me adapt to corporate workflow guidelines quickly without feeling overwhelmed.', author: 'Amit K. (Software Developer)' }
  };

  const canadaData = {
    ee: { title: 'Express Entry', rating: '4.9/5 Rating', desc: 'Fast-track immigration pathways for skilled workers through Canada\'s points-based registry system. Our experts optimize Comprehensive Ranking System (CRS) variables.', offer: ['Comprehensive CRS evaluation', 'Profile optimization', 'NOC code classification support', 'Post-ITA (Invitation to Apply) file compilation'], stats: { success: '98% Approval', time: '6 Months Avg', clients: '2000+ Cases' } },
    pnp: { title: 'Provincial Nominee Program', rating: '4.8/5 Rating', desc: 'Province-specific immigration streams targeting specific job classifications, trades, or graduates. Ideal for applicants with local links.', offer: ['Provincial stream eligibility checks', 'PNP application filing', 'Job offer validation reviews', 'Expression of Interest (EOI) submissions'], stats: { success: '97% Approval', time: '8-12 Months Avg', clients: '1500+ Cases' } },
    study: { title: 'Study Permits', rating: '4.9/5 Rating', desc: 'Acquire study permits and visas to attend Designated Learning Institutions (DLI). We help secure admissions and post-grad work permits (PGWP).', offer: ['DLI shortlisting and admission assistance', 'Study plan & Statement of Purpose reviews', 'GIC account opening guidance', 'Visa folder filing'], stats: { success: '99% Approval', time: '1-2 Months Avg', clients: '3500+ Cases' } },
    family: { title: 'Family Sponsorship', rating: '4.7/5 Rating', desc: 'Sponsor family members to settle in Canada as permanent residents. Covers spouse, conjugal partner, dependent child, or parent categories.', offer: ['Sponsor eligibility verification', 'Relationship authenticity documentation', 'Application file layout', 'Sponsorship review correspondence'], stats: { success: '98% Approval', time: '12 Months Avg', clients: '1000+ Cases' } }
  };

  const handleApplyClick = (job) => { setApplyJob(job); setApplySubmitted(false); };
  const handleApplySubmit = (e) => { e.preventDefault(); setApplySubmitted(true); setTimeout(() => setApplyJob(null), 3000); };

  const C = '#111827';   // dark text
  const M = '#6b7280';   // muted
  const P = '#7c3aed';   // primary

  return (
    <div className="career-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Join Our Team of Experts<br />Shape Futures. Build Your Career.</h1>
          <p className="hero-subtitle">At Atlas, we guide life-changing journeys. Join a team where your expertise and code forge new beginnings, making a direct global impact.</p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}>View Open Positions</button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('why-atlas').scrollIntoView({ behavior: 'smooth' })}>Explore Our Culture</button>
          </div>
        </div>
      </section>

      {/* Why Choose Atlas */}
      <section style={{ padding: '5rem 0', background: '#f8f7ff' }} id="why-atlas">
        <div className="container">
          <h2 style={{ color: C }}>Why Choose Atlas?</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">More than just a job — it's a commitment to professional growth, collaboration, and helping families achieve their dreams.</p>
          <div className="why-grid">
            {[
              { icon: '🎓', title: 'Become an Industry Expert', desc: 'We support your professional journey with constant workshops, compliance updates, and finance aid for immigration registry training.' },
              { icon: '🤝', title: 'Create Life-Changing Impact', desc: 'Every file and portal code you construct directly bridges a family\'s dream to reality. Witness the deep satisfaction of client success.' },
              { icon: '🌟', title: 'Thrive in a Balanced Team', desc: 'We value your mental bandwidth. Enjoy generous vacation slots, team celebrations, wellness subsidies, and hybrid flexible timing.' }
            ].map((item, idx) => (
              <div key={idx} className="why-card glass-card">
                <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                <h3 style={{ color: C, fontSize: '1.2rem', margin: '0.85rem 0 0.5rem 0' }}>{item.title}</h3>
                <p style={{ color: M, fontSize: '0.875rem', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }} id="openings">
        <div className="container">
          <h2 style={{ color: C }}>Open Positions</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">We are looking for dedicated individuals who want to craft software systems, manage pipelines, and advise global applicants.</p>
          <div className="jobs-grid">
            {jobs.map((job) => (
              <div key={job.id} className="job-card glass-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <h3 style={{ color: C, margin: '0 0 0.25rem 0', fontSize: '1.15rem' }}>{job.title}</h3>
                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <span style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: P, padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 700 }}>{job.dept}</span>
                      <span style={{ color: M, fontSize: '0.78rem' }}>📍 {job.loc}</span>
                    </div>
                  </div>
                  <span style={{ background: '#f3f4f6', border: '1px solid #e5e7eb', padding: '0.3rem 0.75rem', borderRadius: '6px', fontSize: '0.8rem', color: M, fontWeight: 600 }}>{job.type}</span>
                </div>
                <p style={{ color: M, fontSize: '0.875rem', lineHeight: '1.55', marginBottom: '1.25rem' }}>{job.desc}</p>
                <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => handleApplyClick(job)}>Apply Now →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section style={{ padding: '5rem 0', background: '#f8f7ff' }}>
        <div className="container">
          <h2 style={{ color: C }}>Benefits & Perks</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">We prioritize our team's growth and health, so they can support our clients effectively.</p>
          <div className="tabs-container" style={{ maxWidth: '600px' }}>
            {Object.keys(benefitsData).map((key) => (
              <button key={key} className={`tab-btn ${perkTab === key ? 'active' : ''}`} onClick={() => setPerkTab(key)}>{benefitsData[key].title}</button>
            ))}
          </div>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '2.5rem' }}>
            <h3 style={{ color: C, fontSize: '1.5rem', marginBottom: '0.25rem' }}>{benefitsData[perkTab].title}</h3>
            <p style={{ color: P, fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem' }}>{benefitsData[perkTab].sub}</p>
            <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
              {benefitsData[perkTab].items.map((item, idx) => (
                <li key={idx} style={{ color: M, fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Your Journey With Us */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container">
          <h2 style={{ color: C }}>Your Journey With Us</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">Our assessment process is structured to be fast, conversational, and transparent. Here is what to expect.</p>
          <div className="tabs-container" style={{ maxWidth: '560px' }}>
            {Object.keys(journeySteps).map((key) => (
              <button key={key} className={`tab-btn ${journeyTab === key ? 'active' : ''}`} onClick={() => setJourneyTab(key)}>{journeySteps[key].title}</button>
            ))}
          </div>
          <div className="glass-card" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'left', padding: '2.5rem' }}>
            <h3 style={{ color: C, margin: '0 0 0.25rem 0', fontSize: '1.5rem' }}>{journeySteps[journeyTab].title}</h3>
            <p style={{ color: P, fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.25rem' }}>{journeySteps[journeyTab].sub}</p>
            <p style={{ color: M, marginBottom: '1.5rem', lineHeight: '1.65', fontSize: '0.9rem' }}>{journeySteps[journeyTab].details}</p>
            <div className="stats-grid-3col" style={{ background: '#f8f7ff', padding: '1rem 1.25rem', borderRadius: '10px', border: '1px solid #e5e7eb', marginBottom: '1.5rem' }}>
              {[['DURATION', journeySteps[journeyTab].time], ['FILE / REVIEW', journeySteps[journeyTab].docs], ['RESPONSE', journeySteps[journeyTab].response]].map(([label, val]) => (
                <div key={label}>
                  <span style={{ fontSize: '0.7rem', color: M, display: 'block', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
                  <span style={{ fontSize: '0.88rem', color: C, fontWeight: 600 }}>{val}</span>
                </div>
              ))}
            </div>
            <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '1rem', fontStyle: 'italic', color: M }}>
              "{journeySteps[journeyTab].quote}"
              <span style={{ display: 'block', fontSize: '0.8rem', color: P, fontStyle: 'normal', marginTop: '0.25rem', fontWeight: 600 }}>— {journeySteps[journeyTab].author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Atlas Grid */}
      <section style={{ padding: '5rem 0', background: '#f8f7ff' }}>
        <div className="container">
          <h2 style={{ color: C }}>Life at Atlas</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">A small glimpse into our team interactions, workshop days, and collaborative workspaces.</p>
          <div className="life-grid">
            {[
              { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=60', label: 'Workspace Layout', span: 2 },
              { img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60', label: 'Collaborative Sprints', span: 1 },
              { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60', label: 'Team Ideations', span: 1 },
              { img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=60', label: 'Weekly Standup', span: 2 }
            ].map((photo, idx) => (
              <div key={idx} className="life-photo" style={{ gridColumn: `span ${photo.span}` }}>
                <img src={photo.img} alt={photo.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', background: 'rgba(0,0,0,0.65)', color: '#fff', fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: '6px', backdropFilter: 'blur(4px)' }}>{photo.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canada Immigration Pathways */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container">
          <h2 style={{ color: C }}>Canada Immigration Pathways</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">With 15+ years of experience, we specialize in helping individuals successfully secure residency, study permits, and family sponsorship.</p>
          <div className="tabs-container" style={{ maxWidth: '640px' }}>
            {Object.keys(canadaData).map((key) => (
              <button key={key} className={`tab-btn ${canadaTab === key ? 'active' : ''}`} onClick={() => setCanadaTab(key)}>{canadaData[key].title}</button>
            ))}
          </div>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left', padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ color: C, margin: 0, fontSize: '1.6rem' }}>{canadaData[canadaTab].title}</h3>
              <span style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', color: '#fff', fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>{canadaData[canadaTab].rating}</span>
            </div>
            <p style={{ color: M, fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.65' }}>{canadaData[canadaTab].desc}</p>
            <h4 style={{ color: C, fontSize: '1rem', marginBottom: '0.75rem' }}>What We Support:</h4>
            <ul style={{ color: M, paddingLeft: '1.25rem', marginBottom: '2rem', lineHeight: '1.8', fontSize: '0.9rem' }}>
              {canadaData[canadaTab].offer.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <div className="stats-grid-3col" style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem' }}>
              {[['Success Rate', canadaData[canadaTab].stats.success], ['Avg Processing', canadaData[canadaTab].stats.time], ['Satisfied Clients', canadaData[canadaTab].stats.clients]].map(([label, val]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '1.35rem', fontWeight: 700, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'block' }}>{val}</span>
                  <span style={{ fontSize: '0.75rem', color: M }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Culture Cards */}
      <section style={{ padding: '5rem 0', background: '#f8f7ff' }}>
        <div className="container">
          <h2 style={{ color: C }}>Our Work Culture</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">We value expertise, active knowledge sharing, and empathy. Our core operations are backed by key cultural anchors.</p>
          <div className="culture-grid-4col">
            {[
              { title: 'Collaborative Excellence', desc: 'We believe in the power of teamwork, shared client history, and open peer updates.' },
              { title: 'Continuous Learning', desc: 'We finance courseware, regulatory certifications, and technical workshops.' },
              { title: 'Client Centricity', desc: 'We track client success stories, making updates and file alignments our top concern.' },
              { title: 'Diversity & Inclusion', desc: 'We welcome global talent backgrounds, appreciating how custom insights optimize results.' }
            ].map((item, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ color: C, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: M, fontSize: '0.82rem', flexGrow: 1, marginBottom: '1.25rem', lineHeight: '1.55' }}>{item.desc}</p>
                <a href="#/about" className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.78rem', alignSelf: 'flex-start' }}>Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      {applyJob && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '500px', padding: '2.5rem', position: 'relative', border: '1px solid #d1d5db', background: '#ffffff' }}>
            <button style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: C, fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setApplyJob(null)}>×</button>
            <h3 style={{ color: C, fontSize: '1.5rem', marginBottom: '0.25rem' }}>Apply for Position</h3>
            <p style={{ color: P, fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.5rem' }}>{applyJob.title} — {applyJob.loc}</p>
            {applySubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <span style={{ fontSize: '2.5rem' }}>📨</span>
                <h4 style={{ color: C, fontSize: '1.25rem', margin: '1rem 0 0.5rem 0' }}>Application Sent!</h4>
                <p style={{ color: M, fontSize: '0.85rem', margin: 0 }}>We have received your career inquiry. Our recruitment desk will call you back within 3 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit}>
                <div className="form-group"><label className="form-label">Full Name *</label><input type="text" className="form-control" required /></div>
                <div className="form-group"><label className="form-label">Email Address *</label><input type="email" className="form-control" required /></div>
                <div className="form-group"><label className="form-label">Contact Number *</label><input type="tel" className="form-control" required /></div>
                <div className="form-group"><label className="form-label">Resume Link (GDrive / Dropbox) *</label><input type="url" className="form-control" placeholder="https://..." required /></div>
                <button type="submit" className="btn btn-pink" style={{ width: '100%', marginTop: '1rem' }}>Submit Application</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
