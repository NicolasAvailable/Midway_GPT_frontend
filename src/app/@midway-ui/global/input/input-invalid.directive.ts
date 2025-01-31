import { Directive, ElementRef, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Directive({
  selector: '[inputInvalid]',
  standalone: true,
})
export class InputInvalidDirective {
  @Input() set error(control: UntypedFormControl) {
    control!.statusChanges.subscribe(() => {
      const className = 'mw__input__error';
      if (control.invalid) {
        this.elementRef.nativeElement.classList.add(className);
      } else {
        this.elementRef.nativeElement.classList.remove(className);
      }
    });
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {}
}
