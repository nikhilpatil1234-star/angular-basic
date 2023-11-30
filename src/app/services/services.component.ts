import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  //this is getting the service from the employee.service.ts
  public employee = [] as any;
  public filteredUsers: any;
  public errMsg: any;
  public searchType: any;
  public filterBy: any;
  private selectedId: any;
  constructor(
    private _employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this._employeeService.getEmplyoees().subscribe(
      (data) => (
        (this.employee = data), (this.filteredUsers = [...this.employee])
      ),
      (error) => (this.errMsg = error)
    );
  }
  filter() {
    this.filteredUsers = [
      ...this.employee.filter((employee: any) =>
        employee.title.includes(this.filterBy)
      ),
    ];
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') as string);
      this.selectedId = id;
    });
  }
  onSelect(x: any) {
    this.router.navigate(['/titles', x]);
    // this.router.navigate([x.id], { relativeTo: this.route });
  }
  isSelected(x: any) {
    return x.id === this.selectedId;
  }
}
