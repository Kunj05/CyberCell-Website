import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Team from '../pages/Team';
import Resources from '../pages/Resources';
import Contact from '../pages/Contact';
import Developers from '../pages/Developers';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'events', element: <Events /> },
      { path: 'team', element: <Team /> },
      { path: 'resources', element: <Resources /> },
      { path: 'contact', element: <Contact /> },
      { path: 'developers', element: <Developers /> },
    ],
  },
]);