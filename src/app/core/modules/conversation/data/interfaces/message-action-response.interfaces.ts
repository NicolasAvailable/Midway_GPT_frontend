import { MessageEntity } from './message-getter-response.interfaces';

export interface MessageActionResponse {
  statusCode: number;
  message: string;
  data: MessageEntity;
}
