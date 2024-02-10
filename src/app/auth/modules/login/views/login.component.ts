import { Component, OnInit } from '@angular/core';
import { OauthGoogleService } from '../../../data/services/oauth-google.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private oAuthGoogleService: OauthGoogleService) { }

  ngOnInit() {
  }

  public loginWithGoogle(){
    this.oAuthGoogleService.login();
  }

}
