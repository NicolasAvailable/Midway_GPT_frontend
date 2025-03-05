export interface RoomActionResponse {
  statusCode: number;
  message: string;
  data: ProfileEntity;
}

export interface ProfileEntity {
  id: string;
  name: string;
  email: string;
  picture: string;
  phone: number;
  plan: number;
  createAt: Date;
  lastEdit: Date;
}

export type ProfileId = ProfileEntity['id'];
