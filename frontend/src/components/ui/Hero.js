import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const profileImage = 'https://customer-assets.emergentagent.com/job_11efe1c1-4f2f-45f2-8334-9f878e560a73/artifacts/z18l2yjd_james.jpg';

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" data-testid="hero-section">
      {/* Background Glow */}
      <div className="hero-glow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow top-1/4 right-0 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-apple-green rounded-full animate-pulse"></span>
              <span className="text-sm text-zinc-400">Available for new opportunities</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6" data-testid="hero-name">
              James<br />
              <span className="bg-gradient-to-r from-apple-blue to-blue-400 bg-clip-text text-transparent">
                McDougall
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 mb-8" data-testid="hero-title">
              iOS Developer crafting seamless mobile experiences since 2019
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 text-zinc-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm"
              >
                Swift & SwiftUI
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 text-zinc-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm"
              >
                UIKit
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 text-zinc-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm"
              >
                U.S. Navy Veteran
              </motion.span>
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="bg-apple-blue hover:bg-apple-blue-hover text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-[0_0_30px_rgba(10,132,255,0.4)]"
                data-testid="hero-cta-projects"
              >
                View My Work
              </motion.a>
              
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://github.com/james-mcdougall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                  data-testid="hero-github"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://www.linkedin.com/in/jameswilliammcdougall/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                  data-testid="hero-linkedin"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="mailto:jameswilliammcdougall@gmail.com"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                  data-testid="hero-email"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-apple-blue/20 blur-3xl rounded-full scale-110" />
              
              {/* Image Container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="James McDougall"
                    className="w-full h-full object-cover"
                    data-testid="hero-profile-image"
                  />
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🍎</span>
                    <div>
                      <p className="text-white font-semibold text-sm">6+ Years</p>
                      <p className="text-zinc-400 text-xs">iOS Development</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-zinc-500 hover:text-white transition-colors"
            data-testid="scroll-indicator"
          >
            <ChevronDown size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
