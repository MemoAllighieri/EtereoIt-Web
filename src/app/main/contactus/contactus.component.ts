import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import '../../../utils/smtp.js'; //path might change
declare let Email: any;

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent {
  formValidator: boolean = false;

  registerForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(1)]],
    contact: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    service: [1, Validators.required],
    message: ['', [Validators.required, Validators.minLength(1)]],
  });

  Services = [
    { id: 1, value: 'Ecommerce' },
    { id: 2, value: 'Aplicación móvil' },
    { id: 3, value: 'Chatbot' },
    { id: 4, value: 'Páginas web' },
    { id: 5, value: 'Aplicación móvil' },
    { id: 6, value: 'Desarrollo web' },
    { id: 7, value: 'Otro' },
  ];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {}

  cleanForm() {
    this.registerForm.patchValue({
      name: '',
      contact: '',
      email: '',
      service: 1,
      message: '',
    });
    this.finalModal = false;
    this.principalModal = true;
    this.textTitle = '¿Como podemos ayudarte?';
    this.ocultButton = true;
  }

  finalModal: boolean = false;
  principalModal: boolean = true;
  textTitle = '¿Como podemos ayudarte?';
  ocultButton = true;

  sendEmail() {
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      this.formValidator = false;
      this.finalModal = true;
      this.principalModal = false;
      this.textTitle = '';
      this.ocultButton = false;
      // const email = this.registerForm.value;
      // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      // this.http.post('https://formspree.io/xknablda'
      //   ,{ name: email.fullname, replyto: email.email, message: email.menssage }
      //   ,{ 'headers': headers }).subscribe(
      //   response => {
      //     this.closeDialog();
      //     this.envioCorrecto.nativeElement.showModal();
      //   }
      // );
    } else {
      this.formValidator = true;
    }
  }
}
