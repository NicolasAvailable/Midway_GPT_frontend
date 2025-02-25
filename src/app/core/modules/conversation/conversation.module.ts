import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { ConversationRoutingModule } from './conversation-routing.module';
import { ConversationComponent } from './conversation.component';

@NgModule({
  imports: [
    ConversationRoutingModule,
    RouterOutlet,
    FormsModule,
    SharedModule,
    ChatContainerComponent,
    SidebarComponent,
  ],
  declarations: [ConversationComponent],
  exports: [ConversationComponent],
})
export class ConversationModule {}
