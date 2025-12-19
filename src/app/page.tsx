'use client';

import dynamic from 'next/dynamic';
import CasesSection from '@/components/CasesSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import FeatureSection from '@/components/FeaturesSection';
import ImpactSection from '@/components/ImpactSection';
import InnovationSection from '@/components/InnovationSection';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';

const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ImpactSection />
      <CasesSection />
      <InnovationSection />
      <FeatureSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}