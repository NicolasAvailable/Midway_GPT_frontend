import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitNameAvatar',
  standalone: true,
})
export class SplitNameAvatarPipe implements PipeTransform {
  transform(name: string): unknown {
    return name.charAt(0);
  }
}
