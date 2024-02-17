
interface ErrorType {
    require: string;
    pattern?: string
}

export const EMAIL_ERRORS: ErrorType = {
    require: 'The email is required',
    pattern: 'Enter a valid email'
}

export const PASSWORD_ERRORS: ErrorType = {
    require: 'The password is required',
}