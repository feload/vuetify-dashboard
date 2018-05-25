//#############################################
//##  Auth: Store
//#############################################

import http from '../resources/http';
import { flatPermissions } from './collections';
import ObservableArray from 'observable-array';

import {
  INACTIVE,
  GETTING_PERMISSIONS
} from './types';

const permSub = ObservableArray();

const initialState = {
  session_state: null,
  access_token: null,
  id_token: null,
  profile: null,
  token_type: null,
  scope: null,
  status: INACTIVE,
  permissions: [],
  permSub: []
}

export default {
  namespaced: true,

  state: initialState,

  getters: {

    get (state) {
      return state;
    },

    permSub () {
      return permSub;
    },

    authStatus ({ status }) {
      return status;
    },

    isLoggedIn ({ access_token }) {
      return (access_token != null);
    },

    permissionsRaw ({ permissions }) {
      return permissions;
    },

    permissionsList ({ permissions }) {
      return flatPermissions(permissions);
    },

    permissionsLoaded({ permissions }) {
      return (permissions.length != 0);
    },

    isReady ({ status, permissions, access_token}) {
      return (status == INACTIVE && permissions.length != 0 && access_token != null);
    },

    isInactive ({ status }) {
      return (status == INACTIVE);
    },

    isGettingPermissions ({ status }) {
      return (status == GETTING_PERMISSIONS);
    }

  },

  mutations: {

    setStatus (state, payload) {
      state.status = payload;
    },

    setPermissions (state, payload) {
      permSub.push([flatPermissions(payload)]);
      state.permissions = payload;
    },

    setAuthState (state, payload) {
      const {
        session_state,
        access_token,
        id_token,
        profile,
        token_type,
        scope
      } = payload;

      state.session_state = session_state;
      state.access_token = access_token;
      state.id_token = id_token;
      state.profile = profile;
      state.token_type = token_type;
      state.scope = scope;
    }
  },

  actions: {

    getPermissions({ commit, state }) {
      commit('setStatus', GETTING_PERMISSIONS);

      const { profile, accessToken } = state;
      const vars = { idEmpleado: profile.id_empleado };
      const params = { param1: "paramvalue1" };
      const config = { requestId: "AuthGetPermissions" };

      http(
        'permissionsApi',
        'todo',
        vars,
        params,
        accessToken,
        config)

        .then((response) => {
          const { modulos } = response.data;
          commit('setPermissions', modulos);
        })

        .catch((err) => {
          reject(err);
        })

        .then(() => {
          commit('setStatus', INACTIVE);
        });

    },

    setAuth ({ commit, getters, dispatch }, payload) {

      commit('setAuthState', payload || initialState);
      if (getters['permissionsLoaded'] == false) dispatch('getPermissions');

    }
  },
}