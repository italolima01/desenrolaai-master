'use client';

import './animated-button.css';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onOpenTablet?: () => void;
}

export default function HeroSection({ onOpenTablet }: HeroSectionProps) {
  const handleTabletClick = () => {
    onOpenTablet?.();
  };

  return (
    <>
      <div id="hero" className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Dark Horizon Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(125% 125% at 50% 90%, #000000 50%, #0d1a36 85%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-6"
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
                className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white"
              >
                <span className="block mb-2">
                  <motion.span
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
                  >
                    Desenvolvemos sites que
                  </motion.span>
                </span>
                <span className="block mb-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-red-400"
                  >
                    vendem mais
                  </motion.span>
                  {" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    para o seu negócio
                  </motion.span>
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 50, 
                  damping: 20,
                  delay: 1.2 
                }}
                className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              >
                Soluções inteligentes com IA para otimizar processos e automatizar tarefas
              </motion.p>
            </motion.div>

            {/* Tablet Device - Totalmente Deitado (90deg) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 20,
                delay: 1.5 
              }}
              className="mt-16 flex justify-center items-center"
              style={{ perspective: '1500px' }}
            >
              <motion.div
                initial={{ rotateX: 85 }}
                whileHover={{ 
                  rotateX: 60,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleTabletClick}
                className="relative cursor-pointer group"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center'
                }}
              >
                {/* Tablet Frame - Totalmente deitado */}
                <div 
                  className="relative w-[320px] sm:w-[500px] md:w-[700px] lg:w-[900px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border-[6px] border-gray-700 overflow-hidden"
                  style={{
                    boxShadow: '0 60px 120px rgba(0, 0, 0, 0.6), 0 30px 60px rgba(0, 0, 0, 0.4), inset 0 -2px 10px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {/* Screen Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 group-hover:from-blue-500/40 group-hover:to-cyan-500/40 transition-all duration-300" />
                  
                  {/* Screen Content Preview */}
                  <div className="absolute inset-3 bg-black/90 rounded-2xl flex items-center justify-center overflow-hidden">
                    <div className="text-center space-y-4 p-6">
                      <motion.div
                        animate={{ 
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
                      >
                        Clique para explorar
                      </motion.div>
                      <div className="text-gray-400 text-sm sm:text-base md:text-lg">
                        Descubra nossas soluções
                      </div>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Shadow on Surface - Mais próxima e realista */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] h-[95%] bg-black/50 blur-2xl rounded-3xl"
                  style={{
                    transform: 'translateX(-50%) translateY(10px) translateZ(-10px)',
                    zIndex: -1
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-12"
            >
              <div className="flex flex-col items-center gap-2 text-gray-400">
                <span className="text-sm">Clique no dispositivo</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
