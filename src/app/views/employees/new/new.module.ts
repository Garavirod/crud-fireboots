import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { EmployeeformModule } from 'src/app/shared/components/employeeform/employeeform.module';


@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    NewRoutingModule,
    EmployeeformModule,
  ]
})
export class NewModule { }
