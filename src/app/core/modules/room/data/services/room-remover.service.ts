import { HttpClient } from '@angular/common/http';
import { toast } from 'ngx-sonner';
import { catchError, map, Observable, of } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { RoomActionResponse } from '../interfaces/room-action-response.interfaces';
import { RoomId } from '../interfaces/room-response.interfaces';
import { RoomActionMapper } from '../models/mappers/room-action.mappers';
import { Room } from '../models/room.models';
import { ExceptionRoomRemoverService } from './exceptions/exception-room-remover.service';

export class RoomRemoverService {
  private API = API;

  constructor(
    private http: HttpClient,
    private exceptionRoomRemover: ExceptionRoomRemoverService
  ) {}

  public execute(id: RoomId): Observable<Room> {
    toast.loading('Cargando...');
    return this.http
      .delete<RoomActionResponse>(`${this.API.url_develop}/room/${id}`)
      .pipe(
        catchError(() => {
          this.exceptionRoomRemover.throw();
          return of(null);
        }),
        map((resp) => new RoomActionMapper(resp).map())
      );
  }
}
