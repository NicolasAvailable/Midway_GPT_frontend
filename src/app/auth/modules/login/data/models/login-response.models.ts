

export interface LoginResponse {
    data: Data;
    meta: Meta;
}

export interface Data {
    token_type:   string;
    access_token: string;
}

export interface Meta {
    code: number;
}