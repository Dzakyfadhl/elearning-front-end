import { FileModel } from './file-model';
import { ScheduleModel } from './schedule-model';

export class DetailModuleResponse {
  title: string;
  code: string;
  description: string;
  files: FileModel[];
  schedule: ScheduleModel;
}
