export class MessagePreCodeMapper {
  constructor(public value: string) {}

  public map(): string {
    const regex = /(```|``)([\s\S]+?)\1/g;
    const matches = this.value.matchAll(regex);

    if (!matches) return this.value;

    let modifiedMessage = this.value;

    for (const match of matches) {
      const textInBlock = match[2];
      const messageInBlock = `
            <pre>
              ${textInBlock}
            </pre>
          `;
      modifiedMessage = modifiedMessage.replace(match[0], messageInBlock);
    }

    return modifiedMessage;
  }
}
