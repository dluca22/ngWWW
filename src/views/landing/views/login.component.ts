import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { isNil } from '@tools/functions';

@Component({
  selector: 'app-login',
  templateUrl: './login.template.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {


  @ViewChild('pwd') pwd: ElementRef;
  
  loginForm: FormGroup;
  submitted: boolean;
  invalidAuth = false;
  ngOnInit(){

  }


  inputEnter(event) {
    const name = event.target.name;
    if (isNil(name))
      return;
    if (isNil(this.loginForm.value[name]) || this.loginForm.value[name] == '')
      return;
    switch (name) {
      case 'user':
        this.pwd.nativeElement.focus();
        break;
      case 'pwd':
        this.doLogin();
        break;
    }
  }
  doLogin(){
    alert('to do')
  }
}