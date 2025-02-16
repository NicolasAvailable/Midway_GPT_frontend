import { HttpClient } from '@angular/common/http';
import { toast } from 'ngx-sonner';
import { catchError, map, of } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { RoomBody } from '../interfaces/room-body.interfaces';
import { RoomCreatorResponse } from '../interfaces/room-creator-response.interfaces';
import { RoomCreatorMapper } from '../models/mappers/room-creator.mappers';
import { ExceptionRoomCreatorService } from './exceptions/exception-room-creator.service';

export class RoomCreatorService {
  private API = API;

  constructor(
    private http: HttpClient,
    private exceptionRoomCreator: ExceptionRoomCreatorService
  ) {}

  public execute(body: RoomBody) {
    toast.loading('Cargando...');
    return this.http
      .post<RoomCreatorResponse>(`${this.API.url_develop}/room`, body)
      .pipe(
        catchError(() => {
          this.exceptionRoomCreator.throw();
          return of(null);
        }),
        map((resp) => new RoomCreatorMapper(resp).map())
      );
  }
}
