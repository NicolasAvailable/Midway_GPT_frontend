import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../data/services/auth.service';
import { noWhitespaceValidator } from '../shared/data/validators/white-space.validators';
import { EMAIL_REGEX } from './data/constants/email-pattern.constants';
import { LoginBodyAdapter } from './data/models/login-body-adapter.models';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  protected form!: FormGroup;
  protected showPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.setup();
  }

  private setup() {
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(EMAIL_REGEX),
          Validators.minLength(4),
          noWhitespaceValidator(),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public send() {
    if (this.form.invalid) return;
    const body = new LoginBodyAdapter(this.form).adapt();
    this.authService.login(body);
  }
}
