import { Injectable, signal } from '@angular/core';
import { Store } from '../../../../../shared/base/store.base';
import { MessageStore as IMessageStore } from '../interfaces/message-store.interfaces';
import { MessageList } from '../models/message-list.models';

@Injectable({
  providedIn: 'root',
})
export class MessageStore extends Store<IMessageStore> {
  constructor() {
    super({
      messageList: signal<MessageList>(null),
      isLoading: signal<boolean>(true),
    });
  }
}
