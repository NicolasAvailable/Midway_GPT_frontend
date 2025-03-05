import { NgClass } from '@angular/common';
import { Component, inject, OnInit, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { AvatarComponent } from '../../../../../@midway-UI/global/avatar/avatar.component';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { Profile } from '../../../profile/data/models/profile.models';
import { ProfileStore } from '../../../profile/data/store/profile.store';
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
  private profileStore = inject(ProfileStore);

  protected room: Room = null;
  protected isOpenDetails: boolean = false;
  protected profile: WritableSignal<Profile> = this.profileStore.get().profile;

  constructor() {
    this.route.params
      .pipe(switchMap((params) => this.roomService.getOne(params['id'])))
      .subscribe((room) => (this.room = room));
  }

  ngOnInit() {}
}
