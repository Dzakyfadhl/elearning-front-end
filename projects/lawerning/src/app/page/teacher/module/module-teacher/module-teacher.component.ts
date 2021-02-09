import { ThrowStmt } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailCourseResponse } from 'projects/lawerning/src/app/model/detail-course-response';
import { DetailModuleResponse } from 'projects/lawerning/src/app/model/detail-module-response';
import { StudentByCourseIdResponse } from 'projects/lawerning/src/app/model/student-by-courseid-response';
import { DetailCourseTeacherService } from 'projects/lawerning/src/app/service/detail-course-teacher.service';
import { StudentService } from 'projects/lawerning/src/app/service/student.service';

@Component({
  selector: 'app-module-teacher',
  templateUrl: './module-teacher.component.html',
  styleUrls: ['./module-teacher.component.css'],
})
export class ModuleTeacherComponent implements OnInit {
  course: any;
  dtlCourse: DetailCourseResponse;
  student: StudentByCourseIdResponse;
  totalModule: number;
  courseId: string;

  attendanceReport: {
    moduleName: string;
    date: string;
    studentAbsent: number;
    studentPresent: number;
  }[];
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dtlCourseTeacherService: DetailCourseTeacherService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.attendanceReport = [
      {
        moduleName: 'Module Title-0011',
        date: '02 Feb 2021',
        studentAbsent: 10,
        studentPresent: 4,
      },
      {
        moduleName: 'Module Title-001',
        date: '04 Feb 2021',
        studentAbsent: 12,
        studentPresent: 2,
      },
      {
        moduleName: 'Module Title-001',
        date: '04 Feb 2021',
        studentAbsent: 12,
        studentPresent: 2,
      },
      {
        moduleName: 'Module Title-001',
        date: '04 Feb 2021',
        studentAbsent: 12,
        studentPresent: 2,
      },
      {
        moduleName: 'Module Title-001',
        date: '04 Feb 2021',
        studentAbsent: 12,
        studentPresent: 2,
      },
      {
        moduleName: 'Module Title-001',
        date: '04 Feb 2021',
        studentAbsent: 12,
        studentPresent: 2,
      },
      {
        moduleName: 'Module Title-001',
        date: '04 Feb 2021',
        studentAbsent: 12,
        studentPresent: 2,
      },
      {
        moduleName: 'Module Title-001',
        date: '04 Feb 2021',
        studentAbsent: 12,
        studentPresent: 2,
      },
      {
        moduleName: 'Module Title-001',
        date: '04 Feb 2021',
        studentAbsent: 12,
        studentPresent: 2,
      },
      {
        moduleName: 'Module Title-001',
        date: '04 Feb 2021',
        studentAbsent: 12,
        studentPresent: 2,
      },
      {
        moduleName: 'Module Title-001',
        date: '04 Feb 2021',
        studentAbsent: 12,
        studentPresent: 2,
      },
      {
        moduleName: 'Module Title-001',
        date: '04 Feb 2021',
        studentAbsent: 12,
        studentPresent: 2,
      },
    ];
    this.showDetailCourseTeacher();
    this.showStudentByCourse();
  }

  showDetailCourseTeacher() {
    this.activeRoute.params.subscribe((value) => {
      console.log(value.courseId);
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
      this.student = val.result;
    });
  }

  viewModule(index: number) {
    let dataObj = {
      idCourse: '',
      idModule: '',
    };
    let tempModule: any = this.dtlCourse.modules[index];
    let moduleId = tempModule.id;
    console.log(moduleId);
    dataObj.idCourse = this.courseId;
    dataObj.idModule = moduleId;
    this.router.navigate([`/dtl-module`], { queryParams: dataObj });
  }
}
