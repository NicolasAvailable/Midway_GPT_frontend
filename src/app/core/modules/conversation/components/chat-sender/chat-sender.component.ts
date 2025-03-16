import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MwInputDirective } from '../../../../../@midway-UI/global/input/mw-input.directive';
import { noWhitespaceValidator } from '../../../../../auth/modules/shared/data/validators/white-space.validators';
import { MaterialModule } from '../../../../../shared/modules/material.module';
import { RoomId } from '../../../room/data/interfaces/room-response.interfaces';
import { MessageService } from '../../data/services/message.service';

@Component({
  selector: 'mw-chat-sender',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, MwInputDirective],
  templateUrl: './chat-sender.component.html',
  styleUrl: './chat-sender.component.css',
})
export class ChatSenderComponent {
  @Input() roomId: RoomId;
  private formBuilder = inject(FormBuilder);
  private messageService = inject(MessageService);
  protected form = this.formBuilder.group({
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(5000),
        noWhitespaceValidator(),
      ],
    ],
  });

  public send() {
    console.log(this.form.invalid);
    if (this.form.invalid) return;
    const message = this.form.get('message')?.value.trim();
    this.messageService.send({
      roomId: this.roomId,
      model: 'gpt-4o',
      prompt: message,
    });
  }
}
