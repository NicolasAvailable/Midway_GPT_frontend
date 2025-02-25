import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomBody, RoomBodyUpdate } from '../interfaces/room-body.interfaces';
import { RoomId } from '../interfaces/room-response.interfaces';
import { Room } from '../models/room.models';
import { RoomStore } from '../store/room.store';
import { ExceptionRoomCreatorService } from './exceptions/exception-room-creator.service';
import { ExceptionRoomRemoverService } from './exceptions/exception-room-remover.service';
import { RoomCreatorService } from './room-creator.service';
import { RoomGetterService } from './room-getter.service';
import { RoomRemoverService } from './room-remover.service';
import { RoomUpdaterService } from './room-updater.service';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private http = inject(HttpClient);
  private roomStore = inject(RoomStore);
  private exceptionRoomCreator = inject(ExceptionRoomCreatorService);
  private exceptionRoomRemover = inject(ExceptionRoomRemoverService);

  public get(): void {
    this.roomStore.update({ isLoading: true });
    const roomService = new RoomGetterService(this.http);
    roomService
      .execute()
      .subscribe((roomList) =>
        this.roomStore.update({ roomList, isLoading: false })
      );
  }

  public create(body: RoomBody): Observable<Room> {
    const roomService = new RoomCreatorService(
      this.http,
      this.exceptionRoomCreator
    );
    return roomService.execute(body);
  }

  public edit(id: RoomId, body: RoomBodyUpdate) {
    const roomService = new RoomUpdaterService(this.http);
    return roomService.execute(id, body);
  }

  public remove(id: RoomId): Observable<Room> {
    const roomService = new RoomRemoverService(
      this.http,
      this.exceptionRoomRemover
    );
    return roomService.execute(id);
  }
}
