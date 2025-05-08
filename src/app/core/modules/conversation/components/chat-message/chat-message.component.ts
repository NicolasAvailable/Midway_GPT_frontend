import { Component, Input } from '@angular/core';
import { AvatarComponent } from '@midway-ui/global/avatar/avatar.component';
import { Profile } from 'app/core/modules/profile/data/models/profile.models';
import { Room } from 'app/core/modules/room/data/models/room.models';
import { Message } from '../../data/models/message.models';

@Component({
  selector: 'mw-chat-message',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.css',
})
export class ChatMessageComponent {
  @Input() public message: Message = null;
  @Input() public profile: Profile = null;
  @Input() public room: Room = null;
}
