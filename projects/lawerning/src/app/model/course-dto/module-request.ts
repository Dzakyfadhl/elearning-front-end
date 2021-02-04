import { Gender } from '../gender';
import { ScheduleRequestDTO } from './schedule-request';

export class ModulRequestDTO {
  moduleCode: string;
  moduleCreatedBy: string;
  moduleTittle: string;
  moduleDescription: string;
  courseId: string;
  courseVersion: number = 0;
  subjectId: string;
  subjectVersion: number = 0;
  scheduleRequestDTO: ScheduleRequestDTO;
}
