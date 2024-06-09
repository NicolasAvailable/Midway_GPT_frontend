import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../modules/login/data/models/login-request.models';
import { map } from 'rxjs';
import {
  LoginData,
  LoginResponse,
} from '../../modules/login/data/models/login-response.models';
import { AppService } from '../../../app.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AppService {
  private url = this.getURL();

  constructor(http: HttpClient) {
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
          },
          (error) => reject()
        );
    });
  }

  private success(value: LoginData) {
    localStorage.setItem('access_token', value.access_token);
    localStorage.setItem('token_type', value.token_type);
  }
}
