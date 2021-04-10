import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  employee$ = this.employeeService.employees;

  navigationExtras:NavigationExtras|any = {
    state: {
      value: null,
    }
  };

  constructor(
    private employeeService:EmployeesService,
    private router:Router
  ) {
    
  }

  ngOnInit(): void {
  }

  onGoToEdit( item:any ): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['/edit/edit-empoyee'], this.navigationExtras);
  }

  onGoToDetail( item:any ): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['/details/detail-employee'], this.navigationExtras);
  }

  async onDelete(id:string|any): Promise<void> {
    try {
      await this.employeeService.onDeleteEmployee(id);
      alert("Deleted");
    } catch (error) {
      console.log(error);    
    }
  }

}
