import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DetailCourseResponse } from '../../model/detail-course-response';
import { ModuleService } from '../../service/module.service';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-detail-course-page',
  templateUrl: './detail-course-page.component.html',
  styleUrls: ['./detail-course-page.component.css'],
})
export class DetailCoursePageComponent implements OnInit {
  totalModule: number;
  modules = new DetailCourseResponse();
  photo: string;
  constructor(
    private activeRoute: ActivatedRoute,
    private moduleService: ModuleService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((value) => {
      console.log(value);

      this.moduleService
        .getModuleAvailable(value.courseId)
        .subscribe((data) => {
          this.modules = data.result;
          this.totalModule = this.modules.modules.length;

          console.log(this.modules);
        });
    });
  }

  prev() {
    this.location.back();
    // let prevUrl: string;
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event: NavigationEnd) => {
    //     prevUrl = event.url;
    //     console.log(prevUrl);
    //   });
  }
}
