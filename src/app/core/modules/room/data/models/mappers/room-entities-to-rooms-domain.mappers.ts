import { RoomEntity } from '../../interfaces/room-response.interfaces';
import { RoomList } from '../room-list.models';
import { Room } from '../room.models';

export class RoomEntitiesToRoomsDomainMapper {
  constructor(private roomEntities: Array<RoomEntity>) {}

  public map() {
    const rooms = this.roomEntities.map((roomEntity) =>
      Room.create(
        roomEntity._id,
        roomEntity.image ?? '',
        roomEntity.name,
        roomEntity?.description ?? '',
        roomEntity.createdAt
      )
    );
    return new RoomList(rooms);
  }
}
