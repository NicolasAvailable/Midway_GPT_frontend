import { RoomId } from '../interfaces/room-response.interfaces';
import { Room } from './room.models';

export class RoomList {
  public readonly values: Array<Room>;

  constructor(rooms: Array<Room>) {
    this.values = rooms;
  }

  public filter(id: RoomId) {
    return new RoomList(this.values.filter((room) => room.id !== id));
  }
}
