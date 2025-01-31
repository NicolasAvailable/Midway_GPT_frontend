import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[sgInputContainer]',
  standalone: true,
})
export class SgInputContainerDirective {
  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.elementRef.nativeElement.classList.add('mw__input__container');
  }
}
