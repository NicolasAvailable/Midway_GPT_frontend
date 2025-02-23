import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoomCreatorComponent } from '../../views/room-creator/room-creator.component';
import { RoomRemoverComponent } from '../../views/room-remover/room-remover.component';
import { RoomId } from '../interfaces/room-response.interfaces';

@Injectable({
  providedIn: 'root',
})
export class RoomDialogService {
  private dialog = inject(MatDialog);

  public openCreator() {
    this.dialog.open(RoomCreatorComponent);
  }

  public openRemover(id: RoomId) {
    this.dialog.open(RoomRemoverComponent, {
      data: { id },
    });
  }
}
