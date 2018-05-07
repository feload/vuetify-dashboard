import Vue from 'vue';
import Main from './Main.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import './stylus/main.styl';

// Helpers
import colors from 'vuetify/es5/util/colors';


// -------------------------------------
// Setup.
// -------------------------------------

Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueRouter);

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
  render: h => h(Main)
});