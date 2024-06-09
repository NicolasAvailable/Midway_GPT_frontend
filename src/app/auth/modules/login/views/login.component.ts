import { Component, OnInit } from '@angular/core';
import { OauthGoogleService } from '../../../data/services/oauth-google.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_REGEX } from '../data/constants/email-pattern.constants';
import { LoginTemplateService } from '../data/services/login-template.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public showPassword: boolean = false;

  constructor(
    private router: Router,
    private oAuthGoogleService: OauthGoogleService,
    private formBuilder: FormBuilder,
    private loginTemplateService: LoginTemplateService
  ) {}

  ngOnInit() {
    this.setupForm();
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(EMAIL_REGEX),
          Validators.minLength(2),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  public login() {
    const email = this.form?.get('email')?.value;
    const password = this.form?.get('password')?.value;
    this.loginTemplateService.login(email, password, () =>
      this.router.navigate(['app'])
    );
  }

  public loginWithGoogle() {
    this.oAuthGoogleService.login();
  }

  public goToForgotPassword() {}
}
