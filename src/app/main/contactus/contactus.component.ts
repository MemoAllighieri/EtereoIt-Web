import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  
  Services = [{id: 1, value : "Ecommerce"},
              {id: 2, value : "Aplicación móvil"},
              {id: 3, value : "Chatbot"},
              {id: 4, value : "Páginas web"},
              {id: 5, value : "Aplicación móvil"},
              {id: 6, value : "Desarrollo web"}];

  constructor() { }

  ngOnInit(): void {
  }
}
