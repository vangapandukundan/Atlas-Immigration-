import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    visaType: ''
  });
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [modalActiveTab, setModalActiveTab] = useState('overview');

  const slides = [
    {
      title: "Your Gateway to a Global Future",
      subtitle: "Expert guidance for seamless emigration to your dream country",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&auto=format&fit=crop&q=80",
      stats: [
        { value: "25+", desc: "Global opportunities" },
        { value: "10,000+", desc: "Successfully helped" },
        { value: "98% Success Rate", desc: "Visa approvals" }
      ]
    },
    {
      title: "Turn Your Dreams Into Reality",
      subtitle: "Professional assistance for all your international relocation needs",
      image: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=1600&auto=format&fit=crop&q=80",
      stats: [
        { value: "30+", desc: "Global opportunities" },
        { value: "15,000+", desc: "Successfully helped" },
        { value: "99% Success Rate", desc: "Visa approvals" }
      ]
    },
    {
      title: "Atlas Immigration Begin Your Journey Today",
      subtitle: "Let us guide you through every step of the emigration process",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&quot;);%20transform:%20scale(1.1)",
      stats: [
        { value: "40+", desc: "Global opportunities" },
        { value: "20,000+", desc: "Successfully helped" },
        { value: "97% Success Rate", desc: "Visa approvals" }
      ]
    }
  ];

  // Auto-play the slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form data submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', country: '', visaType: '' });
    }, 4000);
  };

  const countries = [
    { 
      name: 'Canada', 
      flag: 'https://flagcdn.com/w80/ca.png',
      image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=600&auto=format&fit=crop&q=60',
      desc: 'Canada is renowned for its high quality of life, excellent healthcare system, and diverse...',
      overview: 'Canada is renowned for its high quality of life, excellent healthcare system, and diverse multicultural society. It offers numerous immigration pathways for skilled workers, students, and families seeking a stable future.',
      visas: ['Express Entry', 'Provincial Nominee Program (PNP)', 'Student Visa', 'Post-Graduation Work Permit (PGWP)', 'Family Sponsorship'],
      process: [
        { title: 'Educational credential assessment & IELTS test compilation', duration: '1-2 months' },
        { title: 'Submit online Express Entry profile & calculate CRS score', duration: '1-2 weeks' },
        { title: 'Wait for draw and receive Invitation to Apply (ITA)', duration: '1-3 months' },
        { title: 'Submit permanent residency application & biometrics', duration: '6 months avg' }
      ],
      requirements: [
        'Valid Passport with at least 6 months validity',
        'Educational Credential Assessment (ECA) report',
        'Language Test Results (IELTS / CELPIP / TEF)',
        'Proof of Funds (Bank statements / GIC Certificate)',
        'Police clearance and medical exam records'
      ],
      benefits: [
        'Right to live, work, and study anywhere in Canada',
        'Access to free universal healthcare system',
        'Clear pathway to Canadian Citizenship within 3 years',
        'Free public school education for dependent children'
      ]
    },
    { 
      name: 'UK', 
      flag: 'https://flagcdn.com/w80/gb.png',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60',
      desc: 'The United Kingdom offers a rich history, world-class education, and diverse career...',
      overview: 'The United Kingdom offers a rich history, world-class education, and diverse career opportunities. Its points-based immigration system provides clear pathways for skilled workers and students.',
      visas: ['Skilled Worker Visa', 'Student Visa', 'Global Talent Visa', 'Innovator Visa', 'Family Visa'],
      process: [
        { title: 'Secure a valid Certificate of Sponsorship (CoS) from a licensed UK employer', duration: '2-4 weeks' },
        { title: 'Obtain language proficiency test scores (IELTS Academic/General)', duration: '1-2 weeks' },
        { title: 'Prepare documentation and file the visa application online', duration: '3 weeks avg' },
        { title: 'Book biometric appointments and wait for final passport sticker stamp', duration: '2-3 weeks' }
      ],
      requirements: [
        'Certificate of Sponsorship (CoS) reference number',
        'Tuberculosis (TB) test certificate (if applicable)',
        'Proof of English language proficiency (CEFR Level B1/B2)',
        'Proof of personal savings to support yourself in the UK',
        'Valid passport and travel history logs'
      ],
      benefits: [
        'Access to the National Health Service (NHS) free of cost',
        'Right to bring dependent spouse and children with you',
        'Fast-track routes to Indefinite Leave to Remain (ILR)',
        'High-salary opportunities in major tech and finance hubs'
      ]
    },
    { 
      name: 'USA', 
      flag: 'https://flagcdn.com/w80/us.png',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&auto=format&fit=crop&q=60',
      desc: 'The United States is known as the land of opportunity, offering world-class education...',
      overview: 'The United States is known as the land of opportunity, offering world-class education, diverse career paths, and a high standard of living. Its immigration system provides various pathways for professionals, students, and families.',
      visas: ['F-1 Student Visa', 'H-1B Specialty Work Visa', 'L-1 Intra-company Transfer', 'EB-1/EB-2 Green Card', 'O-1 Extraordinary Ability'],
      process: [
        { title: 'Secure university admission (I-20 Form) or employer job offer (LCA filing)', duration: '1-3 months' },
        { title: 'Pay the SEVIS fee (for students) and complete DS-160 online form', duration: '1-2 days' },
        { title: 'Schedule US consulate biometric and visa interview slots', duration: '1-6 weeks' },
        { title: 'Attend visa interview and obtain visa stamp on passport', duration: '1 day (immediate)' }
      ],
      requirements: [
        'Form I-20 (Students) or Form I-797 approval notice (Work visas)',
        'DS-160 confirmation page barcode printout',
        'Valid passport with at least 6 months validity',
        'Proof of financial support (Bank statements / Sponsorship letters)',
        'SEVIS fee payment receipt'
      ],
      benefits: [
        'Work in the world\'s largest and most competitive economic market',
        'Earn high dollar wages with world-class corporate packages',
        'Pathway to permanent residency (Green Card) and citizenship',
        'Access to top ranked universities (Ivy League & state colleges)'
      ]
    },
    { 
      name: 'Australia', 
      flag: 'https://flagcdn.com/w80/au.png',
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&auto=format&fit=crop&q=60',
      desc: 'Australia offers a relaxed lifestyle, beautiful natural landscapes, and a strong economy. Its...',
      overview: 'Australia offers a relaxed lifestyle, beautiful natural landscapes, and a strong economy. Its points-based immigration system prioritizes skilled workers who can contribute to the country\'s growth.',
      visas: ['Skilled Independent (Subclass 189)', 'Skilled Nominated (Subclass 190)', 'Student Visa (Subclass 500)', 'Employer Nomination (Subclass 186)', 'Temporary Graduate (Subclass 485)'],
      process: [
        { title: 'Undergo a skills assessment with the relevant Australian assessing body', duration: '2-3 months' },
        { title: 'Acquire target English language scores (IELTS / PTE Academic)', duration: '1-2 weeks' },
        { title: 'Submit an Expression of Interest (EOI) via SkillSelect', duration: '1-2 days' },
        { title: 'Receive invitation, pay fees, and submit the PR application online', duration: '3-6 months' }
      ],
      requirements: [
        'Positive Skills Assessment report',
        'IELTS or PTE proficiency test scorecard',
        'Valid Passport and certified educational transcripts',
        'Character certificates (Police checks) and medical reports',
        'Expression of Interest (EOI) selection confirmation'
      ],
      benefits: [
        'Access to Medicare (free universal public health system)',
        'Right to work, study, and sponsor eligible relatives for PR',
        'Subsidized university fees (HECS/HELP loans for citizens)',
        'Generous pension benefits and social security support'
      ]
    },
    { 
      name: 'Germany', 
      flag: 'https://flagcdn.com/w80/de.png',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&auto=format&fit=crop&q=60',
      desc: 'Germany is known for its strong economy, excellent education system, and high quality of...',
      overview: 'Germany is known for its strong economy, excellent education system, and high quality of life. It offers various immigration pathways for skilled workers, students, and researchers.',
      visas: ['Skilled Worker Visa', 'Opportunity Card (Chancenkarte)', 'EU Blue Card', 'Student Visa', 'Job Seeker Visa'],
      process: [
        { title: 'Get foreign educational degree recognized (Anabin/ZAB valuation)', duration: '1-2 months' },
        { title: 'Secure an employment contract with a German company (if applicable)', duration: '1-2 months' },
        { title: 'Compile application dossiers and submit files at local German Embassy', duration: '4-8 weeks' },
        { title: 'Arrive in Germany, register address (Anmeldung), and obtain residence permit', duration: '2-4 weeks' }
      ],
      requirements: [
        'Proof of recognized university degree or vocational training certificate',
        'German employment contract or concrete job offer details',
        'Proof of language skills (German A1-B2 or English IELTS)',
        'German health insurance coverage confirmation',
        'Proof of sufficient funds (Blocked Account for students/job seekers)'
      ],
      benefits: [
        'Access to tuition-free world-class public university education',
        'Freedom of travel throughout the entire Schengen zone',
        'Strong labor protection laws and social security systems',
        'Clear pathway to German Citizenship (naturalization)'
      ]
    },
    { 
      name: 'France', 
      flag: 'https://flagcdn.com/w80/fr.png',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=60',
      desc: 'France offers a rich cultural heritage, excellent healthcare, and a high standard of living. Its...',
      overview: 'France offers a rich cultural heritage, excellent healthcare, and a high standard of living. Its immigration system provides pathways for skilled workers, students, and those with exceptional talent.',
      visas: ['Talent Passport (Passeport Talent)', 'Student Visa', 'Salaried Employee Visa (VLS-TS)', 'Tech Visa', 'Visitor Visa'],
      process: [
        { title: 'Obtain university admission letter or French employment contract approval', duration: '1-2 months' },
        { title: 'Fill out the France-Visas online portal application forms', duration: '1-2 days' },
        { title: 'Attend the VFS Global biometric appointment and submit physical files', duration: '2 weeks avg' },
        { title: 'Wait for visa decision, passport return, and validation upon arrival (OFII)', duration: '2-3 weeks' }
      ],
      requirements: [
        'Approved French employment contract (DIRECCTE validated) or university registration',
        'Valid passport and travel details',
        'Proof of accommodation in France (rental contract / host letter)',
        'Proof of sufficient financial means (minimum €615/month for students)',
        'Travel medical insurance coverage'
      ],
      benefits: [
        'Right to live and travel anywhere in the Schengen area',
        'Access to France\'s highly subsidised universal healthcare system',
        'Subsidised housing allowances for students (CAF benefits)',
        'Possibility to obtain a 10-year residency card after 5 years'
      ]
    },
    { 
      name: 'New Zealand', 
      flag: 'https://flagcdn.com/w80/nz.png',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=60',
      desc: 'New Zealand is known for its stunning natural landscapes, relaxed lifestyle, and friendly peopl...',
      overview: 'New Zealand is known for its stunning natural landscapes, relaxed lifestyle, and friendly people. Its points-based immigration system prioritizes skilled workers who can contribute to the country\'s development.',
      visas: ['Skilled Migrant Category Resident Visa', 'Green List Work to Residence', 'Accredited Employer Work Visa', 'Student Visa', 'Partner Resident Visa'],
      process: [
        { title: 'Assess eligibility points and check if occupation is on the NZ Green List', duration: '1-2 weeks' },
        { title: 'Obtain a skilled job offer from an accredited New Zealand employer', duration: '1-3 months' },
        { title: 'Submit Expression of Interest (EOI) or apply directly online', duration: '1-2 weeks' },
        { title: 'Submit health, character, and skill certifications for final decision', duration: '3-5 months' }
      ],
      requirements: [
        'Skilled job offer from an Accredited Employer',
        'Proof of English language capability (IELTS 6.5 minimum for main applicant)',
        'NZQA assessment of foreign qualifications (if required)',
        'Medical certificates and police clearances',
        'Proof of age (must be 55 or under for Skilled Migrant route)'
      ],
      benefits: [
        'Live, work, and study in New Zealand permanently',
        'Free or highly subsidized healthcare and public schooling',
        'Clear pathway to New Zealand Citizenship and passport',
        'Enjoy one of the safest and most clean natural habitats globally'
      ]
    },
    { 
      name: 'Ireland', 
      flag: 'https://flagcdn.com/w80/ie.png',
      image: 'https://images.unsplash.com/photo-1590089415225-401ed66a1800?w=600&auto=format&fit=crop&q=60',
      desc: 'Ireland offers a thriving economy, rich cultural heritage, and friendly people. Its immigration...',
      overview: 'Ireland offers a thriving economy, rich cultural heritage, and friendly people. Its immigration system provides pathways for skilled workers, students, and those with critical skills needed in the Irish market.',
      visas: ['Critical Skills Employment Permit', 'General Employment Permit', 'Student Visa (Stamp 2)', 'Third Level Graduate Scheme (Stamp 1G)', 'Start-up Entrepreneur Programme (STEP)'],
      process: [
        { title: 'Secure a job offer with salary above €32,000 (€38,000 for critical skills)', duration: '1-3 months' },
        { title: 'Apply for the employment permit via the EPOS online registry', duration: '4-8 weeks' },
        { title: 'Submit the national entry visa application online (for visa-required nations)', duration: '3-6 weeks' },
        { title: 'Register with the Irish Immigration Service (IRP card) upon arrival', duration: '2 weeks' }
      ],
      requirements: [
        'Valid Employment Permit issued by the Department of Enterprise',
        'Signed contract of employment with Irish company details',
        'Valid passport and full biographical records',
        'Proof of comprehensive medical insurance coverage',
        'Relevant degree or qualifications proving suitability for the role'
      ],
      benefits: [
        'Work in Europe\'s fastest-growing tech and pharmaceutical hub',
        'Access to a 2-year post-study work visa for master\'s graduates',
        'Right to transition to permanent residence after 2-5 years',
        'Live in a friendly, secure, English-speaking European country'
      ]
    }
  ];

  const services = [
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

  const benefits = [
    { num: '98%', title: 'Success Rate', desc: 'Industry-leading approval rates with thousands of successful visa packages processed yearly.', tags: ['Track Record', 'Proven Results', 'Client Satisfaction'] },
    { num: '50+', title: 'Expert Team', desc: 'Certified and registered consultants with 15+ years of collective industry experience.', tags: ['Certified', 'Experienced', 'Professional'] },
    { num: '100%', title: 'Personalized Service', desc: 'Tailored immigration strategies mapped specifically for your unique academic or career profile.', tags: ['Custom Plans', 'Individual Focus', 'Tailored Approach'] },
    { num: '30%', title: 'Fast Processing', desc: 'Streamlined digital review processes that help decrease file compilation and turnaround times.', tags: ['Quick Turnaround', 'Efficient Process', 'Time Saving'] },
    { num: '24/7', title: 'Dedicated Support', desc: 'Round-the-clock client assistance coordinates with you through every step of the migration loop.', tags: ['Always Available', 'Dedicated Team', 'Constant Support'] },
    { num: '25+', title: 'Global Reach', desc: 'Wide network and active linkages across immigration departments in five continents.', tags: ['Worldwide', 'International', 'Global Network'] }
  ];

  const steps = [
    { num: '📋', title: 'Preparation Phase', desc: 'Initial planning, profiling, evaluation, and background document collection.' },
    { num: '📝', title: 'Application Phase', desc: 'Strict verification of records, form submissions, fee payments, and authority filings.' },
    { num: '✈️', title: 'Post-Application Phase', desc: 'Interview briefings, pre-departure orientations, travel booking, and landing assistance.' }
  ];

  const testimonials = [
    { name: 'Santhosi', role: 'Canada PR Holder', quote: 'Excellent guidance throughout my Canada PR application! The team made the complex process simple and stress-free. I\'m now happily settled in Toronto.' },
    { name: 'Priya Sharma', role: 'Student Visa Recipient', quote: 'Perfect support for my study abroad dreams! They helped me secure admission to a top university and handled all the visa paperwork seamlessly.' },
    { name: 'Amit Kumar', role: 'Australia Work Permit', quote: 'Top-notch service! They found me a job opportunity in Australia and handled the entire work visa process. I\'m now working in Melbourne!' },
    { name: 'Neha Singh', role: 'UK Skilled Worker', quote: 'Outstanding immigration consultancy! They guided me through the UK skilled worker visa process and helped me secure a great job in London.' },
    { name: 'Vikram Mehta', role: 'New Zealand Resident', quote: 'Professional and efficient service! They handled my New Zealand residency application with expertise. I\'m now living my dream in Auckland!' },
    { name: 'Ananya Reddy', role: 'US Student Visa', quote: 'Great support for my US education! They helped me with university selection, application process, and visa approval. Now studying at my dream university!' }
  ];

  const scrollToContact = () => {
    document.getElementById('consultation-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page-container">
      {/* Full-Screen Auto-Play Hero Slider */}
      <section className="hero-slider-container">
        {/* Left Nav Arrow */}
        <button className="slider-arrow slider-arrow-left" onClick={prevSlide} aria-label="Previous Slide">
          &#10094;
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-slide active"
          >
            <div
              className="hero-slide-bg"
              style={{ backgroundImage: `url('${slides[activeSlide].image}')` }}
            ></div>
            <div className="hero-slide-overlay"></div>
            <div className="hero-content-wrapper">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="hero-title blinking-text"
              >
                {slides[activeSlide].title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="hero-subtitle"
              >
                {slides[activeSlide].subtitle}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="hero-cta" 
                style={{ marginBottom: '3.5rem', display: 'flex', justifyContent: 'center' }}
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary" 
                  onClick={scrollToContact}
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
                    boxShadow: '0 4px 20px rgba(139, 92, 246, 0.45)',
                    padding: '0.85rem 2.25rem'
                  }}
                >
                  Start Your Journey <span style={{ marginLeft: '6px' }}>&rarr;</span>
                </motion.button>
              </motion.div>

              {/* Slide-specific Stats Badge Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="stats-badge-grid"
              >
                <div className="stat-badge-card glass-card">
                  <span className="stat-badge-icon">🌐</span>
                  <span className="stat-badge-num">{slides[activeSlide].stats[0].value} Countries</span>
                  <span className="stat-badge-desc">{slides[activeSlide].stats[0].desc}</span>
                </div>
                <div className="stat-badge-card glass-card">
                  <span className="stat-badge-icon">👥</span>
                  <span className="stat-badge-num">{slides[activeSlide].stats[1].value} Clients</span>
                  <span className="stat-badge-desc">{slides[activeSlide].stats[1].desc}</span>
                </div>
                <div className="stat-badge-card glass-card">
                  <span className="stat-badge-icon">✈️</span>
                  <span className="stat-badge-num">{slides[activeSlide].stats[2].value}</span>
                  <span className="stat-badge-desc">{slides[activeSlide].stats[2].desc}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Nav Arrow */}
        <button className="slider-arrow slider-arrow-right" onClick={nextSlide} aria-label="Next Slide">
          &#10095;
        </button>

        {/* Dot Indicators */}
        <ul className="slider-dots">
          {slides.map((_, idx) => (
            <li
              key={idx}
              className={`slider-dot ${activeSlide === idx ? 'active' : ''}`}
              onClick={() => setActiveSlide(idx)}
            ></li>
          ))}
        </ul>
      </section>

      {/* Countries Offer Section */}
      <section className="countries-section">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ color: '#111827' }}
          >
            Countries We Offer
          </motion.h2>
          <div className="accent-line"></div>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle"
          >
            Explore opportunities in top destinations around the world with detailed immigration, study, and work pathway solutions.
          </motion.p>

          <motion.div 
            className="countries-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
          >
            {countries.map((country) => (
              <motion.div
                key={country.name}
                className="country-card"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => {
                  setSelectedCountry(country);
                  setModalActiveTab('overview');
                }}
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="country-flag-overlay"
                  style={{ backgroundImage: `url('${country.image}')` }}
                ></div>
                <img src={country.flag} alt={`${country.name} Flag`} className="country-flag" />
                <div className="country-gradient"></div>
                <span className="country-name">{country.name}</span>
                <p className="country-desc">{country.desc}</p>
                <button 
                  className="btn-view-details"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCountry(country);
                    setModalActiveTab('overview');
                  }}
                >
                  View Details
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" style={{ background: '#fafafa', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="services-header-pill">Our Services</span>
            <h2 className="services-main-title">Premium Immigration <span>Services</span></h2>
            <p className="section-subtitle" style={{ maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
              Comprehensive solutions for all your international education and immigration needs
            </p>
            <div className="accent-line" style={{ margin: '0 auto 4rem auto', width: '80px', height: '3px', background: 'var(--primary-dark)' }}></div>
          </div>

          <motion.div 
            className="services-grid"
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
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                className="service-card-new"
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ y: -8 }}
              >
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
                  
                  <button className="btn-learn-more-full" onClick={scrollToContact}>
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-banner" 
            style={{ marginTop: '5rem' }}
          >
            <p className="cta-banner-text">
              Not sure which service is right for you? Our expert consultants are here to help you find the perfect pathway to achieve your international dreams.
            </p>
            <div className="cta-banner-actions">
              <button className="btn btn-primary" onClick={scrollToContact}>Get Free Consultation</button>
              <a href="tel:+919676655959" className="btn btn-secondary">Call Advisor Now</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Atlas?</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            Discover the perfect blend of expertise, innovation, and personalized care that makes your immigration journey seamless and successful.
          </p>

          <motion.div 
            className="why-grid"
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
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                className="why-card glass-card"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.12)' }}
              >
                <div className="why-card-header">
                  <span className="why-card-num">{benefit.num}</span>
                  <h3 className="why-card-title">{benefit.title}</h3>
                </div>
                <p className="why-card-desc">{benefit.desc}</p>
                <div className="why-tags">
                  {benefit.tags.map((tag) => (
                    <span key={tag} className="why-tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Process Timeline */}
      <section className="timeline-section">
        <div className="container">
          <h2>Application Process Timeline</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            Our step-by-step process ensures a smooth, transparent journey to your destination. Here is what to expect.
          </p>

          <motion.div 
            className="timeline-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className="timeline-card glass-card"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="timeline-step-badge">{idx + 1}</div>
                <span className="timeline-icon">{step.num}</span>
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-desc">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Client Success Stories</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            Read inspiring feedback from clients who successfully accomplished their international migration goals with us.
          </p>

          <motion.div 
            className="testimonials-grid"
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
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx} 
                className="testimonial-card glass-card"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -5 }}
              >
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author-wrapper">
                  <div className="testimonial-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div className="testimonial-author-info">
                    <span className="testimonial-name">{t.name}</span>
                    <span className="testimonial-role">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="form-section" id="consultation-form">
        <div className="container">
          <div className="form-grid">
            {/* Info Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="form-info-side"
            >
              <h2 style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Get Free Consultation</h2>
              <p className="form-info-desc" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Fill out the form to request a callback from our certified immigration counselors. We will evaluate your profile and advise you on the best pathways.
              </p>

              <div className="form-info-side-list">
                <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                  <span className="info-item-icon">🎓</span>
                  <div>
                    <h4 className="info-item-title">Study Visas</h4>
                    <p className="info-item-desc">Secure admissions and visas for premier institutes in the US, UK, Canada, Australia, and Europe.</p>
                  </div>
                </div>
                <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                  <span className="info-item-icon">💼</span>
                  <div>
                    <h4 className="info-item-title">Work Permits</h4>
                    <p className="info-item-desc">Assistance with points evaluation, resume polishing, and employer visa pathways.</p>
                  </div>
                </div>
                <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                  <span className="info-item-icon">👪</span>
                  <div>
                    <h4 className="info-item-title">PR & Dependent Visas</h4>
                    <p className="info-item-desc">Permanently settle with spouse, parent, or children sponsorship and Express Entry support.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Wrapper */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="form-wrapper glass-card"
            >
              <h3 className="form-title">Consultation Request</h3>
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <span style={{ fontSize: '3rem' }}>✅</span>
                  <h4 style={{ color: '#fff', fontSize: '1.5rem', margin: '1rem 0 0.5rem 0' }}>Thank You!</h4>
                  <p style={{ color: 'var(--text-muted)' }}>Your inquiry has been successfully received. One of our agents will contact you shortly.</p>
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
                      <option value="">Select Destination Country</option>
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

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="btn btn-pink" 
                    style={{ width: '100%', marginTop: '1rem' }}
                  >
                    Submit Query <span>&rarr;</span>
                  </motion.button>

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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Country Details Modal */}
      <AnimatePresence>
        {selectedCountry && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay" 
            onClick={() => setSelectedCountry(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="modal-card" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div 
                className="modal-header" 
                style={{ backgroundImage: `url('${selectedCountry.image}')` }}
              >
                <div className="modal-header-overlay"></div>
                <button className="modal-close-btn" onClick={() => setSelectedCountry(null)}>&times;</button>
                <img src={selectedCountry.flag} alt={`${selectedCountry.name} Flag`} className="modal-header-flag" />
                
                <div className="modal-header-title-wrap">
                  <h2 className="modal-header-title">{selectedCountry.name}</h2>
                  <p className="modal-header-desc">{selectedCountry.desc}</p>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="modal-tabs-nav">
                {['overview', 'process', 'requirements', 'benefits'].map((tab) => (
                  <button
                    key={tab}
                    className={`modal-tab-link ${modalActiveTab === tab ? 'active' : ''}`}
                    onClick={() => setModalActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                {modalActiveTab === 'overview' && (
                  <div>
                    <h3>Country Overview</h3>
                    <p>{selectedCountry.overview}</p>
                    <h3>Available Visa Types</h3>
                    <div className="modal-tags-grid">
                      {selectedCountry.visas.map((visa, idx) => (
                        <span key={idx} className="modal-tag-item">{visa}</span>
                      ))}
                    </div>
                  </div>
                )}

                {modalActiveTab === 'process' && (
                  <div>
                    <h3>Immigration Process Pathway</h3>
                    <ul className="modal-list">
                      {selectedCountry.process.map((p, idx) => (
                        <li key={idx} className="modal-list-item">
                          <span className="modal-list-icon">{idx + 1}.</span>
                          <div>
                            <strong style={{ color: '#111827' }}>{p.title}</strong>
                            <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--primary-dark)', fontWeight: 'bold', marginTop: '4px' }}>
                              Estimated Duration: {p.duration}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {modalActiveTab === 'requirements' && (
                  <div>
                    <h3>General Eligibility Requirements</h3>
                    <ul className="modal-list">
                      {selectedCountry.requirements.map((req, idx) => (
                        <li key={idx} className="modal-list-item">
                          <span className="modal-list-icon">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {modalActiveTab === 'benefits' && (
                  <div>
                    <h3>Benefits of Residing / Working</h3>
                    <ul className="modal-list">
                      {selectedCountry.benefits.map((benefit, idx) => (
                        <li key={idx} className="modal-list-item">
                          <span className="modal-list-icon">★</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="modal-footer">
                <button className="modal-footer-close-btn" onClick={() => setSelectedCountry(null)}>
                  Close
                </button>
                <button 
                  className="modal-footer-cta-btn" 
                  onClick={() => {
                    setSelectedCountry(null);
                    scrollToContact();
                  }}
                >
                  Get Consultation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
