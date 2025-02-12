import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ConversationComponent } from './conversation.component';

const routes: Routes = [
  {
    path: '',
    component: ConversationComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SidebarComponent,
  ],
  declarations: [ConversationComponent],
  exports: [ConversationComponent],
})
export class ConversationModule {}
