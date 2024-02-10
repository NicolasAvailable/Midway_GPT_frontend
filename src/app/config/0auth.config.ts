import { AuthConfig } from "angular-oauth2-oidc";

let windows: any;

export const oAuthGoogleConfig: AuthConfig = {
    issuer: 'https://accounts.google.com',
    strictDiscoveryDocumentValidation: false,
    clientId: '23127152690-pfloa4csj57t97ddpsrgefhdqlee7i97.apps.googleusercontent.com',
    scope: 'openid profile email',
    redirectUri: 'http://localhost:4200/app',
    responseType: 'code',
    showDebugInformation: true
}