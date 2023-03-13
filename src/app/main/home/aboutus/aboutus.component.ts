import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent implements OnInit {
  ngOnInit(): void {
    let box = document.getElementById('BannerText');
    setTimeout(() => {
      box!.style.opacity = '1';
      box!.style.transition = '3s';
    }, 1000);
  }
}
