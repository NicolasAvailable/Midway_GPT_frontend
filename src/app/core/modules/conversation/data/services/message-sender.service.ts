import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../../../../config/api.config';
import { MessageSenderBody } from '../interfaces/message-sender-body.interfaces';

@Injectable({
  providedIn: 'root',
})
export class MessageSenderService {
  constructor(private http: HttpClient) {}

  public execute(body: MessageSenderBody) {
    const url = `${API}/ia/generate`;
    return this.http.post(url, body);
  }
}
