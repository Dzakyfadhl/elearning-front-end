import { ExperiencesModel } from './experiences-model';
import { TeacherModel } from './teacher-model';

export class TeacherProfileResponse {
  teacher: TeacherModel;
  experiences: ExperiencesModel[];
}
