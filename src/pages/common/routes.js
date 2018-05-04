import notFound404 from './404.vue';
import forbidden403 from './403.vue';

export default [
  {
    path: '/forbidden',
    component: forbidden403
  },
  {
    path: '*',
    component: notFound404
  }
];