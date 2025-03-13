export class MessageBackslashesMapper {
  constructor(public value: string) {}
  map(): string {
    this.value = this.value.replace(/\\([^tn])/g, '$1');
    this.value = this.value.replace(/\\t/g, '\t');
    this.value = this.value.replace(/\\n/g, '\n');
    return this.value;
  }
}
