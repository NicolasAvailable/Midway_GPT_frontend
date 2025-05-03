import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';
import { catchError, map, Observable, of } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { RoomActionResponse } from '../interfaces/room-action-response.interfaces';
import { RoomBodyUpdate } from '../interfaces/room-body.interfaces';
import { RoomId } from '../interfaces/room-response.interfaces';
import { RoomActionMapper } from '../models/mappers/room-action.mappers';
import { Room } from '../models/room.models';

@Injectable({
  providedIn: 'root',
})
export class RoomUpdaterService {
  private API = API;

  constructor(private http: HttpClient) {}

  public execute(id: RoomId, body: RoomBodyUpdate): Observable<Room> {
    toast.loading('Cargando...');
    return this.http
      .patch<RoomActionResponse>(`${this.API.url}/room/${id}`, body)
      .pipe(
        catchError(() => {
          return of(null);
        }),
        map((resp) => new RoomActionMapper(resp).map())
      );
  }
}
