import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mw-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  @Input() public text: string = 'Warning';

  constructor() { }

  ngOnInit() {
  }

}
