import Oidc from 'oidc-client';
import settings from './settings';
import store from '@/store';
import router from '@/router';

Oidc.Log.logger = console;
Oidc.Log.level = Oidc.Log.NONE;

const manager = new Oidc.UserManager(settings);
let userTmp = null;

///////////////////////////////
// helps
///////////////////////////////

const removeUserAndSignIn = () => {
  manager
    .removeUser()
    .then(signIn);
}

///////////////////////////////
// events
///////////////////////////////

manager.events.addUserLoaded((user) => {
  store.dispatch('auth/setAuth', user);
});

manager.events.addAccessTokenExpired(removeUserAndSignIn);
manager.events.addSilentRenewError(removeUserAndSignIn);
manager.events.addUserSignedOut(removeUserAndSignIn);

//////////////////////////////////////////
// methods
//////////////////////////////////////////

export const signIn = (scope, response_type) => {
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
    userTmp = user;
    store.dispatch('auth/setAuth', user);
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

if (userTmp == null){
  manager.getUser()
  .then((user) => {
    if (user == null){
      signIn();
    }else{
      store.dispatch('auth/setAuth', user);
    }
  });
}