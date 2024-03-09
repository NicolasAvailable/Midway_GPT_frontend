import { FormGroup } from "@angular/forms";
import { EMAIL_ERRORS, PASSWORD_ERRORS } from "../constants/errors.constants";


export class ErrorBeforeResponse {
    constructor(private form: FormGroup){}

    public getError(){
        if(this.form?.get('email')?.errors){
            return this.getErrorOfEmail()
        } else {
            return this.getErrorOfPassword()
        }
    }

    public getErrorOfEmail(){
        const errorKeys = Object.keys(this.form?.get('email')?.errors ?? {});
        const constantKeys = Object.keys(EMAIL_ERRORS);
        const matchedKey = constantKeys.find( (key, i) => errorKeys[i]?.includes(key));
        return matchedKey === 'require' ? EMAIL_ERRORS.require : EMAIL_ERRORS.pattern
    }

    public getErrorOfPassword(){
        const errorKeys = Object.keys(this.form?.get('password')?.errors ?? {});
        const constantKeys = Object.keys(PASSWORD_ERRORS);
        const matchedKey = constantKeys.find( (key, i) => errorKeys[i]?.includes(key));
        return matchedKey === 'require' ? PASSWORD_ERRORS.require : PASSWORD_ERRORS.pattern
    }
}