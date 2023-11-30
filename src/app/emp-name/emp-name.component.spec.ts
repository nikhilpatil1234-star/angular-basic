import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpNameComponent } from './emp-name.component';

describe('EmpNameComponent', () => {
  let component: EmpNameComponent;
  let fixture: ComponentFixture<EmpNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpNameComponent]
    });
    fixture = TestBed.createComponent(EmpNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
