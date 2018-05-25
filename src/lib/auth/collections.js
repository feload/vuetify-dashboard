import slugify from 'slugify';

export const flatPermissions = (permissions) => {
  if(permissions.length == 0) return [];
  return permissions.map((m) => {
    return m.Permisos.map((p) => {
      return slugify(p.descripcion, { lower: true });
    });
  })
  .join()
  .split(",");
};