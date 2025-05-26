import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
 // Import the Education component

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Reordered sections for scroll handling
      const sections = ['about', 'skills', 'projects', 'education', 'resume', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div 
          className="fixed inset-0 bg-white flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="w-20 h-20 border-8 border-teal-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      ) : (
        <div className="min-h-screen">
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          <Hero />
          <About />
          <Skills />      {/* Moved Up */}
          <Projects />    {/* Moved Up */}
          <Education />   {/* Moved Down */}
          <Resume />
          <Contact />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
