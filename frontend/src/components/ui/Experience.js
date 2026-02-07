import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Omni Federal',
      role: 'iOS Developer',
      period: '12/2024 - 11/2025',
      location: 'St. Louis, United States',
      app: 'MAGE by NGA',
      appLink: 'https://apps.apple.com/us/app/mage-by-nga/id1032815042',
      highlights: [
        'Worked extensively with Objective-C, UIKit, and SwiftUI for the National Geospatial Agency',
        'Engineered scalable backend services using Node.js and MongoDB',
        'Implemented CI/CD pipelines aligned with federal standards'
      ]
    },
    {
      company: 'Viva Digital Group',
      role: 'iOS Team Lead',
      period: '06/2023 - 12/2024',
      location: 'Virginia Beach, United States',
      highlights: [
        'Led development of feature-rich iOS applications using Core Data, Core Animation, UIKit, and SwiftUI',
        'Managed full app deployment lifecycle including App Store submission',
        'Applied iOS Human Interface Guidelines and modern UX/UI trends'
      ]
    },
    {
      company: 'Milwaukee Tool',
      role: 'iOS Developer',
      period: '05/2022 - 06/2023',
      location: 'Milwaukee (remote), United States',
      app: 'Milwaukee ONE-KEY',
      appLink: 'https://apps.apple.com/us/app/milwaukee-one-key/id1029111192',
      highlights: [
        'Maintained codebase utilizing Swift (UIKit) and SwiftUI frameworks with MVVM',
        'Updated codebase from UIKit to SwiftUI',
        'Employed Test Driven Development using XCUI and XCUnit'
      ]
    },
    {
      company: 'RX Savings Solutions',
      role: 'Software Engineer',
      period: '05/2021 - 05/2022',
      location: 'Overland Park, United States',
      app: 'Rex Rx Savings Solutions',
      appLink: 'https://apps.apple.com/us/app/rex-rx-savings-solutions/id1486641404',
      highlights: [
        'Managed codebase using Flutter/Dart framework',
        'Used Agile/Kanban workflow for completing tickets',
        'Created widget and unit tests with TDD mindset'
      ]
    },
    {
      company: 'GoldKey Cyber Security',
      role: 'iOS Developer',
      period: '02/2021 - 05/2021',
      location: 'Kansas City, MO, United States',
      highlights: [
        'Used Swift (UIKit) implementing MVC design pattern',
        'Created audio, visual, and video streaming services',
        'Led iOS team in daily and weekly SCRUM meetings'
      ]
    },
    {
      company: 'Bloom Institute of Technology',
      role: 'iOS Team Lead Internship',
      period: '11/2019 - 11/2020',
      location: 'San Francisco, CA, United States',
      highlights: [
        'Led teams of 10-15 students in Agile/Scrum daily stand-ups',
        'Achieved 98% project completion rate',
        'Led cross-functional teams in week-long development projects'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative" data-testid="experience-section">
      <div className="hero-glow top-1/3 left-0 opacity-30" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-apple-blue font-medium text-sm tracking-wider uppercase mb-4 block">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-apple-blue via-border-color to-transparent md:transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
              data-testid={`experience-${index}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-apple-blue rounded-full transform -translate-x-1/2 md:-translate-x-1/2 shadow-[0_0_10px_rgba(10,132,255,0.5)]" />
              
              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`glass rounded-3xl p-6 md:p-8 ml-6 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                  <span className="text-apple-blue font-semibold text-lg mb-1">{exp.company}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{exp.role}</h3>
                  
                  <div className={`flex flex-wrap gap-4 mb-4 text-sm text-zinc-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  {exp.app && (
                    <a
                      href={exp.appLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-apple-blue hover:text-apple-blue-hover transition-colors text-sm mb-4"
                    >
                      <ExternalLink size={14} />
                      {exp.app}
                    </a>
                  )}

                  <ul className={`space-y-2 text-zinc-400 text-sm ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 bg-apple-green rounded-full mt-2 flex-shrink-0 ${index % 2 === 0 ? 'md:order-2' : ''}`}></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
