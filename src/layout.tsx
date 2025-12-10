// src/layout/index.tsx (ou src/layout/layout.tsx)
import { Outlet, Link } from 'react-router-dom';
import { Routes } from '@app/modules/routes/routes';

export function Layout() {
  return (
    <div>
      <nav>
        <Link to={Routes.Home}>Home</Link>
        <Link to={Routes.About}>About</Link>
        <Link to={Routes.Contact}>Contact</Link>
        <Link to={Routes.Community}>Community</Link>
      </nav>

      <main>
        <Outlet /> {/* As rotas filhas entram aqui */}
      </main>
    </div>
  );
}
