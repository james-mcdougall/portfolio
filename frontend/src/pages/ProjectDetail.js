import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.REACT_APP_BACKEND_URL || '';

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`${API_URL}/api/projects/${id}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id, API_URL]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-apple-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project || project.error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-apple-blue hover:bg-apple-blue-hover text-white px-6 py-3 rounded-full transition-all"
            data-testid="back-to-home-btn"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black"
    >
      {/* Hero Glow */}
      <div className="hero-glow top-0 left-1/2 transform -translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted hover:text-white transition-colors mb-12 group"
          data-testid="back-button"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <span className="inline-block bg-apple-blue/20 text-apple-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6" data-testid="project-title">
            {project.title}
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl" data-testid="project-description">
            {project.description}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="glass rounded-3xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
              data-testid="project-image"
            />
          </div>
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-apple-blue" size={24} />
              <h2 className="text-xl font-semibold text-white">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-3" data-testid="technologies-list">
              {project.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white/5 border border-white/10 text-zinc-300 px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-3xl p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-6">Key Features</h2>
            <ul className="space-y-3" data-testid="features-list">
              {project.features?.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-apple-green rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-zinc-400">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Challenges & Outcome */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass rounded-3xl p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Challenges</h2>
            <p className="text-zinc-400" data-testid="project-challenges">{project.challenges}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass rounded-3xl p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Outcome</h2>
            <p className="text-zinc-400" data-testid="project-outcome">{project.outcome}</p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => navigate('/')}
            className="bg-apple-blue hover:bg-apple-blue-hover text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-[0_0_30px_rgba(10,132,255,0.4)] inline-flex items-center gap-2"
            data-testid="view-more-projects-btn"
          >
            View More Projects
            <ExternalLink size={18} />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
