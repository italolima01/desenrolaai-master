'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import './animated-button.css';

export default function CtaSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can add the form submission logic (e.g., to an API)
    console.log('Form data submitted:', formData);
    alert('Obrigado pelo seu contato! Responderemos em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="cta" className="relative text-white py-20 text-center pb-48">
      {/* Inverted Dark Horizon Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 64%, #0d1a36 119%)",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold mb-6"
        >
          Pronto para transformar seu negócio com IA?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true, amount: 0.3 }} className="mb-8 max-w-3xl mx-auto"
        >
          Preencha o formulário abaixo e descubra como nossas soluções personalizadas podem impulsionar sua empresa.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="sr-only">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-[rgb(var(--color-secondary))]/50 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-[rgb(var(--color-primary))] transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-[rgb(var(--color-secondary))]/50 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-[rgb(var(--color-primary))] transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Mensagem</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Sua mensagem"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-[rgb(var(--color-secondary))]/50 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-[rgb(var(--color-primary))] transition"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="animated-button">
                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">Enviar Mensagem</span>
                <span className="circle"></span>
                <svg viewBox="0 0 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
