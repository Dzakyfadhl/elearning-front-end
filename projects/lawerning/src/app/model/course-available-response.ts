import { TeacherModel } from './teacher-model';

export class CourseAvailableResponse {
  id: string;
  code: string;
  typeName: string;
  capacity: string;
  periodStart: string;
  periodEnd: string;
  teacher: TeacherModel;
  categoryName: string;
  isRegist: boolean;
}
