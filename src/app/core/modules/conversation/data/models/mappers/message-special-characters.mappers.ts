import { MessageSpecialCharactersBuilder } from '../builders/message-special-characters.builders';

export class MessageSpecialCharactersMappers {
  constructor(private value: string) {}

  public map() {
    return new MessageSpecialCharactersBuilder(this.value)
      .setPreCode()
      .setCode()
      .setBoldText()
      .setBackSlashes()
      .setListItems()
      .build();
  }
}
