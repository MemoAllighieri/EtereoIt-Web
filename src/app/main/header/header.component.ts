import { Component } from '@angular/core';
import { Constants } from '../../../utils/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerLogoBlack : string = Constants.headerLogoBlack;
}
