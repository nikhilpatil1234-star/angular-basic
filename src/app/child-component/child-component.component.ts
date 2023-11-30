import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent {
  @Input('parentData') public name: any;
  @Output() public childEvent = new EventEmitter();
  // @Input() public parentData: any;
  fireEvent() {
    this.childEvent.emit('hey hii from child component');
  }
}
