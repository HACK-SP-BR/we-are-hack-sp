import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { GlowEffect } from '../components/GlowEffect';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <GlowEffect>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="max-w-[1200px] mx-auto px-8 py-16 relative z-[2] flex-grow w-full">
            <Outlet />
          </main>
          <Footer />
        </div>
      </GlowEffect>
    </div>
  );
};
