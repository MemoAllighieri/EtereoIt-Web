import { Component } from '@angular/core';
import { Constants } from '../../../../utils/constants';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent {
  appMovil : string = Constants.appMovil;
  chatbot : string = Constants.chatbot;
  ecommerce : string = Constants.ecommerce;
  landingPage : string = Constants.landingPage;
  services : string = Constants.services;
  webPage : string = Constants.webPage;
}
