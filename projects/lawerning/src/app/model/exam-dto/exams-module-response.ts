import { ExamType } from "./exam-type";

export class ExamsModuleResponseDTO {

    id:string;
    code:string;
    description:string;
    type:ExamType;
    startTime:string;
    endTime:string;
    fileId:string;
  
  }