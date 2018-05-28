import { mapGetters } from 'vuex';
import store from '@/store';
import { signOut } from '@/lib/auth';

export default {
  computed: {
    ...mapGetters({
      auth: 'auth/get',
      profile: 'auth/profile',
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
    authSignOut() {
      signOut();
    },
    hasPermissionToRoute (routeId) {
      return this.authPermissionsList.includes(routeId);
    }
  }
}