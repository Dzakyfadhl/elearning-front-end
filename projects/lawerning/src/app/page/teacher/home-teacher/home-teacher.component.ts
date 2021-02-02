import { Component, OnInit } from '@angular/core';
import { CourseTeacherResponse } from '../../../model/course-teacher-response';
import { CourseService } from '../../../service/course.service';

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.css'],
})
export class HomeTeacherComponent implements OnInit {
  courses: CourseTeacherResponse[];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourseTeacher().subscribe((value) => {
      this.courses = value.result;
      console.log(this.courses);
    });

    // this.courses = [
    //   {
    //     title: 'Object Oriented Programming',
    //     startDate: '21 Jan 2021',
    //     endDate: '28 Jan 2021',
    //     description: `Belajar programming menggunakan bahasa C
    //   yang menjadi populer dikarenakan cepat dan
    //   mudah untuk dipelajari bagi para pemula.`,
    //   },
    //   {
    //     title: 'Object Oriented Programming',
    //     startDate: '21 Jan 2021',
    //     endDate: '28 Jan 2021',
    //     description: `Belajar programming menggunakan bahasa C
    //   yang menjadi populer dikarenakan cepat dan
    //   mudah untuk dipelajari bagi para pemula.`,
    //   },
    //   {
    //     title: 'Object Oriented Programming',
    //     startDate: '21 Jan 2021',
    //     endDate: '28 Jan 2021',
    //     description: `Belajar programming menggunakan bahasa C
    //   yang menjadi populer dikarenakan cepat dan
    //   mudah untuk dipelajari bagi para pemula.`,
    //   },
    //   {
    //     title: 'Object Oriented Programming',
    //     startDate: '21 Jan 2021',
    //     endDate: '28 Jan 2021',
    //     description: `Belajar programming menggunakan bahasa C
    //   yang menjadi populer dikarenakan cepat dan
    //   mudah untuk dipelajari bagi para pemula.`,
    //   },
    //   {
    //     title: 'Object Oriented Programming',
    //     startDate: '21 Jan 2021',
    //     endDate: '28 Jan 2021',
    //     description: `Belajar programming menggunakan bahasa C
    //   yang menjadi populer dikarenakan cepat dan
    //   mudah untuk dipelajari bagi para pemula.`,
    //   },
    //   {
    //     title: 'Object Oriented Programming',
    //     startDate: '21 Jan 2021',
    //     endDate: '28 Jan 2021',
    //     description: `Belajar programming menggunakan bahasa C
    //   yang menjadi populer dikarenakan cepat dan
    //   mudah untuk dipelajari bagi para pemula.`,
    //   },
    // ];
  }
}
