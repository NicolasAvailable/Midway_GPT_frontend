import { UserId } from '../../../../../core/modules/profile/data/models/profile.models';
import { Adapter } from '../../../../../shared/models/adapter.models';

export class ForgotBodyAdapter extends Adapter<ForgotBody> {
  constructor(
    private readonly userId: UserId,
    private readonly password: string
  ) {
    super();
  }

  public override adapt(): ForgotBody {
    return {
      userId: this.userId,
      password: this.password,
    };
  }
}

interface ForgotBody {
  userId: UserId;
  password: string;
}
