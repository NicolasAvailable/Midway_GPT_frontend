import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Room } from '../../../room/data/models/room.models';
import { RoomService } from '../../../room/data/services/room.service';

@Component({
  selector: 'mw-chat-header',
  standalone: true,
  imports: [],
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.css',
})
export class ChatHeaderComponent {
  private route = inject(ActivatedRoute);
  private roomService = inject(RoomService);
  protected room: Room = null;

  constructor() {
    this.route.params
      .pipe(switchMap((params) => this.roomService.getOne(params['id'])))
      .subscribe((room) => (this.room = room));
  }
}
