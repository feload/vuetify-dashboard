export default {
  namespaced: true,
  state: {
    access_token: null,
    id_token: null,
    profile: null,
    token_type: null,
    scope: null
  },

  getters: {
    get (state) {
      return state;
    }
  },

  mutations: {
    set (state, payload) {
      const { access_token, id_token, profile, token_type, scope } = payload;

      state.access_token = access_token;
      state.id_token = id_token;
      state.profile = profile;
      state.token_type = token_type;
      state.scope = scope;
    }
  },

  actions: {},
}