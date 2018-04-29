import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Index from './Index.vue'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/index', component: Index }
  ]
});

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++;
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});