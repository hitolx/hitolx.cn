import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import {AppRoutingModule} from "./app-routing.module";
import {ContentModule} from "./content/content.module";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
