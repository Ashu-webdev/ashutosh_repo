import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Staff1Component } from './staff1/staff1.component';
import { Staff2Component } from './staff2/staff2.component';



@NgModule({
  declarations: [
    Staff1Component,
    Staff2Component
  ],
  imports: [
    CommonModule
  ]
})
export class StaffModule { }
