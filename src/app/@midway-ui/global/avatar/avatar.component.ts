import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SplitNameAvatarPipe } from './split-name-avatar.pipe';

@Component({
  selector: 'mw-avatar',
  standalone: true,
  imports: [NgClass, SplitNameAvatarPipe],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
})
export class AvatarComponent {
  @Input() url: string = '';
  @Input() name: string = '';
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
}
