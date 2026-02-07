import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Project One',
      category: 'iOS App',
      description: 'A placeholder for your first iOS project.',
      image: 'https://images.unsplash.com/photo-1651130533706-ec3fc4701211?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwdWklMjBkYXJrJTIwbW9kZXxlbnwwfHx8fDE3NzA0NDE0Njd8MA&ixlib=rb-4.1.0&q=85',
      featured: true
    },
    {
      id: 2,
      title: 'Project Two',
      category: 'iOS App',
      description: 'A placeholder for your second iOS project.',
      image: 'https://images.unsplash.com/photo-1571952288324-552b8c0daceb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tlciUyMGFwcCUyMHVpJTIwZGFyayUyMG1vZGUlMjBtb2JpbGV8ZW58MHx8fHwxNzcwNDQxNDcxfDA&ixlib=rb-4.1.0&q=85',
      featured: false
    },
    {
      id: 3,
      title: 'Project Three',
      category: 'iOS App',
      description: 'A placeholder for your third iOS project.',
      image: 'https://images.unsplash.com/photo-1612588311647-c87d00ea19df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxmaXRuZXNzJTIwdHJhY2tlciUyMGFwcCUyMHVpJTIwZGFyayUyMG1vZGUlMjBtb2JpbGV8ZW58MHx8fHwxNzcwNDQxNDcxfDA&ixlib=rb-4.1.0&q=85',
      featured: false
    },
    {
      id: 4,
      title: 'Project Four',
      category: 'iOS App',
      description: 'A placeholder for your fourth iOS project.',
      image: 'https://images.unsplash.com/photo-1565268878251-eb6848dc481c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ24lMjB1aSUyMGRhcmslMjBtb2RlJTIwc2xlZWt8ZW58MHx8fHwxNzcwNDQxNDUwfDA&ixlib=rb-4.1.0&q=85',
      featured: true
    },
    {
      id: 5,
      title: 'Project Five',
      category: 'iOS App',
      description: 'A placeholder for your fifth iOS project.',
      image: 'https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwdWklMjBkYXJrJTIwbW9kZXxlbnwwfHx8fDE3NzA0NDE0Njd8MA&ixlib=rb-4.1.0&q=85',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative" data-testid="projects-section">
      <div className="hero-glow top-1/2 right-0 transform -translate-y-1/2 opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-apple-blue font-medium text-sm tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Click on any project to see more details. These are placeholders ready for your iOS projects.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${
                project.featured && index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              } ${
                project.featured && index === 3 ? 'lg:col-span-2' : ''
              }`}
              data-testid={`project-card-${project.id}`}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => navigate(`/project/${project.id}`)}
                className="glass rounded-3xl overflow-hidden cursor-pointer group h-full"
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden ${
                  project.featured && index === 0 ? 'h-64 lg:h-96' : 'h-48 lg:h-56'
                }`}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-apple-blue/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-apple-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                  
                  {/* View Details Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-apple-blue font-medium text-sm group/btn"
                    data-testid={`view-project-${project.id}-btn`}
                  >
                    View Details
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
