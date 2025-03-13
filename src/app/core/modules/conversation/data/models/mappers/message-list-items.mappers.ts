export class MessageListItemsMappers {
  constructor(private value: string) {}
  public map() {
    this.value = this.value.replace(/(\d+)\./g, '<br><br><strong>$1.</strong>');
    this.value = this.value.replace(/^(?:-|\*|\+|•)\s+/gm, '- ');
    return this.value;
  }
}
