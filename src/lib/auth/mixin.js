import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      authStatus: 'auth/authStatus',
      authIsInactive: 'auth/isInactive',
      authIsReady: 'auth/isReady',
      authIsGettingPermissions: 'auth/isGettingPermissions',
      authIsLoggedIn: 'auth/isLoggedIn'
    })
  }
}