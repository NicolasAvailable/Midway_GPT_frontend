import { Component } from '@angular/core';

@Component({
  selector: 'mw-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
})
export class ConversationComponent {
  protected isSidebarOpen = false;

  protected toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
