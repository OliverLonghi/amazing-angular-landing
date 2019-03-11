import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[italic]'
})
export class ItalicDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.fontStyle = 'italic';
  }

}
