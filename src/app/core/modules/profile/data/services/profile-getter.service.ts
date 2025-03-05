import { HttpClient } from '@angular/common/http';
import { inject, signal } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { API } from '../../../../../config/api.config';
import { RoomActionResponse } from '../interfaces/profile-response.interfaces';
import { ProfileMapper } from '../models/mappers/profile.mappers';
import { ProfileStore } from '../store/profile.store';

export class ProfileGetterService {
  private profileStore = inject(ProfileStore);
  private http = inject(HttpClient);

  private API = API;

  public execute(): Observable<Boolean> {
    this.profileStore.get().isLoading.set(true);
    return this.http
      .get<RoomActionResponse>(`${this.API.url_develop}/profile`)
      .pipe(
        map((resp) => resp.data),
        map((profileEntity) => new ProfileMapper(profileEntity).map()),
        map((profile) => {
          this.profileStore.get().isLoading.set(false);
          this.profileStore.update({ profile: signal(profile) });
          return profile ? true : false;
        }),
        catchError(() => {
          this.profileStore.get().isLoading.set(false);
          this.profileStore.update({ profile: null });
          return of(false);
        })
      );
  }
}
