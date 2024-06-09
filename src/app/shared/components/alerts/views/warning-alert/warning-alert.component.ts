import { Component, OnInit } from '@angular/core';
import { EventBus } from '../../../../base/event-bus.base';
import { TypeAlert } from '../../data/models/type-alert.models';
import { ToasterService } from '../../../../services/toaster/toaster.service';

@Component({
  selector: 'mw-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css'],
})
export class WarningAlertComponent implements OnInit {
  public text: string = 'Warning';

  constructor(private toasterService: ToasterService) {}

  ngOnInit() {
    this.getToast();
  }

  private getToast() {
    EventBus.getInstance()
      .on(TypeAlert.WARNING)
      .subscribe((id) => {
        const toastr = this.toasterService.getToaster(id);
        this.text = toastr!.message;
      });
  }
}
