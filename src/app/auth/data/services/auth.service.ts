import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { map } from 'rxjs';
import { AppService } from '../../../app.service';
import { LoginRequest } from '../../modules/login/data/models/login-request.models';
import {
  LoginData,
  LoginResponse,
} from '../../modules/login/data/models/login-response.models';
import { LoginErrorService } from '../../modules/login/data/services/errors/login-error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AppService {
  private url = this.getURL();

  constructor(
    http: HttpClient,
    private router: Router,
    private loginErrorService: LoginErrorService
  ) {
    super(http);
  }

  public login(body: LoginRequest) {
    return new Promise<void>((resolve, reject) => {
      const url = `${this.url}/auth/local/login`;
      this.http
        .post<LoginResponse>(url, body)
        .pipe(map((value) => value.data))
        .subscribe(
          (value: LoginData) => {
            this.success(value);
            resolve();
          },
          (error: HttpErrorResponse) => {
            this.loginErrorService.showError(error.error.statusCode);
            reject();
          }
        );
    });
  }

  private success(value: LoginData) {
    localStorage.setItem('access_token', value.access_token);
    localStorage.setItem('token_type', value.token_type);
    toast.dismiss();
    toast.success('Se ha iniciado sesión correctamente');
    this.router.navigate(['app']);
  }
}
