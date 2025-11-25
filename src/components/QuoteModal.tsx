
"use client";

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './animated-button.css';

type FormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ApiErrorResponse {
  error?: string;
  message?: string;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<FormData>({ name: '', email: '', company: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 300); // Duration of the transition
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !showModal) return null;

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-gray-900/80 backdrop-blur-lg border border-[rgb(var(--color-secondary))]/50 rounded-xl shadow-2xl p-8 max-w-lg w-full m-4 transform transition-all duration-300 ease-out ${showModal ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Solicitar Orçamento</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

          <form onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            setStatus('idle');
            setErrorMessage(null);
            try {
              const res = await fetch('/api/send-quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
              });

              if (!res.ok) {
                // Tenta extrair uma mensagem de erro do corpo da resposta (JSON ou texto).
                const contentType = res.headers.get('content-type');
                let errorBody: ApiErrorResponse | null = null;
                if (contentType && contentType.includes('application/json')) {
                  errorBody = (await res.json()) as ApiErrorResponse;
                } else {
                  errorBody = { error: await res.text() };
                }
                const msg = errorBody?.error || errorBody?.message || `Erro: ${res.status} ${res.statusText}`;
                setErrorMessage(String(msg));
                setStatus('error');
                setLoading(false);
                return;
              }

              setStatus('success');
              setForm({ name: '', email: '', company: '', message: '' });
              setTimeout(() => {
                onClose();
                setStatus('idle');
                setErrorMessage(null);
              }, 1500);
            } catch (networkError) {
              console.error(networkError);
              setErrorMessage((networkError as Error)?.message || 'Falha na comunicação com o servidor.');
              setStatus('error');
            } finally {
              setLoading(false);
            }
          }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full p-3 bg-gray-900/50 backdrop-blur-sm border border-[rgb(var(--color-secondary))]/50 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent transition"
            />
            <input
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full p-3 bg-gray-900/50 backdrop-blur-sm border border-[rgb(var(--color-secondary))]/50 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent transition"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Empresa (Opcional)"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full p-3 bg-gray-900/50 backdrop-blur-sm border border-[rgb(var(--color-secondary))]/50 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent transition"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Descreva seu projeto..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full p-3 bg-gray-900/50 backdrop-blur-sm border border-[rgb(var(--color-secondary))]/50 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent transition"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="animated-button disabled:opacity-60"
            >
              <span className="text">{loading ? 'Enviando...' : 'Enviar Pedido'}</span>
            </button>
          </div>
          {status === 'success' && <div className="mt-4 text-green-400">Pedido enviado com sucesso!</div>}
          {status === 'error' && (
            <div className="mt-4 text-red-400">
              {errorMessage ? `Erro: ${errorMessage}` : 'Erro ao enviar. Tente novamente.'}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
