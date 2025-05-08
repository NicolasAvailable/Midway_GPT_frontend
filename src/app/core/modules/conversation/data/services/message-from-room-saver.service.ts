import { inject, Injectable } from '@angular/core';
import { eventBus } from 'app/shared/base/event-bus.base';
import { Message } from '../models/message.models';
import { MessageStore } from '../store/message.store';

@Injectable({
  providedIn: 'root',
})
export class MessageFromRoomSaverService {
  private messageStore = inject(MessageStore);

  public execute(message: Message) {
    this.messageStore.get().messageList.update((list) => {
      list.add(message);
      eventBus.emit('new.message');
      return list;
    });
  }
}
