import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Github,
  Database,
  BarChart2,
  FileSpreadsheet,
  Phone, // Import the Phone icon
} from 'lucide-react';
import { aboutMe } from '../data';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="About Me" />

        <div className="flex flex-col md:flex-row gap-10 mt-12">
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Hello, I'm {aboutMe.name}
            </h3>

            <div className="space-y-6 text-gray-600 text-lg">
              <p>{aboutMe.description}</p>
              <p>{aboutMe.longDescription}</p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <motion.div
                className="flex flex-col items-center p-6 bg-teal-100 rounded-lg"
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Database className="text-teal-500 mb-3" size={32} />
                <span className="text-center font-medium text-gray-700">Data Analysis</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center p-6 bg-indigo-200 rounded-lg"
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <BarChart2 className="text-indigo-500 mb-3" size={32} />
                <span className="text-center font-medium text-gray-700">Visualization</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center p-6 bg-cyan-100 rounded-lg"
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <FileSpreadsheet className="text-cyan-500 mb-3" size={32} />
                <span className="text-center font-medium text-gray-700">Reporting</span>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 flex justify-center"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-teal-500 to-indigo-500 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/3 md:mx-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mt-8 space-y-4">
              <div className="flex items-center text-gray-700">
                <MapPin size={20} className="mr-2 text-teal-500" />
                <span>{aboutMe.location}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail size={20} className="mr-2 text-teal-500" />
                <a
                  href={`mailto:${aboutMe.email}`}
                  className="hover:text-teal-500 transition-colors"
                >
                  {aboutMe.email}
                </a>
              </div>
              {/* Added Phone Number */}
               {aboutMe.phoneNumber && (
                <div className="flex items-center text-gray-700">
                  <Phone size={20} className="mr-2 text-teal-500" />
                  <a href={`tel:${aboutMe.phoneNumber}`} className="hover:text-teal-500 transition-colors">
                     {aboutMe.phoneNumber}
                  </a>
                </div>
                 )}

              <div className="flex space-x-4 pt-4">
                <motion.a
                  href={aboutMe.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-teal-500 hover:text-white transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
