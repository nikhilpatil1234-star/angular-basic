import { Component } from '@angular/core';

@Component({
  selector: '[app-test1]',
  templateUrl: './test1.component.html',
  // template: `<div>hello </div>`,
  // styleUrls: ['./test1.component.css'],
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class Test1Component {}
