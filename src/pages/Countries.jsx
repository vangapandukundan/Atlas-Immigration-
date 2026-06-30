import { useState } from 'react';

export default function Countries() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [modalActiveTab, setModalActiveTab] = useState('overview');

  const countries = [
    {
      name: 'Canada',
      flag: 'https://flagcdn.com/w80/ca.png',
      image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=600&auto=format&fit=crop&q=60',
      desc: 'Premier destination for PR, study and work opportunities.',
      overview: 'Canada is renowned for its high quality of life, excellent healthcare system, and diverse multicultural society. It offers numerous immigration pathways for skilled workers, students, and families.',
      visas: ['Express Entry (Federal Skilled Worker)', 'Provincial Nominee Program (PNP)', 'Study Permit (SDS & Non-SDS)', 'Post-Graduate Work Permit (PGWP)', 'Spousal Open Work Permit', 'Super Visa (Parent & Grandparent)'],
      process: [
        { title: 'Obtain language test scores (IELTS/CELPIP) meeting Express Entry minimums', duration: '2-4 weeks' },
        { title: 'Get Educational Credential Assessment (ECA) from a designated body', duration: '3-6 weeks' },
        { title: 'Create Express Entry profile, receive Comprehensive Ranking System (CRS) score', duration: '1-3 days' },
        { title: 'Receive Invitation to Apply (ITA) in a draw round and submit PR application', duration: '3-6 months' }
      ],
      requirements: [
        'Valid passport and certified educational transcripts',
        'IELTS/CELPIP language proficiency scorecard',
        'Educational Credential Assessment (ECA) report',
        'Proof of funds: minimum $13,757 CAD for single applicant',
        'Police clearance certificates from all countries of residence',
        'Medical examination results from approved physician'
      ],
      benefits: [
        'Universal health care (provincial coverage) for permanent residents',
        'Pathway to Canadian citizenship after 3 years of PR',
        'Free public school education for children up to Grade 12',
        'Canadian passport: visa-free access to 185+ countries worldwide'
      ]
    },
    {
      name: 'United Kingdom',
      flag: 'https://flagcdn.com/w80/gb.png',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60',
      desc: 'Top-tier universities and a robust points-based visa system.',
      overview: 'The United Kingdom offers a rich history, world-class education, and diverse career opportunities. Its points-based immigration system provides clear pathways for skilled workers, students, and health professionals.',
      visas: ['Skilled Worker Visa', 'Student Visa (CAS)', 'Graduate Route (Post-Study Work)', 'Health and Care Worker Visa', 'Global Talent Visa', 'Family Visa'],
      process: [
        { title: 'Secure a confirmed job offer from a UK licensed sponsor (for Skilled Worker)', duration: '1-3 months' },
        { title: 'Check eligibility against the points-based system (salary, English, job role)', duration: '1-2 days' },
        { title: 'Complete online visa application and book biometrics at a visa centre', duration: '1-2 weeks' },
        { title: 'Await visa decision and Biometric Residence Permit (BRP) delivery', duration: '3-8 weeks' }
      ],
      requirements: [
        'Valid passport with at least 6 months validity',
        'Certificate of Sponsorship (CoS) from a UK licensed employer',
        'Proof of English language proficiency (IELTS UKVI or equivalent)',
        'Bank statements showing sufficient financial maintenance funds',
        'Tuberculosis (TB) test results (if required for your nationality)',
        'UK criminal record certificate (if applicable)'
      ],
      benefits: [
        'Access to NHS (National Health Service) healthcare as a resident',
        'Path to Indefinite Leave to Remain (ILR) after 5 years',
        'UK citizenship available after 1 year of ILR status',
        'World-class education system with globally recognized qualifications'
      ]
    },
    {
      name: 'United States',
      flag: 'https://flagcdn.com/w80/us.png',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&auto=format&fit=crop&q=60',
      desc: 'Land of opportunity with world-class universities and career paths.',
      overview: 'The United States is known as the land of opportunity, offering world-class education, diverse career paths, and a high standard of living. Its immigration system provides various pathways for professionals, students, and families.',
      visas: ['F-1 Student Visa', 'H-1B Specialty Occupation Visa', 'L-1 Intracompany Transfer', 'EB-5 Investor Visa', 'O-1 Extraordinary Ability', 'B-1/B-2 Visitor Visa'],
      process: [
        { title: 'Receive university admission letter or employer H-1B sponsorship', duration: '1-6 months' },
        { title: 'Complete DS-160 online nonimmigrant visa application form', duration: '1-3 days' },
        { title: 'Schedule and attend visa interview at the US Embassy/Consulate', duration: '2-8 weeks' },
        { title: 'Visa stamped in passport; travel and report to USCIS port of entry', duration: '1-2 weeks' }
      ],
      requirements: [
        'Valid passport with minimum 6 months beyond intended stay',
        'Form DS-160 (nonimmigrant visa application) confirmation',
        'University acceptance letter (I-20 form) for F-1 student visa',
        'Proof of financial resources and intent to return to home country',
        'SEVIS fee payment receipt (for student visa applicants)',
        'English proficiency scores (TOEFL/IELTS) for academic programs'
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
      desc: 'Points-based SkillSelect system for skilled workers and students.',
      overview: 'Australia offers a relaxed lifestyle, beautiful natural landscapes, and a strong economy. Its points-based immigration system prioritizes skilled workers who can contribute to the country\'s growth.',
      visas: ['Skilled Independent (Subclass 189)', 'Skilled Nominated (Subclass 190)', 'Student Visa (Subclass 500)', 'Employer Nomination (Subclass 186)', 'Temporary Graduate (Subclass 485)'],
      process: [
        { title: 'Undergo a skills assessment with the relevant Australian assessing body', duration: '2-3 months' },
        { title: 'Acquire target English language scores (IELTS / PTE Academic)', duration: '1-2 weeks' },
        { title: 'Submit an Expression of Interest (EOI) via SkillSelect', duration: '1-2 days' },
        { title: 'Receive invitation, pay fees, and submit the PR application online', duration: '3-6 months' }
      ],
      requirements: [
        'Positive Skills Assessment report from relevant authority',
        'IELTS or PTE proficiency test scorecard meeting score thresholds',
        'Valid passport and certified educational transcripts',
        'Character certificates (Police checks from all countries) and medical reports',
        'Expression of Interest (EOI) selection confirmation letter'
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
      desc: 'EU Blue Card, Opportunity Card & strong economy for skilled workers.',
      overview: 'Germany is known for its strong economy, excellent education system, and high quality of life. It offers various immigration pathways for skilled workers, students, researchers, and job seekers.',
      visas: ['Skilled Worker Visa', 'Opportunity Card (Chancenkarte)', 'EU Blue Card', 'Student Visa', 'Job Seeker Visa'],
      process: [
        { title: 'Get foreign educational degree recognized (Anabin/ZAB evaluation)', duration: '1-2 months' },
        { title: 'Secure an employment contract with a German company (if applicable)', duration: '1-2 months' },
        { title: 'Compile application dossiers and submit files at local German Embassy', duration: '4-8 weeks' },
        { title: 'Receive national visa, travel to Germany & register residence within 14 days', duration: '2-6 months' }
      ],
      requirements: [
        'Recognized German qualification or equivalent foreign degree',
        'Employment contract from a German employer or blocked account (job seeker)',
        'B1/B2 German language certificate (for most non-IT visa categories)',
        'Valid passport and biometric photos',
        'Health insurance coverage proof (minimum for visa duration)',
        'Blocked bank account showing €11,208 EUR annual living cost coverage'
      ],
      benefits: [
        'Free or low-cost university education at public institutions',
        'Path to permanent residence (Niederlassungserlaubnis) after 4-5 years',
        'EU freedom of movement rights after citizenship',
        'Germany\'s strong €4+ trillion economy offers exceptional career growth'
      ]
    },
    {
      name: 'New Zealand',
      flag: 'https://flagcdn.com/w80/nz.png',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=60',
      desc: 'Stunning landscapes, relaxed lifestyle, and skilled migration pathways.',
      overview: 'New Zealand is known for its stunning natural landscapes, relaxed lifestyle, and friendly people. Its points-based immigration system prioritizes skilled workers who can contribute to the country\'s development.',
      visas: ['Skilled Migrant Category (SMC)', 'Essential Skills Work Visa', 'Student Visa', 'Partner / Family Visa', 'Working Holiday Visa'],
      process: [
        { title: 'Check eligibility and calculate your points score under the Skilled Migrant Category', duration: '1-3 days' },
        { title: 'Submit Expression of Interest (EOI) and receive an Invitation to Apply (ITA)', duration: '1-6 months' },
        { title: 'Lodge full residence application with all supporting documents', duration: '2-4 weeks' },
        { title: 'Undergo medicals, police checks, and await decision from INZ', duration: '3-9 months' }
      ],
      requirements: [
        'Job offer from a New Zealand employer (highly recommended)',
        'IELTS General score of minimum 6.5 in all bands',
        'Positive skills assessment from a New Zealand accreditation body',
        'Police clearance certificate from all countries lived in',
        'Completed medical examination from an approved physician',
        'Valid passport with at least 12 months beyond visa duration'
      ],
      benefits: [
        'Access to publicly funded healthcare as a permanent resident',
        'High quality of life, safety, and work-life balance culture',
        'Pathway to NZ citizenship after 5 years of residency',
        'English-speaking environment with excellent education system'
      ]
    },
    {
      name: 'France',
      flag: 'https://flagcdn.com/w80/fr.png',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=60',
      desc: 'Talent Passport, rich culture, and excellent living standards.',
      overview: 'France offers a rich cultural heritage, excellent healthcare, and a high standard of living. Its immigration system provides pathways for skilled workers, students, and those with exceptional talent.',
      visas: ['Talent Passport (Passeport Talent)', 'Employee on Assignment Visa', 'Student Visa (Long-stay)', 'Scientific Researcher Visa', 'Entrepreneur/Self-Employed Visa'],
      process: [
        { title: 'Identify the correct visa category for your profile', duration: '1-2 days' },
        { title: 'Book an appointment at the France Visa Application Centre (FVAC)', duration: '1-4 weeks' },
        { title: 'Submit biometrics, documents, and attend the visa interview', duration: '1 day' },
        { title: 'Await visa decision and travel to France', duration: '3-6 weeks' }
      ],
      requirements: [
        'Valid passport with at least 6 months validity beyond stay',
        'Proof of accommodation in France (lease or hotel booking)',
        'Evidence of sufficient financial resources for the stay',
        'Return flight booking or proof of onward travel',
        'French health insurance or travel insurance covering entire stay',
        'Employment contract or university enrollment letter'
      ],
      benefits: [
        'Access to France\'s high-quality national healthcare system',
        'EU freedom of movement for permanent residents and citizens',
        'Free university education at public institutions for EU residents',
        'Path to French citizenship after 5 years of legal residence'
      ]
    },
    {
      name: 'Ireland',
      flag: 'https://flagcdn.com/w80/ie.png',
      image: 'https://images.unsplash.com/photo-1590089415225-401ed66a1800?w=600&auto=format&fit=crop&q=60',
      desc: 'Critical Skills Employment Permit and thriving tech sector.',
      overview: 'Ireland offers a thriving economy, rich cultural heritage, and friendly people. Its immigration system provides pathways for skilled workers, students, and those with critical skills needed in the Irish market.',
      visas: ['Critical Skills Employment Permit', 'General Employment Permit', 'Study Visa (D Study)', 'Graduate Scheme (Stay and Thrive)', 'Family Reunification Visa'],
      process: [
        { title: 'Secure a job offer in a critical skills occupation from an Irish employer', duration: '1-4 months' },
        { title: 'Apply for Critical Skills Employment Permit from the DETE (Irish Gov)', duration: '4-8 weeks' },
        { title: 'Apply for an Irish employment visa at the Irish Embassy/Consulate', duration: '4-8 weeks' },
        { title: 'Register with GNIB/IRP (Irish Naturalisation Service) within 90 days of arrival', duration: '1-2 weeks' }
      ],
      requirements: [
        'A job offer in an eligible critical skills occupation from an Irish employer',
        'Annual salary of at least €38,000 (or €64,000 for non-shortage occupations)',
        'Relevant degree or equivalent professional qualification',
        'Valid passport with sufficient validity',
        'Proof of accommodation in Ireland',
        'Health insurance for initial period of residence'
      ],
      benefits: [
        'Access to Ireland\'s public healthcare system (PRSI contributions)',
        'Pathway to permanent residency (Stamp 4) after 5 years',
        'EU freedom of movement rights after Irish citizenship',
        'Thriving tech, pharma, and finance sector employment opportunities'
      ]
    }
  ];

  return (
    <div className="countries-page-container">
      {/* Hero Header */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Countries We Offer</h1>
          <p className="hero-subtitle">
            Explore visa programs and settlement opportunities across the globe's most popular and prosperous immigration destinations.
          </p>
        </div>
      </section>

      {/* Countries grid */}
      <section className="countries-section" style={{ padding: '4rem 0 6rem 0' }}>
        <div className="container">
          <h2>Explore Destinations</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            Click "View Details" on any country card to explore visa types, immigration process, requirements, and benefits.
          </p>

          <div className="countries-grid">
            {countries.map((country) => (
              <div
                key={country.name}
                className="country-card"
                onClick={() => {
                  setSelectedCountry(country);
                  setModalActiveTab('overview');
                }}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA banner */}
      <section className="form-section" style={{ padding: '0 0 6rem 0' }}>
        <div className="container">
          <div className="cta-banner" style={{ margin: 0 }}>
            <h3 style={{ fontSize: '1.75rem', color: '#111827', marginBottom: '0.75rem' }}>Ready to Start Your Journey?</h3>
            <p className="cta-banner-text">
              Ready to start your profiling session? Let our experts verify which country matches your profile.
            </p>
            <div className="cta-banner-actions">
              <a href="#/contact" className="btn btn-pink">Start Free Assessment</a>
              <a href="tel:+919676655959" className="btn btn-secondary">Speak With Consultants</a>
            </div>
          </div>
        </div>
      </section>

      {/* Country Detail Modal */}
      {selectedCountry && (
        <div className="modal-overlay" onClick={() => setSelectedCountry(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header with hero image */}
            <div className="modal-header" style={{ backgroundImage: `url('${selectedCountry.image}')` }}>
              <div className="modal-header-overlay"></div>
              <button className="modal-close-btn" onClick={() => setSelectedCountry(null)}>✕</button>
              <img src={selectedCountry.flag} alt={`${selectedCountry.name} Flag`} className="modal-header-flag" />
              <div className="modal-header-title-wrap">
                <h2 className="modal-header-title">{selectedCountry.name}</h2>
                <p className="modal-header-desc">{selectedCountry.overview.substring(0, 140)}...</p>
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
                          <span style={{ display: 'block', fontSize: '0.8rem', color: '#7c3aed', fontWeight: 'bold', marginTop: '4px' }}>
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
                  window.location.hash = '#/contact';
                }}
              >
                Get Consultation →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
