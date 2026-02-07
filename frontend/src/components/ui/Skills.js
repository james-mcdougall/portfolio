import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: ['Swift', 'SwiftUI', 'UIKit', 'Objective-C', 'Flutter/Dart', 'Node.js']
    },
    {
      title: 'iOS Frameworks',
      skills: ['Core Data', 'Core Animation', 'Core Location', 'MapKit', 'HealthKit', 'ARKit', 'CloudKit', 'Bluetooth']
    },
    {
      title: 'Tools & Practices',
      skills: ['Xcode', 'Git', 'CI/CD', 'TDD', 'XCUI', 'XCUnit', 'Jira', 'Confluence']
    },
    {
      title: 'Backend & Cloud',
      skills: ['MongoDB', 'AWS', 'REST APIs', 'SQL', 'Agile/Scrum', 'Kanban']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative" data-testid="skills-section">
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
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            My Tech Stack
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass rounded-3xl p-8"
              data-testid={`skill-category-${categoryIndex}`}
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * skillIndex }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(10, 132, 255, 0.2)' }}
                    className="bg-white/5 border border-white/10 text-zinc-300 px-4 py-2 rounded-full text-sm cursor-default transition-all"
                    data-testid={`skill-${skill.toLowerCase().replace(/[\s\/]/g, '-')}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
