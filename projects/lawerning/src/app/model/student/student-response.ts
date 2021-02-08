import { Gender } from '../gender';

export class StudentResponse {
  id: string;
  code: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: Gender;
  idPhoto: string;
  createdAt: string;
}
