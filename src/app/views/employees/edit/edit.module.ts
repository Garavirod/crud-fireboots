import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { EmployeeformModule } from 'src/app/shared/components/employeeform/employeeform.module';


@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,    
    EmployeeformModule,
  ]
})
export class EditModule { }
