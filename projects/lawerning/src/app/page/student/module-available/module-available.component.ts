import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailCourseResponse } from '../../../model/detail-course-response';
import { CourseService } from '../../../service/course.service';
import { ModuleService } from '../../../service/module.service';
import { ToastService } from '../../../service/toast.service';
import { Location } from '@angular/common';
import { AuthService } from '../../../service/auth.service';
import { Route } from '@angular/compiler/src/core';
import { LoadingService } from '../../../service/loading.service';

@Component({
  selector: 'app-module-available',
  templateUrl: './module-available.component.html',
  styleUrls: ['./module-available.component.css'],
})
export class ModuleAvailableComponent implements OnInit {
  course: any;
  totalModule: number;
  modules: DetailCourseResponse;
  duration: number;
  day: number;

  courseId: string;
  isRegistered: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private courseService: CourseService,
    private moduleService: ModuleService,
    private toastService: ToastService,
    private location: Location,
    private auth: AuthService,
    private route: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.emitStatus(true);

    this.activeRoute.params.subscribe((value) => {
      this.courseId = value.courseId;
      this.isRegistered = value.isRegist;

      this.moduleService.getModule(value.courseId).subscribe(
        (data) => {
          this.modules = data.result;

          this.totalModule = this.modules.modules.length;

          let start = new Date(data.result.periodStart);
          let end = new Date(data.result.periodEnd);
          let diff = end.valueOf() - start.valueOf();

          let oneDay = 1000 * 60 * 60 * 24;
          let day = Math.floor(diff / oneDay);

          this.duration = Math.floor(day / 7);
          this.day = day % 7;
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.loadingService.emitStatus(false);
        }
      );
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
