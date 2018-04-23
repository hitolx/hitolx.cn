import {Route, Routes} from "@angular/router";
import {headerRoute} from "./header/header.route";

const CONTENT_ROUTE = [
  headerRoute,
];

export const contentRoutes:Routes = [
  {
    path:'',
    children:CONTENT_ROUTE,
  }
];
