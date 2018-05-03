import {Routes} from "@angular/router";
import {navbarRoute} from "./navbar/navbar.route";
import {mainRoute} from "./main/main.route";

const LAYOUTS_ROUTE = [
  navbarRoute,
  mainRoute,
];


export const layoutsRoutes:Routes = [
  {
    path:'',
    children:LAYOUTS_ROUTE,
  }
];
