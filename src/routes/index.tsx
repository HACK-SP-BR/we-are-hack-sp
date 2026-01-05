import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layouts/Layout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Hackathons } from '../pages/Hackathons';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'hackathons',
        element: <Hackathons />,
      },
    ],
  },
]);
