import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { DocumentBody } from '../models/document-body.models';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private url = `${API.url_develop}/document`;

  constructor(private http: HttpClient) {}

  public generateDocument(body: DocumentBody): Observable<any> {
    const url = `${this.url}/generator`;
    return this.http.post<DocumentBody>(url, body);
  }

  public getDocument(): Observable<any> {
    const url = `${this.url}/generator`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
