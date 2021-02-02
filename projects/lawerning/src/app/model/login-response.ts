import { RoleModel } from './role-model';

export class LoginResponse {
  token: string;
  userId: string;
  userRoleId: string;
  username: string;
  photoId: string;
  role: RoleModel;
}
