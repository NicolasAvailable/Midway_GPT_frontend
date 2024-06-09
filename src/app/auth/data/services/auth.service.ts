import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginRequest } from '../../modules/login/data/models/login-request.models';
import { map } from 'rxjs';
import {
  LoginData,
  LoginResponse,
} from '../../modules/login/data/models/login-response.models';
import { AppService } from '../../../app.service';
import { ToasterService } from '../../../shared/services/toaster/toaster.service';
import { LoginErrorService } from '../../modules/login/data/services/errors/login-error.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AppService {
  private url = this.getURL();

  constructor(
    http: HttpClient,
    private router: Router,
    private toasterService: ToasterService,
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
    this.toasterService.hideAll();
    this.toasterService.success('Success!');
    this.router.navigate(['app']);
  }
}
