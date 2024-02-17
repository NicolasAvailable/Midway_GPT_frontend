import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mw-succes-alert',
  templateUrl: './succes-alert.component.html',
  styleUrls: ['./succes-alert.component.css']
})
export class SuccesAlertComponent implements OnInit {

  @Input({required: true}) public text: string = 'Great!';

  constructor() { }

  ngOnInit() {
  }

}
