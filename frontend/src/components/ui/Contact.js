import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jameswilliammcdougall@gmail.com',
      href: 'mailto:jameswilliammcdougall@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(314) 709-0309',
      href: 'tel:+13147090309'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'St. Louis, MO',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/james-mcdougall'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jameswilliammcdougall/'
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative" data-testid="contact-section">
      <div className="hero-glow bottom-0 left-1/2 transform -translate-x-1/2 opacity-30" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-apple-blue font-medium text-sm tracking-wider uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss iOS development opportunities? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="glass rounded-3xl p-6 text-center"
              data-testid={`contact-${info.label.toLowerCase()}`}
            >
              <div className="w-14 h-14 bg-apple-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="text-apple-blue" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">{info.label}</h3>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-zinc-400 hover:text-apple-blue transition-colors text-sm break-all"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-zinc-400 text-sm">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="glass w-14 h-14 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-apple-blue/20 transition-all"
              data-testid={`social-${social.label.toLowerCase()}`}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
