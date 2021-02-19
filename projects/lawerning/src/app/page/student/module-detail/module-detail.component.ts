import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailModuleResponse } from '../../../model/detail-module-response';
import { ExamsModuleResponseDTO } from '../../../model/exam-dto/exams-module-response';
import { ForumModuleResponseDTO } from '../../../model/forum-dto/forum-module-response';
import { ForumRequestDTO } from '../../../model/forum-dto/forum-request';
import { AuthService } from '../../../service/auth.service';
import { DetailModuleService } from '../../../service/detail-module.service';
import { ExamService } from '../../../service/exam.service';
import { ForumService } from '../../../service/forum.service';
import { Location } from '@angular/common';
import { LessonService } from '../../../service/lesson.service';
import { LessonResponse } from '../../../model/lesson-response';
import { ExamStudentResponse } from '../../../model/exam-dto/exam-student-response';
import { ScheduleModel } from '../../../model/schedule-model';
import Constants from '../../../constants/constant';
import { error } from 'selenium-webdriver';
import { ToastService } from '../../../service/toast.service';
import { ConfirmationService } from 'primeng/api';
import { LoadingService } from '../../../service/loading.service';
@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.css'],
})
export class ModuleDetailComponent implements OnInit {
  title: string;

  content: string;
  moduleId: string;

  formData: FormData;
  header: HttpHeaders;
  file: string;
  photo: any;

  day: number = 0;
  dayPost: number = 0;

  lessons: LessonResponse[];

  detail: DetailModuleResponse;

  exams: ExamsModuleResponseDTO[];

  examStudents = new Map<string, any>();

  totalPost: number = 0;
  messages: ForumModuleResponseDTO[];

  isEmpty: boolean = false;
  isDatePast: boolean = false;
  isAllowed: boolean;

  constructor(
    private activeRoute: ActivatedRoute,
    private dtlModuleService: DetailModuleService,
    private examService: ExamService,
    private forumService: ForumService,
    private auth: AuthService,
    private location: Location,
    private lessonService: LessonService,
    private toastService: ToastService,
    private confirmationService: ConfirmationService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.emitStatus(true);
    this.activeRoute.params.subscribe((value) => {
      this.moduleId = value.id;

      this.showLesson(value.id);

      this.dtlModuleService.getDtlModule(value.id).subscribe(
        (dataModule) => {
          this.detail = dataModule.result;
        },
        (error) => {
          this.toastService.emitHttpErrorMessage(error);
        },
        () => {
          this.loadingService.emitStatus(false);
        }
      );
    });
    this.showDiscussion();
    this.showExam();
  }

  showExam() {
    this.examService.getDetailModuleExam(this.moduleId).subscribe(
      (dataExam) => {
        this.exams = dataExam.result;

        if (this.exams === undefined) {
          this.isEmpty = true;
        } else {
          this.isEmpty = false;
        }

        if (this.exams.length > 0 && this.exams !== undefined) {
          this.exams.forEach((data) => {
            let dateStart = new Date(data.startTime);
            let dateEnd = new Date(data.endTime);
            let dateNow = new Date();

            this.examService.getExamStudent(data.id).subscribe(
              (dataExamStudent) => {
                if (dateNow < dateStart || dateNow > dateEnd) {
                  this.isAllowed = false;
                  this.examStudents.set(data.id, [
                    dataExamStudent.result,
                    this.isAllowed,
                  ]);
                } else if (dateNow >= dateStart && dateNow < dateEnd) {
                  this.isAllowed = true;
                  this.examStudents.set(data.id, [
                    dataExamStudent.result,
                    this.isAllowed,
                  ]);
                  console.log(data.title, 'allowed');
                }
              },
              (error) => {
                this.toastService.emitHttpErrorMessage(error);
              },
              () => {
                this.loadingService.emitStatus(false);
              }
            );
          });
        }
      },
      (error) => {
        this.toastService.emitHttpErrorMessage(error);
      },
      () => {
        this.loadingService.emitStatus(false);
      }
    );
  }

  async showLesson(id: string) {
    try {
      const response = await this.lessonService.getLessonModule(id);
      if (response.code === 200) {
        this.lessons = response.result;
      }
    } catch (error) {
      this.lessons = [];
    }
  }
  prevPage() {
    this.location.back();
  }
  showDiscussion() {
    this.forumService.getModuleDiscussions(this.moduleId).subscribe(
      (dataForum) => {
        this.messages = dataForum.result;
        this.messages.forEach((val) => {
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
        if (this.messages.length > 0) {
          this.totalPost = this.messages.length;
        }
        console.log(this.messages);
      },
      (error) => {
        this.messages = [];
        this.toastService.emitHttpErrorMessage(error);
      },
      () => {
        this.loadingService.emitStatus(false);
      }
    );
  }
  sendingContent() {
    let data = new ForumRequestDTO();

    data.content = this.content;
    data.userId = this.auth.getLoginResponse().userId;
    data.moduleId = this.moduleId;
    data.versionUser = 0;
    data.versionModule = 0;
    this.forumService.saveForum(data).subscribe(
      (val) => {
        this.showDiscussion();
        this.content = '';
      },
      (error) => {
        this.toastService.emitHttpErrorMessage(error, 'Field is blank');
      }
    );
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

  upload(index: number) {
    let data: ExamsModuleResponseDTO = this.exams[index];

    this.examService.uploadExamStudent(data.id, this.formData).subscribe(
      (_) => {
        this.showExam();
        this.toastService.emitSuccessMessage(
          'Uploaded Successfully',
          'You has been uploaded exam.'
        );
      },
      (error) => {
        this.toastService.emitHttpErrorMessage(error, 'failure');
      }
    );
  }

  removeExam(id: string) {
    this.confirmationService.confirm({
      message: `Are you sure to remove exam ?`,
      header: 'Remove Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        try {
          this.examService.deleteExamStudent(id).subscribe(
            (_) => {
              this.showExam();
              this.file = null;
              this.toastService.emitSuccessMessage(
                'Remove Success',
                'You has been remove your exam'
              );
            },
            (error) => {
              this.toastService.emitHttpErrorMessage(error, 'Remove Failed');
            }
          );
        } catch (error) {
          this.toastService.emitHttpErrorMessage(
            error,
            'Failed to remove exam'
          );
        }
      },
    });
  }
}
