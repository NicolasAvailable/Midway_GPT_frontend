import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { Room } from '../../../room/data/models/room.models';
import { RoomService } from '../../../room/data/services/room.service';
import { ChatDetailerComponent } from '../chat-detailer/chat-detailer.component';
import { ChatHeaderComponent } from '../chat-header/chat-header.component';
import { ChatSenderComponent } from '../chat-sender/chat-sender.component';

@Component({
  selector: 'mw-chat-container',
  standalone: true,
  imports: [
    NgClass,
    ChatHeaderComponent,
    ChatDetailerComponent,
    ChatSenderComponent,
    ClickOutsideDirective,
  ],
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css'],
})
export class ChatContainerComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private roomService = inject(RoomService);

  protected room: Room = null;
  protected isOpenDetails: boolean = false;

  constructor() {
    this.route.params
      .pipe(switchMap((params) => this.roomService.getOne(params['id'])))
      .subscribe((room) => (this.room = room));
  }

  ngOnInit() {}
}
