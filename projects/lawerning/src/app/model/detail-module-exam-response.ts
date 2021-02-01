import { FileModel } from './file-model';

export class DetailModuleExamResponse {
  id: string;
  code: string;
  description: string;
  type: string;
  startTime: string;
  endTime: string;
  files: FileModel[];
}
