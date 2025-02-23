import { Component, inject } from '@angular/core';
import { RoomDialogService } from '../../../room/data/services/room-dialog.service';

@Component({
  selector: 'mw-chat-creator',
  standalone: true,
  imports: [],
  templateUrl: './chat-creator.component.html',
  styleUrl: './chat-creator.component.css',
})
export class ChatCreatorComponent {
  protected roomDialogService = inject(RoomDialogService);
}
