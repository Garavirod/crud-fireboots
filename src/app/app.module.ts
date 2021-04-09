import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { EmployeeformModule } from './shared/components/employeeform/employeeform.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    EmployeeformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
