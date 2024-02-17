import { Component, OnInit } from '@angular/core';
import { TypeAlert } from '../data/models/type-alert.models';

@Component({
  selector: 'mw-alert',
  templateUrl: './mw-alert.component.html',
  styleUrls: ['./mw-alert.component.css']
})
export class MwAlertComponent implements OnInit {

  public typeAlert= TypeAlert;
  public alertText: string = '';
  public showTemplateAlert: boolean = false;
  public selectedAlert: TypeAlert = this.typeAlert.SUCCESS;

  constructor() { }

  ngOnInit() {
  }

  public showAlert(typeAler: TypeAlert, alertText: string){
    this.selectedAlert = typeAler;
    this.alertText = alertText;
    this.showTemplateAlert = true;
    setTimeout(() => {
    this.showTemplateAlert = false;
    }, 6000);
  }
}
