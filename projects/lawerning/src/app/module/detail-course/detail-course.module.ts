import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCourseRoutingModule } from './detail-course-routing.module';
import { DetailCoursePageComponent } from '@bootcamp-lawerning-page/detail-course-page/detail-course-page.component';

@NgModule({
  declarations: [DetailCoursePageComponent],
  imports: [CommonModule, DetailCourseRoutingModule],
})
export class DetailCourseModule {}
