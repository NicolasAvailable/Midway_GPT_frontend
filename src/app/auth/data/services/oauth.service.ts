import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { oAuthGoogleConfig } from '../../../config/0auth.config';

@Injectable({
  providedIn: 'root',
})
export class OauthService {
  constructor(private oauthService: OAuthService) {
    this.iniLogin();
  }

  private async iniLogin() {
    const config: AuthConfig = oAuthGoogleConfig;
    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();

    try {
      await this.oauthService.loadDiscoveryDocumentAndTryLogin();
      console.log('Login exitoso');
    } catch (error) {
      console.error('Error en el login:', error);
    }
  }
  public async login() {
    await this.oauthService.initLoginFlowInPopup({});
  }

  public listenEvents() {
    this.oauthService.events.subscribe((e) => {
      console.log(e);
      if (e.type === 'token_received') {
        const token = this.oauthService.getAccessToken();
        console.log('token', token);
        const data = this.oauthService.getIdentityClaims();
        console.log('user', data);
        console.log('id token', this.oauthService.getIdToken());
      }
    });
  }
}
