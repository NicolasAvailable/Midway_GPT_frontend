import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RoomId } from '../../../room/data/interfaces/room-response.interfaces';
import { MessageSenderBody } from '../interfaces/message-sender-body.interfaces';
import { Message } from '../models/message.models';
import { MessageStore } from '../store/message.store';
import { MessageGetterService } from './message-getter.service';
import { MessageSenderService } from './message-sender.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageStore = inject(MessageStore);
  constructor(private http: HttpClient) {}

  public get(roomId: RoomId) {
    const messageGetter = new MessageGetterService(this.http);
    return messageGetter.execute(roomId);
  }

  public send(body: MessageSenderBody) {
    this.messageStore.get().messageList.update((list) => {
      list.add(new Message('', 'user', body.prompt));
      return list;
    });
    const messageSender = new MessageSenderService(this.http);
    return messageSender.execute(body).subscribe((message) =>
      this.messageStore.get().messageList.update((list) => {
        list.add(message);
        return list;
      })
    );
  }
}
