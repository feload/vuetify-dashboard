import Vue from 'vue';
import Vuex from 'vuex';
import auth from './lib/auth/store';

Vue.use(Vuex);

// -------------------------------------
// Modules collection.
// -------------------------------------

const modules = {
  auth
};

export default new Vuex.Store({ modules });