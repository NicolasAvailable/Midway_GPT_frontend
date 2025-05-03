import { HttpClient } from '@angular/common/http';
import { toast } from 'ngx-sonner';
import { catchError, map, Observable, of } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { RoomActionResponse } from '../interfaces/room-action-response.interfaces';
import { RoomBody } from '../interfaces/room-body.interfaces';
import { RoomActionMapper } from '../models/mappers/room-action.mappers';
import { Room } from '../models/room.models';
import { ExceptionRoomCreatorService } from './exceptions/exception-room-creator.service';

export class RoomCreatorService {
  private API = API;

  constructor(
    private http: HttpClient,
    private exceptionRoomCreator: ExceptionRoomCreatorService
  ) {}

  public execute(body: RoomBody): Observable<Room> {
    toast.loading('Cargando...');
    return this.http
      .post<RoomActionResponse>(`${this.API.url}/room`, body)
      .pipe(
        catchError(() => {
          this.exceptionRoomCreator.throw();
          return of(null);
        }),
        map((resp) => new RoomActionMapper(resp).map())
      );
  }
}
