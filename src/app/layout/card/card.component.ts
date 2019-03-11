import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  
  @Input() subtitle = '';

  @Input() legend = '';

  @Input() image = '';

  constructor() { }

  ngOnInit() {
  }

}
