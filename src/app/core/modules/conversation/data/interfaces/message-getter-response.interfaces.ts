import { UserId } from '../../../profile/data/models/profile.models';
import { RoomId } from '../../../room/data/interfaces/room-response.interfaces';

export interface MessageGetterResponse {
  statusCode: number;
  message: string;
  data: MessageEntity[];
}

export interface MessageEntity {
  _id: string;
  userId: UserId;
  roomId: RoomId;
  message: string;
  role: Role;
  createdAt: Date;
  lastEdit: Date;
  __v: number;
}

export type Role = 'user' | 'assistant';

export type State = 'success' | 'loading';
