import { Component, effect } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeeService } from '../../services/employeee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  currentemployee: any;
  prevemployee: any;
  constructor(
    private router: Router,
    private employeeeService: EmployeeeService
  ) {
    effect(
      () => (
        (this.currentemployee = this.employeeeService
          .employees()
          .filter((item) => !item.dateTo)),
        (this.prevemployee = this.employeeeService
          .employees()
          .filter((item) => item.dateTo && item.dateTo.trim() !== ''))
      )
    );
  }
  addEmp() {
    this.router.navigate(['/employee/add-edit']);
  }
}
