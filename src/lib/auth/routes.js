import {
  signInCallback,
  signInSilentCallback
} from '@/lib/auth/';

export default [{
    path: '/auth',
    children: [
      {
        path: 'signin',
        beforeEnter: (to, from, next) => {
          signInCallback();
          next("/");
        }
      },
      {
        path: 'callback',
        beforeEnter: (to, from, next) => {
          next("/");
        }
      },
      {
        path: 'renew',
        beforeEnter: (to, from, next) => {
          signInSilentCallback();
          next();
        }
      }
    ]
  }
];