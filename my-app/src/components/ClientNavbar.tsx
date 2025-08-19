'use client';

import dynamic from 'next/dynamic';

// Import the Navbar component directly without dynamic import
import { Navbar } from './Navbar';

export default function ClientNavbar() {
  return <Navbar />;
}
