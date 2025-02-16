import { RoomEntity } from './room-response.interfaces';

export interface RoomCreatorResponse {
  statusCode: number;
  message: string;
  data: RoomEntity;
}
