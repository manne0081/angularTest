import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
    selector: 'app-employee-add',
    templateUrl: './employee-add.component.html',
    styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
    name = '';
    errorMessage = '';
    inputError = true;

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit(): void {
    }

    onClickSave(): void {
        if (this.name !== '') {
            this.errorMessage = '';
            this.employeeService.setEmployee(this.name);
        } else {
            this.errorMessage = 'Feld ohne Inhalt';
        }
    }

    clearErrorMessage(event) {
        if (event.key === 'Enter') {
            console.log(event);
            this.onClickSave();
        } else {
            this.errorMessage = '';
        }
    }

}
