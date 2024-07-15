import { Component, ViewChild } from '@angular/core';
import { registerCustomIcons } from '../../utils/util';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCalendar, MatDatepicker } from '@angular/material/datepicker';
import { CustomDateHeaderComponent } from '../../shared/custom-date-header/custom-date-header.component';
import { EmployeeeService } from '../../services/employeee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss',
})
export class AddEditComponent {
  customHeader = CustomDateHeaderComponent;
  employeeForm: FormGroup;
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private employeeeService: EmployeeeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      'user-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/user-icon.svg'
      )
    );
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      dateFrom: ['', Validators.required],
      dateTo: [''],
    });
  }

  addEmployee() {
    console.log(this.employeeForm);
    this.employeeeService.addUser(this.employeeForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/employee/list']);
    });
  }
  noDate(formName: string) {
    this.employeeForm.get(formName)?.setValue('NO Date');
  }
}
