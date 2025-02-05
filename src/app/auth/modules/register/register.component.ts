import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../data/services/auth.service';
import { EMAIL_REGEX } from '../login/data/constants/email-pattern.constants';
import { isSamePasswordValidator } from '../shared/data/validators/is-same-password.validators';
import { noWhitespaceValidator } from '../shared/data/validators/white-space.validators';
import { RegisterBodyAdapter } from './data/models/register-body-adapter.models';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  protected form!: FormGroup;
  protected showPassword: boolean = false;
  protected showConfirmPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.setup();
  }

  private setup() {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
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
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      { validators: isSamePasswordValidator }
    );
  }

  public send() {
    if (this.form.invalid) return;
    const body = new RegisterBodyAdapter(this.form).adapt();
    this.authService.register(body);
  }
}
