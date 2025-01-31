import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';
import { AuthService } from '../../../../data/services/auth.service';
import { LoginRunner } from '../models/login-runner.models';
import { LoginErrorService } from './errors/login-error.service';

@Injectable({
  providedIn: 'root',
})
export class LoginTemplateService {
  constructor(
    private authService: AuthService,
    private loginErrorService: LoginErrorService
  ) {}

  public login(email: string, password: string) {
    new LoginRunner(email, password, this.loginErrorService)
      .run()
      .subscribe(async (login) => {
        if (!login) return;
        toast.loading('Cargando...');
        await this.authService.login(login.values());
      });
  }
}
