import { FileModel } from './file-model';

export class TeacherExamRequest {
  moduleId: string;
  description: string;
  startTime: string;
  endTime: string;
  files: FileModel;
}
