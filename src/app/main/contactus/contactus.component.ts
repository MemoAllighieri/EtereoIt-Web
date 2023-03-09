import { Component } from '@angular/core';

import '../../../utils/smtp.js'; //path might change
declare let Email : any;

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
              {id: 6, value : "Desarrollo web"},
              {id: 7, value : "Otro"}];

  

  constructor() { }

  ngOnInit(): void {
  }
  SendEmail(){
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'memoallighieri17@gmail.com',
      Password : '708F13FA4D0DDDFF23D1AD548B51A04CDBD1',
      To : 'andre_0828@outlook.com',
      From : `memoallighieri17@gmail.com`,
      Subject : 'prueba',
      Body : `aaaaaaaaaaaaaaaaaaa`
    }).then(
      //message => alert(message)
      console.log("ok")
    );
  }

  // onSubmit(contactForm: NgForm) {
  //   if (contactForm.valid) {
  //     const email = contactForm.value;
  //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //     this.http.post('https://formspree.io/asdlf7asdf',
  //       { name: email.name, replyto: email.email, message: email.messages },
  //       { 'headers': headers }).subscribe(
  //         response => {
  //           console.log(response);
  //         }
  //       );
  //   }
  // }
   
}
