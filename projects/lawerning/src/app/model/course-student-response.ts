import { TeacherModel } from './teacher-model';

export class CourseStudentResponse {
  id: string;
  code: string;
  typeName: string;
<<<<<<< Updated upstream
  capacity: number;
  periodStart: Date;
  periodEnd: Date;
  categoryName: string;
  isCompleted: boolean;
=======
  capacity: string;
  periodStart: string;
  periodEnd: string;
  categoryName: string;
>>>>>>> Stashed changes
  teacher: TeacherModel;
}
