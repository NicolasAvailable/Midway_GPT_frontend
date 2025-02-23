import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { toast } from 'ngx-sonner';
import { AlertComponent } from '../../../../../shared/components/alert/alert.component';
import { RoomService } from '../../data/services/room.service';
import { RoomStore } from '../../data/store/room.store';

@Component({
  selector: 'mw-room-remover',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './room-remover.component.html',
  styleUrl: './room-remover.component.css',
})
export class RoomRemoverComponent {
  protected dialogRef = inject(MatDialogRef<RoomRemoverComponent>);
  protected dialogData = inject(MAT_DIALOG_DATA);
  protected roomService = inject(RoomService);
  private roomStore = inject(RoomStore);

  protected remove() {
    const id = this.dialogData.id;
    this.roomService.remove(id).subscribe(() => {
      toast.dismiss();
      toast.success('Se ha eliminado el asistente correctamente');
      this.dialogRef.close();
      const roomList = this.roomStore.get().roomList.filter(id);
      this.roomStore.update({ roomList });
    });
  }
}
