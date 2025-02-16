import { Injectable } from '@angular/core';
import { Store } from '../../../../../shared/base/store.base';
import { ROOM_STORE } from '../constants/room-store.constants';
import { RoomStore as IRoomStore } from '../interfaces/room-store.interfaces';

@Injectable({
  providedIn: 'root',
})
export class RoomStore extends Store<IRoomStore> {
  constructor() {
    super(ROOM_STORE);
  }
}
