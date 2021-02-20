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
import Constants from '../../../constants/constant';
import { ToastService } from '../../../service/toast.service';
import { ConfirmationService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { VerifyAttendance } from '../../../model/verify-attendance';
import { ReportService } from '../../../service/report.service';
import { ReportScoreResponse } from '../../../model/report-score-response';

@Component({
  selector: 'app-dtl-module',
  templateUrl: './dtl-module.component.html',
  styleUrls: ['./dtl-module.component.css'],
})
export class DtlModuleComponent implements OnInit {
  dtlModule = new DetailModuleResponse();
  exam: ExamsModuleResponseDTO[];
  discussion: ForumModuleResponseDTO[];
  lesson: LessonResponse[];
  studentAttendance: AttendanceResponse;
  baseUrl = 'http://192.168.15.224:8080/file';
  content: string;
  moduleId: string;
  courseId: string;
  formData: FormData;
  file: string;
  isValidate = false;
  firstName: string;
  lastName: string;
  selectedStudents: AttendanceResponse[];
  reportScore: ReportScoreResponse[];

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
    private authService: AuthService,
    private toastService: ToastService,
    private confirmationService: ConfirmationService,
    private reportService: ReportService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.showDetailModule();
    this.showModuleExam();
    this.showLessonModule();
    this.showAttendanceStudent();
    this.showDiscussion();
    this.showReportScore();
  }

  async showLessonModule() {
    try {
      const response = await this.lessonService.getLessonModule(this.moduleId);
      if (response.code === 200) {
        this.lesson = response.result;
      }
    } catch (error) {
      this.toastService.emitHttpErrorMessage(
        error,
        'Failed to get lesson data.'
      );
    }
  }
  prevPage() {
    this.location.back();
  }
  async showDetailModule() {
    try {
      this.activeRoute.queryParams.subscribe((value) => {
        this.firstName = this.authService.getLoginResponse().firstName;
        this.lastName = this.authService.getLoginResponse().lastName;
        this.moduleId = value.idModule;
        this.courseId = value.idCourse;
        console.log(value);
      });
      const response = await this.dtlModuleTeacherService.getDtlModuleTeacher(
        this.moduleId
      );
      if (response.code === 200) {
        this.dtlModule = response.result;
        console.log(`Show Detail Module${this.dtlModule}`);
      }
    } catch (error) {
      this.toastService.emitHttpErrorMessage(
        error,
        'Failed to get student data.'
      );
    }
  }

  showModuleExam() {
    this.moduleExamService
      .getDetailModuleExam(this.moduleId)
      .subscribe((val) => {
        this.exam = val.result;
        console.log(this.exam);
        this.exam.forEach((val) => {
          let endTime = new Date(val.endTime);
          let dateNow = new Date();
          if (dateNow > endTime) {
            val.isPast = true;
          } else {
            val.isPast = false;
          }
        });
      });
  }

  validateExam() {
    for (let i = 0; i < this.exam.length; i++) {
      let dateExam = new Date(this.exam[i].endTime);
      let dateNow = new Date();
      if (dateNow > dateExam) {
        this.isValidate = true;
      }
    }
  }

  showReportScore() {
    this.reportService.getReportScore(this.moduleId).subscribe((val) => {
      this.reportScore = val.result;
      console.log(this.reportScore);
    });
  }

  showAttendanceStudent() {
    this.attendanceService
      .getAttendanceStudent(this.courseId, this.moduleId)
      .subscribe((val) => {
        this.studentAttendance = val.result;
        console.log(this.studentAttendance);
      });
  }

  verifyAttendance() {
    let idAttendances: string[] = [];
    let confirmAttendance = new VerifyAttendance();
    confirmAttendance.moduleId = this.moduleId;
    confirmAttendance.userId = this.authService.getLoginResponse().userId;
    this.confirmationService.confirm({
      message: 'Do you want to verify attendance student ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        for (let i = 0; i < this.selectedStudents.length; i++) {
          if (
            !this.selectedStudents[i].attendanceIsVerified &&
            this.selectedStudents[i].attendanceTime != null
          ) {
            idAttendances.push(this.selectedStudents[i].attendanceId);
            console.log('abc');
          } else {
            this.selectedStudents.splice(i, 1);
            i - 1;
          }
        }
        confirmAttendance.idAttendance = idAttendances;
        console.log(confirmAttendance.userId);
        console.log(confirmAttendance.moduleId);
        console.log(confirmAttendance.idAttendance);
        console.log(idAttendances);

        if (idAttendances.length == 0) {
          console.log('no absent data');
          return;
        }
        console.log('absent data');

        this.attendanceService
          .verifyAttendanceStudent(confirmAttendance)
          .subscribe((val) => {
            console.log(val);
          });
      },
    });
  }

  showDiscussion() {
    this.forumService.getModuleDiscussions(this.moduleId).subscribe((val) => {
      this.discussion = val.result;
      console.log(val.result);

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
          val.photoId = 'assets/images/default.png';
        } else {
          val.photoId = `${Constants.BASE_URL_FILE}/${val.photoId}`;
        }
      });
    });
  }
  sendContent() {
    let data = new ForumRequestDTO();
    data.content = this.content;
    data.userId = this.authService.getLoginResponse().userId;
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
    let dataObj = {
      idExam: '',
      title: '',
    };
    let tempExam: any = this.exam[index];
    let examId = tempExam.id;
    let examTitle = tempExam.title;
    console.log(tempExam.id);
    console.log(tempExam.title);

    dataObj.idExam = examId;
    dataObj.title = examTitle;

    this.router.navigate([`teacher/submission`], { queryParams: dataObj });
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
    let idUser = this.authService.getLoginResponse().userId;
    console.log(this.moduleId);
    console.log(idUser);
    this.lessonService
      .uploadLessonModule(idUser, this.moduleId, this.formData)
      .subscribe(
        (response) => {
          if (response.code === 200 && response.result) {
            this.toastService.emitSuccessMessage('Submitted', response.result);
            this.showDetailModule();
            this.showLessonModule();
          }
        },
        (error: HttpErrorResponse) => {
          this.toastService.emitHttpErrorMessage(
            error,
            'Failed to delete course type'
          );
        }
      );
  }
  uploadExam() {
    console.log(this.moduleId);
    this.router.navigate([`teacher/exam/`, this.moduleId]);
  }
  downloadReport() {
    window.open(
      `${Constants.BASE_URL}/report/attendance?idCourse=${this.courseId}&idModule=${this.moduleId}`,
      '_blank'
    );
  }

  deleteExam(index: number) {
    let idExam = this.exam[index].id;
    this.confirmationService.confirm({
      message: `Are you sure you want to delete exam ?`,
      header: 'Delete Confirm.',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        try {
          this.moduleExamService.deleteExamTeacher(idExam).subscribe((val) => {
            if (val.code === 200) {
              this.toastService.emitSuccessMessage('Deleted', val.result);
              this.showDetailModule();
              this.showLessonModule();
              this.showModuleExam();
            }
          });
        } catch (error) {
          this.toastService.emitHttpErrorMessage(
            error,
            'Failed to delete exam'
          );
        }
      },
    });
  }
  deleteLesson(index: number) {
    let idLesson = this.lesson[index].id;
    this.confirmationService.confirm({
      message: `Are you sure you want to delete lesson ?`,
      header: 'Delete Confirm.',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        try {
          const response = await this.lessonService.deleteLessonModule(
            idLesson
          );
          if (response.code === 200) {
            this.toastService.emitSuccessMessage('Deleted', response.result);
            this.showDetailModule();
            this.showLessonModule();
          }
        } catch (error) {
          this.toastService.emitHttpErrorMessage(
            error,
            'Failed to delete student'
          );
        }
      },
    });
  }

  downloadReportScore() {
    let teacherId = this.authService.getLoginResponse().userRoleId;
    window.open(
      `${Constants.BASE_URL}/report/teacher?moduleId=${this.moduleId}&id=${teacherId}`,
      '_blank'
    );
  }
}
