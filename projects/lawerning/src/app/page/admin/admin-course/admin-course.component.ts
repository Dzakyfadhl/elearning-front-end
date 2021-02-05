import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseAdminResponseDTO } from '../../../model/course-dto/course-admin-response';
import { AuthService } from '../../../service/auth.service';
import { CourseService } from '../../../service/course.service';

interface Courses {
  code: string;
  type: string;
  category: string;
  start: string;
  end: string;
  status: string;
  capacity: number;
}

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css'],
})
export class AdminCourseComponent implements OnInit {
  courses: CourseAdminResponseDTO[];
  listCourses: Courses[];

  first = 0;

  rows = 5;

  constructor(
    private auth: AuthService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.defineCourses();
  }

  defineCourses() {
    this.listCourses = [
      {
        code: 'C001',
        type: 'Java Express',
        category: 'Programming',
        start: '21-01-2021',
        end: '21-02-2021',
        status: 'Regist',
        capacity: 40,
      },
      {
        code: 'C001',
        type: 'Java Express',
        category: 'Programming',
        start: '21-01-2021',
        end: '21-02-2021',
        status: 'Regist',
        capacity: 40,
      },
      {
        code: 'C001',
        type: 'Java Express',
        category: 'Programming',
        start: '21-01-2021',
        end: '21-02-2021',
        status: 'Regist',
        capacity: 40,
      },
      {
        code: 'C001',
        type: 'Java Express',
        category: 'Programming',
        start: '21-01-2021',
        end: '21-02-2021',
        status: 'Regist',
        capacity: 40,
      },
    ];

    this.courseService.getCoursesForAdmin().subscribe(
      (val) => {
        this.courses = val.result;
      },
      (err) => {}
    );
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }
}
