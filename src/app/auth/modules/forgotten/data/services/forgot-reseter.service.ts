import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { UserId } from '../../../../../core/modules/profile/data/models/profile.models';
import { ForgotBodyAdapter } from '../models/forgot-body-adapter.models';
import { ExceptionForgotService } from './exceptions/exception-forgot.service';

@Injectable({
  providedIn: 'root',
})
export class ForgotReseterService {
  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionForgotService
  ) {}

  public execute(userId: UserId, password: string) {
    const body = new ForgotBodyAdapter(userId, password).adapt();
    const url = `${API.url_develop}/auth/local/reset-password`;
    return this.http.post(url, body).pipe(
      catchError((error) => {
        this.exceptionService.throw(error.status);
        throw new Error(error);
      })
    );
  }
}
