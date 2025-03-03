import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../../../room/data/models/room.models';

@Component({
  selector: 'mw-chat-detailer',
  standalone: true,
  imports: [],
  templateUrl: './chat-detailer.component.html',
  styleUrl: './chat-detailer.component.css',
})
export class ChatDetailerComponent {
  @Input() public room: Room = null;
  @Output() protected detailTrigger = new EventEmitter<void>();
}
