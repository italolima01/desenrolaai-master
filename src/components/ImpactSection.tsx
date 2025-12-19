'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function ImpactSection() {
  return (
    <section className="relative bg-black text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Impacto Real para o Cliente
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Resultados <span className="text-teal-400 font-semibold">mensuráveis e comprovados</span> que transformam operações e aceleram o crescimento do seu negócio.
          </p>
        </div>

        {/* Gráfico 1 - Esquerda */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <CircularChart percentage={75} color="from-emerald-400 to-teal-500" title="Aumento de Produtividade" description="Redução significativa no tempo gasto com tarefas repetitivas" />
          </div>
          <div className="space-y-6">
            <BenefitCard 
              icon="→"
              title="Processos Mais Eficientes"
              description="Fluxos de trabalho otimizados que eliminam gargalos e aceleram entregas."
              color="text-teal-400"
            />
            <BenefitCard 
              icon="→"
              title="Automação Inteligente"
              description="Tarefas repetitivas executadas automaticamente, liberando sua equipe para atividades estratégicas."
              color="text-emerald-400"
            />
          </div>
        </div>

        {/* Gráfico 2 - Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 lg:order-1">
            <BenefitCard 
              icon="→"
              title="Decisões Mais Assertivas"
              description="Informações organizadas que fundamentam escolhas estratégicas com confiança."
              color="text-cyan-400"
            />
            <BenefitCard 
              icon="→"
              title="Análises Precisas"
              description="Dados transformados em insights acionáveis para tomada de decisão rápida e eficaz."
              color="text-blue-400"
            />
          </div>
          <div className="flex justify-center lg:order-2">
            <CircularChart percentage={60} color="from-cyan-400 to-blue-500" title="Redução de Retrabalho" description="Eliminação de erros e inconsistências nos processos" />
          </div>
        </div>

        {/* Gráfico 3 - Esquerda */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <CircularChart percentage={50} color="from-blue-400 to-indigo-500" title="Economia de Tempo" description="Horas recuperadas para atividades estratégicas" />
          </div>
          <div className="space-y-6">
            <BenefitCard 
              icon="→"
              title="Gestão Profissionalizada"
              description="Processos documentados, padronizados e escaláveis para crescimento sustentável."
              color="text-blue-400"
            />
            <BenefitCard 
              icon="→"
              title="Maior Competitividade"
              description="Operações mais eficientes e tomada de decisão mais rápida no mercado."
              color="text-indigo-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CircularChart({ percentage, color, title, description }: { percentage: number; color: string; title: string; description: string }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Initial animation when component mounts or comes into view
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsAnimating(true);
        setAnimatedPercentage(percentage);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage]);

  // Animate the display percentage counter
  useEffect(() => {
    if (animatedPercentage === 0) {
      setDisplayPercentage(0);
      return;
    }

    const duration = 1500; // Animation duration
    const steps = 60; // 60 steps for smooth animation
    const increment = animatedPercentage / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(increment * currentStep, animatedPercentage);
      setDisplayPercentage(newValue);
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayPercentage(animatedPercentage);
        setIsAnimating(false);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [animatedPercentage]);

  const handleMouseEnter = () => {
    setIsAnimating(true);
    setAnimatedPercentage(0);
    setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 50);
  };

  const handleMouseLeave = () => {
    // Do nothing - keep the animation state as is
  };

  const circumference = 2 * Math.PI * 45; // raio de 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div 
      ref={ref} 
      className="text-center cursor-pointer transition-transform duration-300 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gráfico Circular */}
      <div className="relative w-32 h-32 mx-auto mb-6">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Círculo de fundo */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(148, 163, 184, 0.2)"
            strokeWidth="8"
            fill="none"
          />
          {/* Círculo animado */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke={`url(#gradient-${percentage})`}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {/* Gradiente */}
          <defs>
            <linearGradient id={`gradient-${percentage}`} x1="0%" y1="0%" x2="100%" y2="0%">
              {color === "from-emerald-400 to-teal-500" && (
                <>
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </>
              )}
              {color === "from-cyan-400 to-blue-500" && (
                <>
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </>
              )}
              {color === "from-blue-400 to-indigo-500" && (
                <>
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#6366f1" />
                </>
              )}
            </linearGradient>
          </defs>
        </svg>
        
        {/* Porcentagem no centro */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            key={`${animatedPercentage}-${isAnimating}`}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {Math.round(displayPercentage)}%
            </motion.span>
          </motion.span>
        </div>
      </div>

      {/* Título e Descrição */}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function BenefitCard({ icon, title, description, color }: { icon: string; title: string; description: string; color: string }) {
  return (
    <div className="flex gap-4">
      <div className={`${color} text-2xl font-bold mt-1 flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}