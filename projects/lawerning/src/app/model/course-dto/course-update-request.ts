import { CourseCreateRequestDTO } from './course-create-request';

export class CourseUpdateRequestDTO extends CourseCreateRequestDTO {
  id: string;
  updateBy: string;
  status: string;
}
