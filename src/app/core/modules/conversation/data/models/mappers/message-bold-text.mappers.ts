export class MessageBoldTextMapper {
  constructor(public value: string) {}

  public map(): string {
    return this.value.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }
}
