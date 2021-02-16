export class CourseProgressResponse {
  courseId: string;
  courseName: string;
  totalModule: number;
  moduleComplete: number;
  percentProgress: number;
  periodStart: string;
  periodEnd: string;
  isPast: boolean;
}
