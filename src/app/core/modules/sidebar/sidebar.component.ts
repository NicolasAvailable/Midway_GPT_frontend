import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../../shared/modules/material.module';
import { RoomCreatorComponent } from './components/room-creator/room-creator.component';
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
  private dialog = inject(MatDialog);
  protected roomStore = inject(RoomStore);

  ngOnInit(): void {
    this.sidebarService.get();
  }

  public create() {
    this.dialog.open(RoomCreatorComponent);
  }
}
