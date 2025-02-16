import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/modules/material.module';
import { RoomDialogOpenerService } from './data/services/room-dialog-opener.service';
import { SidebarService } from './data/services/sidebar.service';
import { RoomStore } from './data/store/room.store';

@Component({
  selector: 'mw-sidebar',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  private sidebarService = inject(SidebarService);
  protected roomDialogOpener = inject(RoomDialogOpenerService);
  protected roomStore = inject(RoomStore);

  ngOnInit(): void {
    this.sidebarService.get();
  }
}
