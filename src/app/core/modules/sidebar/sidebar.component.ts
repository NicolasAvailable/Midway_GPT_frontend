import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/modules/material.module';
import { RoomDialogService } from '../room/data/services/room-dialog.service';
import { RoomService } from '../room/data/services/room.service';
import { RoomStore } from '../room/data/store/room.store';

@Component({
  selector: 'mw-sidebar',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  private roomService = inject(RoomService);
  protected roomDialogService = inject(RoomDialogService);
  protected roomStore = inject(RoomStore);

  ngOnInit(): void {
    this.roomService.get();
  }
}
