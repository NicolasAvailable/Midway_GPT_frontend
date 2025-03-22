import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { RegisterBody } from '../interface/register-body.interface';
import {
  RegisterData,
  RegisterResponse,
} from '../interface/register-response.interface';
import { RegisterExceptions } from './exceptions/register.exceptions';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private API = API;
  constructor(
    private http: HttpClient,
    private registerException: RegisterExceptions
  ) {}

  public execute(body: RegisterBody): Observable<RegisterData> {
    const url = `${this.API.url_develop}/auth/local/register`;
    return this.http.post<RegisterResponse>(url, body).pipe(
      map((response) => response.data),
      catchError((error) => {
        this.registerException.throw(error.status);
        return of(null);
      })
    );
  }
}
