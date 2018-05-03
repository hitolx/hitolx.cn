import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {CommunalService} from "./service/communal.service";
import {FormsModule} from "@angular/forms";
import {SharedLibsModule} from "./shared-libs.module";

@NgModule({
  imports: [
    SharedLibsModule,

  ],
  declarations: [],
  providers:[
    {
      provide:LocationStrategy,
      useClass:HashLocationStrategy,
    },
    CommunalService,
  ],
  exports:[
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedLibsModule,
  ]
})
export class ShareModule { }
