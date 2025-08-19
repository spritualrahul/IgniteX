import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import TeamSection from '@/components/TeamSection';

// Update the metadata for the team page
export default function TeamPage() {
  return (
    <>
      <Navbar />
      <TeamSection />
    </>
  );
}
