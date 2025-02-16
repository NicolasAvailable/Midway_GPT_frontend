import { RoomList } from '../models/room-list.models';

export interface RoomStore {
  roomList: RoomList;
  isLoading: boolean;
}
