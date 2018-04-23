import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {rootRoutes} from "./app.route";


@NgModule({
  imports:[
    RouterModule.forRoot(rootRoutes,{useHash:true}),
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule{

}
