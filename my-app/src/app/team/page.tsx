import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import TeamSection from '@/components/TeamSection';
import { BreadcrumbListSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Our Team | IgniteX - Meet Our Expert Team',
  description: 'Meet the talented team behind IgniteX. Our experts in web development, digital marketing, and creative design are dedicated to delivering exceptional results for your business.',
  keywords: 'IgniteX team, web development experts, digital marketing professionals, creative team, technology experts',
  alternates: {
    canonical: 'https://www.ignitexsolution.com/team',
  },
  openGraph: {
    title: 'Our Team | IgniteX',
    description: 'Meet the talented professionals driving innovation at IgniteX.',
    url: 'https://www.ignitexsolution.com/team',
    siteName: 'IgniteX',
    type: 'website',
  },
};

export default function TeamPage() {
  return (
    <>
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Team', url: 'https://www.ignitexsolution.com/team' }
        ]} 
      />
      <Navbar />
     
      <TeamSection />
    </>
  );
}
