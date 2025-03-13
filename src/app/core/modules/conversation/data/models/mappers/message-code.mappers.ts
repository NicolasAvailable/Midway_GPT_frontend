export class MessageCodeMapper {
  constructor(public value: string) {}

  public map(): string {
    if (this.value?.includes('`')) {
      const regex = /(<pre>.*?<\/pre>)|(`[^`]+`)/gs;
      const matches = this.value.matchAll(regex);

      let modifiedMessage = '';
      let lastIndex = 0;

      for (const match of matches) {
        const isPreTag = match[1] !== undefined;
        const codeSnippet = match[2];

        if (!isPreTag && codeSnippet) {
          modifiedMessage += this.value.substring(lastIndex, match.index);
          modifiedMessage += `<code>${codeSnippet.slice(1, -1)}</code>`;
          lastIndex = match.index + match[0].length;
        }
      }

      modifiedMessage += this.value.substring(lastIndex);

      return modifiedMessage || this.value;
    } else {
      return this.value;
    }
  }
}
