import { MessageEntity } from '../../interfaces/message-getter-response.interfaces';
import { Message } from '../message.models';

export class MessageActionResponseToMessageMapper {
  constructor(private entity: MessageEntity) {}
  public map() {
    return new Message(
      this.entity._id,
      this.entity.role,
      this.entity.message,
      this.entity.createdAt
    );
  }
}
