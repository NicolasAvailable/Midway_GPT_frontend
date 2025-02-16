import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoomCreatorComponent } from '../../components/room-creator/room-creator.component';

@Injectable({
  providedIn: 'root',
})
export class RoomDialogOpenerService {
  private dialog = inject(MatDialog);

  public open() {
    this.dialog.open(RoomCreatorComponent);
  }
}
