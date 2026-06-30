import { useState, useEffect } from 'react';
import logoImg from '../assets/hero.png';
import { motion } from 'framer-motion';

export default function Navbar({ currentPath }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when hash changes
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: 'Home', path: '#/' },
    { label: 'Career', path: '#/career' },
    { label: 'About Us', path: '#/about' },
    { label: 'Countries', path: '#/countries' },
    { label: 'Services', path: '#/services' },
    { label: 'Contact', path: '#/contact' }
  ];

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        background: isScrolled ? 'rgba(0, 0, 0, 0.85)' : '#000000',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.4)' : 'none',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease'
      }}
    >
      <div className="navbar-container">
        <a href="#/" className="logo-link">
          <motion.img 
            src={logoImg} 
            alt="Atlas Immigration Services" 
            className="logo-img" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </a>

        {/* Mobile menu toggle */}
        <button 
          className={`menu-toggle ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <motion.li 
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.1, duration: 0.4 }}
            >
              <a 
                href={item.path} 
                className={`nav-item ${currentPath === item.path ? 'active' : ''}`}
                style={{ position: 'relative' }}
              >
                {item.label}
                {currentPath === item.path && (
                  <motion.span 
                    layoutId="activeTabIndicator"
                    className="active-indicator"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, var(--primary) 0%, var(--pink) 100%)',
                      borderRadius: '2px',
                      boxShadow: '0 2px 10px rgba(139, 92, 246, 0.6)'
                    }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

