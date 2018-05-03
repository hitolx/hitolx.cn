import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

/**
 * 用外来的模块
 */

@NgModule({
  imports: [
  ],
  exports:[
    CommonModule,
    BrowserModule,
    FormsModule
  ]
})

export class SharedLibsModule{}
