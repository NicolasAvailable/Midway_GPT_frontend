import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { toast } from 'ngx-sonner';
import { finalize } from 'rxjs';
import { ButtonComponent } from '../../../../../@midway-UI/global/button/button.component';
import { MwInputErrorDirective } from '../../../../../@midway-UI/global/input/mw-input-error.directive';
import { MwInputInvalidDirective } from '../../../../../@midway-UI/global/input/mw-input-invalid.directive';
import { MwInputDirective } from '../../../../../@midway-UI/global/input/mw-input.directive';
import { EMAIL_REGEX } from '../../../login/data/constants/email-pattern.constants';
import { EmailErrorSetterPipe } from '../../../shared/data/pipes/email-error-setter.pipe';
import { ForgotService } from '../../data/services/forgot.service';
@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    MwInputDirective,
    MwInputErrorDirective,
    MwInputInvalidDirective,
    EmailErrorSetterPipe,
  ],
  selector: 'mw-email-stepper',
  templateUrl: './email-stepper.component.html',
  styleUrls: ['./email-stepper.component.css'],
})
export class EmailStepperComponent implements OnInit {
  private forgotService = inject(ForgotService);
  private fromBuilder = inject(FormBuilder);
  protected form!: FormGroup;
  protected isLoading: boolean = false;

  ngOnInit() {
    this.form = this.fromBuilder.group({
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
    });
  }

  public send() {
    if (this.form.valid) {
      this.isLoading = true;
      const email = this.form.get('email')?.value.trim();
      toast.loading('Espere un momento...');
      this.forgotService
        .send(email)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe(() => {
          toast.dismiss();
          toast.success(
            'Se ha enviado un correo para restablecer su contraseña'
          );
        });
    }
  }
}
