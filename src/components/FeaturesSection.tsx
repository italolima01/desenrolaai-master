'use client';

import { motion } from 'framer-motion';
import { FaUserCog, FaMicrochip, FaRocket, FaHeadset } from 'react-icons/fa';
import Image from 'next/image';

const features = [
  {
    title: 'Experiência Personalizada',
    description: 'Soluções desenhadas para atender as necessidades únicas do seu negócio.',
    Icon: FaUserCog,
  },
  {
    title: 'Tecnologias de Ponta',
    description: 'Utilizamos as mais recentes inovações em IA e desenvolvimento de software.',
    Icon: FaMicrochip,
  },
  {
    title: 'Entrega Rápida',
    description: 'Processos ágeis para entregar valor de forma rápida e iterativa.',
    Icon: FaRocket,
  },
  {
    title: 'Suporte Contínuo',
    description: 'Acompanhamento e suporte dedicado para garantir o sucesso a longo prazo.',
    Icon: FaHeadset,
  },
];

export default function FeaturesSection() {
  return (<>
    <section id="features" className="relative text-white py-20 px-4 bg-black">
      
      <div className="container mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl">Por que escolher a <span className="text-[rgb(var(--color-primary))]">Desenrola</span>?</h2>
          <p className="mt-4">Nossos diferenciais que garantem o seu sucesso.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map(({ title, description, Icon }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-[rgb(var(--color-secondary))]/50 p-8 rounded-xl shadow-lg hover:shadow-[rgb(var(--color-secondary))]/20 transition-all duration-150 flex flex-col items-center text-center hover:border-[rgb(var(--color-secondary))]"
            >
              <div className="p-4 rounded-full bg-[rgb(var(--color-secondary))]/20 text-[rgb(var(--color-secondary))] mb-4">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    {/* Bottom gradient to transition from blue to white */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-28 bg-gradient-to-b from-transparent to-gray-40" />
    </section>
  </>);
}