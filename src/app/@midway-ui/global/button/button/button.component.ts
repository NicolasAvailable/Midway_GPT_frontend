import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mw-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      class="mw__button"
      [disabled]="isDisabled"
      [ngClass]="{ disabled: isDisabled }"
    >
      {{ text }}
    </button>
  `,
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() text: string;
  @Input() isDisabled: boolean;
}
