import { mapGetters } from 'vuex';
import store from '@/store';

export default {
  computed: {
    ...mapGetters({
      auth: 'auth/get',
      authStatus: 'auth/authStatus',
      authPermissionsRaw: 'auth/permissionsRaw',
      authPermissionsList: 'auth/permissionsList',
      authIsInactive: 'auth/isInactive',
      authIsReady: 'auth/isReady',
      authIsGettingPermissions: 'auth/isGettingPermissions',
      authIsLoggedIn: 'auth/isLoggedIn'
    })
  },

  methods: {
    hasPermissionToRoute (routeId) {
      return this.authPermissionsList.includes(routeId);
    }
  }
}