import { MessageBackslashesMapper } from '../mappers/message-backslashes.mappers';
import { MessageBoldTextMapper } from '../mappers/message-bold-text.mappers';
import { MessageCodeMapper } from '../mappers/message-code.mappers';
import { MessageListItemsMappers } from '../mappers/message-list-items.mappers';
import { MessagePreCodeMapper } from '../mappers/message-pre-code.mappers';

export class MessageSpecialCharactersBuilder {
  constructor(private value: string) {}

  public setBoldText() {
    this.value = new MessageBoldTextMapper(this.value).map();
    return this;
  }

  public setPreCode() {
    this.value = new MessagePreCodeMapper(this.value).map();
    return this;
  }

  public setCode() {
    this.value = new MessageCodeMapper(this.value).map();
    return this;
  }

  public setBackSlashes() {
    this.value = new MessageBackslashesMapper(this.value).map();
    return this;
  }

  public setListItems() {
    this.value = new MessageListItemsMappers(this.value).map();
    return this;
  }

  public build() {
    return this.value;
  }
}
