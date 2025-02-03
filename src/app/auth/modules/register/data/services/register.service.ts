import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../../../../config/api.config';
import { RegisterBody } from '../interface/register-body.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private API = API;
  constructor(private http: HttpClient) {}

  public execute(body: RegisterBody) {
    const url = `${this.API.url_develop}/auth/local/register`;
    return this.http.post(url, body);
  }
}
