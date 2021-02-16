import { ScheduleUpdateRequest } from '../schedule-dto/schedule-update-request';

export class ModuleUpdateRequest {
  id: string;
  code: string;
  title: string;
  description: string;
  courseId: string;
  subjectId: string;
  schedule: ScheduleUpdateRequest;
  updatedBy: string;
}
