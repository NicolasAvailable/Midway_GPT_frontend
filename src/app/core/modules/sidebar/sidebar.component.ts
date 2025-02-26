import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { toast } from 'ngx-sonner';
import { timer } from 'rxjs';
import { MwInputErrorDirective } from '../../../@midway-UI/global/input/mw-input-error.directive';
import { MwInputInvalidDirective } from '../../../@midway-UI/global/input/mw-input-invalid.directive';
import { MwInputDirective } from '../../../@midway-UI/global/input/mw-input.directive';
import { MaterialModule } from '../../../shared/modules/material.module';
import { AutoFocusDirective } from '../room/data/directives/auto-focus.directive';
import { RoomId } from '../room/data/interfaces/room-response.interfaces';
import { Room } from '../room/data/models/room.models';
import { NameErrorSetterPipe } from '../room/data/pipes/name-error-setter.pipe';
import { RoomDialogService } from '../room/data/services/room-dialog.service';
import { RoomService } from '../room/data/services/room.service';
import { RoomStore } from '../room/data/store/room.store';
import {
  ROOM_NAME_MAX_CHARACTERS,
  ROOM_NAME_MIN_CHARACTERS,
} from '../room/data/validators/room-max-characters.validators';

@Component({
  selector: 'mw-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    MaterialModule,
    MwInputErrorDirective,
    MwInputDirective,
    MwInputInvalidDirective,
    AutoFocusDirective,
    NameErrorSetterPipe,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  protected router = inject(Router);
  protected roomDialogService = inject(RoomDialogService);
  protected roomStore = inject(RoomStore);
  private roomService = inject(RoomService);

  protected roomIdSelected: RoomId = null;
  protected name = new FormControl('', [
    Validators.required,
    Validators.minLength(ROOM_NAME_MIN_CHARACTERS),
    Validators.maxLength(ROOM_NAME_MAX_CHARACTERS),
  ]);
  protected focusIncrease: number = 0;

  ngOnInit(): void {
    this.roomService.get();
  }

  public changeToEdit(id: RoomId, name: string) {
    this.roomIdSelected = id;
    this.name.setValue(name);
    timer(10).subscribe(() => this.focusIncrease++);
  }

  public edit() {
    if (this.name.invalid) return;
    this.roomService
      .edit(this.roomIdSelected, { name: this.name.value })
      .subscribe((room) => this.success(room));
  }

  private success(room: Room) {
    toast.dismiss();
    toast.success('Se ha editado exitosamente');
    this.roomStore.update({
      roomList: this.roomStore.get().roomList.replace(room),
    });
    this.router.navigate(['app', 'c', room.id]);
    this.reset();
  }

  public reset() {
    this.roomIdSelected = null;
    this.name.setValue('');
  }
}
