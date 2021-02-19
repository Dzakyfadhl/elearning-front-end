import { ExamType } from './exam-type';

export class ExamsModuleResponseDTO {
  id: string;
  code: string;
  title: string;
  description: string;
  type: ExamType;
  startTime: string;
  endTime: string;
  fileId: string;
  fileName: string;
  isPast: boolean;
}
