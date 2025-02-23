import { signal, WritableSignal } from '@angular/core';

export abstract class Store<T> {
  protected state: WritableSignal<T>;

  constructor(state: T) {
    this.state = signal(state);
  }

  public get get() {
    return this.state.asReadonly();
  }

  public save(state: T) {
    this.state.set(state);
  }

  public update(state: Partial<T>) {
    this.state.update((oldState) => ({ ...oldState, ...state }));
  }
}
