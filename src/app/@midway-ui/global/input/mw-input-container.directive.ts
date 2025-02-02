import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[mwInputContainer]',
  standalone: true,
})
export class MwInputContainerDirective {
  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.elementRef.nativeElement.classList.add('mw__input__container');
  }
}
