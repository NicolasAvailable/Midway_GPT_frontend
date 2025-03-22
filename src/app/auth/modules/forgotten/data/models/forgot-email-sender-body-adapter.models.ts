import { Adapter } from '../../../../../shared/models/adapter.models';

export class ForgotEmailSenderBodyAdapter extends Adapter<ForgotEmailSenderBody> {
  constructor(public email: string = '') {
    super();
  }

  public override adapt(): ForgotEmailSenderBody {
    return {
      email: this.email,
      domain: 'http://localhost:4200',
    };
  }
}

interface ForgotEmailSenderBody {
  email: string;
  domain: string;
}
