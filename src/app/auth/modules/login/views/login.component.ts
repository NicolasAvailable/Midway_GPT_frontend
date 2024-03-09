import { Component, OnInit, ViewChild } from '@angular/core';
import { OauthGoogleService } from '../../../data/services/oauth-google.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorLoginUser } from '../data/validators/validate-info-user.validators';
import { ErrorBeforeResponse } from '../data/services/error-before-response.service';
import { MwAlertComponent } from '../../../../shared/components/alerts/layout/mw-alert.component';
import { TypeAlert } from '../../../../shared/components/alerts/data/models/type-alert.models';
import { AuthService } from '../../../data/services/auth.service';
import { LoginRequest } from '../data/models/login-request.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('mwAlert') private mwAlert!: MwAlertComponent;

  public loginForm!: FormGroup;
  private emailRegex = `([a-zA-Z0-9_.-]{1}[a-zA-Z0-9_.-]*)((@[a-zA-Z0-9_.-]{2}[a-zA-Z0-9_.-]*)[\\\.]([a-zA-Z]{2,}))`;
  private toggleShowPassword: boolean = true;

  constructor(
    private router: Router,
    private oAuthGoogleService: OauthGoogleService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
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
    const body: LoginRequest = {
      username: this.loginForm?.get('email')?.value,
      password: this.loginForm?.get('password')?.value,
    }
    this.authService.login(body).
    subscribe({
      next(value) {
        console.log(value, 'next callback')
        localStorage.setItem('access_token', value.data.access_token);
        localStorage.setItem('token_type', value.data.token_type);
      },
      complete: () => {
        console.log('complete callback')
        this.mwAlert.showAlert(TypeAlert.SUCCESS, "Login successfully")
        this.router.navigate(["app"])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  public loginWithGoogle(){
    this.oAuthGoogleService.login();
  }

  public showPassword(){
    const password = document.getElementById('password') as HTMLInputElement;
    if(this.toggleShowPassword){
      password.type = 'text'
      this.toggleShowPassword = false;
    } else {
      password.type = 'password'
      this.toggleShowPassword = true;
    }
  }

  public goToForgotPassword(){
    
  }
}
