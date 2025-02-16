import { Component, inject } from '@angular/core';
import { RoomDialogOpenerService } from '../../../sidebar/data/services/room-dialog-opener.service';

@Component({
  selector: 'mw-chat-creator',
  standalone: true,
  imports: [],
  templateUrl: './chat-creator.component.html',
  styleUrl: './chat-creator.component.css',
})
export class ChatCreatorComponent {
  protected roomDialogOpener = inject(RoomDialogOpenerService);
}
