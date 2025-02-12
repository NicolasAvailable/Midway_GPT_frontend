import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomList } from '../models/room-list.models';
import { RoomGetterService } from './room-getter.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor(private http: HttpClient) {}

  public get(): Observable<RoomList> {
    const roomService = new RoomGetterService(this.http);
    return roomService.execute();
  }
}
