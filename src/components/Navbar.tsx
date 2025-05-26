import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Mail, Database } from 'lucide-react';
import { aboutMe } from '../data';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Reordered sections: Skills and Projects now come before Education
  const sections = ['about', 'skills', 'projects', 'education', 'resume', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Database className="text-teal-500" size={24} />
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
              {aboutMe.name}
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section}
                className={`capitalize text-lg ${
                  activeSection === section
                    ? 'text-teal-600 font-medium'
                    : 'text-gray-700 hover:text-teal-500'
                }`}
                onClick={() => handleSectionClick(section)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
              </motion.button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href={aboutMe.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 hover:text-teal-600"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${aboutMe.email}`}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 hover:text-teal-600"
            >
              <Mail size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-4">
              {sections.map((section) => (
                <motion.button
                  key={section}
                  className={`capitalize text-lg ${
                    activeSection === section
                      ? 'text-teal-600 font-medium'
                      : 'text-gray-700'
                  }`}
                  onClick={() => handleSectionClick(section)}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.button>
              ))}
              <div className="flex space-x-4 pt-2 border-t border-gray-200">
                <motion.a
                  href={aboutMe.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-700 hover:text-teal-600"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href={`mailto:${aboutMe.email}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-700 hover:text-teal-600"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
