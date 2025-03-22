import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { finalize } from 'rxjs';
import { LoginBody } from '../../modules/login/data/models/login-body.models';
import { LoggerService } from '../../modules/login/data/services/logger.service';
import { RegisterBody } from '../../modules/register/data/interface/register-body.interface';
import { RegisterService } from '../../modules/register/data/services/register.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private loggerService: LoggerService,
    private registerService: RegisterService
  ) {}

  public login(body: LoginBody, cb: Function) {
    toast.loading('Cargando...');
    this.loggerService
      .execute(body)
      .pipe(finalize(() => cb()))
      .subscribe(({ token_type, access_token }) => {
        toast.dismiss();
        toast.success('Se ha iniciado sesión correctamente');
        this.success(token_type, access_token);
      });
  }

  public register(body: RegisterBody, cb: Function) {
    toast.loading('Cargando...');
    this.registerService
      .execute(body)
      .pipe(finalize(() => cb()))
      .subscribe(({ token_type, access_token }) => {
        toast.dismiss();
        toast.success('Se ha registrado correctamente');
        this.success(token_type, access_token);
      });
  }

  private success(typeToken: string, accessToken: string) {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('token_type', typeToken);
    this.router.navigate(['app']);
  }
}
