import { TeacherModel } from './teacher-model';

export class CourseAvailableResponse {
  id: string;
  courseCode: string;
  courseName: string;
  capacity: string;
  periodStart: string;
  periodEnd: string;
  teacher: TeacherModel;
  courseCategory: string;
}
