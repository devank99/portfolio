import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, Eye } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Resume: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // **Corrected Resume URL**
  const resumeUrl =
    'https://drive.google.com/file/d/1jM4PFe4XXsHIKts1D13mhekBdBkO9HM4/preview'; // Changed to /preview for iframe embedding
  const resumeDownload =
    'https://drive.google.com/file/d/1jM4PFe4XXsHIKts1D13mhekBdBkO9HM4'; // download link

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-indigo-50 to-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="My Resume" />

        <div className="mt-12 flex flex-col items-center">
          <motion.div
            className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden sm:max-w-2xl" // Reduced max-w, added mx-auto, and sm:max-w
            initial={{ opacity: 0, y: 30, width: '80%' }} // Reduced initial width
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {isLoading && (
              <div className="flex justify-center items-center h-96">
                <motion.div
                  className="w-12 h-12 rounded-full border-t-4 border-l-4 border-teal-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            )}

            <iframe
              src={resumeUrl}
              className="w-full h-[800px]" // Increased the height significantly
              onLoad={handleIframeLoad}
              style={{ display: isLoading ? 'none' : 'block' }}
              title="Resume Preview"
            />
          </motion.div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={resumeDownload}
              download="Sarah_Chen_Resume.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileDown size={20} />
              <span>Download Resume</span>
            </motion.a>

            <motion.a
              href={resumeDownload}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={20} />
              <span>Open in New Tab</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
