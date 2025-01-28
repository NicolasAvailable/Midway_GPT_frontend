import { Component, OnInit } from '@angular/core';
import { OauthService } from '../../../../data/services/oauth.service';

@Component({
  selector: 'mw-oauth-google',
  templateUrl: './oauth-google.component.html',
  styleUrls: ['./oauth-google.component.css'],
})
export class OauthGoogleComponent implements OnInit {
  constructor(private OAuthService: OauthService) {}

  ngOnInit() {}

  public loginWithGoogle() {
    this.OAuthService.login();
  }
}
