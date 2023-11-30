import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  // templateUrl: './interpolation.component.html',
  template: `<div>
    <h1>{{ name }}</h1>
    {{ name.length }}
    {{ name.toUpperCase() }}
    {{ greet() }}
    {{ url }}
    <input type="text" id="{{ binding }}" />
    <input
      type="button"
      value="clickhere to disable"
      [disabled]="isDisabled"
      (click)="toggleDisable()"
    />
  </div>`,

  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent {
  greet() {
    return 'how r u ' + this.name;
  }
  url: string = window.location.href;
  name: string = 'nikhil';
  binding: string = 'testId';
  isDisabled = false;
  toggleDisable() {
    return (this.isDisabled = true);
  }
}
