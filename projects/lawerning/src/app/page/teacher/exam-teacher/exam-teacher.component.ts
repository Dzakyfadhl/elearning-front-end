import { DatePipe, Location } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamTeacherRequest } from '../../../model/exam-dto/exam-teacher-request';
import { ExamType } from '../../../model/exam-dto/exam-type';
import { AuthService } from '../../../service/auth.service';
import { ExamService } from '../../../service/exam.service';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'app-exam-teacher',
  templateUrl: './exam-teacher.component.html',
  styleUrls: ['./exam-teacher.component.css'],
})
export class ExamTeacherComponent implements OnInit {
  examTeacher = new ExamTeacherRequest();
  quiz: string;
  exam: string;
  formData: FormData;
  file: string;
  moduleId: string;
  date = new Date();
  periodStart: Date;
  periodEnd: Date;

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private examService: ExamService,
    private activeRoute: ActivatedRoute,
    private location: Location,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quiz = ExamType.QUIZ;
    this.exam = ExamType.EXAM;
    this.activeRoute.params.subscribe((value) => {
      let idUser = this.auth.getLoginResponse().userId;
      this.examTeacher.createdBy = idUser;
      this.examTeacher.moduleId = value.moduleId;
    });
  }
  prevPage() {
    this.location.back();
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let data: FormData = new FormData();
      data.append('file', file);
      this.activeRoute.params.subscribe((value) => {
        let idUser = this.auth.getLoginResponse().userId;
        this.examTeacher.createdBy = idUser;
        this.examTeacher.moduleId = value.moduleId;
        const datePipe = new DatePipe('en-US');
        let formated = datePipe.transform(
          this.periodStart,
          'yyyy-MM-dd HH:mm:ss'
        );
        let formatedEnd = datePipe.transform(
          this.periodEnd,
          'yyyy-MM-dd HH:mm:ss'
        );

        this.examTeacher.startTime = formated;
        this.examTeacher.endTime = formatedEnd;
        data.append('body', JSON.stringify(this.examTeacher));
      });
      this.formData = data;
      this.file = file.name;
    }
  }

  uploadExam() {
    this.examService.uploadExamTeacher(this.formData).subscribe((response) => {
      if (response.code === 201 && response.result) {
        this.toastService.emitSuccessMessage('Submitted', response.result);
        this.location.back();
      }
    });
  }
}
