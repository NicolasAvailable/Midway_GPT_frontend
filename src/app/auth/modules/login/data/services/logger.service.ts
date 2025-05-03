import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { API } from '../../../../../config/api.config';
import {
  LoginData,
  LoginResponse,
} from '../interfaces/login-response.interface';
import { LoginBody } from '../models/login-body.models';
import { LoginExceptions } from './exceptions/login.exceptions';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private URL = API.url;

  constructor(
    private http: HttpClient,
    private loginExceptions: LoginExceptions
  ) {}

  public execute(body: LoginBody): Observable<LoginData> {
    const url = `${this.URL}/auth/local/login`;
    return this.http.post<LoginResponse>(url, body).pipe(
      map((response) => response.data),
      catchError((error) => {
        this.loginExceptions.throw(error.status);
        return of(null);
      })
    );
  }
}
