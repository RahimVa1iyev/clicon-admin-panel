import { lazy } from 'react';

const Profile = lazy(() => import('../pages/Profile'));
const Tables = lazy(() => import('../pages/Tables'));
const Brand =lazy(() => import('../pages/Table/Brand') )

const coreRoutes = [

  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },

  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },

  
  {
    path: '/brands',
    title: 'Brand',
    component: Brand,
  },

];

const routes = [...coreRoutes];
export default routes;
