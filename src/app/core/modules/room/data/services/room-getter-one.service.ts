import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { RoomActionResponse } from '../interfaces/room-action-response.interfaces';
import { RoomId } from '../interfaces/room-response.interfaces';
import { RoomActionMapper } from '../models/mappers/room-action.mappers';
import { Room } from '../models/room.models';

export class RoomGetterOneService {
  private API = API;

  constructor(private http: HttpClient) {}

  public execute(id: RoomId): Observable<Room> {
    return this.http
      .get<RoomActionResponse>(`${this.API.url_develop}/room/${id}`)
      .pipe(map((response) => new RoomActionMapper(response).map()));
  }
}
