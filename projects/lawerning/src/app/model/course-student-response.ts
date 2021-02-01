import { TeacherModel } from './teacher-model';

export class CourseStudentResponse {
  id: string;
  code: string;
  name: string;
  capacity: string;
  periodStart: string;
  periodEnd: string;
  category: string;
  teacher: TeacherModel;
}
