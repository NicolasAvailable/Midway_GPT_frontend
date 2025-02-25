export interface RoomBody {
  name: string;
  description: string;
}

export interface RoomBodyUpdate extends Partial<RoomBody> {}
