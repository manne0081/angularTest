import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
    private employeeNumber = 100000;

    private employeeList: Employee[] = [
        new Employee(
            100001,
            'Daniel'),
        new Employee(
            100002,
            'Donald'),
        new Employee(
            100003,
            'Dagobert'),
    ];

    constructor() { }

    getAllEmployee() {
        return this.employeeList;
    }

    setEmployee(name: string): void {
        const pNumber = this.createEmployeeNumber();
        this.employeeList.push(new Employee(pNumber, name));
    }

    createEmployeeNumber() {
        const lastNumber = this.employeeList.length;
        const newNumber = this.employeeNumber + lastNumber + 1;
        return newNumber;
    }
}
