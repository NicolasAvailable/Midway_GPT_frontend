import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ButtonComponent } from '../../../@midway-UI/global/button/button.component';

@Component({
  selector: 'mw-alert',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() title: string = '¿Estas seguro de eliminar este asistente?';
  @Input() message: string = 'Este elemento se eliminará permanentemente';

  @Output() cancel = new EventEmitter();
  @Output() confirm = new EventEmitter();
}
