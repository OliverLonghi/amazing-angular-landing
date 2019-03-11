import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[grey]'
})
export class GreyDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'grey';
  }

}
