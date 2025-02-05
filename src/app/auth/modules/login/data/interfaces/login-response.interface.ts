export interface LoginResponse {
  data: LoginData;
  meta: Meta;
}

export interface LoginData {
  token_type: string;
  access_token: string;
}

export interface Meta {
  code: number;
}
