import { Gender } from "../gender";

export class UpdateTeacherRequest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  titleDegree: string;
  gender: Gender;
  updatedBy: string;
}