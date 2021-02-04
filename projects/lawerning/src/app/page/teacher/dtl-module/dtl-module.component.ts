import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceResponse } from '../../../model/attendance-response';
import { DetailModuleResponse } from '../../../model/detail-module-response';
import { ExamsModuleResponseDTO } from '../../../model/exam-dto/exams-module-response';
import { ForumModuleResponseDTO } from '../../../model/forum-dto/forum-module-response';
import { LessonResponse } from '../../../model/lesson-response';
import { AttendanceService } from '../../../service/attendance.service';
import { DetailModuleService } from '../../../service/detail-module.service';
import { ExamService } from '../../../service/exam.service';
import { ForumService } from '../../../service/forum.service';
import { LessonService } from '../../../service/lesson.service';

@Component({
  selector: 'app-dtl-module',
  templateUrl: './dtl-module.component.html',
  styleUrls: ['./dtl-module.component.css'],
})
export class DtlModuleComponent implements OnInit {
  dtlModule: DetailModuleResponse;
  exam: ExamsModuleResponseDTO[];
  discussion: ForumModuleResponseDTO[];
  lesson: LessonResponse[];
  studentAttendance: AttendanceResponse;

  displayExam: boolean = false;
  displayModule: boolean = false;

  blockedDocument: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dtlModuleTeacherService: DetailModuleService,
    private moduleExamService: ExamService,
    private forumService: ForumService,
    private lessonService: LessonService,
    private attendanceService: AttendanceService
  ) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((value) => {
      console.log(value);
      this.moduleExamService
        .getDetailModuleExam(value.idModule)
        .subscribe((val) => {
          this.exam = val.result;
          console.log(this.exam);
        });
      this.dtlModuleTeacherService
        .getDtlModuleTeacher(value.idModule)
        .subscribe((val) => {
          this.dtlModule = val.result;
        });
      this.forumService
        .getModuleDiscussions(value.idModule)
        .subscribe((val) => {
          this.discussion = val.result;
        });
      this.lessonService.getLessonModule(value.idModule).subscribe((val) => {
        this.lesson = val.result;
      });
      this.attendanceService
        .getAttendanceStudent(value.idCourse, value.idModule)
        .subscribe((val) => {
          this.studentAttendance = val.result;
        });
    });
  }

  confirmAttendance(index: number) {
    let attendance = this.studentAttendance[index];
    console.log(attendance);
    let attendanceId = attendance.attendanceId;
    this.attendanceService
      .verifyAttendanceStudent(attendanceId)
      .subscribe((val) => {
        console.log(val);
      });
  }

  showDialogExam() {
    this.displayExam = true;
  }
  showDialogModule() {
    this.displayModule = true;
  }
  cancelDialog() {
    this.blockedDocument = false;
    this.displayExam = false;
  }

  viewModule(index: number) {
    let tempExam: any = this.exam[index];
    let examId = tempExam.id;
    this.router.navigate([`/submission-teacher/${examId}`]);
  }
}
