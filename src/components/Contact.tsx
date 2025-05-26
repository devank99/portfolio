import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Phone } from 'lucide-react'; // Added Phone import
import { aboutMe } from '../data';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Get In Touch" />

        <div className="flex flex-col md:flex-row gap-10 mt-12">
          <motion.div
            className="md:w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8 md:text-lg">
              I’m currently seeking new opportunities in data analysis and am open to full-time roles.If you’re hiring or aware of any opportunities in this field, please reach out to me via email or connect with me on social media.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <Mail size={20} className="mr-3 text-teal-500" />
                <a href={`mailto:${aboutMe.email}`} className="hover:text-teal-500 transition-colors">
                  {aboutMe.email}
                </a>
              </div>
                {/* Display phone number if it exists */}
                {aboutMe.phoneNumber && (
                <div className="flex items-center text-gray-700">
                    <Phone size={20} className="mr-3 text-teal-500" />
                    <a href={`tel:${aboutMe.phoneNumber}`} className="hover:text-teal-500 transition-colors">
                        {aboutMe.phoneNumber}
                    </a>
                </div>
                 )}
            </div>

            <div className="flex space-x-4">
              <motion.a
                href={aboutMe.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-teal-500 hover:text-white transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={22} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
