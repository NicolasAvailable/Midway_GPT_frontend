import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'c',
        pathMatch: 'full',
      },
      {
        path: 'c',
        loadChildren: () =>
          import('./modules/conversation/conversation.module').then(
            (m) => m.ConversationModule
          ),
      },
      {
        path: '**',
        redirectTo: 'c',
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
})
export class CoreRoutingModule {}
