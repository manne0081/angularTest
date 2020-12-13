import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeList: Employee[] = [
    new Employee(
        1,
        'Daniel'),
    new Employee(
        2,
        'Donald'),
    new Employee(
        3,
        'Dagobert'),
];

  constructor() { }

  getAllEmployee() {
    return this.employeeList;
  }

  setEmployee() {
    //this.employeeList.push;
  }
}
