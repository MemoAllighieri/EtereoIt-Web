import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { Router } from '@angular/router';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/header/header.component';
import { AboutusComponent } from './main/home/aboutus/aboutus.component';
import { TechnologiesComponent } from './main/home/technologies/technologies.component';
import { OurservicesComponent } from './main/home/ourservices/ourservices.component';
import { OurteamComponent } from './main/home/ourteam/ourteam.component';
import { MissionvisionComponent } from './main/home/missionvision/missionvision.component';
import { ContactusComponent } from './main/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutusComponent,
    TechnologiesComponent,
    OurservicesComponent,
    OurteamComponent,
    MissionvisionComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
