import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../modules/login/data/models/login-request.models';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../modules/login/data/models/login-response.models';
import { AppService } from '../../../app.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AppService {
  private url = this.getURL();

  constructor(http: HttpClient) {
    super(http);
  }

  public login(body: LoginRequest): Observable<LoginResponse> {
    const url = `${this.url}/auth/local/login`;
    return this.http.post<LoginResponse>(url, body);
  }
}
