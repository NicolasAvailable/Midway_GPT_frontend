import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { ConversationRoutingModule } from './conversation-routing.module';
import { ConversationComponent } from './conversation.component';

@NgModule({
  imports: [
    CommonModule,
    ConversationRoutingModule,
    RouterOutlet,
    FormsModule,
    SidebarComponent,
  ],
  declarations: [ConversationComponent, ChatContainerComponent],
  exports: [ConversationComponent],
})
export class ConversationModule {}
