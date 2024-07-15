import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
  DBConfig,
  NgxIndexedDBModule,
  NgxIndexedDBService,
} from 'ngx-indexed-db';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const dbConfig: DBConfig = {
  name: 'employee',
  version: 1,
  objectStoresMeta: [
    {
      store: 'employee',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'role', keypath: 'role', options: { unique: false } },
        { name: 'dateFrom', keypath: 'dateFrom', options: { unique: false } },
        { name: 'dateTo', keypath: 'dateTo', options: { unique: false } },
      ],
    },
  ],
};
@NgModule({
  declarations: [ListComponent, AddEditComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // NgxIndexedDBModule.forRoot(dbConfig),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MatIconRegistry, NgxIndexedDBService],
})
export class EmployeeModule {}
