import { Injectable } from '@angular/core';
import { UserId } from '../../../../../core/modules/profile/data/models/profile.models';
import { ForgotEmailSenderService } from './forgot-email-sender.service';
import { ForgotReseterService } from './forgot-reseter.service';

@Injectable({
  providedIn: 'root',
})
export class ForgotService {
  constructor(
    private readonly forgotEmailSenderService: ForgotEmailSenderService,
    private readonly forgotReseterService: ForgotReseterService
  ) {}

  public send(email: string) {
    return this.forgotEmailSenderService.execute(email);
  }

  public confirm(userId: UserId, password: string) {
    return this.forgotReseterService.execute(userId, password);
  }
}
