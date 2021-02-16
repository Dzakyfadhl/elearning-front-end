import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailCourseResponse } from '../../../model/detail-course-response';
import { CourseService } from '../../../service/course.service';
import { ModuleService } from '../../../service/module.service';
import { ToastService } from '../../../service/toast.service';
import { Location } from '@angular/common';
import { AuthService } from '../../../service/auth.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-module-available',
  templateUrl: './module-available.component.html',
  styleUrls: ['./module-available.component.css'],
})
export class ModuleAvailableComponent implements OnInit {
  course: any;
  totalModule: number;
  modules = new DetailCourseResponse();
  duration: number;

  courseId: string;
  isRegistered: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private courseService: CourseService,
    private moduleService: ModuleService,
    private toastService: ToastService,
    private location: Location,
    private auth: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((value) => {
      console.log(value);

      this.courseId = value.courseId;
      this.isRegistered = value.isRegist;

      this.moduleService.getModuleStudent(value.courseId).subscribe((data) => {
        console.log(data.result);

        this.modules = data.result;
        this.totalModule = this.modules.modules.length;

        let start = new Date(data.result.periodStart);
        let end = new Date(data.result.periodEnd);
        let diff = end.valueOf() - start.valueOf();

        let oneDay = 1000 * 60 * 60 * 24;
        let day = Math.floor(diff / oneDay);
        console.log('Day of year: ' + day);
        this.duration = Math.ceil(day / 7);
        console.log(this.duration, 'week');

        console.log(data.result);
      });
    });
  }

  registerCourse() {
    this.courseService.registerCourseStudent(this.courseId).subscribe(
      (value) => {
        this.toastService.emitSuccessMessage('Successfully', value.result);
        this.route.navigateByUrl('/student/home');
      },
      (error) => {
        this.toastService.emitHttpErrorMessage(error, 'Failure');
        console.log(error);
      }
    );
  }
}
