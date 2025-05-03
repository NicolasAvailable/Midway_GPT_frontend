import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();
  @Input() excludeElement: HTMLElement | null = null;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    const clickedExcluded = this.excludeElement?.contains(targetElement);

    if (!clickedInside && !clickedExcluded) {
      this.clickOutside.emit();
    }
  }
}
