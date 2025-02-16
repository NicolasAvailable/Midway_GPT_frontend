import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { RoomResponse } from '../interfaces/room-response.interfaces';
import { RoomEntitiesToRoomsDomainMapper } from '../models/mappers/room-entities-to-rooms-domain.mappers';
import { RoomList } from '../models/room-list.models';

export class RoomGetterService {
  private API = API;

  constructor(private http: HttpClient) {}

  public execute(): Observable<RoomList> {
    return this.http.get<RoomResponse>(`${this.API.url_develop}/room`).pipe(
      map((resp) => resp.data),
      map((rooms) => new RoomEntitiesToRoomsDomainMapper(rooms).map())
    );
  }
}
