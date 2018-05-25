import VueRouter from 'vue-router';

import home from './modules/home/routes.js';
import cpsap from './modules/cpsap/routes.js';
import dev from './modules/dev/routes.js';
import auth from './lib/auth/routes.js';
import common from './modules/common/routes.js';

import store from '@/store';
import {
  getNavigation,
  genRouteId
} from '@/lib/router';

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

const publicRoutes = [
    ...auth.map((r) => {
      return r.path
    }),
    ...common.map((r) => {
      return r.path
    })
];

// -------------------------------------
// Exposed objects.
// -------------------------------------

const nav = {};
getNavigation([...routes], null, null, nav, 0);

export const navigationItems = nav;


// -------------------------------------
// Router object extension.
// -------------------------------------

const isForbidden = (permissions, routeId) => {
   return !permissions.includes(routeId);
}

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  const routeId = genRouteId(to.path);

  switch (true) {
    // 404
    case (to.matched[0].path == '*'):
      next();
    break;

    // Auth & forbidden
    case (publicRoutes.includes(to.path)):
      next();
    break;

    // Rest of routes.
    default:
      let permissionsList = store.getters['auth/permissionsList'];
      if (permissionsList.length == 0) {
        store.getters['auth/permSub']
        .on('change', ({ values }) => {
          permissionsList = values[0];
          if (isForbidden(permissionsList, routeId))
            router.push('/forbidden');
          next();
        });
      } else {
        if (isForbidden(permissionsList, routeId))
          router.push('/forbidden');
        next();
      }
    break;
  }
});

export default router;