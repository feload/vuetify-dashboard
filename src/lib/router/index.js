export const getNavigation = (collection, rootPath, rootId, parent, level) => {
  for (let item of collection) {

    if (!item.navdata) return;

    const { id } = item.navdata;
    const { path } = item;
    const realPath = (rootPath) ? `${rootPath}/${path}` : `${path}`;
    const realId = (rootId) ? `${rootId}__${id}` : `${id}`;

    if (!parent.navdata) parent[id] = Object.assign({ ...item.navdata, path: realPath, id: realId }, (item.children) ? { children: {} } : {});
    if (item.children) getNavigation(item.children, realPath, realId, parent[id].children, level + 1);
  }
};

const genReplaceRegExp = (regexp, replacement) => {
  return { regexp, replacement };
}

export const genRouteId = (path) => {
  const patterns = [
    genReplaceRegExp(/\//g, '__'),
    genReplaceRegExp(/(__:[a-zA-Z_]+)/, ''),
    genReplaceRegExp(/^(__)/, '')
  ];

  let idRoute = path;
  patterns.map(({ regexp, replacement }) => {
    idRoute = idRoute.replace(regexp, replacement);
  });

  return idRoute;
}