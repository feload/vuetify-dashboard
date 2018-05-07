import index from './pages/index.vue';
import validadores from './pages/validadores/index.vue';
import configuracion from './pages/validadores/configuracion.vue';
import exportar from './pages/validadores/exportar.vue';
import estadisticas from './pages/estadisticas/index.vue';
import detalleEstadistica from './pages/estadisticas/detalle.vue';

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