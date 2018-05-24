export default {
  authority: "https://siidrh.ugto.mx/identity/auth",
  client_id: "DRHDashboard",
  redirect_uri: window.location.protocol + "//" + window.location.host + "/#/auth/signin?r=si&",
  post_logout_redirect_uri: window.location.protocol + "//" + window.location.host + "/#/auth/callback?r=cb&",
  response_type: "id_token token",
  scope: "openid",
  silent_redirect_uri: window.location.protocol + "//" + window.location.host + "/#/auth/renew?r=rn&",
  automaticSilentRenew: true,
  monitorSession: true,
  filterProtocolClaims: true,
  loadUserInfo: false
};