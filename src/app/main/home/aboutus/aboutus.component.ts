import { Component, OnInit } from '@angular/core';
import { Constants } from '../../../../utils/constants';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent implements OnInit {

  home : string = Constants.home;
  aboutUs : string = Constants.aboutUs;
  iconSecurity : string = Constants.iconSecurity;
  iconSpeed : string = Constants.iconSpeed;
  iconSupport : string = Constants.iconSupport;

  ngOnInit(): void {
    let box = document.getElementById('BannerText');
    setTimeout(() => {
      box!.style.opacity = '1';
      box!.style.transition = '3s';
    }, 1000);
  }
}
