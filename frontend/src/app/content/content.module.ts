import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";
import {contentRoutes} from "./content.route";

@NgModule({
  imports: [
    RouterModule.forChild(contentRoutes),
  ],
  declarations: [
    HeaderComponent,
  ]
})
export class ContentModule { }
