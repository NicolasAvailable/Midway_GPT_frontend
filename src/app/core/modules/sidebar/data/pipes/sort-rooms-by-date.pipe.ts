import { Pipe, type PipeTransform } from '@angular/core';
import { Room } from '../models/room.models';

@Pipe({
  name: 'sortRoomsByDate',
  standalone: true,
})
export class SortRoomsByDatePipe implements PipeTransform {
  transform(rooms: Room[] | null): Room[] {
    if (!rooms || rooms.length === 0) return [];

    return [...rooms]
      .filter((room) => room.createdAt) // Eliminar valores nulos o indefinidos
      .sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();

        if (isNaN(dateA) || isNaN(dateB)) {
          console.warn('Fecha inválida detectada:', a.createdAt, b.createdAt);
          return 0;
        }

        return dateB - dateA; // Orden descendente (más reciente primero)
      });
  }
}
