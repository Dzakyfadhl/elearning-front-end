import { UserModel } from './user-model';

export class DetailModuleForumResponse {
  id: string;
  code: string;
  content: string;
  messageTime: string;
  user: UserModel;
}
