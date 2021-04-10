import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Employee } from 'src/app/shared/models/employee.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  navigationExtras: NavigationExtras|any = {
    state:{
      value:null,
    }
  }

  employee:Employee|undefined;
  constructor( private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if(typeof this.employee === 'undefined'){
      // Redirect      
      this.router.navigate(['list']);
    }
  }

  onGoToList():void{
    this.navigationExtras.state.value = this.employee;
    this.router.navigate(['list'], this.navigationExtras);
  }

  onGoToEdit( item:any ): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['/edit/edit-empoyee'], this.navigationExtras);
  }

}
