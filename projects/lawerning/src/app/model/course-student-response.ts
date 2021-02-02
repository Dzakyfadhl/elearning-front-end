import { TeacherModel } from './teacher-model';

export class CourseStudentResponse {
  id: string;
  code: string;
  typeName: string;
  capacity: number;
  periodStart: Date;
  periodEnd: Date;
  categoryName: string;
  isCompleted: boolean;
  teacher: TeacherModel;
}
