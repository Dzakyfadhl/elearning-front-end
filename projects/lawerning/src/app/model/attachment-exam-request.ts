import { FileModel } from './file-model';

export class AttachmentExamRequest {
  examId: string;
  studentId: string;
  file: FileModel;
}
