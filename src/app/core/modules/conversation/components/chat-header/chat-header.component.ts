import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../../../room/data/models/room.models';

@Component({
  selector: 'mw-chat-header',
  standalone: true,
  imports: [],
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.css',
})
export class ChatHeaderComponent {
  @Input() public room: Room = null;
  @Input() public isOpenDetails: boolean = false;
  @Output() protected detailTrigger = new EventEmitter<boolean>();
}
