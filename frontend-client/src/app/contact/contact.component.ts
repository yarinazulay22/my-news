import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public fullName:string = '';
  public phone:string = '';
  public email:string = '';
  public content:string = '';

  
  sendForm() {}
}
