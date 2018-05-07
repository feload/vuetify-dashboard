import index from './pages/index.vue';
import visor from './pages/visor/index';

export default [{
  navdata: {
    id: "dev",
    title: "Development",
    icon: "build",
  },
  path: '/dev',
  component: index,
  children: [
    {
      navdata: {
        id: "visor",
        title: "Visor",
        icon: "remove_red_eye",
      },
      path: 'visor',
      component: visor
    }
  ]
}];