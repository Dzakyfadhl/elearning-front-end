import { Gender } from '../gender';

export class TeacherForAdminDTO {
  id: string;
  code: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: Gender;
  titleDegree: string;
  idPhoto: string;
  createdAt: string;
  active: boolean;
}
