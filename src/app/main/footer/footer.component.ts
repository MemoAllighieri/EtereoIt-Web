import { Component } from '@angular/core';
import { Constants } from '../../../utils/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  facebook : string = Constants.facebook;
  instagram : string = Constants.instagram;
  linkd : string = Constants.linkd;
  footerLogoWhite : string = Constants.footerLogoWhite;
  twitter : string = Constants.twitter;
  urlFacebook : string = Constants.urlFacebook;
  urlInstagram : string = Constants.urlInstagram;
  mailEtereo : string = Constants.mailEtereo;
}
