import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';
import SectionTitle from './SectionTitle';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  // Limit to only the first two education entries
  const limitedEducation = education.slice(0, 2);

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Education" />

        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

          {/* Education Items */}
          <div className="space-y-24">
            {limitedEducation.map((edu, index) => (
              <div key={edu.id} className={`flex flex-col md:flex-row relative`}>
                <div
                  className={`md:w-1/2 flex pb-8 md:pb-0 relative ${
                    index % 2 === 0
                      ? 'md:justify-end md:pr-[4rem] md:order-first'
                      : 'md:justify-start md:pl-[4rem] md:order-last'
                  }`}
                >
                  {/* Horizontal Line connecting the education box */}
                  <motion.div
                    className={`absolute top-1/2 -translate-y-1/2 h-1 w-10 bg-purple-500 ${ /* Changed w-12 to w-10 */
                      index % 2 === 0 ? 'right-0' : 'left-0'
                    }`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '4.0rem' }} /* Changed 5rem to 2.5rem */
                    transition={{ duration: 0.8, delay: index * 0.4, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  ></motion.div>

                  <div
                    className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                          <GraduationCap size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {edu.degree}
                          </h3>
                          <p className="text-gray-600">{edu.field}</p>
                        </div>
                      </div>

                      <h4 className="text-lg font-medium text-purple-600 mb-2">
                        {edu.institution}
                      </h4>

                      <div className="flex items-center text-gray-500 mb-4">
                        <Calendar size={16} className="mr-2" />
                        <span>
                          {edu.startYear} - {edu.endYear}
                        </span>
                      </div>

                      <p className="text-gray-600">{edu.description}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start relative"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
