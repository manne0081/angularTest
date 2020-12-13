import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainContentComponent } from './main-content/main-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'mc', component: MainContentComponent, 
        children: [
            // { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'employee', component: EmployeeListComponent },
            { path: 'employee/employee-add', component: EmployeeAddComponent },
            { path: 'user', component: UserComponent },
            { path: 'page2', component: Page2Component } 
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
