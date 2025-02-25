import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[mwInput]',
  standalone: true,
})
export class MwInputDirective {
  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.elementRef.nativeElement.classList.add('mw__input-primary');
  }
}
