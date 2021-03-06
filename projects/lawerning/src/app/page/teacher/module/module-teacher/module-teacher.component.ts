import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Constants from 'projects/lawerning/src/app/constants/constant';
import { AttendanceReport } from 'projects/lawerning/src/app/model/attendance-report';
import { DetailCourseResponse } from 'projects/lawerning/src/app/model/detail-course-response';
import { StudentByCourseIdResponse } from 'projects/lawerning/src/app/model/student-by-courseid-response';
import { AuthService } from 'projects/lawerning/src/app/service/auth.service';
import { DetailCourseTeacherService } from 'projects/lawerning/src/app/service/detail-course-teacher.service';
import { ReportService } from 'projects/lawerning/src/app/service/report.service';
import { StudentService } from 'projects/lawerning/src/app/service/student.service';
import { ToastService } from 'projects/lawerning/src/app/service/toast.service';

@Component({
  selector: 'app-module-teacher',
  templateUrl: './module-teacher.component.html',
  styleUrls: ['./module-teacher.component.css'],
})
export class ModuleTeacherComponent implements OnInit {
  course: any;
  dtlCourse = new DetailCourseResponse();
  totalModule: number;
  courseId: string;
  attendanceReports: AttendanceReport[];
  students: StudentByCourseIdResponse[];

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dtlCourseTeacherService: DetailCourseTeacherService,
    private studentService: StudentService,
    private reportService: ReportService,
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.showDetailCourseTeacher();
    this.showStudentByCourse();
    this.viewReportAttendance();
  }

  showDetailCourseTeacher() {
    this.activeRoute.params.subscribe((value) => {
      this.courseId = value.courseId;
      this.dtlCourseTeacherService
        .getDetailCourseTeacher(value.courseId)
        .subscribe((val) => {
          this.dtlCourse = val.result;
          this.totalModule = this.dtlCourse.modules.length;
        });
    });
  }
  showStudentByCourse() {
    this.studentService.getStudentByCourseId(this.courseId).subscribe((val) => {
      this.students = val.result;
    });
  }

  viewModule(index: number) {
    let dataObj = {
      idCourse: '',
      idModule: '',
    };
    let tempModule: any = this.dtlCourse.modules[index];
    let moduleId = tempModule.id;
    dataObj.idCourse = this.courseId;
    dataObj.idModule = moduleId;
    this.router.navigate([`teacher/dtl-module`], { queryParams: dataObj });
  }

  viewReportAttendance() {
    this.reportService
      .getAttendanceReportTeacher(this.courseId)
      .subscribe((val) => {
        this.attendanceReports = val.result;
      });
  }

  downloadReport() {
    window.open(
      `${Constants.BASE_URL}/report/course/attendance?courseId=${this.courseId}`,
      '_blank'
    );
  }

  verifyStudent(index: number) {
    let studentCourseId = this.students[index].studentCourseId;
    let teacherId = this.authService.getLoginResponse().userRoleId;
    let email = this.students[index].email;
    this.studentService
      .verifyStudent(studentCourseId, teacherId, email)
      .subscribe((response) => {
        if (response.code === 200 && response.result) {
          this.toastService.emitSuccessMessage('Submitted', 'Register success');
          this.showStudentByCourse();
          this.showDetailCourseTeacher();
        }
      });
  }
}
