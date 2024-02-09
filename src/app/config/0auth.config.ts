import { AuthConfig } from "angular-oauth2-oidc";



export const oAuthGoogleConfig: AuthConfig = {
    clientId: '23127152690-pfloa4csj57t97ddpsrgefhdqlee7i97.apps.googleusercontent.com',
    redirectUri: window.location.origin + '/login',
    scope: 'openid profile email offline_access api',
}