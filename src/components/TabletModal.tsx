'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface TabletModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function TabletModal({ isOpen, onClose, children }: TabletModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="fixed top-6 right-6 z-50 p-3 bg-red-500/20 hover:bg-red-500/40 rounded-full transition-all duration-300 group backdrop-blur-sm border border-red-500/30"
            >
              <X className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Scrollable Content */}
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800">
              <div className="p-6 sm:p-10 md:p-16 lg:p-20">
                {children}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
