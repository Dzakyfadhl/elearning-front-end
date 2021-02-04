import { Gender } from '../gender';

export class TeacherForAdminDTO {
  id: string;
  code: string;
  phone: string;
  username: string;
  gender: Gender;
  isActive: boolean;
  version: number;
  firstName: string;
  lastName: string;
}
