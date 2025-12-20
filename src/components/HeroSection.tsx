'use client';

import './animated-button.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function HeroSection() {
  return (
    <div id="hero" className="relative h-screen flex items-center justify-center text-center overflow-x-hidden">
      {/* Dark Horizon Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #000000 50%, #0d1a36 85%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-16 sm:pt-0">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                delay: 0.2 
              }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              <motion.span
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
              >
                Soluções de IA
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                sob medida para sua empresa
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 50, 
              damping: 20,
              delay: 1.2 
            }}
            className="text-base sm:text-lg md:text-xl mb-8 text-gray-300"
          >
            Desenvolvemos softwares inteligentes e agentes de IA personalizados para otimizar processos e automatizar tarefas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10, delay: 1.6 }}
            className="inline-block mt-8"
          >
            <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Saiba Mais</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
