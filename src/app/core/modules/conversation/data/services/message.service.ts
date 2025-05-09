import { inject, Injectable } from '@angular/core';
import { RoomId } from '../../../room/data/interfaces/room-response.interfaces';
import { MessageSenderBody } from '../interfaces/message-sender-body.interfaces';
import { RoomResponseLoaderCommand } from './commands/room-response-loader.command';
import { MessageFromRoomSaverService } from './message-from-room-saver.service';
import { MessageFromUserSaverService } from './message-from-user-saver.service';
import { MessageGetterService } from './message-getter.service';
import { RoomMessageSenderService } from './room-message-sender.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageGetter = inject(MessageGetterService);
  private roomMessageSender = inject(RoomMessageSenderService);
  private messageFromUserSaver = inject(MessageFromUserSaverService);
  private messageFromRoomSaver = inject(MessageFromRoomSaverService);
  private roomResponseLoaderCommand = inject(RoomResponseLoaderCommand);

  public get(roomId: RoomId) {
    return this.messageGetter.execute(roomId);
  }

  public send(body: MessageSenderBody) {
    this.messageFromUserSaver.execute(body);
    this.roomResponseLoaderCommand.execute();
    return this.roomMessageSender.execute(body).subscribe((message) => {
      this.roomResponseLoaderCommand.undo();
      this.messageFromRoomSaver.execute(message);
    });
  }
}
