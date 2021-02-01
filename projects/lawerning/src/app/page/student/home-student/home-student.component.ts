import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseAvailableResponse } from '../../../model/course-available-response';
import { CourseService } from '../../../service/course.service';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css'],
})
export class HomeStudentComponent implements OnInit {
  txtCourse: string;

  course: any = {};

  courseFiltering = [];
  selectedCourse: any = 'all';

  courses: CourseAvailableResponse[];

  category = [];

  data: any;
  keyString: string;

  photoId: any;

  constructor(private route: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getAvailableCourse().subscribe((value) => {
      this.courses = value.result;
      this.courses.forEach((data) => {
        console.log(data.categoryName);

        this.photoId = `http://192.168.13.87:8080/file/${data.teacher.photoId}`;
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
    // let data = tempCourse;
    // console.log(data);
    this.route.navigate(['/module-available/', courseId]);
  }
}
