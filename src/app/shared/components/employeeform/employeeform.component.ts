import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/shared/models/employee.interface';
@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.scss']
})
export class EmployeeformComponent implements OnInit {

  formGroupEmployee:FormGroup;
  idEmployee = null;
  employee:Employee | undefined;

  constructor(
    private activeRoute:ActivatedRoute,
    private fb:FormBuilder
  ) { 
    this.formGroupEmployee = this.initFormGroup();
  }

  ngOnInit(): void {
    this.idEmployee = this.activeRoute.snapshot.params.id;
  }

  private initFormGroup():FormGroup{
    return this.fb.group({
      name:['',[
        Validators.required,
      ]],
      lastname:['',[
        Validators.required
      ]],
      email:['',[
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),        
      ]],
      date:['',[
        Validators.required
      ]]
    });
  }

  saveRegister(){
    console.log(this.formGroupEmployee.value);    
  }

}
