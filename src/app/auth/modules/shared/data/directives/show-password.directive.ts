import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[onShowPassword]',
  standalone: true,
})
export class ShowPasswordDirective {
  @Input() set showPassword(show: boolean) {
    const input = this.el.nativeElement as HTMLInputElement;
    input.type = show ? 'text' : 'password';
  }
  constructor(private el: ElementRef) {}
}
