import { RoomEntity } from './room-response.interfaces';

export interface RoomActionResponse {
  statusCode: number;
  message: string;
  data: RoomEntity;
}
