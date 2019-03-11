import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[black]'
})
export class BlackDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = '#4c3d54';
  }

}
