import { Injectable } from '@angular/core';
import { AuthService } from '../../../../data/services/auth.service';
import { LoginErrorService } from './errors/login-error.service';
import { LoginRunner } from '../models/login-runner.models';
import { ToasterService } from '../../../../../shared/services/toaster/toaster.service';

@Injectable({
  providedIn: 'root',
})
export class LoginTemplateService {
  constructor(
    private authService: AuthService,
    private loginErrorService: LoginErrorService,
    private toasterService: ToasterService
  ) {}

  public login(email: string, password: string) {
    new LoginRunner(email, password, this.loginErrorService)
      .run()
      .subscribe(async (login) => {
        if (!login) return;
        this.toasterService.warning('Loading...');
        await this.authService.login(login.values());
      });
  }
}
