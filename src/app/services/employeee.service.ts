import { Injectable, signal } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
interface User {
  id: string;
  name: string;
  age: number;
}
@Injectable({
  providedIn: 'root',
})
export class EmployeeeService {
  private _employees = signal<any[]>([]);
  employees = this._employees.asReadonly();
  constructor(private dbService: NgxIndexedDBService) {
    this.getUser()
  }
  addUser(newUser: User) {
    return this.dbService.add('employee', newUser);
    // this._employees.update((employees) => [newUser, ...employees]);
  }

  removeUser(id: string): void {
    // setting a new value created from the current
    this._employees.update((employees) => employees.filter((user) => user.id !== id));
  }

  getUser() {
    this.dbService.getAll('employee').subscribe((employees) => {
      console.log(employees);
      this._employees.set(employees);
    });
  }

  resetemployees(): void {
    // setting a new value, replacing the existing
    this._employees.set([]);
  }
}
