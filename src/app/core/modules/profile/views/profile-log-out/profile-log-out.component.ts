import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertComponent } from '../../../../../shared/components/alert/alert.component';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'mw-profile-log-out',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './profile-log-out.component.html',
  styleUrl: './profile-log-out.component.css',
})
export class ProfileLogOutComponent {
  protected dialogRef = inject(MatDialogRef<ProfileLogOutComponent>);
  protected profileService = inject(ProfileService);
}
