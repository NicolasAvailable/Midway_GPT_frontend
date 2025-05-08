import { inject, Injectable } from '@angular/core';
import { eventBus } from 'app/shared/base/event-bus.base';
import { MessageSenderBody } from '../interfaces/message-sender-body.interfaces';
import { Message } from '../models/message.models';
import { MessageStore } from '../store/message.store';

@Injectable({
  providedIn: 'root',
})
export class MessageFromUserSaverService {
  private messageStore = inject(MessageStore);

  public execute(body: MessageSenderBody) {
    this.messageStore.get().messageList.update((list) => {
      list.add(new Message('', 'user', body.prompt));
      eventBus.emit('new.message');
      return list;
    });
  }
}
