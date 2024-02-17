import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mw-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})
export class ErrorAlertComponent implements OnInit {
  
  @Input() public text: string = 'Error!';

  constructor() { }

  ngOnInit() {
  }

}
