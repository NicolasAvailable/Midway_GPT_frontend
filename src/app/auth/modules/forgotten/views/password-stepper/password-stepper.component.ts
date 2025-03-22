import { Component, inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { finalize } from 'rxjs';
import { ButtonComponent } from '../../../../../@midway-UI/global/button/button.component';
import { MwInputErrorDirective } from '../../../../../@midway-UI/global/input/mw-input-error.directive';
import { MwInputInvalidDirective } from '../../../../../@midway-UI/global/input/mw-input-invalid.directive';
import { MwInputDirective } from '../../../../../@midway-UI/global/input/mw-input.directive';
import { UserId } from '../../../../../core/modules/profile/data/models/profile.models';
import { ShowPasswordDirective } from '../../../shared/data/directives/show-password.directive';
import { ConfirmPasswordErrorSetterPipe } from '../../../shared/data/pipes/confirm-password-error-setter.pipe';
import { PasswordErrorSetterPipe } from '../../../shared/data/pipes/password-error-setter.pipe';
import { isSamePasswordValidator } from '../../../shared/data/validators/is-same-password.validators';
import { ForgotService } from '../../data/services/forgot.service';

@Component({
  selector: 'mw-password-stepper',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    MwInputDirective,
    MwInputErrorDirective,
    MwInputInvalidDirective,
    ShowPasswordDirective,
    PasswordErrorSetterPipe,
    ConfirmPasswordErrorSetterPipe,
  ],
  templateUrl: './password-stepper.component.html',
  styleUrl: './password-stepper.component.css',
})
export class PasswordStepperComponent {
  @Input() userId: UserId;

  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private forgotService = inject(ForgotService);
  protected form!: FormGroup;
  protected showPassword: boolean = false;
  protected showConfirmPassword: boolean = false;
  protected isLoading: boolean = false;

  ngOnInit() {
    this.setup();
  }

  private setup() {
    this.form = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      { validators: isSamePasswordValidator }
    );
  }

  public confirm() {
    if (this.form.valid) {
      const userId = this.userId;
      const password = this.form.get('password')?.value;
      toast.loading('Espere un momento...');
      this.isLoading = true;
      this.forgotService
        .confirm(userId, password)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe(() => {
          toast.dismiss();
          toast.success('Se ha restablecido la contraseña correctamente');
          this.router.navigate(['/auth/login']);
        });
    }
  }
}
