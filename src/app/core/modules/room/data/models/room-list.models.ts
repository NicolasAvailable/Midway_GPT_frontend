import { RoomId } from '../interfaces/room-response.interfaces';
import { Room } from './room.models';

export class RoomList {
  public readonly values: Array<Room>;

  constructor(rooms: Array<Room>) {
    this.values = rooms;
  }

  public add(room: Room) {
    return new RoomList([...this.values, room]);
  }

  public filter(id: RoomId) {
    return new RoomList(this.values.filter((room) => room.id !== id));
  }

  public replace(room: Room) {
    return new RoomList(
      this.values.map((currentRoom) =>
        currentRoom.id === room.id ? room : currentRoom
      )
    );
  }
}
