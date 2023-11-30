import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.css'],
})
export class PipesExamplesComponent {
  name = 'rakesh gowda patil';
  date = new Date();
  data = {
    firstName: 'koushik',
    lastName: 'niyogi',
  };
}
