import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Constants from '../../../constants/constant';
import { CourseAvailableResponse } from '../../../model/course-available-response';
import { CourseStudentResponse } from '../../../model/course-student-response';
import { Gender } from '../../../model/gender';
import { RegisterCourseRequest } from '../../../model/register-course-request';
import { AuthService } from '../../../service/auth.service';
import { CourseService } from '../../../service/course.service';
import { LoadingService } from '../../../service/loading.service';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css'],
})
export class HomeStudentComponent implements OnInit {
  // course: any = {};

  courses: CourseAvailableResponse[] = [];
  courseFiltering = [];
  selectedCourse: any = 'all';

  category = [];

  data: any;
  photoId: any;
  keyString: string;
  txtCourse: string;

  isRegistered: boolean = false;
  studentCourse: CourseStudentResponse[];

  isValid: boolean;

  constructor(
    private route: Router,
    private courseService: CourseService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.courseService.getAvailableCourse().subscribe((value) => {
      this.courses = value.result;

      if (this.courses.length == 0) {
        this.isValid = false;
      }
      if (this.courses.length > 0) {
        this.isValid = true;

        this.courses.forEach((val) => {
          if (val.teacher.experience == null) {
            val.teacher.experience = 'Experience not yet';
          } else {
            val.teacher.experience = val.teacher.experience;
          }
          if (!val.teacher.photoId) {
            val.teacher.photoId = `assets/images/default.png`;
          } else {
            val.teacher.photoId = `${Constants.BASE_URL_FILE}/${val.teacher.photoId}`;
          }
        });
        this.courseFiltering = this.courses;
        // concat list category
        this.courses.forEach((val) => {
          this.category.push(val.categoryName);
        });
        // merging category
        this.data = this.category.filter(
          (item, i, array) => array.indexOf(item) === i
        );
      }
    });

    if (this.selectedCourse == undefined) {
      this.courseFiltering = this.courses;
    }
  }
  onChange(newValue) {
    this.selectedCourse = newValue;
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
      return value.typeName
        .toLocaleLowerCase()
        .match(this.keyString.toLocaleLowerCase());
    });
  }

  viewModule(index: number) {
    let tempCourse: CourseAvailableResponse = this.courses[index];
    let request = new RegisterCourseRequest();
    request.courseId = tempCourse.id;
    request.isRegist = tempCourse.isRegist;
    if (request.isRegist == true) {
      this.route.navigate([`/student/course/${request.courseId}`]);
    } else {
      this.route.navigate([
        `student/module/course/${request.courseId}/isRegist/${request.isRegist}`,
      ]);
    }
  }
}
