import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { MessageActionResponse } from '../interfaces/message-action-response.interfaces';
import { MessageSenderBody } from '../interfaces/message-sender-body.interfaces';
import { MessageSenderErrorToMessageEntityAdapter } from '../models/adapters/message-sender-error-to-message.adapters';
import { MessageActionResponseToMessageMapper } from '../models/mappers/messange-action-response-to-message.mappers-';

@Injectable({
  providedIn: 'root',
})
export class MessageSenderService {
  constructor(private http: HttpClient) {}

  public execute(body: MessageSenderBody) {
    const url = `${API.url_develop}/ai/generate`;
    return this.http.post<MessageActionResponse>(url, body).pipe(
      map((response) =>
        new MessageActionResponseToMessageMapper(response.data).map()
      ),
      catchError((error: HttpErrorResponse) => {
        const errorMessage = error.error.message;
        const entity = new MessageSenderErrorToMessageEntityAdapter(errorMessage).adapt()
        const message = new MessageActionResponseToMessageMapper(
          entity,
          true
        ).map();
        return of(message);
      })
    );
  }
}
