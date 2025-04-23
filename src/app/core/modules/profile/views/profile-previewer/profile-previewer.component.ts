import { Component, inject, WritableSignal } from '@angular/core';
import { AvatarComponent } from '@midway-UI/global/avatar/avatar.component';
import { MaterialModule } from '../../../../../shared/modules/material.module';
import { Profile } from '../../data/models/profile.models';
import { ProfileDialogService } from '../../data/services/profile-dialog.service';
import { ProfileStore } from '../../data/store/profile.store';

@Component({
  selector: 'mw-profile-previewer',
  standalone: true,
  imports: [MaterialModule, AvatarComponent],
  templateUrl: './profile-previewer.component.html',
  styleUrl: './profile-previewer.component.css',
})
export class ProfilePreviewerComponent {
  private profileStore = inject(ProfileStore);
  protected profileDialog = inject(ProfileDialogService);
  protected profile: WritableSignal<Profile> = this.profileStore.get().profile;
  protected isLoading: WritableSignal<boolean> =
    this.profileStore.get().isLoading;
}
