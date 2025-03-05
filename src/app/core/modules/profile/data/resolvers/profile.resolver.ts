import { inject } from '@angular/core';
import type { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from '../services/profile.service';

export const profileResolver: ResolveFn<Observable<Boolean>> = () => {
  return inject(ProfileService).get();
};
