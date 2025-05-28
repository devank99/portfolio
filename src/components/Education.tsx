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
          {/* Timeline Line: Positioned left on mobile, center on desktop */}
          <div className="absolute top-0 bottom-0 left-4 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full
                          md:left-1/2 md:-translate-x-1/2 md:w-1.5"></div>

          {/* Education Items */}
          <div className="space-y-16 md:space-y-24">
            {limitedEducation.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative flex items-start" // Main flex container for dot and content
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Dot on the timeline */}
                {/* Mobile: left-4 aligns with the left timeline. Desktop: md:left-1/2 aligns with centered timeline. */}
                <div className={`absolute top-5 left-4 w-3 h-3 rounded-full bg-purple-500 border-2 border-white z-10
                                md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-4 md:h-4`}
                ></div>

                {/* Content Block Wrapper */}
                {/* Mobile: Takes full width with margin for timeline. Desktop: Alternates sides. */}
                <div
                  className={`w-full ml-10 md:ml-0 md:w-[calc(50%-2rem)] pb-8 md:pb-0
                              ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}
                >
                  {/* Horizontal Connector Line (Desktop only) */}
                  <motion.div
                    className="hidden md:block absolute h-0.5 bg-purple-400"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{
                      width: 'calc(2rem - 0.5rem)', // Gap (2rem) minus half dot width (0.5rem for md:w-4)
                      top: 'calc(1.5rem + 0.5rem - 1px)', // md:top-6 (1.5rem) + half dot height (0.5rem) - half line height (1px for h-0.5)
                      ...(index % 2 === 0
                        ? { right: 'calc(50% + 0.5rem)', transformOrigin: 'right' } // Connects from right edge of left block
                        : { left: 'calc(50% + 0.5rem)', transformOrigin: 'left' })  // Connects from left edge of right block
                    }}
                  ></motion.div>

                  {/* Actual Content Card */}
                  <div className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-left"> {/* Ensure text-left for card content */}
                    <div className="p-6">
                      <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : 'md:text-left'}`}>
                        <div className={`w-10 h-10 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center text-purple-600 ${index % 2 === 0 ? 'md:ml-3' : 'md:mr-3'}`}>
                          <GraduationCap size={20} />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-gray-500">{edu.field}</p>
                        </div>
                      </div>
                      <h4 className={`text-md font-medium text-purple-600 mb-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        {edu.institution}
                      </h4>
                      <div className={`flex items-center text-xs text-gray-500 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <Calendar size={14} className="mr-1.5" />
                        <span>
                          {/* {edu.startYear} - */} {edu.endYear} {/* Display only end year */}
                        </span>
                      </div>
                      <p className={`text-sm text-gray-600 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{edu.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
