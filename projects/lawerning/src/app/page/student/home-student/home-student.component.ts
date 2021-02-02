import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseAvailableResponse } from '../../../model/course-available-response';
import { CourseStudentResponse } from '../../../model/course-student-response';
import { AuthService } from '../../../service/auth.service';
import { CourseService } from '../../../service/course.service';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css'],
})
export class HomeStudentComponent implements OnInit {
  // course: any = {};

  courses: CourseAvailableResponse[];
  courseFiltering = [];
  selectedCourse: any = 'all';

  category = [];

  data: any;
  photoId: any;
  keyString: string;
  txtCourse: string;

  isRegistered: boolean = false;
  studentCourse: CourseStudentResponse[];
  constructor(
    private route: Router,
    private courseService: CourseService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.courseService.getAvailableCourse().subscribe((value) => {
      this.courses = value.result;
      this.courses.forEach((val) => {
        if (!val.teacher.photoId) {
          val.teacher.photoId = `assets/images/default.png`;
        } else {
          val.teacher.photoId = `http://192.168.15.224:8080/file/${val.teacher.photoId}`;
        }
      });

      if (this.courses.length > 0) {
        this.courseFiltering = this.courses;
        // concat list category
        this.courses.forEach((val) => {
          this.category.push(val.categoryName);
        });
        // merging category
        this.data = this.category.filter(
          (item, i, array) => array.indexOf(item) === i
        );
        console.log(this.data);
      }
    });

    if (this.selectedCourse == undefined) {
      this.courseFiltering = this.courses;
    }
  }
  onChange(newValue) {
    this.selectedCourse = newValue;
    console.log(this.selectedCourse);
    if (this.selectedCourse == 'all') {
      this.courseFiltering = this.courses;
    } else {
      this.courseFiltering = this.courses.filter(
        (value) => value.categoryName == this.selectedCourse
      );
    }
  }

  searchKey() {
    this.courseFiltering = this.courses.filter((value) => {
      return value.categoryName
        .toLocaleLowerCase()
        .match(this.keyString.toLocaleLowerCase());
    });
  }

  viewModule(index: number) {
    let tempCourse: CourseAvailableResponse = this.courses[index];
    let courseId = tempCourse.id;
    this.route.navigate(['/module/course', courseId]);
  }
}
