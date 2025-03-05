import { ProfileEntity } from '../../interfaces/profile-response.interfaces';
import { Profile } from '../profile.models';

export class ProfileMapper {
  constructor(private profileEntity: ProfileEntity) {}

  public map(): Profile {
    return new Profile(
      this.profileEntity.name,
      this.profileEntity.email,
      this.profileEntity.picture
    );
  }
}
