import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileLogOutComponent } from '../../views/profile-log-out/profile-log-out.component';

@Injectable({ providedIn: 'root' })
export class ProfileDialogService {
  private dialog = inject(MatDialog);

  public openLogOut() {
    this.dialog.open(ProfileLogOutComponent);
  }
}
