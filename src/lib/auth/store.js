const initialState = {
  session_state: null,
  access_token: null,
  id_token: null,
  profile: null,
  token_type: null,
  scope: null
}
export default {
  namespaced: true,
  state: initialState,

  getters: {
    get (state) {
      return state;
    },

    sessionState (state) {
      return (state.session_state != null);
    },

    isLoggedIn (state) {
      return (state.access_token != null);
    }
  },

  mutations: {
    set (state, payload) {
      const {
        session_state,
        access_token,
        id_token,
        profile,
        token_type,
        scope
      } = payload || initialState;

      state.session_state = session_state;
      state.access_token = access_token;
      state.id_token = id_token;
      state.profile = profile;
      state.token_type = token_type;
      state.scope = scope;
    }
  },

  actions: {},
}