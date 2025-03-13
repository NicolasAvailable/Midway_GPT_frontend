import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomId } from '../../../room/data/interfaces/room-response.interfaces';
import { MessageGetterService } from './message-getter.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  public get(roomId: RoomId) {
    const messageGetter = new MessageGetterService(this.http);
    return messageGetter.execute(roomId);
  }
}
