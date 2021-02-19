import { Component, OnInit } from '@angular/core';
import { StudentResponse } from '../../../model/student/student-response';
import { AuthService } from '../../../service/auth.service';
import { ModuleService } from '../../../service/module.service';
import { StudentService } from '../../../service/student.service';
import { Gender } from '../../../model/gender';
import { StudentUpdateRequest } from '../../../model/student/student-edit-request';
import { ToastService } from '../../../service/toast.service';
import { Router } from '@angular/router';
import { CourseService } from '../../../service/course.service';
import { CourseProgressResponse } from '../../../model/course-dto/course-progress-response';
import Constants from '../../../constants/constant';
import { LoadingService } from '../../../service/loading.service';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css'],
})
export class ProfileStudentComponent implements OnInit {
  studentProfile = new StudentResponse();
  formData = new FormData();
  photo: any;

  result: any = [];

  isTwoRow: boolean = false;
  mymodules: CourseProgressResponse[];

  isDisplay = false;
  blockedDocument: boolean = false;

  constructor(
    private studentService: StudentService,
    private auth: AuthService,
    private courseService: CourseService,
    private router: Router,
    private loadingService: LoadingService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadingService.emitStatus(true);

    this.courseService
      .getCourseProgress(this.auth.getLoginResponse().userRoleId)
      .subscribe(
        (data) => {
          this.mymodules = data.result;
        },
        (error) => {
          this.toastService.emitHttpErrorMessage(error);
        },
        () => {
          this.loadingService.emitStatus(false);
        }
      );

    this.studentService.getProfile().subscribe(
      (value) => {
        this.studentProfile = value.result;

        if (!this.studentProfile.idPhoto) {
          this.photo = `assets/images/default.png`;
        } else {
          this.photo = `${Constants.BASE_URL_FILE}/${this.studentProfile.idPhoto}`;
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

  viewModule(index: number) {
    let tempCourse: CourseProgressResponse = this.mymodules[index];
    let courseId = tempCourse.courseId;
    this.router.navigate([`/student/course/${courseId}`]);
  }
  showDialog() {
    this.isDisplay = true;
    this.blockedDocument = true;
  }
  cancelDialog() {
    this.blockedDocument = false;
    this.isDisplay = false;
  }

  openFormEdit(data: StudentResponse) {
    this.router.navigate(['/student/update-profile', data], {
      skipLocationChange: true,
    });
  }
}
