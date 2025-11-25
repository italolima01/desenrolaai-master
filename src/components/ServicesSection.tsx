'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCogs, FaLightbulb, FaAngleDoubleRight } from 'react-icons/fa';
import { QuoteModal } from './QuoteModal';
import { ChatWidget } from './ChatWidget'; // Import for modal control logic
import './animated-button.css';

export default function ServicesSection() {
  const services = [
    {
      title: 'Agentes de IA Personalizados',
      subtitle: 'Automatize tarefas específicas do seu negócio.',
      description:
        'Projetamos e implementamos agentes autônomos que integram dados, executam fluxos e tomam decisões para acelerar rotinas e reduzir custos.',
      Icon: FaRobot,
    },
    {
      title: 'Softwares Sob Medida',
      subtitle: 'Desenvolvemos sistemas de ponta, otimizados para você.',
      description:
        'Aplicações web e serviços escaláveis, com arquitetura moderna, performance e segurança, feitos para as necessidades da sua empresa.',
      Icon: FaCogs,
    },
    {
      title: 'Consultoria em IA',
      subtitle: 'Orientação estratégica para implementar IA de forma eficiente.',
      description:
        'Do diagnóstico à implantação: avaliamos oportunidades, definimos roadmap e apoiamos seu time na adoção de IA com governança.',
      Icon: FaLightbulb,
    },
  ];

  return (
    <section id="services" className="relative bg-black text-white py-20 pb-48 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl">O que oferecemos</h2>
          <p className="mt-4">Descomplicamos a tecnologia para você focar no que importa.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {services.map(({ title, subtitle, description, Icon }, idx) => (
            <FlipCard key={idx} title={title} subtitle={subtitle} description={description} Icon={Icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

type IconType = (props: { size?: number }) => React.ReactNode;

function FlipCard({ title, subtitle, description, Icon }: { title: string; subtitle: string; description: string; Icon: IconType }) {
  const [flipped, setFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card from flipping back
    setIsModalOpen(true);
  };

  return (
    <div
      className="relative h-full min-h-56 md:min-h-64 [perspective:1000px]"
      onClick={() => setFlipped((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setFlipped((v) => !v)}
    >
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <motion.div
        className="group relative h-full w-full rounded-xl border border-[rgb(var(--color-secondary))]/50 bg-gray-900/50 p-8 flex shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-[rgb(var(--color-secondary))]/20 hover:border-[rgb(var(--color-secondary))] [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        whileHover={{ scale: flipped ? 1 : 1.05 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {/* Front */}
        <div className="absolute inset-0 p-8 flex flex-col [backface-visibility:hidden]">
          <div className="absolute right-4 top-4 h-8 w-8 grid place-items-center rounded-full bg-[rgb(var(--color-secondary))]/20 text-[rgb(var(--color-secondary))] transition-colors">
            <FaAngleDoubleRight size={14} />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-[rgb(var(--color-secondary))]/20 text-[rgb(var(--color-secondary))]">
              <Icon size={22} />
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
          <p className="text-gray-400">{subtitle}</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gray-900/50 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 leading-relaxed text-base">{description}</p>
        </div>
        <div className="mt-4 flex flex-col items-center">
            <button onClick={openModal} className="animated-button w-full max-w-xs">
              <span className="text">Solicitar Orçamento</span>
            </button>
        </div>
        </div>
      </motion.div>
    </div>
  );
}
