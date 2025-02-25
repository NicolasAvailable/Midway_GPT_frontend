import { Directive, ElementRef, Input } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[mwInputError]',
  standalone: true,
})
export class MwInputErrorDirective {
  @Input() ensureTouched = true;
  private lastSubcription: Subscription;

  @Input() set error(control: UntypedFormControl | UntypedFormGroup) {
    if (this.lastSubcription) {
      this.lastSubcription.unsubscribe();
    }
    this.lastSubcription = control?.statusChanges?.subscribe(() => {
      const className = 'mw__input__span__error--active';
      if (control!.invalid && (this.ensureTouched ? control!.touched : true)) {
        this.elementRef.nativeElement.classList.add(className);
      } else {
        this.elementRef.nativeElement.classList.remove(className);
      }
    });
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.elementRef.nativeElement.classList.add('mw__input__span__error');
    this.elementRef.nativeElement.classList.add('text-sm');
  }
}
