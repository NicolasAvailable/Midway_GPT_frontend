import { RoomId } from '../interfaces/room-response.interfaces';

export class Room {
  private constructor(
    public readonly id: RoomId,
    public readonly name: string,
    public readonly createdAt: Date
  ) {}

  public static create(id: RoomId, name: string, createdAt: Date): Room {
    return new Room(id, name, createdAt);
  }
}
