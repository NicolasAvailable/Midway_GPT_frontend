import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { LoginResponse } from '../interfaces/login-response.interface';
import { LoginBody } from '../models/login-body.models';
import { LoginExceptions } from './exceptions/login.exceptions';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private URL = API.url_develop;

  constructor(
    private http: HttpClient,
    private loginExceptions: LoginExceptions
  ) {}

  public execute(body: LoginBody): Observable<LoginResponse> {
    const url = `${this.URL}/auth/local/login`;
    return this.http.post<LoginResponse>(url, body).pipe(
      catchError((error) => {
        this.loginExceptions.throw(error.status);
        return of(null);
      })
    );
  }
}
