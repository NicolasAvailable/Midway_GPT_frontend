import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, map } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { eventBus } from '../../../../../shared/base/event-bus.base';
import { RoomId } from '../../../room/data/interfaces/room-response.interfaces';
import { MessageGetterResponse } from '../interfaces/message-getter-response.interfaces';
import { MessageGetterResponseToMessageListMapper } from '../models/mappers/message-getter-response-to-message-list.mappers';

@Injectable({
  providedIn: 'root',
})
export class MessageGetterService {
  private API = API.url;

  constructor(private http: HttpClient) {}

  public execute(roomId: RoomId) {
    const url = `${this.API}/ai/${roomId}`;
    return this.http.get<MessageGetterResponse>(url).pipe(
      map((response) =>
        new MessageGetterResponseToMessageListMapper(response.data).map()
      ),
      finalize(() => eventBus.emit('new.message'))
    );
  }
}
