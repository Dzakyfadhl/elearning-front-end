import { TeacherModel } from './teacher-model';

export class CourseAllResponse {
  id: string;
  code: string;
  typeName: string;
  capacity: string;
  periodStart: string;
  periodEnd: string;
  duration: number;
  teacher: TeacherModel;
  categoryName: string;
  isRegist: boolean;
  banner: string;
}
