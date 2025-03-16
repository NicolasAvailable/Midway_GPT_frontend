import { WritableSignal } from '@angular/core';
import { MessageList } from '../models/message-list.models';

export interface MessageStore {
  messageList: WritableSignal<MessageList>;
  isLoading: WritableSignal<boolean>;
}
