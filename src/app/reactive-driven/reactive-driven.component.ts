import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.css'],
})
export class ReactiveDrivenComponent implements OnInit {
  myForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      uname: new FormControl('', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      readTerms: new FormControl(false),
    });
  }

  onSubmit() {
    this.myForm.reset();
  }

  accept() {
    this.myForm.setValue({
      uname: '',
      email: '',
      readTerms: true,
    });
  }
}
