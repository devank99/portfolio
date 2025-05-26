import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import SectionTitle from './SectionTitle';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openProject = (id: number) => {
    setSelectedProject(id);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = projects.find(project => project.id === selectedProject);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="My Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gradient-to-br from-teal-50 to-indigo-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => openProject(project.id)}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm opacity-90 mt-1">Click to view details</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 line-clamp-2">{project.description}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject !== null && selectedProjectData && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img 
                  src={selectedProjectData.image} 
                  alt={selectedProjectData.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  onClick={closeProject}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{selectedProjectData.title}</h2>
                
                <p className="text-gray-600 mb-6">{selectedProjectData.longDescription}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={selectedProjectData.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  
                  {selectedProjectData.demoLink && (
                    <a 
                      href={selectedProjectData.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-lg hover:from-teal-600 hover:to-indigo-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;