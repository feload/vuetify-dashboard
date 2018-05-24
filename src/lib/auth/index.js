import Oidc from 'oidc-client';
import settings from './settings';
import store from '@/store';

Oidc.Log.logger = console;
Oidc.Log.level = Oidc.Log.NONE;

const manager = new Oidc.UserManager(settings);

///////////////////////////////
// events
///////////////////////////////

manager.events.addUserLoaded((user) => {
  store.commit('auth/set', user);
});

manager.events.addUserUnloaded(() => {
  console.log("user unloaded");
});

manager.events.addAccessTokenExpiring(() => {
  console.log("token expiring");
});

manager.events.addAccessTokenExpired(() => {
  console.log("token expired");
});

manager.events.addSilentRenewError((e) => {
  console.log("silent renew error", e.message);
});

manager.events.addUserSignedOut(() => {
  console.log("user signed out");
});

///////////////////////////////
// methods
///////////////////////////////

export const signIn = (scope, response_type)  => {
  manager.signinRedirect({
    scope: scope,
    response_type: response_type
  }).then(null, (e) => {
    console.log(e);
  });
}

export const signInCallback = () => {
  manager.signinRedirectCallback()
    .then((user) => {
      store.commit('auth/set', user);
    }).catch((error) => {
      console.log(error);
    });
}

export const signInSilentCallback = () => {
  new Oidc.UserManager().signinSilentCallback();
}

export const signOut = () => {
  manager.signoutRedirect();
}