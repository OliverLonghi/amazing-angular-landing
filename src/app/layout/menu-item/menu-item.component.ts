import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less']
})
export class MenuItemComponent implements OnInit {

  @Input() go_to = '';

  constructor() { }

  ngOnInit() {
  }

}
