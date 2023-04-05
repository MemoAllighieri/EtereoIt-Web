import { Constants } from '../../../utils/constants';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  headerLogoBlack: string = Constants.headerLogoBlack;
  formValidator: boolean = false;
  finalModal: boolean = false;
  principalModal: boolean = true;
  textTitle = '¿Como podemos ayudarte?';
  ocultButton = true;

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

  sendEmail() {
    if (this.registerForm.valid) {
      const email = this.registerForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http
        .post(
          'https://formspree.io/xknablda',
          { name: email.name, replyto: email.email, message: email.message },
          { headers: headers }
        )
        .subscribe((response) => {
          this.formValidator = false;
          this.finalModal = true;
          this.principalModal = false;
          this.textTitle = '';
          this.ocultButton = false;
        });
    } else {
      this.formValidator = true;
    }
  }
}
