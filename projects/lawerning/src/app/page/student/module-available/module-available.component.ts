import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailCourseResponse } from '../../../model/detail-course-response';
import { ModuleService } from '../../../service/module.service';

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

  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private moduleService: ModuleService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((value) => {
      this.moduleService
        .getModuleAvailable(value.courseId)
        .subscribe((data) => {
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
}
