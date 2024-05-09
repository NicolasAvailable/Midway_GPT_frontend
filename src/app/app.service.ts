import { Injectable } from '@angular/core';
import { API } from './config/api.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private URL = API.url_develop;

  constructor(protected http: HttpClient) {}

  protected getURL() {
    return this.URL;
  }
}
