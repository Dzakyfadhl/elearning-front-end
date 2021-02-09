import { Gender } from "../gender";

export class UpdateTeacherRequest {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  phone: string;
  titleDegree: string;
  gender: Gender;
  updatedBy: string;
}