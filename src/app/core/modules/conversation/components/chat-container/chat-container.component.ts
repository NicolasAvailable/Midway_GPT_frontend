import { Component, OnInit } from '@angular/core';
import { ChatHeaderComponent } from '../chat-header/chat-header.component';
import { ChatSenderComponent } from '../chat-sender/chat-sender.component';

@Component({
  selector: 'mw-chat-container',
  standalone: true,
  imports: [ChatHeaderComponent, ChatSenderComponent],
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css'],
})
export class ChatContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
