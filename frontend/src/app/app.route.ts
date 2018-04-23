import {Route, Routes} from "@angular/router";
import {NavbarComponent} from "./layouts/navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {AdminModule} from "./admin/admin.module";


export const rootRoutes:Routes = [
  {
    path:'',
    component:NavbarComponent,
    outlet:'navbar'
  },
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'admin',
    loadChildren:'app/admin/admin.module#AdminModule'
  }
];
