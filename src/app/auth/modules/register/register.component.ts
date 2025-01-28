import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  protected showPassword: boolean = false;
  constructor() {}

  ngOnInit() {}
}
