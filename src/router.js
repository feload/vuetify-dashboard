import VueRouter from 'vue-router';

import home from './modules/home/routes.js';
import cpsap from './modules/cpsap/routes.js';
import dev from './modules/dev/routes.js';
import auth from './lib/auth/routes.js';
import common from './modules/common/routes.js';

import { getNavigation } from '@/lib/router';

// -------------------------------------
// Routes collection.
// -------------------------------------

const routes = [
  ...home,
  ...cpsap,
  ...dev,
  ...auth,
  ...common
];

const nav = {};
getNavigation([...routes], null, null, nav, 0);
export const navigationItems = nav;

const router = new VueRouter({
  routes
});

export default router;