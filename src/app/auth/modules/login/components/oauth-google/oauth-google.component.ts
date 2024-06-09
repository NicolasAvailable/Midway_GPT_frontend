import { Component, OnInit } from '@angular/core';
import { OauthGoogleService } from '../../../../data/services/oauth-google.service';

@Component({
  selector: 'mw-oauth-google',
  templateUrl: './oauth-google.component.html',
  styleUrls: ['./oauth-google.component.css'],
})
export class OauthGoogleComponent implements OnInit {
  constructor(private oAuthGoogleService: OauthGoogleService) {}

  ngOnInit() {}

  public loginWithGoogle() {
    this.oAuthGoogleService.login();
  }
}
