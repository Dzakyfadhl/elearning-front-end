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
import { Location } from '@angular/common';
import { ForumRequestDTO } from '../../../model/forum-dto/forum-request';
import { AuthService } from '../../../service/auth.service';

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
  baseUrl = 'http://192.168.15.224:8080/file';
  photo: any;
  content: string;
  moduleId: string;
  courseId: string;
  formData: FormData;
  file: string;

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
    private attendanceService: AttendanceService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.showDetailModule();
    this.showModuleExam();
    this.showLessonModule();
    this.showAttendanceStudent();
    this.showDiscussion();
  }

  showDetailModule() {
    this.activeRoute.queryParams.subscribe((value) => {
      this.moduleId = value.idModule;
      this.courseId = value.idCourse;
      console.log(this.moduleId);
      this.dtlModuleTeacherService
        .getDtlModuleTeacher(value.idModule)
        .subscribe((val) => {
          this.dtlModule = val.result;
        });
    });
  }
  showModuleExam() {
    this.moduleExamService
      .getDetailModuleExam(this.moduleId)
      .subscribe((val) => {
        this.exam = val.result;
        console.log(this.exam);
      });
  }
  showLessonModule() {
    this.lessonService.getLessonModule(this.moduleId).subscribe((val) => {
      this.lesson = val.result;
    });
  }
  showAttendanceStudent() {
    this.attendanceService
      .getAttendanceStudent(this.courseId, this.moduleId)
      .subscribe((val) => {
        this.studentAttendance = val.result;
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

  showDiscussion() {
    this.forumService.getModuleDiscussions(this.moduleId).subscribe((val) => {
      this.discussion = val.result;
      this.discussion.forEach((val) => {
        let dateFuture = new Date(val.createdAt);
        val.dayPost = dateFuture.getDate();

        let dateNow = new Date();
        val.day = dateNow.getDate();

        let delta = Math.abs(dateFuture.valueOf() - dateNow.valueOf()) / 1000;

        let days = Math.floor(delta / 86400);
        delta -= days * 86400;

        let hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        let minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        val.durationHour = hours;
        val.durationMinute = minutes;

        if (!val.photoId) {
          this.photo = 'assets/images/default.png';
        } else {
          this.photo = `${this.baseUrl}/${val.photoId}`;
        }
      });
    });
  }
  sendContent() {
    let data = new ForumRequestDTO();
    data.content = this.content;
    data.userId = this.auth.getLoginResponse().userId;
    data.moduleId = this.moduleId;
    data.versionUser = 0;
    data.versionModule = 0;
    this.forumService.saveForum(data).subscribe((val) => {
      this.showDiscussion();
      this.content = '';
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
  viewExamSubmission(index: number) {
    let tempExam: any = this.exam[index];
    let examId = tempExam.id;
    this.router.navigate([`/submission-teacher/${examId}`]);
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      console.log(file);
      let data: FormData = new FormData();
      data.append('file', file);
      this.formData = data;

      this.file = file.name;
    }
  }

  upload() {
    let idUser = this.auth.getLoginResponse().userId;
    console.log(this.moduleId);
    console.log(idUser);
    this.lessonService
      .uploadLessonModule(idUser, this.moduleId, this.formData)
      .subscribe((val) => {
        console.log(val);
        this.showDetailModule();
      });
  }
}
