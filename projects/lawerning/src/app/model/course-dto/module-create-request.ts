import { ScheduleCreateRequest } from './schedule-create-request';

export class ModuleCreateRequest {
  code: string;
  title: string;
  description: string;
  courseId: string;
  subjectId: string;
  schedule: ScheduleCreateRequest;
  createdBy: string;
}
