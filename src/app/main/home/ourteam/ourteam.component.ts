import { Component } from '@angular/core';
import { Constants } from '../../../../utils/constants';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent {
  ourTeam : string = Constants.ourTeam;
  aboutUs : string = Constants.aboutUs;
}
