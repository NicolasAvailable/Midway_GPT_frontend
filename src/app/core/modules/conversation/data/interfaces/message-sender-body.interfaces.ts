import { RoomId } from '../../../room/data/interfaces/room-response.interfaces';
import { IAmodels } from '../models/ia-models.models';

export interface MessageSenderBody {
  roomId: RoomId;
  prompt: string;
  model: IAmodels;
}
