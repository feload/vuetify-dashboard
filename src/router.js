import VueRouter from 'vue-router';
import home from './modules/home/routes.js';
import cpsap from './modules/cpsap/routes.js';
import dev from './modules/dev/routes.js';
import common from './modules/common/routes.js';

import { getNavigation } from '@/lib/router';

// -------------------------------------
// Routes collection.
// -------------------------------------

const routes = [
  ...home,
  ...cpsap,
  ...dev,
  ...common
];

const nav = {};
getNavigation([...routes], null, null, nav, 0);
export const navigationItems = nav;

export default new VueRouter({ routes });
