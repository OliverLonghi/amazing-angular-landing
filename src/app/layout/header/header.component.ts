import { Component, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  flying = false;

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) 
  doSomething(event) {
    if ( window.pageYOffset > 80 ) {
      this.flying = true;
    } else {      
      this.flying = false;
    }
  }

}
