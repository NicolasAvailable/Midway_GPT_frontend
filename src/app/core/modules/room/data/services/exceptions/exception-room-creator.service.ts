import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root',
})
export class ExceptionRoomCreatorService {
  constructor() {}

  public throw() {
    toast.dismiss();
    toast.error('Error!');
    throw new Error('Error!');
  }
}
