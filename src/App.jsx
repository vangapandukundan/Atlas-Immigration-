import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Countries from './pages/Countries';
import Lenis from 'lenis'; // lenis library is used here for smooth scrolling effect
import { AnimatePresence, motion } from 'framer-motion'; // framer-motion library is used here for animations

function App() { // This is the main component of the application
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      // Smooth scroll to top on hash change
      lenis.scrollTo(0, { immediate: true });
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('mousemove', handleMouseMove);
      lenis.destroy();
    };
  }, []);

  // Simple router switch statement to mentioned in the home page 
  const renderPage = () => {
    switch (currentPath) {
      case '#/':
        return <Home />;
      case '#/about':
        return <About />;
      case '#/services':
        return <Services />;
      case '#/career':
        return <Career />;
      case '#/contact':
        return <Contact />;
      case '#/countries':
        return <Countries />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar currentPath={currentPath} />
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPath}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="page-wrapper"
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      <Footer />

      {/* Modern Cursor Glow Effect */}
      <div
        className="cursor-glow-desktop"
        style={{
          position: 'fixed',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.02) 50%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
          zIndex: 9999,
          borderRadius: '50%',
        }}
      />
    </>
  );
}

export default App;

