import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { oAuthGoogleConfig } from '../../../config/0auth.config';

@Injectable({
  providedIn: 'root'
})
export class OauthGoogleService {

  constructor(private oauthService: OAuthService) {
    this.iniLogin();
  }

  private iniLogin(){
    const config: AuthConfig = oAuthGoogleConfig;
    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public login(){
    this.oauthService.initImplicitFlowInPopup();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public getProfile() {
    return this.oauthService.getIdentityClaims();
  }
}
