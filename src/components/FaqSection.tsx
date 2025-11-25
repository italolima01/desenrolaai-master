"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqSection() {
  const items = [
    {
      q: 'Como funcionam os prazos de entrega?',
      a: 'Os prazos variam conforme escopo. Normalmente entregamos um MVP em 4-8 semanas e versões completas em 3-6 meses, dependendo da complexidade.',
    },
    {
      q: 'Quais tecnologias vocês utilizam?',
      a: 'Trabalhamos com Node.js, TypeScript, React/Next.js, bancos relacionais e NoSQL, e modelos de ML acessíveis via APIs e infra em cloud.',
    },
    {
      q: 'Vocês fazem integrações com sistemas legados?',
      a: 'Sim — avaliamos a arquitetura existente e propomos integrações por APIs, middlewares ou agentes de automação conforme necessário.',
    },
    {
      q: 'Como funciona o suporte e manutenção após entrega?',
      a: 'Oferecemos pacotes de suporte que incluem monitoramento, atualizações, correções e melhorias contínuas conforme SLA acordado.',
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-black py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Perguntas Frequentes</h2>

        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="bg-gray-900/50 backdrop-blur-sm border border-[rgb(var(--color-secondary))]/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-[rgb(var(--color-secondary))]">
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-white text-lg">{it.q}</span>
                <motion.svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${open === i ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  > 
                    <p className="px-6 pb-5">{it.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
