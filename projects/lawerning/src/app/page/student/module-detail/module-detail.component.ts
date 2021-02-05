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

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.css'],
})
export class ModuleDetailComponent implements OnInit {
  title: string;
  baseUrl = 'http://192.168.15.224:8080/file';

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
    private route: Router,
    private location: Location,
    private lessonService: LessonService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((value) => {
      console.log(this.isEmpty);
      if (this.exams === undefined) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
      }

      this.moduleId = value.id;

      this.lessonService.getLessonModule(value.id).subscribe((dataLesson) => {
        this.lessons = dataLesson.result;
      });

      this.examService.getDetailModuleExam(value.id).subscribe((dataExam) => {
        this.exams = dataExam.result;
        if (this.exams === undefined) {
          this.isEmpty = true;
        } else {
          this.isEmpty = false;
        }

        if (this.exams.length > 0 && this.exams !== undefined) {
          this.exams.forEach((data) => {
            let date = new Date(data.endTime);
            let dateNow = new Date();

            this.examService
              .getExamStudent(data.id)
              .subscribe((dataExamStudent) => {
                if (date < dateNow) {
                  this.isAllowed = false;
                  this.examStudents.set(data.id, [
                    dataExamStudent.result,
                    this.isAllowed,
                  ]);
                } else if (date > dateNow) {
                  this.isAllowed = true;
                  this.examStudents.set(data.id, [
                    dataExamStudent.result,
                    this.isAllowed,
                  ]);
                  console.log(data.title, 'allowed');
                }
              });
          });
        }
      });

      this.dtlModuleService.getDtlModule(value.id).subscribe((dataModule) => {
        this.detail = dataModule.result;
        console.log(dataModule.result);
      });
    });
    this.showDiscussion();
  }
  prevPage() {
    this.location.back();
  }
  showDiscussion() {
    this.forumService
      .getModuleDiscussions(this.moduleId)
      .subscribe((dataForum) => {
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
            this.photo = 'assets/images/default.png';
          } else {
            this.photo = `${this.baseUrl}/${val.photoId}`;
          }
        });
        if (this.messages.length > 0) {
          this.totalPost = this.messages.length;
        }
        console.log(this.messages);
      });
  }
  sendingContent() {
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

    this.examService
      .uploadExamStudent(data.id, this.formData)
      .subscribe((value) => console.log(value));
  }
}
