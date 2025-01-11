import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { oAuthGoogleConfig } from '../../../config/0auth.config';

@Injectable({
  providedIn: 'root',
})
export class OauthGoogleService {
  constructor(private oauthService: OAuthService) {
    this.iniLogin();
  }

  private async iniLogin() {
    const config: AuthConfig = oAuthGoogleConfig;
    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();

    try {
      await this.oauthService.loadDiscoveryDocumentAndTryLogin({
        onTokenReceived: (context) => console.log(context),
      });
      console.log('Login exitoso');
    } catch (error) {
      console.error('Error en el login:', error);
    }
  }
  public async login() {
    await this.oauthService.initLoginFlowInPopup({});
  }

  public logout() {
    this.oauthService.logOut();
  }

  public getToken() {
    return this.oauthService.getAccessToken();
  }

  public getIdToken() {
    return this.oauthService.getIdToken();
  }

  public getUser() {
    return this.oauthService.getIdentityClaims();
  }

  public listenEvents() {
    this.oauthService.events.subscribe((e) => {
      console.log(e);
      if (e.type === 'token_received') {
        const token = this.getToken();
        console.log('token', token);
        const data = this.getUser();
        console.log('user', data);
      }
    });
  }
}
