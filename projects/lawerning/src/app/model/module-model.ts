import { ScheduleModel } from './schedule-model';

export class ModuleModel {
  id: string;
  code: string;
  title: string;
  description: string;
  subjectName: string;
  attendanceId: string;
  verifyStatus: boolean;
  isAttendance: boolean;
  isStart: boolean;
  schedule: ScheduleModel;
}
