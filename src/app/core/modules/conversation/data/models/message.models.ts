export class Message {
  constructor(
    public role: string = '',
    public content: string = '',
    public createdAt: string
  ) {}
}
