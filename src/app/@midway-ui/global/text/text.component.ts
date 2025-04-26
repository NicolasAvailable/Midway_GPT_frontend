import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css',
})
export class TextComponent {
  @Input() text = '';
  @Input() afterText = '';
  @Input() beforeText = '';
  @Input() size: 'title' | 'subtitle' | 'normal' | 'small' | 'extra-small' =
    'normal';
  @Input() classes = '';
  @Input() color = 'inherit';
}
