import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RoomBody } from '../interfaces/room-body.interfaces';
import { RoomStore } from '../store/room.store';
import { ExceptionRoomCreatorService } from './exceptions/exception-room-creator.service';
import { RoomCreatorService } from './room-creator.service';
import { RoomGetterService } from './room-getter.service';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private http = inject(HttpClient);
  private roomStore = inject(RoomStore);
  private exceptionRoomCreator = inject(ExceptionRoomCreatorService);

  public get(): void {
    this.roomStore.update({ isLoading: true });
    const roomService = new RoomGetterService(this.http);
    roomService
      .execute()
      .subscribe((roomList) =>
        this.roomStore.update({ roomList, isLoading: false })
      );
  }

  public create(body: RoomBody) {
    const roomService = new RoomCreatorService(
      this.http,
      this.exceptionRoomCreator
    );
    return roomService.execute(body);
  }
}
