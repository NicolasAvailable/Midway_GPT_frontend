import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { map } from 'rxjs';
import { API } from '../../../config/api.config';
import { LoginRequest } from '../../modules/login/data/models/login-request.models';
import {
  LoginData,
  LoginResponse,
} from '../../modules/login/data/models/login-response.models';
import { LoginErrorService } from '../../modules/login/data/services/errors/login-error.service';
import { RegisterBody } from '../../modules/register/data/interface/register-body.interface';
import { RegisterService } from '../../modules/register/data/services/register.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = API.url_develop;

  constructor(
    private http: HttpClient,
    private router: Router,
    private registerService: RegisterService,
    private loginErrorService: LoginErrorService
  ) {}

  public login(body: LoginRequest) {
    return new Promise<void>((resolve, reject) => {
      const url = `${this.URL}/auth/local/login`;
      this.http
        .post<LoginResponse>(url, body)
        .pipe(map((value) => value.data))
        .subscribe(
          (value: LoginData) => {
            toast.dismiss();
            toast.success('Se ha iniciado sesión correctamente');
            this.success(value.token_type, value.access_token);
            resolve();
          },
          (error: HttpErrorResponse) => {
            this.loginErrorService.showError(error.error.statusCode);
            reject();
          }
        );
    });
  }

  public register(body: RegisterBody) {
    toast.loading('Cargando...');
    this.registerService.execute(body).subscribe(({ data }) => {
      toast.dismiss();
      toast.success('Se ha registrado correctamente');
      this.success(data.token_type, data.access_token);
    });
  }

  private success(typeToken: string, accessToken: string) {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('token_type', typeToken);
    this.router.navigate(['app']);
  }
}
