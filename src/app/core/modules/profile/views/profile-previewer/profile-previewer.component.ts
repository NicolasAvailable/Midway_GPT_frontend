import { Component } from '@angular/core';
import { AvatarComponent } from '../../../../../@midway-UI/global/avatar/avatar.component';
import { MaterialModule } from '../../../../../shared/modules/material.module';

@Component({
  selector: 'mw-profile-previewer',
  standalone: true,
  imports: [MaterialModule, AvatarComponent],
  templateUrl: './profile-previewer.component.html',
  styleUrl: './profile-previewer.component.css',
})
export class ProfilePreviewerComponent {}
