import { ReplaySubject, Observable, Subject } from 'rxjs';

export class EventBus {
  private events = new Map<string, Subject<any>>();
  private static instance: EventBus;

  static getInstance(): EventBus {
    if (!this.instance) {
      this.instance = new EventBus();
    }
    return this.instance;
  }

  public emit(event: string, value?: any) {
    if (!this.events.has(event)) {
      this.events.set(event, new ReplaySubject(value));
    }
    this.events.get(event)!.next(value);
  }

  public on(event: string): Observable<any> {
    if (!this.events.has(event)) {
      this.events.set(event, new ReplaySubject());
    }
    return this.events.get(event)!.asObservable();
  }
}
