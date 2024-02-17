import { Component, OnInit, ViewChild } from '@angular/core';
import { OauthGoogleService } from '../../../data/services/oauth-google.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorLoginUser } from '../data/validators/validate-info-user.validators';
import { ErrorBeforeResponse } from '../data/services/error-before-response.service';
import { MwAlertComponent } from '../../../../shared/components/alerts/layout/mw-alert.component';
import { TypeAlert } from '../../../../shared/components/alerts/data/models/type-alert.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('mwAlert') private mwAlert!: MwAlertComponent;
  public loginForm!: FormGroup;
  private emailRegex = `([a-zA-Z0-9_.-]{1}[a-zA-Z0-9_.-]*)((@[a-zA-Z0-9_.-]{2}[a-zA-Z0-9_.-]*)[\\\.]([a-zA-Z]{2,}))`;

  constructor(
    private oAuthGoogleService: OauthGoogleService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(){
    this.loginForm = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required, 
          Validators.pattern(this.emailRegex),
          Validators.minLength(2)
        ]
      ],
      password: [
        "",
        [
          Validators.required
        ]
      ],
    })
  }

  public canLogin(){
    if(new ValidatorLoginUser(this.loginForm).validate()){
      const errorMessage = new ErrorBeforeResponse(this.loginForm).getError();
      this.mwAlert.showAlert(TypeAlert.ERROR, errorMessage!)
    } else {
      this.sendLogin();
    }
  }

  private sendLogin(){
    console.log('send successfully')
  }

  public loginWithGoogle(){
    this.oAuthGoogleService.login();
  }

}
