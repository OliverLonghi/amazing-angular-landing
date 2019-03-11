import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[white]'
})
export class WhiteDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'white';
  }

}
