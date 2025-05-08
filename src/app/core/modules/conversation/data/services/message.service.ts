import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RoomId } from '../../../room/data/interfaces/room-response.interfaces';
import { MessageSenderBody } from '../interfaces/message-sender-body.interfaces';
import { MessageStore } from '../store/message.store';
import { MessageFromRoomSaverService } from './message-from-room-saver.service';
import { MessageFromUserSaverService } from './message-from-user-saver.service';
import { MessageGetterService } from './message-getter.service';
import { RoomMessageSenderService } from './room-message-sender.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private http = inject(HttpClient);
  private messageStore = inject(MessageStore);
  private messageGetter = inject(MessageGetterService);
  private roomMessageSender = inject(RoomMessageSenderService);
  private messageFromUserSaver = inject(MessageFromUserSaverService);
  private messageFromRoomSaver = inject(MessageFromRoomSaverService);

  constructor() {}

  public get(roomId: RoomId) {
    return this.messageGetter.execute(roomId);
  }

  public send(body: MessageSenderBody) {
    this.messageFromUserSaver.execute(body);
    return this.roomMessageSender
      .execute(body)
      .subscribe((message) => this.messageFromRoomSaver.execute(message));
  }
}
