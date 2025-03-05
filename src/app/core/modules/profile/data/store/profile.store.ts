import { Injectable, signal, WritableSignal } from '@angular/core';
import { Store } from '../../../../../shared/base/store.base';
import { Profile } from '../models/profile.models';

@Injectable({
  providedIn: 'root',
})
export class ProfileStore extends Store<IProfileStore> {
  constructor() {
    super({
      profile: null,
      isLoading: signal<boolean>(false),
    });
  }
}

interface IProfileStore {
  profile: WritableSignal<Profile>;
  isLoading: WritableSignal<boolean>;
}
