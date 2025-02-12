import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MaterialModule } from '../../../shared/modules/material.module';

@Component({
  selector: 'mw-sidebar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  protected rooms: string[] = [
    'room1 wdadasdasdasdasdasdasdasd',
    'room2adasdsadadasdasdasdadasd sadasdasd',
    'room3',
    'room4',
    'room5',
    'room6',
    'room7',
    'room8',
    'room9',
    'room10',
    'room11',
    'room12',
    'room13',
    'room14',
    'room15',
    'room16',
    'room17',
    'room18',
    'room19',
    'room20',
    'room21',
    'room22',
    'room23',
    'room24',
    'room25',
    'room26',
  ];
}
