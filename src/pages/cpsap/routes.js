import index from './index.vue';
import validadores from './validadores/index.vue';
import configuracion from './validadores/configuracion.vue';
import exportar from './validadores/exportar.vue';

import estadisticas from './estadisticas/index.vue';
import detalleEstadistica from './estadisticas/detalle.vue';

export default [{
  navdata: {
    id: "cpsap",
    title: "CPSAP",
    icon: "assessment",
  },
  path: '/cpsap',
  component: index,
  children:[
    {
      navdata: {
        id: "validadores",
        title: "Validadores",
        icon: "playlist_add_check",
      },
      path: 'validadores',
      component: validadores,
      children: [
        {
          navdata: {
            id: "configuracion",
            title: "Configuración",
            icon: "settings"
          },
          path: 'configuracion',
          component: configuracion
        },
        {
          navdata: {
            id: "exportar",
            title: "Exportar",
            icon: "import_export"
          },
          path: 'exportar',
          component: exportar
        }
      ]
    },
    {
      navdata: {
        id: "estadisticas",
        title: "Estadísticas",
        icon: "insert_chart"
      },
      path: 'estadisticas',
      component: estadisticas,
      children: [
        {
          navdata: {
            id: "detalle",
            title: "Detalle",
            icon: "find_in_page"
          },
          path: 'detalle/:id_estadistica',
          component: detalleEstadistica
        }
      ]
    },
  ]
}];