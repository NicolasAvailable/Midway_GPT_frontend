import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { ConversationComponent } from './conversation.component';

const routes: Routes = [
  {
    path: '',
    component: ConversationComponent,
    children: [
      {
        path: ':id',
        component: ChatContainerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ConversationRoutingModule {}
