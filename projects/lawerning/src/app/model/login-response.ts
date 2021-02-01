import { RoleModel } from './role-model';

export class LoginResponse {
  token: string;
  userId: string;
  username: string;
  role: RoleModel;
}
