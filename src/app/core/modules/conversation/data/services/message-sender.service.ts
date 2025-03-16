import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { MessageActionResponse } from '../interfaces/message-action-response.interfaces';
import { MessageSenderBody } from '../interfaces/message-sender-body.interfaces';
import { MessageActionResponseToMessageMapper } from '../models/mappers/messange-action-response-to-message.mappers-';

@Injectable({
  providedIn: 'root',
})
export class MessageSenderService {
  constructor(private http: HttpClient) {}

  public execute(body: MessageSenderBody) {
    const url = `${API.url_develop}/ai/generate`;
    return this.http
      .post<MessageActionResponse>(url, body)
      .pipe(
        map((response) =>
          new MessageActionResponseToMessageMapper(response.data).map()
        )
      );
  }
}
