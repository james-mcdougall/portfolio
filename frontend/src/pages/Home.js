import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/ui/Navbar';
import Hero from '../components/ui/Hero';
import About from '../components/ui/About';
import Skills from '../components/ui/Skills';
import Experience from '../components/ui/Experience';
import Projects from '../components/ui/Projects';
import Contact from '../components/ui/Contact';
import Footer from '../components/ui/Footer';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;
