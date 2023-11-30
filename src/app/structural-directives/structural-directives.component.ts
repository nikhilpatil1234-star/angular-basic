import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css'],
})
export class StructuralDirectivesComponent {
  ngIfDisplayName = true;
  color = 'red';
  colors = ['red', 'pink', 'black', 'fox'];
}
