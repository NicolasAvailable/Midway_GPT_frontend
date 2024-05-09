import { Injectable } from '@angular/core';
import { AppService } from '../../../../../app.service';
import { HttpClient } from '@angular/common/http';
import { DocumentBody } from '../models/document-body.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService extends AppService {
  private url = `${this.getURL()}/document`;

  constructor(http: HttpClient) {
    super(http);
  }

  public generateDocument(body: DocumentBody): Observable<any> {
    const url = `${this.url}/generator`;
    console.log(url);
    return this.http.post<DocumentBody>(url, body);
  }

  public getDocument(): Observable<any> {
    const url = `${this.url}/generator`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
