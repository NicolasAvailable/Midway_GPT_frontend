import { Role } from '../interfaces/message-getter-response.interfaces';

export class Message {
  constructor(
    public id: string = '',
    public role: Role = null,
    public content: string = '',
    public createdAt: Date = new Date(),
    public hasError: boolean = false
  ) {}
}
