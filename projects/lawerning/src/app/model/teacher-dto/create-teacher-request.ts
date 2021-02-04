import { Gender } from '../gender';

export class CreateTeacherRequest {
  code: string;
  firstName: string;
  lastName: string;
  phone: string;
  gender: Gender;
  username: string;
  password: string;
  email: string;
  createdBy: string;
  titleDegree: string;
}
