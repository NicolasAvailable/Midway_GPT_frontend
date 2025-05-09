import { inject, Injectable } from '@angular/core';
import { Message } from '../../models/message.models';
import { MessageStore } from '../../store/message.store';

@Injectable({
  providedIn: 'root',
})
export class RoomResponseLoaderCommand {
  private messageStore = inject(MessageStore);

  public execute() {
    this.messageStore.get().messageList.update((list) => {
      list.add(
        new Message(
          '1',
          'assistant',
          'Hello, how can I help you today?',
          'loading'
        )
      );
      return list;
    });
  }

  public undo() {
    this.messageStore.get().messageList.update((list) => {
      list.remove('1');
      return list;
    });
  }
}
