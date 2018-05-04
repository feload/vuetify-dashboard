import VueRouter from 'vue-router';
import home from './pages/home/routes.js';
import cpsap from './pages/cpsap/routes.js';
import dev from './pages/dev/routes.js';
import common from './pages/common/routes.js';

// -------------------------------------
// Routes collection.
// -------------------------------------

const routes = [
  ...home,
  ...cpsap,
  ...dev,
  ...common
];

/**
 * getNavigation().
 * Builds navigation map.
 *
 */
const getNavigation = (collection, rootPath, rootId, parent, level) => {
  for(let item of collection){

    if (!item.navdata) return;

    const { id } = item.navdata;
    const { path } = item;
    const realPath = (rootPath) ? `${rootPath}/${path}` : `${path}`;
    const realId = (rootId) ? `${rootId}__${id}` : `${id}`;

    if (!parent.navdata) parent[id] = Object.assign({ ...item.navdata, path: realPath, id: realId }, (item.children) ? { children: {} } : {});
    if(item.children) getNavigation(item.children, realPath, realId, parent[id].children, level + 1);
  }
};

const nav = {};
getNavigation([...routes], null, null, nav, 0);
export const navigationItems = nav;

export default new VueRouter({ routes });
