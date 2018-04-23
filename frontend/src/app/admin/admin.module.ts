import { NgModule } from '@angular/core';
import {EchartComponent} from "./echart/echart.component";
import {RouterModule} from "@angular/router";
import {adminRoutes} from "./admin.route";

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
  ],
  declarations: [
    EchartComponent,
  ]
})
export class AdminModule { }
