import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, light = false }) => {
  return (
    <div className="text-center mb-12">
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold inline-block ${
          light ? 'text-white' : 'text-gray-800'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
        <motion.div 
          className="h-1 bg-gradient-to-r from-teal-500 to-indigo-500 mt-2"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </motion.h2>
    </div>
  );
};

export default SectionTitle;