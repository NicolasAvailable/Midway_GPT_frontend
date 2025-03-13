import { NgClass } from '@angular/common';
import { Component, inject, OnInit, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { AvatarComponent } from '../../../../../@midway-UI/global/avatar/avatar.component';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { Profile } from '../../../profile/data/models/profile.models';
import { ProfileStore } from '../../../profile/data/store/profile.store';
import { Room } from '../../../room/data/models/room.models';
import { RoomService } from '../../../room/data/services/room.service';
import { MessageList } from '../../data/models/message-list.models';
import { MessageService } from '../../data/services/message.service';
import { ChatDetailerComponent } from '../chat-detailer/chat-detailer.component';
import { ChatHeaderComponent } from '../chat-header/chat-header.component';
import { ChatSenderComponent } from '../chat-sender/chat-sender.component';

@Component({
  selector: 'mw-chat-container',
  standalone: true,
  imports: [
    NgClass,
    AvatarComponent,
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
  private messageService = inject(MessageService);
  private profileStore = inject(ProfileStore);

  protected room: Room = null;
  protected messageList: MessageList = null;
  protected isOpenDetails: boolean = false;
  protected profile: WritableSignal<Profile> = this.profileStore.get().profile;

  constructor() {
    this.route.params
      .pipe(
        switchMap((params) => this.roomService.getOne(params['id'])),
        tap({
          next: (room) => (this.room = room),
        }),
        switchMap((room) => this.messageService.get(room.id))
      )
      .subscribe((messageList) => (this.messageList = messageList));
  }

  ngOnInit() {}
}
