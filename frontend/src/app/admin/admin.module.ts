import { NgModule } from '@angular/core';
import {EchartComponent} from "./echart/echart.component";
import {RouterModule} from "@angular/router";
import {adminRoutes} from "./admin.route";
import {ShareModule} from "../share/share.module";

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(adminRoutes),
  ],
  declarations: [
    EchartComponent,
  ]
})
export class AdminModule { }
