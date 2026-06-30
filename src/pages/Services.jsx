import { useState } from 'react';

export default function Services() {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(0);

  const achievements = [
    { value: '5000+', label: 'Happy Clients', icon: '😊' },
    { value: '98%', label: 'Success Rate', icon: '📈' },
    { value: '25+', label: 'Countries', icon: '🌍' },
    { value: '15+ Years', label: 'Experience', icon: '⏳' }
  ];

  const serviceOffers = [
    { 
      title: 'Study Visa', 
      success: '99%', 
      countries: 'USA, UK, Canada, Australia, Europe', 
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=60',
      icon: '🎓',
      desc: 'Our expert consultants guide you through the entire student visa application process, from university selection to visa approval. We help secure admission to top-ranked institutions.', 
      features: ['University selection assistance', 'Application form filling', 'Interview preparation'] 
    },
    { 
      title: 'Work Visa', 
      success: '97%', 
      countries: 'Skilled, Job Seeker & Employer-Sponsored', 
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60',
      icon: '💼',
      desc: 'We specialize in securing work visas for professionals across various industries. Our team helps you identify the right visa category, organize documentation, and navigate work authorization guidelines.', 
      features: ['Eligibility assessment', 'Job search assistance', 'Resume optimization'] 
    },
    { 
      title: 'PR & Immigration', 
      success: '95%', 
      countries: 'Canada Express Entry, Australia PR', 
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60',
      icon: '🌐',
      desc: 'Our permanent residency services are designed to help you settle abroad permanently. We handle complex point calculations, profile creations, and Express Entry and SkillSelect documentation files.', 
      features: ['Profile evaluation', 'Points calculation', 'Documentation support'] 
    },
    { 
      title: 'Dependent Visa', 
      success: '98%', 
      countries: 'Spouse, Parents, Family Reunification', 
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=60',
      icon: '👥',
      desc: 'Reunite with your loved ones through our family visa services. We handle spouse visas, parent sponsorships, and dependent reunifications to ensure seamless family moves.', 
      features: ['Eligibility check', 'Relationship verification', 'Document preparation'] 
    },
    { 
      title: 'Test Coaching', 
      success: '96%', 
      countries: 'IELTS, TOEFL, PTE, GRE, GMAT', 
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=60',
      icon: '📝',
      desc: 'Achieve your target scores with our comprehensive preparation programs. Led by expert trainers, we supply customized study guides, mock tests, and intensive practice sessions.', 
      features: ['Expert trainers', 'Customized study plans', 'Mock tests'] 
    },
    { 
      title: 'Career Guidance', 
      success: '94%', 
      countries: 'University selection, SOP, Scholarship', 
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60',
      icon: '🤝',
      desc: 'Make informed decisions about your global education and career path. We assist you with writing statements of purpose, acquiring recommendation letters, and securing scholarships.', 
      features: ['Career counseling', 'University shortlisting', 'SOP/LOR assistance'] 
    }
  ];

  const processSteps = [
    { num: '1', title: 'Initial Consultation', duration: '1-2 days', meta: 'Free profile assessment & eligibility check', details: 'We evaluate your academic history, work experience, language test scores, and financial records to identify the strongest immigration or study programs available for you.' },
    { num: '2', title: 'Document Preparation', duration: '1-2 weeks', meta: 'Collection & validation of supporting files', details: 'Our document specialists guide you on compiling bank letters, work certificates, university transcripts, and assist you in writing standard SOPs and reference letters.' },
    { num: '3', title: 'Application Submission', duration: '1-3 days', meta: 'Form review & direct board filing', details: 'We cross-verify every input, align documents according to country checklist standards, pay government fees, and submit the complete folder to immigration systems.' },
    { num: '4', title: 'Follow-up & Updates', duration: '2-6 months', meta: 'Monitoring files & responding to authorities', details: 'We track the files through administrative systems. If immigration officials request extra information, biometric bookings, or medical exams, we guide you promptly.' },
    { num: '5', title: 'Success & Beyond', duration: 'Ongoing', meta: 'Landing guide & settlement assistance', details: 'Once the visa is approved, we provide pre-departure orientations, assist with local housing suggestions, airport pickups, bank accounts, and tax registrations.' }
  ];

  const faqs = [
    { q: 'How long does the immigration process take?', a: 'Processing times vary depending on the country, visa category, and seasonal backlog. Typically, work visas take 2-6 months, student visas 4-8 weeks, and permanent residency (PR) pathways take 6-12 months. We outline expected schedules at the outset.' },
    { q: 'What documents do I need to prepare initially?', a: 'To start, you generally need a valid passport, certified educational transcripts, updated CV/resume, language test scores (like IELTS, PTE, TOEFL), and evidence of funds to support your living costs. Detailed requirements are customized to your profile.' },
    { q: 'Do you guarantee visa approval?', a: 'No ethical consultant can guarantee a visa approval because the final power lies with embassy officers. However, our certified team ensures that your folder strictly satisfies checklists, and our 98% approval rate demonstrates our effectiveness.' },
    { q: 'What are your consultancy service fees?', a: 'Our consultancy service fees are based on the specific visa track, complexity, and scope of files handled. We provide a transparent flat-fee quote during our initial consultation with no hidden charges or surprise costs.' }
  ];

  const nextStep = () => {
    if (activeStep < processSteps.length - 1) setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  return (
    <div className="services-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Your Gateway to Global Opportunities</h1>
          <p className="hero-subtitle">
            Expert immigration and visa services tailored to your global dreams. Let Atlas Immigration guide you to a new beginning.
          </p>
          <div className="hero-cta">
            <a href="#/contact" className="btn btn-primary">Free Consultation</a>
            <button className="btn btn-secondary" onClick={() => document.getElementById('our-services-list').scrollIntoView({ behavior: 'smooth' })}>Explore Services</button>
          </div>
        </div>
      </section>

      {/* Achievements metrics banner */}
      <section className="why-choose-section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="stats-badge-grid">
            {achievements.map((item, idx) => (
              <div key={idx} className="stat-badge-card glass-card" style={{ padding: '1.5rem 1rem' }}>
                <span style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{item.icon}</span>
                <span className="stat-badge-num">{item.value}</span>
                <span className="stat-badge-desc">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section" id="our-services-list" style={{ background: '#fafafa', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="services-header-pill">Our Services</span>
            <h2 className="services-main-title">Premium Immigration <span>Services</span></h2>
            <p className="section-subtitle" style={{ maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
              Comprehensive solutions for all your international education and immigration needs
            </p>
            <div className="accent-line" style={{ margin: '0 auto 4rem auto', width: '80px', height: '3px', background: 'var(--primary-dark)' }}></div>
          </div>

          <div className="services-grid">
            {serviceOffers.map((service, idx) => (
              <div key={idx} className="service-card-new">
                <div className="service-card-img-wrap">
                  <img src={service.image} alt={service.title} className="service-card-img" />
                  <span className="service-success-badge-new">{service.success}</span>
                  <div className="service-card-img-overlay">
                    <div className="service-card-icon-circle">
                      {service.icon}
                    </div>
                    <div className="service-card-title-wrap">
                      <h3>{service.title}</h3>
                      <p>{service.countries}</p>
                    </div>
                  </div>
                </div>

                <div className="service-card-body">
                  <p className="service-card-body-desc">{service.desc}</p>
                  
                  <h4 className="service-card-features-title">Key Features:</h4>
                  <ul className="service-card-features-list">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="service-card-feature-item-new">
                        <span>✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className="btn-learn-more-full" 
                    onClick={() => window.location.hash = '/contact'}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive process slider */}
      <section className="why-choose-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <h2>Our Simple 5-Step Process</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            We follow a streamlined, milestone-driven process to ensure your visa files compile correctly and get processed quickly.
          </p>

          <div className="slider-process-box">
            {/* Display Side */}
            <div className="slider-display-side glass-card">
              <div className="slider-step-meta">
                <span>STEP {processSteps[activeStep].num} OF 5</span>
                <span style={{ color: 'var(--primary)' }}>🕒 DURATION: {processSteps[activeStep].duration}</span>
              </div>
              <h3 className="slider-step-title">{processSteps[activeStep].title}</h3>
              <p style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                {processSteps[activeStep].meta}
              </p>
              <p className="slider-step-desc">
                {processSteps[activeStep].details}
              </p>

              <div className="slider-controls">
                <button 
                  className="btn btn-secondary" 
                  onClick={prevStep} 
                  disabled={activeStep === 0}
                  style={{ opacity: activeStep === 0 ? 0.5 : 1, cursor: activeStep === 0 ? 'not-allowed' : 'pointer' }}
                >
                  &larr; Previous Step
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={nextStep} 
                  disabled={activeStep === processSteps.length - 1}
                  style={{ opacity: activeStep === processSteps.length - 1 ? 0.5 : 1, cursor: activeStep === processSteps.length - 1 ? 'not-allowed' : 'pointer' }}
                >
                  Next Step &rarr;
                </button>
              </div>
            </div>

            {/* Navigation Cards Side */}
            <div className="slider-nav-cards">
              {processSteps.map((step, idx) => (
                <div 
                  key={idx} 
                  className={`slider-nav-card ${activeStep === idx ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="slider-nav-num">STEP 0{step.num}</div>
                  <div className="slider-nav-title">{step.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complete Process list overview */}
      <section className="services-section" style={{ padding: '4rem 0', background: '#ffffff' }}>
        <div className="container">
          <h2>Complete Process Overview</h2>
          <div className="accent-line"></div>
          <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 3rem' }}>
            {processSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="process-overview-item"
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '1.5rem', 
                  padding: '1.25rem 0', 
                  borderBottom: idx === processSteps.length - 1 ? 'none' : '1px solid #e5e7eb'
                }}
              >
                <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, fontSize: '0.9rem' }}>
                  {step.num}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ color: '#111827', margin: '0 0 0.25rem 0', fontSize: '1.05rem' }}>{step.title} <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>({step.duration})</span></h4>
                  <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: 0 }}>{step.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Success Stories */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Success Stories</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            Hear from some of our clients who achieved their immigration dreams.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card glass-card">
              <p className="testimonial-quote">"Atlas Immigration made my Canadian PR process incredibly smooth. Their team guided me through every step with expertise."</p>
              <div className="testimonial-author-wrapper">
                <div className="testimonial-avatar">SJ</div>
                <div className="testimonial-author-info">
                  <span className="testimonial-name">Sarah Johnson</span>
                  <span className="testimonial-role">PR Recipient, India</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card glass-card">
              <p className="testimonial-quote">"Professional, reliable, and trustworthy. They helped me secure my work visa in just 3 months! Highly recommended."</p>
              <div className="testimonial-author-wrapper">
                <div className="testimonial-avatar">MC</div>
                <div className="testimonial-author-info">
                  <span className="testimonial-name">Michael Chen</span>
                  <span className="testimonial-role">Work Permit, China</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card glass-card">
              <p className="testimonial-quote">"Outstanding service! The team's attention to detail and prompt responses made all the difference in my application."</p>
              <div className="testimonial-author-wrapper">
                <div className="testimonial-avatar">EW</div>
                <div className="testimonial-author-info">
                  <span className="testimonial-name">Emma Wilson</span>
                  <span className="testimonial-role">Study Recipient, UK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="form-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            Got questions? We've got answers. Explore queries regarding timing, visa parameters, and documents.
          </p>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${expandedFaq === idx ? 'expanded' : ''}`}
              >
                <div className="faq-header" onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}>
                  <h3 className="faq-question">{faq.q}</h3>
                  <span className="faq-icon">▼</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
