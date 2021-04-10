import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/models/employee.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees:Observable<Employee[]>;
  
  private employeescollection: AngularFirestoreCollection<Employee>;

  constructor(private readonly afs:AngularFirestore) { 
    this.employeescollection = afs.collection<Employee>('employees');
    /* Get all employees and asigned to employees */
    this.employees = this.setEmployees();    
  }

  onDeleteEmployee(id:string):Promise<void>{
    return new Promise( async (resolve,reject) => {
      try {
        const result = this.employeescollection.doc(id).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  onSaveEmployee(employee:Employee, empId:string|null):Promise<void>{
    return new Promise( async (resolve,reject) => {
      try {
        const id:string = empId || this.afs.createId();
        const data:any = { id, ...employee };
        // Creates or override a document
        const result = await this.employeescollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  private setEmployees():Observable<Employee[]>{
    return this.employeescollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Employee))
    )    
  }

}
