import {Route, Routes} from "@angular/router";
import {echartRoute} from "./echart/echart.route";

const ADMIN_ROUTE = [
  echartRoute,
];

export const adminRoutes:Routes = [
  {
    path:'',
    children:ADMIN_ROUTE,
  }
];
