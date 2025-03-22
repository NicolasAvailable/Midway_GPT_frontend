import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { ForgotEmailSenderBodyAdapter } from '../models/forgot-email-sender-body-adapter.models';
import { ExceptionForgotEmailSenderService } from './exceptions/exception-forgot-email-sender.service';

@Injectable({
  providedIn: 'root',
})
export class ForgotEmailSenderService {
  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionForgotEmailSenderService
  ) {}

  public execute(email: string) {
    const body = new ForgotEmailSenderBodyAdapter(email).adapt();
    const url = `${API.url_develop}/auth/local/send-reset-password`;
    return this.http.post(url, body).pipe(
      catchError((error) => {
        this.exceptionService.throw(error.status);
        throw new Error(error);
      })
    );
  }
}
