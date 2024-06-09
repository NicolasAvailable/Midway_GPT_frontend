import { Observable, of } from 'rxjs';
import { ErrorMiwday } from './error-midway.models';

export abstract class Runner<T> {
  constructor(private errorService: ErrorMiwday) {}

  public run(): Observable<T | null> {
    try {
      const template = this.create();
      return of(template);
    } catch (error: any) {
      this.errorService.showError(error.code);
    }
    return of(null);
  }

  protected abstract create(): T;
}
