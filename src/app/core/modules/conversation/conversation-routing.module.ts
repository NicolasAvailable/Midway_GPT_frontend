import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationComponent } from './conversation.component';

const routes: Routes = [
  {
    path: '',
    component: ConversationComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/chat-creator/chat-creator.component').then(
            (m) => m.ChatCreatorComponent
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./components/chat-container/chat-container.component').then(
            (m) => m.ChatContainerComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ConversationRoutingModule {}
