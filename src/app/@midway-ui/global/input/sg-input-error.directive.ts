import { Directive, ElementRef, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Directive({
  selector: '[sgInputError]',
  standalone: true,
})
export class SgInputErrorDirective {
  @Input() key: string | null = null;
  @Input() ensureTouched = true;
  @Input() set error(control: UntypedFormControl) {
    control!.statusChanges.subscribe(() => {
      const className = 'mw__input__span__error--active';
      if (
        control!.invalid &&
        this.isInvalidKey(control!) &&
        (this.ensureTouched ? control!.touched : true)
      ) {
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

  private isInvalidKey(control: UntypedFormControl) {
    if (!this.key) return true;
    return control.hasError(this.key);
  }
}
