import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserId } from '../../../core/modules/profile/data/models/profile.models';
import { ForgotStepper } from './data/models/forgot-stepper.models';
import { ForgotSteps } from './data/models/forgot-steps.models';
import { EmailStepperComponent } from './views/email-stepper/email-stepper.component';
import { PasswordStepperComponent } from './views/password-stepper/password-stepper.component';

@Component({
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    EmailStepperComponent,
    PasswordStepperComponent,
  ],
  selector: 'mw-forgotten',
  templateUrl: './forgotten.component.html',
  styleUrls: ['./forgotten.component.css'],
})
export class ForgottenComponent implements OnInit {
  private router = inject(ActivatedRoute);
  protected forgotStepper = new ForgotStepper();
  protected steps = ForgotSteps;
  protected userId: UserId;

  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      const restore = params['restore'];
      const id = params['user'];
      if (restore && id) {
        this.userId = id;
        this.forgotStepper.setPasswordStep();
      }
    });
  }
}
