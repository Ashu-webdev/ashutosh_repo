import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Team1Component } from './team1/team1.component';
import { Team2Component } from './team2/team2.component';
import { Team3Component } from './team3/team3.component';
import { Team4Component } from './team4/team4.component';
import { Team5Component } from './team5/team5.component';
import { Team6Component } from './team6/team6.component';
import { Team7Component } from './team7/team7.component';
import { Team8Component } from './team8/team8.component';
import { Team9Component } from './team9/team9.component';
import { Team10Component } from './team10/team10.component';
import { StaffModule } from './staff/staff.module';

@NgModule({
  declarations: [
    AppComponent,
    Team1Component,
    Team2Component,
    Team3Component,
    Team4Component,
    Team5Component,
    Team6Component,
    Team7Component,
    Team8Component,
    Team9Component,
    Team10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StaffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
