import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import './stylus/main.styl';
import main from './main.vue';
import { getUser, signIn } from './lib/auth';

// -------------------------------------
// Helpers.
// -------------------------------------

import colors from 'vuetify/es5/util/colors';

// -------------------------------------
// Setup.
// -------------------------------------

Vue.use(Vuetify);
Vue.use(VueRouter);

// -------------------------------------
// State.
// -------------------------------------

import store from './store.js';

// -------------------------------------
// Router.
// -------------------------------------

import router from './router.js';

// -------------------------------------
// Boot.
// -------------------------------------

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(main)
});