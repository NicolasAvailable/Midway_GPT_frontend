import { FormGroup } from '@angular/forms';
import { Adapter } from '../../../../../shared/models/adapter.models';
import { RegisterBody as IRegisterBody } from '../interface/register-body.interface';

export class RegisterBody extends Adapter<IRegisterBody> {
  constructor(private formGroup: FormGroup) {
    super();
  }
  public override adapt(): IRegisterBody {
    return {
      name: this.formGroup.get('name').value.trim(),
      email: this.formGroup.get('email').value.trim(),
      phone: 0,
      password: this.formGroup.get('password').value,
    };
  }
}
