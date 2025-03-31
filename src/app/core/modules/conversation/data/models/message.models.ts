export class Message {
  constructor(
    public id: string = '',
    public role: string = '',
    public content: string = '',
    public createdAt: Date = new Date(),
    public hasError: boolean = false,
  ) {}
}
