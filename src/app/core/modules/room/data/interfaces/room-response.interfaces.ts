export interface RoomResponse {
  statusCode: number;
  message: string;
  data: RoomEntity[];
}

export interface RoomEntity {
  _id: string;
  userId: string;
  name: string;
  description: string;
  createdAt: Date;
  lastEdit: Date;
  __v: number;
}

export type RoomId = RoomEntity['_id'];
