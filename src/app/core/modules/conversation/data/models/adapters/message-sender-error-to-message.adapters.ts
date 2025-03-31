import { Adapter } from '../../../../../../shared/models/adapter.models';
import { MessageEntity } from '../../interfaces/message-getter-response.interfaces';

export class MessageSenderErrorToMessageEntityAdapter
  implements Adapter<MessageEntity>
{
  constructor(public message: string) {}

  public adapt(): MessageEntity {
    return {
      _id: '',
      userId: '',
      roomId: '',
      message: this.message,
      role: 'assistant',
      createdAt: new Date(),
      lastEdit: new Date(),
      __v: 0,
    };
  }
}
