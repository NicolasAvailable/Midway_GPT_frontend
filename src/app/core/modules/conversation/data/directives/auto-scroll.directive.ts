import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { eventBus } from '../../../../../shared/base/event-bus.base';

@Directive({
  selector: '[autoScroll]',
  standalone: true,
})
export class AutoScrollDirective implements OnDestroy {
  private subscription: Subscription;
  constructor(private el: ElementRef) {
    this.subscription = eventBus.on('new.message').subscribe(() => {
      this.scrollToBottom();
    });
  }

  private scrollToBottom() {
    timer(500).subscribe(() => {
      const chat = this.el.nativeElement as HTMLDivElement;
      chat.scrollTop = chat.scrollHeight;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
