import { Injectable } from '@angular/core';
import { API } from '../../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../modules/login/data/models/login-request.models';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../modules/login/data/models/login-response.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = API.url_develop;

  constructor(private http: HttpClient) { }

  public login(body: LoginRequest): Observable<LoginResponse>{
    const url = `${this.url}/auth/local/login`
    return this.http.post<LoginResponse>(url, body);
  }
}
