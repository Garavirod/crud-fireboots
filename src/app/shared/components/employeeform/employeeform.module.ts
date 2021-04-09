import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeformComponent } from './employeeform.component';



@NgModule({
  declarations: [EmployeeformComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[EmployeeformComponent]
})
export class EmployeeformModule { }
