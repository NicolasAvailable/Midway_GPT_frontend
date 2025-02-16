import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { toast } from 'ngx-sonner';
import { ButtonComponent } from '../../../../../@midway-UI/global/button/button.component';
import { MwInputErrorDirective } from '../../../../../@midway-UI/global/input/mw-input-error.directive';
import { MwInputInvalidDirective } from '../../../../../@midway-UI/global/input/mw-input-invalid.directive';
import { MaterialModule } from '../../../../../shared/modules/material.module';
import { RoomBody } from '../../data/interfaces/room-body.interfaces';
import { RoomList } from '../../data/models/room-list.models';
import { Room } from '../../data/models/room.models';
import { DescriptionErrorSetterPipe } from '../../data/pipes/description-error-setter.pipe';
import { NameErrorSetterPipe } from '../../data/pipes/name-error-setter.pipe';
import { RoomService } from '../../data/services/room.service';
import { RoomStore } from '../../data/store/room.store';

@Component({
  selector: 'mw-room-creator',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    ButtonComponent,
    MwInputErrorDirective,
    MwInputInvalidDirective,
    NameErrorSetterPipe,
    DescriptionErrorSetterPipe,
  ],

  templateUrl: './room-creator.component.html',
  styleUrl: './room-creator.component.css',
})
export class RoomCreatorComponent implements OnInit {
  protected dialogRef = inject(MatDialogRef<RoomCreatorComponent>);
  private roomService = inject(RoomService);
  private formBuilder = inject(FormBuilder);
  private roomStore = inject(RoomStore);
  protected form: FormGroup = null;
  protected maxNameLength: number = 100;
  protected maxDescriptionLength: number = 400;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(this.maxNameLength),
        ],
      ],
      description: ['', [Validators.maxLength(this.maxDescriptionLength)]],
    });
  }

  public create() {
    if (this.form.invalid) return;
    const name = this.form.get('name').value.trim();
    const description = this.form.get('description').value.trim();
    const body: RoomBody = { name, description };
    this.roomService.create(body).subscribe((room) => this.success(room));
  }

  private success(room: Room) {
    this.dialogRef.close();
    toast.dismiss();
    toast.success('Se ha creado el asistente correctamente');
    const rooms = this.roomStore.get().roomList.values;
    this.roomStore.update({ roomList: new RoomList([room, ...rooms]) });
  }
}
