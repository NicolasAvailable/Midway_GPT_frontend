import { AuthConfig } from 'angular-oauth2-oidc';

export const oAuthGoogleConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  clientId:
    '23127152690-pfloa4csj57t97ddpsrgefhdqlee7i97.apps.googleusercontent.com',
  dummyClientSecret: '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',
  scope: 'openid profile email',
  redirectUri: 'http://localhost:4200/app/home',
  responseType: 'code',
};
