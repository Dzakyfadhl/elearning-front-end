import { Component, OnInit } from '@angular/core';
import Constants from '../../constants/constant';
import { CourseAllResponse } from '../../model/course-all-response';
import { ExamType } from '../../model/exam-dto/exam-type';
import { Gender } from '../../model/gender';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  courses: CourseAllResponse[];

  mentors = [
    {
      photoId: 'assets/images/female.jpg',
      teacherName: 'Ryan Rivaldo, S.Kom',
      experience: 'Backend Developer',
    },
    {
      photoId: 'assets/images/female.jpg',
      teacherName: 'Ryan Rivaldo, S.Kom',
      experience: 'Backend Developer',
    },
    {
      photoId: 'assets/images/female.jpg',
      teacherName: 'Ryan Rivaldo, S.Kom',
      experience: 'Backend Developer',
    },
    {
      photoId: 'assets/images/female.jpg',
      teacherName: 'Ryan Rivaldo, S.Kom',
      experience: 'Backend Developer',
    },
    {
      photoId: 'assets/images/female.jpg',
      teacherName: 'Ryan Rivaldo, S.Kom',
      experience: 'Backend Developer',
    },
  ];
  responsiveOptions;

  constructor(private courseService: CourseService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '568px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.courseService.getCourseAll().subscribe((result) => {
      this.courses = result.result;

      this.courses.forEach((data) => {
        if (data.teacher.photoId == null) {
          data.teacher.photoId = `assets/images/default.png`;
        } else {
          data.teacher.photoId = `${Constants.BASE_URL}/file/${data.teacher.photoId}`;
        }
      });
      for (let i = 0; i < this.courses.length; i++) {
        if (i % 2 == 0) {
          this.courses[i].banner = 'assets/images/ilustrator4.jpg';
        } else {
          this.courses[i].banner = 'assets/images/ilustrator3.png';
        }
      }

      console.log(this.courses.length);
    });
  }
}
