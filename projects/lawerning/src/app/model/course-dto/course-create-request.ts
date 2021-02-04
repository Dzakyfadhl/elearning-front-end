export class CourseCreateRequestDTO {
  code: string;
  description: string;
  courseTypeId: string;
  teacherId: string;
  courseCategoryId: string;
  capacity: number;
  periodStart: string;
  periodEnd: string;
  createdBy: string;
}
