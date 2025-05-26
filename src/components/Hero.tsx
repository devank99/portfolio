import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Terminal, Lightbulb } from 'lucide-react';
import { aboutMe } from '../data';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, 10, -10, 10, 0],
      scale: 1.2,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    rest: {
      rotate: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  // Subtitle Animation (Typing)
  const [displayedTitle, setDisplayedTitle] = useState('');
  const fullTitle = aboutMe.title;
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < fullTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle((prevTitle) => prevTitle + fullTitle[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 100); // Adjust typing speed here (milliseconds per character)
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullTitle]);

  //title Animation
    const titleAnimation = {
        hover: {
            scale: 1.1,
            textShadow: "0 0 8px rgb(168, 85, 247)", // Add a subtle glow
            transition: { duration: 0.3, ease: "easeInOut" },
        },
        rest: {
            scale: 1,
            textShadow: "0 0 0px rgb(168, 85, 247)",
            transition: { duration: 0.3, ease: "easeInOut" },
        },
    };

  return (
    <div
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-100 to-gray-100 pt-20 pb-40 relative overflow-hidden"
    >
      {/* Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Icons Row */}
        <motion.div
          className="flex justify-center mb-8 space-x-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          <motion.div
            className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shadow-md"
            variants={iconVariants}
            whileHover="hover"
            initial="rest"
          >
            <Code size={32} />
          </motion.div>
          <motion.div
            className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shadow-md"
            variants={iconVariants}
            whileHover="hover"
            initial="rest"
          >
            <Terminal size={32} />
          </motion.div>
          <motion.div
            className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shadow-md"
            variants={iconVariants}
            whileHover="hover"
            initial="rest"
          >
            <Lightbulb size={32} />
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent leading-normal pb-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {aboutMe.name}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
            className="text-2xl md:text-4xl font-medium mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"
            variants={titleAnimation}
            whileHover="hover"
            initial="rest"
        >
          {displayedTitle}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {aboutMe.description}
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex items-center justify-center mx-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full font-medium shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Dive Deeper
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <ChevronDown size={36} className="text-gray-500" />
      </motion.div>
    </div>
  );
};

export default Hero;