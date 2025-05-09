import { Message } from './message.models';

export class MessageList {
  constructor(public values: Message[] = []) {}

  public add(value: Message) {
    this.values.push(value);
  }

  public remove(id: string) {
    this.values = this.values.filter((message) => message.id !== id);
  }
}
