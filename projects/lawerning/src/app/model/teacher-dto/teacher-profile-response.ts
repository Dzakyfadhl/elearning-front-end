import { ExperienceModel } from '../experience-model';
import { TeacherModel } from '../teacher-model';

export class TeacherProfileResponse {
  teacher: TeacherModel;
  experiences: ExperienceModel[];
}
