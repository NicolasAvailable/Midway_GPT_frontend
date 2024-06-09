import { Component, OnInit } from '@angular/core';
import { ActiveToast } from 'ngx-toastr';
import { timer } from 'rxjs';
import { EventBus } from '../../../../base/event-bus.base';
import { ToasterService } from '../../../../services/toaster/toaster.service';
import { TypeAlert } from '../../data/models/type-alert.models';

@Component({
  selector: 'mw-succes-alert',
  templateUrl: './succes-alert.component.html',
  styleUrls: ['./succes-alert.component.css'],
})
export class SuccesAlertComponent implements OnInit {
  public text: string = 'Great!';

  constructor(private toasterService: ToasterService) {}

  ngOnInit() {
    this.getToast();
  }

  private getToast() {
    EventBus.getInstance()
      .on(TypeAlert.SUCCESS)
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
