import { Component } from '@angular/core';
import { MwInputDirective } from '../../../../../@midway-UI/global/input/mw-input.directive';
import { MaterialModule } from '../../../../../shared/modules/material.module';

@Component({
  selector: 'mw-chat-sender',
  standalone: true,
  imports: [MaterialModule, MwInputDirective],
  templateUrl: './chat-sender.component.html',
  styleUrl: './chat-sender.component.css',
})
export class ChatSenderComponent {}
