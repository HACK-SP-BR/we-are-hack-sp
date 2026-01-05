import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { GlowEffect } from '../components/GlowEffect';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <GlowEffect>
        <Header />
        <main className="max-w-[1200px] mx-auto px-8 py-16 relative z-[2]">
          <Outlet />
        </main>
      </GlowEffect>
    </div>
  );
};
