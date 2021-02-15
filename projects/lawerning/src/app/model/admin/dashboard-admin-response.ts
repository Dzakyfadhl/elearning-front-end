import { DashboardCourseResponse } from './dashboard-course-response';
import { DashboardStudentResponse } from './dashboard-student-response';
import { DashboardTeacherResponse } from './dashboard-teacher-response';

export class DashboardAdminResponse {
  course: DashboardCourseResponse;
  student: DashboardStudentResponse;
  teacher: DashboardTeacherResponse;
}
