import { RoomActionResponse } from '../../interfaces/room-action-response.interfaces';
import { Room } from '../room.models';

export class RoomActionMapper {
  constructor(private response: RoomActionResponse) {}

  public map() {
    return Room.create(
      this.response.data._id,
      this.response.data.name,
      this.response.data.description ?? '',
      this.response.data.createdAt
    );
  }
}
