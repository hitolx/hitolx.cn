import {Route, Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";


export const rootRoutes:Routes = [
  {
    path:'',
    component:IndexComponent,
  },
  {
    path:'admin',
    loadChildren:'app/admin/admin.module#AdminModule'
  }
];
