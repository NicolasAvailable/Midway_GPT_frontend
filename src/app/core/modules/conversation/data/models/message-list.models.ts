import { Message } from './message.models';

export class MessageList {
  constructor(public values: Message[] = []) {}

  public add(value: Message) {
    this.values.push(value);
  }
}
