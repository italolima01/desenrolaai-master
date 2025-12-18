'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function InnovationSection() {
  return (
    <section id="about" className="relative text-white pt-20 bg-black">
      {/* Conteúdo principal */}
      <div className="relative pt-10 pb-48 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl group transition-transform duration-300 hover:scale-[1.02]">
                {/* Efeito de brilho em volta da imagem */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/70 to-sky-500/70 rounded-2xl blur-md opacity-70 group-hover:opacity-100 group-hover:blur-lg transition-all duration-500"></div>
                
                <Image
                  src="/images/team-meeting.jpg"
                  alt="Equipe trabalhando - Quem Somos"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl z-10"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-30 z-20" />
              </div>
            </motion.div>

            {/* Conteúdo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Quem Somos
              </h2>

              <p className="text-gray-300 text-base sm:text-lg mb-6">
                Somos uma empresa especializada em Inteligência Artificial aplicada à gestão, estratégia e automação de processos, desenvolvendo soluções que transformam a rotina operacional em decisões inteligentes.
              </p>

              <p className="text-gray-300 text-base sm:text-lg mb-6">
                Atendemos empresas que buscam <span className="text-teal-400 font-semibold">agilidade</span>, <span className="text-teal-400 font-semibold">precisão</span> e <span className="text-teal-400 font-semibold">resultados mensuráveis</span>. Nossa missão é unir tecnologia avançada, visão estratégica e execução prática para elevar o desempenho organizacional de forma sustentável e comprovada.
              </p>

              <p className="text-gray-300 text-base sm:text-lg">
                Com expertise profunda em IA e uma compreensão aguçada dos desafios corporativos modernos, entregamos soluções que realmente funcionam — não apenas promessas tecnológicas, mas ferramentas práticas que transformam operações e aceleram resultados.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}