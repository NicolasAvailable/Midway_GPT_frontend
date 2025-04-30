import { Component } from '@angular/core';

@Component({
  selector: 'mw-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
})
export class ConversationComponent {
  protected sidebarOpen = false;

  protected toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
