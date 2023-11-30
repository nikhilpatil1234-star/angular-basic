import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-name',
  templateUrl: './emp-name.component.html',
  styleUrls: ['./emp-name.component.css'],
})
export class EmpNameComponent implements OnInit {
  constructor(private _empName: EmployeeService) {}
  empName = [] as any;
  ngOnInit() {
    this._empName.getEmplyoees().subscribe((data) => (this.empName = data));
  }
}
