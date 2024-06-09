import { Injectable } from '@angular/core';
import { ErrorMiwday } from '../../../../../../shared/models/error-midway.models';

@Injectable({
  providedIn: 'root',
})
export class LoginErrorService extends ErrorMiwday {
  override showError(code: number): void {}

  constructor() {
    super();
  }
}
