import { MessageEntity } from '../../interfaces/message-getter-response.interfaces';
import { Message } from '../message.models';
import { MessageSpecialCharactersMappers } from './message-special-characters.mappers';

export class MessageActionResponseToMessageMapper {
  constructor(
    private entity: MessageEntity,
    private hasError: boolean = false
  ) {}
  public map() {
    return new Message(
      this.entity._id,
      this.entity.role,
      new MessageSpecialCharactersMappers(this.entity.message).map(),
      'success',
      this.entity.createdAt,
      this.hasError
    );
  }
}
