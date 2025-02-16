import { Room } from './room.models';

export class RoomList {
  public readonly values: Array<Room>;
  constructor(rooms: Array<Room>) {
    this.values = rooms;
  }
}
