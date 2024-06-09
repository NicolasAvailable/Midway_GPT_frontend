import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../../../services/toaster/toaster.service';
import { EventBus } from '../../../../base/event-bus.base';
import { TypeAlert } from '../../data/models/type-alert.models';
import { ActiveToast } from 'ngx-toastr';
import { timer } from 'rxjs';

@Component({
  selector: 'mw-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css'],
})
export class ErrorAlertComponent implements OnInit {
  public text: string = 'Error!';

  constructor(private toasterService: ToasterService) {}

  ngOnInit() {
    this.getToast();
  }

  private getToast() {
    EventBus.getInstance()
      .on(TypeAlert.ERROR)
      .subscribe((id) => {
        const toastr = this.toasterService.getToaster(id);
        this.text = toastr!.message;
        this.close(toastr);
      });
  }

  private close(toastr: ActiveToast<any> | undefined) {
    timer(5000).subscribe(() => toastr!.toastRef.close());
  }
}
