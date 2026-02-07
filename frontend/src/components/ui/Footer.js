import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-zinc-400 text-sm">
            <span>© {currentYear} James McDougall</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={14} className="text-red-500" /> and Swift passion
            </span>
          </div>

          <div className="text-zinc-500 text-sm">
            U.S. Navy Veteran
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
