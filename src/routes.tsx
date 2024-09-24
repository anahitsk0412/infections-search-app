import { createBrowserRouter } from 'react-router-dom';

import { ProfileScreen } from './screens/Profile';
import { SeachScreen } from './screens/Search';

export const routes = [
  { path: '/', element: <SeachScreen />, label: 'Search Domain' },
  { path: '/profile', element: <ProfileScreen />, label: 'Profile' },
];
