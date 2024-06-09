import { Injectable } from '@angular/core';
import { AuthService } from '../../../../data/services/auth.service';
import { LoginErrorService } from './errors/login-error.service';
import { LoginRunner } from '../models/login-runner.models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginTemplateService {
  constructor(
    private router: Router,
    private authService: AuthService,
    private loginErrorService: LoginErrorService
  ) {}

  public login(email: string, password: string, cb: Function) {
    new LoginRunner(email, password, this.loginErrorService)
      .run()
      .subscribe(async (login) => {
        if (!login) return;
        await this.authService.login(login.values());
        cb();
      });
  }
}
