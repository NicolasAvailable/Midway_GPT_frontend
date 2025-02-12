import { RoomId } from '../interfaces/room-response.interfaces';

export class Room {
  private constructor(
    public readonly id: RoomId,
    public readonly name: string
  ) {}

  public static create(id: RoomId, name: string): Room {
    return new Room(id, name);
  }
}
