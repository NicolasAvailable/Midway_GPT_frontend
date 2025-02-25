import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[autoFocus]',
  standalone: true,
})
export class AutoFocusDirective implements AfterViewInit {
  @Input() autoFocus: boolean = true;
  @Input() activeFocus: number;

  constructor(private el: ElementRef) {
    console.log('init');
  }

  ngAfterViewInit(): void {
    if (!this.autoFocus) return;
    this.focus();
  }

  private focus() {
    const input = this.el.nativeElement as HTMLInputElement;
    input.focus();
  }
}
