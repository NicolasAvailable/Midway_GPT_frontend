import { RoomCreatorResponse } from '../../interfaces/room-creator-response.interfaces';
import { Room } from '../room.models';

export class RoomCreatorMapper {
  constructor(private response: RoomCreatorResponse) {}

  public map() {
    return Room.create(
      this.response.data._id,
      this.response.data.name,
      this.response.data.createdAt
    );
  }
}
