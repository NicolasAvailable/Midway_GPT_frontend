import { MessageEntity } from '../../interfaces/message-getter-response.interfaces';
import { MessageList } from '../message-list.models';
import { Message } from '../message.models';
import { MessageSpecialCharactersMappers } from './message-special-characters.mappers';

export class MessageGetterResponseToMessageListMapper {
  constructor(private messages: MessageEntity[]) {}

  public map() {
    return new MessageList(
      this.messages.map(
        (message) =>
          new Message(
            message.role,
            new MessageSpecialCharactersMappers(message.message).map(),
            ''
          )
      )
    );
  }
}
