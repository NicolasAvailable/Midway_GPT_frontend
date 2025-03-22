import { ForgotSteps } from './forgot-steps.models';

export class ForgotStepper {
  public step: ForgotSteps = ForgotSteps.EMAIL;

  public setEmailStep() {
    this.step = ForgotSteps.EMAIL;
  }

  public setPasswordStep() {
    this.step = ForgotSteps.PASSWORD;
  }
}
