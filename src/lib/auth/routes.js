import {
  signInCallback,
  signInSilentCallback
} from '@/lib/auth/';

export default [
  {
    path: '/auth/signin',
    beforeEnter: (to, from, next) => {
      signInCallback();
      next("/");
    }
  },
  {
    path: '/auth/callback',
    beforeEnter: (to, from, next) => {
      next("/");
    }
  },
  {
    path: '/auth/renew',
    beforeEnter: (to, from, next) => {
      signInSilentCallback();
      next();
    }
  }
];