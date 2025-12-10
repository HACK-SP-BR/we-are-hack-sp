// src/router.tsx
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Routes } from '@app/modules/routes/routes';
import { Layout } from './layout';

// import { HomePage } from './pages/home.page';
// import { AboutPage } from './pages/about.page';
// import { ContactPage } from './pages/contact.page';
// import { CommunityPage } from './pages/community.page';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path={Routes.Home} element={<></>} />
        <Route path={Routes.About} element={<></>} />
        <Route path={Routes.Contact} element={<></>} />
        <Route path={Routes.Community} element={<></>} />
      </Route>
    </>
  ),
);
