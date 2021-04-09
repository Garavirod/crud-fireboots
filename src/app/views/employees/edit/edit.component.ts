import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formGroupEmployee:FormGroup;
  idEmployee = null;

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
    return this.fb.group({});
  }

  saveRegister(){
    
  }

}
