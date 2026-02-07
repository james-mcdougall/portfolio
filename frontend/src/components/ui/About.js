import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Briefcase } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '6+', label: 'Years Experience' },
    { number: '5+', label: 'Companies' },
    { number: '10+', label: 'Apps Shipped' },
    { number: '100%', label: 'Passion' }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative" data-testid="about-section">
      <div className="hero-glow top-0 left-0 opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-apple-blue font-medium text-sm tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Crafting iOS Experiences
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed" data-testid="about-description">
              Seasoned iOS developer with a passion for building meaningful, user-focused apps for Apple devices. 
              Experienced in UIKit and SwiftUI, working with frameworks like MapKit, Bluetooth, and others.
            </p>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Recently led the development of a mission-critical iOS application for the National Geospatial Agency, 
              which involved building intuitive interfaces, setting up scalable backends, and deploying secure, 
              reliable infrastructure on AWS. Enjoys working with cross-functional teams, solving tough problems, 
              and continuously learning new technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin size={18} className="text-apple-blue" />
                <span>St. Louis, MO</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Award size={18} className="text-apple-green" />
                <span>U.S. Navy Veteran</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Briefcase size={18} className="text-apple-blue" />
                <span>Available for Work</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="glass rounded-3xl p-6 text-center"
                data-testid={`stat-${index}`}
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
