'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCogs, FaLightbulb, FaAngleDoubleRight } from 'react-icons/fa'; // Removed unused imports
import './card-animation.css';


export default function ServicesSection() {
  const services = [
    {
      title: 'Agentes de IA Personalizados',
      subtitle: 'Automatize tarefas específicas do seu negócio.',
      description: 'Transforme processos repetitivos em automação inteligente. Nossos agentes de IA aprendem com seus dados e executam tarefas complexas 24/7, liberando sua equipe para focar no estratégico.',
      Icon: FaRobot,
    },
    {
      title: 'Softwares Sob Medida',
      subtitle: 'Desenvolvemos sistemas de ponta, otimizados para você.',
      description: 'Cada negócio é único. Criamos soluções personalizadas que se adaptam perfeitamente aos seus processos, garantindo eficiência máxima e resultados mensuráveis.',
      Icon: FaCogs,
    },
    {
      title: 'Consultoria em IA',
      subtitle: 'Orientação estratégica para implementar IA de forma eficiente.',
      description: 'Não sabe por onde começar com IA? Guiamos sua empresa desde a identificação de oportunidades até a implementação prática, com foco em ROI e resultados tangíveis.',
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
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setFlipped((v) => !v);
      setIsAnimating(false);
    }, 250);
  };

  return (
    <div
      className="relative h-full min-h-64 cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
    >
      <div className={`group relative h-full w-full rounded-xl border border-[rgb(var(--color-secondary))]/50 bg-gray-900/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-[rgb(var(--color-secondary))]/20 hover:border-[rgb(var(--color-secondary))] ${isAnimating ? 'rotate-hor-center-normal' : ''}`}>
        {/* Front */}
        <motion.div 
          className="absolute inset-0 p-8 flex flex-col"
          initial={{ opacity: 1 }}
          animate={{ opacity: flipped ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: flipped ? 'none' : 'auto' }}
        >
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
        </motion.div>

        {/* Back */}
        <motion.div 
          className="absolute inset-0 p-6 flex flex-col justify-center bg-gray-900/50 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: flipped ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: flipped ? 'auto' : 'none' }}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-300 leading-relaxed text-base">{description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
