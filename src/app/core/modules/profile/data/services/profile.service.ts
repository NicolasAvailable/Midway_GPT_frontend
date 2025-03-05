import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileGetterService } from './profile-getter.service';
import { ProfileLogOutService } from './profile-log-out.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private router: Router) {}
  public get(): Observable<Boolean> {
    const profileGetter = new ProfileGetterService();
    return profileGetter.execute();
  }

  public logOut() {
    const profileLogOut = new ProfileLogOutService(this.router);
    profileLogOut.execute();
  }
}
