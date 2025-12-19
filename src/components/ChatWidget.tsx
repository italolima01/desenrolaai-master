
"use client";

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Calendar, Bot } from 'lucide-react';
import './animated-button.css';
import { QuoteModal } from './QuoteModal';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const chatWidgetRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowOptions(true), 50); // Small delay to allow button animation
      return () => clearTimeout(timer);
    } else {
      setShowOptions(false);
    }
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatWidgetRef.current && !chatWidgetRef.current.contains(event.target as Node)) {
        if (isOpen) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const openModal = () => {
    setIsModalOpen(true);
    setIsOpen(false); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div ref={chatWidgetRef} className="fixed bottom-4 right-4 z-50">
        <div
          className="bg-[rgb(var(--color-primary))] text-white w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-[rgb(var(--color-secondary))] transition-colors hover:scale-110 active:scale-90 transition-transform duration-200"
          onClick={toggleChat}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </div>
        <div
          className={`absolute bottom-20 right-0 w-72 bg-gray-900/50 backdrop-blur-sm border border-[rgb(var(--color-secondary))]/50 rounded-xl shadow-lg p-4 transition-all duration-300 ease-out transform origin-bottom-right ${showOptions ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Como podemos ajudar?</h3>
          <button
            onClick={openModal}
            className="animated-button w-full mb-3"
          >
            <span className="text">Solicitar Orçamento</span>
          </button>
          <a
            href="https://wa.me/5585992666435"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-button w-full"
          >
            <span className="text">Testar nosso agente de IA</span>
          </a>
        </div>
      </div>
      <QuoteModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
