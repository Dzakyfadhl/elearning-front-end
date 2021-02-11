import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailCourseResponse } from '../../model/detail-course-response';
import { ModuleService } from '../../service/module.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detail-course-page',
  templateUrl: './detail-course-page.component.html',
  styleUrls: ['./detail-course-page.component.css'],
})
export class DetailCoursePageComponent implements OnInit {
  totalModule: number;
  modules = new DetailCourseResponse();
  constructor(
    private activeRoute: ActivatedRoute,
    private moduleService: ModuleService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((value) => {
      console.log(value);

      this.moduleService.getModule(value.courseId).subscribe((data) => {
        this.modules = data.result;
        this.totalModule = this.modules.modules.length;

        console.log(this.modules);
      });
    });
  }

  prev() {
    this.location.back();
  }
}
