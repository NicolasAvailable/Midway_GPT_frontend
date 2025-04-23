export interface RoomBody {
  image: string;
  name: string;
  description: string;
}

export interface RoomBodyUpdate extends Partial<RoomBody> {}
