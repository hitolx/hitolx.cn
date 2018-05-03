import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import { IndexComponent } from './index/index.component';
import {ShareModule} from "./share/share.module";
import {LayoutsModule} from "./layouts/layouts.module";

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    AppRoutingModule,
    ShareModule,
    LayoutsModule,
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
