import { Component, OnInit } from '@angular/core';
import { ChatHeaderComponent } from '../chat-header/chat-header.component';

@Component({
  selector: 'mw-chat-container',
  standalone: true,
  imports: [ChatHeaderComponent],
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css'],
})
export class ChatContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
