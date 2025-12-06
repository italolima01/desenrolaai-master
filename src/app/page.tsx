'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import CasesSection from '@/components/CasesSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import FeatureSection from '@/components/FeaturesSection';
import InnovationSection from '@/components/InnovationSection';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import TabletModal from '@/components/TabletModal';

const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  const [isTabletOpen, setIsTabletOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection onOpenTablet={() => setIsTabletOpen(true)} />
      
      {/* Tablet Modal with all sections */}
      <TabletModal isOpen={isTabletOpen} onClose={() => setIsTabletOpen(false)}>
        <div className="space-y-16">
          <ServicesSection />
          <FeatureSection />
          <CasesSection />
          <InnovationSection />
          <FaqSection />
          <CtaSection />
        </div>
      </TabletModal>

      <Footer />
    </main>
  );
}