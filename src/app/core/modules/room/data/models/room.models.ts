import { RoomId } from '../interfaces/room-response.interfaces';

export class Room {
  private constructor(
    public readonly id: RoomId,
    public readonly image: string,
    public readonly name: string,
    public readonly description: string,
    public readonly createdAt: Date
  ) {}

  public static create(
    id: RoomId,
    image: string,
    name: string,
    description: string,
    createdAt: Date
  ): Room {
    return new Room(id, image, name, description, createdAt);
  }
}
