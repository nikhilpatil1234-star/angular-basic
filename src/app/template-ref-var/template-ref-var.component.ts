import { Component } from '@angular/core';

@Component({
  selector: 'app-template-ref-var',
  templateUrl: './template-ref-var.component.html',
  styleUrls: ['./template-ref-var.component.css'],
})
export class TemplateRefVarComponent {
  logMessage(value: string) {
    console.log('value', value);
  }
}
