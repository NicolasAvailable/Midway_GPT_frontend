export interface RegisterResponse {
  statusCode: number;
  message: string;
  data: RegisterData;
}

export interface RegisterData {
  token_type: string;
  access_token: string;
  user: RegisteredUser;
}

export interface RegisteredUser {
  id: string;
  name: string;
  email: string;
  createAt: Date;
  lastEdit: Date;
}
