import { ScheduleModel } from './schedule-model';

export class ModuleModel {
  id: string;
  code: string;
  tittle: string;
  description: string;
  subjectName: string;
  schedule: ScheduleModel;
}
