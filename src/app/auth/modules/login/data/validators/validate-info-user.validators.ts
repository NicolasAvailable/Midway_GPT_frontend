import { FormGroup } from "@angular/forms";


export class ValidatorLoginUser {
    constructor(private form: FormGroup){}

    public validate(){
        return this.form.get('email')!.invalid ||
        this.form.get('password')!.invalid;
    }
}