import { Gender } from '../gender';

export class StudentUpdateRequest {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  phone: string;
  gender: Gender;
  updatedBy: string;
}
