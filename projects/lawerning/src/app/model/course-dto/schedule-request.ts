export class ScheduleRequestDTO {
  scheduleDate: string;
  scheduleStart: string;
  scheduleEnd: string;
  scheduleCreatedBy: string;
  teacherId: string;
  teacherVersion: number = 0;
}
