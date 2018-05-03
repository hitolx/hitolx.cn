import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from "../share/share.module";
import {NavbarComponent} from "./navbar/navbar.component";
import {MainComponent} from "./main/main.component";
import {RouterModule} from "@angular/router";
import {layoutsRoutes} from "./layouts.route";

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(layoutsRoutes),
  ],
  declarations: [
    NavbarComponent,
    MainComponent,
  ]
})
export class LayoutsModule { }
