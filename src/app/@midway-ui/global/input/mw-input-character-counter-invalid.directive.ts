import { Directive, ElementRef, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Directive({
  selector: '[mwInputCharacterCounterInvalid]',
  standalone: true,
})
export class MwInputCharacterCounterInvalidDirective {
  @Input() set error(control: UntypedFormControl) {
    control?.statusChanges?.subscribe(() => {
      const className = 'mw__character__counter__error';
      const maxLengthError = control?.errors['maxlength'];
      if (maxLengthError) {
        console.log('colocó');
        this.elementRef.nativeElement.classList.add(className);
      } else {
        console.log('retiró');
        this.elementRef.nativeElement.classList.remove(className);
      }
    });
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {}
}
