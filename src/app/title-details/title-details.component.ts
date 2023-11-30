import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-title-details',
  templateUrl: './title-details.component.html',
  styleUrls: ['./title-details.component.css'],
})
export class TitleDetailsComponent implements OnInit {
  public titleId: any;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    // this.titleId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') as string);
      this.titleId = id;
    });
  }
  goPrevious() {
    let previousId = this.titleId - 1;
    this.router.navigate(['/titles', previousId]);
  }
  goNext() {
    let NextId = this.titleId + 1;
    this.router.navigate(['/titles', NextId]);
  }
  goToDepartment() {
    let selectedId = this.titleId ? this.titleId : null;
    this.router.navigate(['/titles', { id: selectedId }]);
    // this.router.navigate([
    //   '../',
    //   { id: selectedId.id },
    //   { relativeTo: this.route },
    // ]);
  }
  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
  // public _particularId = [] as any;
  // constructor(private _employeeService: EmployeeService) {}
  // ngOnInit() {
  //   this._employeeService
  //     .getEmplyooId()
  //     .subscribe((data: any) => console.log('data', data));
  // }
}
