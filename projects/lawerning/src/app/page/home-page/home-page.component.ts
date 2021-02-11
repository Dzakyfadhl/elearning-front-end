import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Constants from '../../constants/constant';
import { CourseAllResponse } from '../../model/course-all-response';
import { ExamType } from '../../model/exam-dto/exam-type';
import { Gender } from '../../model/gender';
import { TeacherToModuleResponse } from '../../model/teacher-to-module-response';
import { CourseService } from '../../service/course.service';
import { PixabayService } from '../../service/pixabay.service';

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

  constructor(private courseService: CourseService, private route: Router) {
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
        let start = new Date(data.periodStart);
        let end = new Date(data.periodEnd);
        let diff = end.valueOf() - start.valueOf();

        let oneDay = 1000 * 60 * 60 * 24;
        let day = Math.floor(diff / oneDay);

        data.duration = Math.ceil(day / 7);

        if (data.teacher.photoId == null) {
          data.teacher.photoId = `assets/images/default.png`;
        } else {
          data.teacher.photoId = `${Constants.BASE_URL}/file/${data.teacher.photoId}`;
        }
      });
    });
  }

  viewModule(index: number) {
    let tempCourse: CourseAllResponse = this.courses[index];
    let response = new TeacherToModuleResponse();
    response.courseId = tempCourse.id;
    response.photoId = tempCourse.teacher.photoId;
    response.teacherName = `${tempCourse.teacher.firstName} ${tempCourse.teacher.lastName}, ${tempCourse.teacher.experience}.`;
    response.experience = tempCourse.teacher.experience;

    this.route.navigate([`/course/module`], { queryParams: response });
  }
}
