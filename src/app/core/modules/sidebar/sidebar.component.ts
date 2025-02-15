import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/modules/material.module';
import { RoomList } from './data/models/room-list.models';
import { SidebarService } from './data/services/sidebar.service';

@Component({
  selector: 'mw-sidebar',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  protected roomList: RoomList | null = null;
  protected isLoading: boolean = true;

  constructor(protected sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.get().subscribe((roomList) => {
      this.roomList = { ...roomList };
      this.isLoading = false;
    });
  }
}
