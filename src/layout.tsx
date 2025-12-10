// src/layout/index.tsx (ou src/layout/layout.tsx)
import { Outlet } from 'react-router-dom';
import { Header } from '@app/components/Header';

export function Layout() {
  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
    </>
  );
}
