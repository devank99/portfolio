import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data';
import SectionTitle from './SectionTitle';
import {
  Database, FileSpreadsheet, Code, BarChart, Sigma, PieChart, Info, Users, MessageSquare, Presentation, Puzzle, Brain, UserCheck
} from 'lucide-react';

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [activeSoftSkill, setActiveSoftSkill] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'database':
        return <Database size={48} />;
      case 'file-spreadsheet':
        return <FileSpreadsheet size={48} />;
      case 'code':
        return <Code size={48} />;
      case 'bar-chart':
        return <BarChart size={48} />;
      case 'sigma':
        return <Sigma size={48} />;
      case 'pie-chart':
        return <PieChart size={48} />;
      case 'users':
        return <Users size={48} />;
      case 'message-square':
        return <MessageSquare size={48}/>;
      case 'presentation':
        return <Presentation size={48}/>;
      case 'puzzle':
        return <Puzzle size={48}/>;
      case 'brain':
        return <Brain size={48}/>;
      case 'user-check':
        return <UserCheck size={48}/>;
      default:
        return <Code size={48} />;
    }
  };

  // Define colors based on the website's theme
  const skillColors = [
    { bg: "bg-blue-100", icon: "text-blue-600", gradient: "from-blue-100 to-blue-200" },
    { bg: "bg-purple-100", icon: "text-purple-600", gradient: "from-purple-100 to-purple-200" },
    { bg: "bg-teal-100", icon: "text-teal-600", gradient: "from-teal-100 to-teal-200" },
    { bg: "bg-indigo-100", icon: "text-indigo-600", gradient: "from-indigo-100 to-indigo-200" },
    { bg: "bg-green-100", icon: "text-green-600", gradient: "from-green-100 to-green-200" },
    { bg: "bg-pink-100", icon: "text-pink-600", gradient: "from-pink-100 to-pink-200" },
  ];

    // Soft Skills Data
    const softSkills = [
      {
        name: "Collaboration",
        icon: "users",
        description: "Working effectively with teams to achieve shared goals.",
      },
      {
        name: "Communication",
        icon: "message-square",
        description: "Clearly conveying complex data insights to technical and non-technical audiences.",
      },
      {
        name: "Presentation",
        icon: "presentation",
        description: "Presenting data findings in a compelling and understandable way.",
      },
      {
        name:"Problem-solving",
        icon: "puzzle",
        description: "Identify the main issues and finding solutions in data."
      },
      {
        name:"Critical Thinking",
        icon: "brain",
        description: "Evaluating information objectively and identifying patterns and trends"
      },
      {
        name: "Adaptability",
        icon: "user-check",
        description: "Responding effectively to changing priorities and new information."
      }
    ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-teal-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="My Skills" />

        {/* Filter out the 'R' skill before mapping */}
        {(() => {
          const filteredSkills = skills.filter(skill => skill.name.toLowerCase() !== 'r');
          return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredSkills.map((skill, index) => {
            const colorIndex = index % skillColors.length; // Use index from filteredSkills
            const { bg, icon, gradient } = skillColors[colorIndex];

            return (
              <motion.div
                key={skill.name}
                className={`${bg} rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow relative`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setActiveSkill(index)}
                onHoverEnd={() => setActiveSkill(null)}
              >
                <div className="p-6">
                  <div className="flex flex-col items-center mb-4">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center ${icon} mb-2`}>
                      {getIcon(skill.icon)}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">{skill.name}</h3>
                  </div>

                  <motion.div
                    className="mt-4 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      className={`flex items-center text-sm ${icon} hover:text-indigo-600`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                    >
                      <Info size={16} className="mr-1" />
                      <span>More details</span>
                    </motion.button>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeSkill === index && (
                    <motion.div
                      className="absolute inset-0 bg-white p-6 flex flex-col justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{skill.name}</h3>
                      <p className="text-gray-600">{skill.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
          );
        })()}
        {/* Soft Skills Section */}
        <div className='mt-20'> {/* Added margin top here*/}
        <SectionTitle title="My Soft Skills" />
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {softSkills.map((softSkill, index) => {
                 const colorIndex = (index + skills.length) % skillColors.length; //Offset colors
                 const { bg, icon: softSkillIconColor, gradient } = skillColors[colorIndex]; // Renamed to avoid conflict
                return(
                   <motion.div
                    key={softSkill.name}
                    className={`${bg} rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow relative`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    onHoverStart={() => setActiveSoftSkill(index)}
                    onHoverEnd={() => setActiveSoftSkill(null)}
                  >
                    <div className="p-6">
                      <div className="flex flex-col items-center mb-4">
                         <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center ${softSkillIconColor} mb-2`}>
                           {getIcon(softSkill.icon)}
                       </div>
                         <h3 className="text-2xl font-semibold text-gray-800">{softSkill.name}</h3>
                     </div>

                      <motion.div
                       className="mt-4 flex justify-center"
                       initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                       transition={{ delay: 0.5 }}
                     >
                        <motion.button
                         className={`flex items-center text-sm ${softSkillIconColor} hover:text-indigo-600`}
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                          onClick={() => setActiveSoftSkill(activeSoftSkill === index ? null : index)}
                       >
                          <Info size={16} className="mr-1" />
                        <span>More details</span>
                         </motion.button>
                       </motion.div>
                       </div>
                      <AnimatePresence>
                      {activeSoftSkill === index && (
                         <motion.div
                            className="absolute inset-0 bg-white p-6 flex flex-col justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.2 }}
                       >
                         <h3 className="text-xl font-semibold text-gray-800 mb-3">{softSkill.name}</h3>
                           <p className="text-gray-600">{softSkill.description}</p>
                     </motion.div>
                      )}
                     </AnimatePresence>
                    </motion.div>
                );
              })}
            </div>
      </div>
    </section>
  );
};

export default Skills;
