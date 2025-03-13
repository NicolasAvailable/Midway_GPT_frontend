import { Pipe, PipeTransform } from '@angular/core';
import { MessageList } from '../models/message-list.models';

@Pipe({
  name: 'sortByRole',
  standalone: true,
})
export class SortByRolePipe implements PipeTransform {
  transform(messageList: MessageList): any {
    messageList.values.sort((a, b) => {
      if (a.role === 'user' && b.role === 'assistant') {
        return -1;
      }
      if (a.role === 'assistant' && b.role === 'user') {
        return 1;
      }
      return 0;
    });

    return messageList.values;
  }
}
