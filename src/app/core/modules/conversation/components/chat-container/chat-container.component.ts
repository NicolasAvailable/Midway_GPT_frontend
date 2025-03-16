import { NgClass } from '@angular/common';
import { Component, inject, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { AvatarComponent } from '../../../../../@midway-UI/global/avatar/avatar.component';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { Profile } from '../../../profile/data/models/profile.models';
import { ProfileStore } from '../../../profile/data/store/profile.store';
import { Room } from '../../../room/data/models/room.models';
import { RoomService } from '../../../room/data/services/room.service';
import { AutoScrollDirective } from '../../data/directives/auto-scroll.directive';
import { MessageService } from '../../data/services/message.service';
import { MessageStore } from '../../data/store/message.store';
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
    AutoScrollDirective,
  ],
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css'],
})
export class ChatContainerComponent {
  private route = inject(ActivatedRoute);
  private roomService = inject(RoomService);
  private profileStore = inject(ProfileStore);
  private messageService = inject(MessageService);
  protected messageStore = inject(MessageStore);

  protected room: Room = null;
  protected isOpenDetails: boolean = false;
  protected profile: WritableSignal<Profile> = this.profileStore.get().profile;

  constructor() {
    this.route.params
      .pipe(
        switchMap((params) => this.roomService.getOne(params['id'])),
        tap({
          next: (room) => {
            this.room = room;
            this.messageStore.get().isLoading.set(true);
          },
        }),
        switchMap((room) => this.messageService.get(room.id))
      )
      .subscribe((messageList) => {
        this.messageStore.get().messageList.set(messageList);
        this.messageStore.get().isLoading.set(false);
      });
  }
}
