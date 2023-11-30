import { Component } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css'],
})
export class ClassbindingComponent {
  successClass = 'text-success';
  hasError = true;
  isSpecial = true;
  name1 = 'rakesh';
  onChangeName(event: any) {
    console.log('event', event);
    return (this.name1 = 'koushik');
  }
  messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };
  toggle() {
    return (this.hasError = false);
  }
}
