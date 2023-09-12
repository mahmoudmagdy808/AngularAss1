import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private titleService: Title) {
    titleService.setTitle('Contact')
  }
  flagName: boolean = false;
  flagAge: boolean = false;
  flagEmail: boolean = false;
  flagPassword: boolean = false;
  userNameInput: any
  userAgeInput: any
  userEmailInput: any
  userPasswordInput: any
  flag: string = '';

  showNameLabel(event: any) {
    if (event.target.value.length > 0) {
      this.flagName = true;
    }
    else {
      this.flagName = false;
    }
  }
  showAgeLabel(event: any) {
    if (event.target.value.length > 0) {
      this.flagAge = true;
    }
    else {
      this.flagAge = false;
    }
  }
  showEmailLabel(event: any) {
    if (event.target.value.length > 0) {
      this.flagEmail = true;
    }
    else {
      this.flagEmail = false;
    }
  }
  showPasswordLabel(event: any) {
    if (event.target.value.length > 0) {
      this.flagPassword = true;
    }
    else {
      this.flagPassword = false;
    }
  }

}

