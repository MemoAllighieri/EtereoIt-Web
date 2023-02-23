import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { Router } from '@angular/router';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/header/header.component';
import { AboutusComponent } from './main/home/aboutus/aboutus.component';
import { Technologies1Component } from './main/home/technologies1/technologies1.component';
import { Technologies2Component } from './main/home/technologies2/technologies2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutusComponent,
    Technologies1Component,
    Technologies2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
