import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Heart, Database } from 'lucide-react';
import { aboutMe } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <Database className="text-teal-400" size={24} />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
                {aboutMe.name}
              </h2>
            </div>
            <p className="text-gray-400 mt-2">{aboutMe.title}</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href={aboutMe.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-teal-500 hover:text-white transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href={`mailto:${aboutMe.email}`} 
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-teal-500 hover:text-white transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-teal-500" /> using React & Framer Motion
          </p>
          <p className="mt-2">
            &copy; {currentYear} {aboutMe.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;