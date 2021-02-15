import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleCreateRequest } from 'projects/lawerning/src/app/model/course-dto/module-create-request';
import { ScheduleCreateRequest } from 'projects/lawerning/src/app/model/course-dto/schedule-create-request';
import { DetailCourseResponse } from 'projects/lawerning/src/app/model/detail-course-response';
import { ModuleModel } from 'projects/lawerning/src/app/model/module-model';
import { SubjectCategoryResponseDTO } from 'projects/lawerning/src/app/model/subject-category-dto/subject-category-response';
import { AuthService } from 'projects/lawerning/src/app/service/auth.service';
import { CourseService } from 'projects/lawerning/src/app/service/course.service';
import { DetailModuleService } from 'projects/lawerning/src/app/service/detail-module.service';
import { SubjectCategoryService } from 'projects/lawerning/src/app/service/subject-category.service';
import { ToastService } from 'projects/lawerning/src/app/service/toast.service';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.css'],
})
export class AdminModuleComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private toastService: ToastService,
    private courseService: CourseService,
    private authService: AuthService,
    private subjectCategoryService: SubjectCategoryService,
    private detailModuleService: DetailModuleService
  ) {}

  courseId: string;
  submitted: boolean;
  isCreateModalVisible: boolean;
  isEditModalVisible: boolean;

  createRequest: ModuleCreateRequest;

  subjectCategoriesOptions: any[];
  selectedSubjectCategory: string;

  date: Date;
  startTime: Date;
  endTime: Date;

  detailCourse: DetailCourseResponse;

  ngOnInit(): void {
    this.initDetailCourse();
  }

  initDetailCourse() {
    this.route.params.subscribe((param) => {
      this.courseId = param.courseId;
      if (this.courseId) {
        this.getDetailCourse();
      }
    });
  }

  async getDetailCourse() {
    try {
      const response = await this.courseService.getDetailCourse(this.courseId);
      if (response.code === 200) {
        this.detailCourse = response.result;
        console.log(this.detailCourse);
      }
    } catch (error) {
      this.toastService.emitHttpErrorMessage(
        error,
        'Failed to get detail course.'
      );
    }
  }

  openCreateModal() {
    this.isCreateModalVisible = true;
    this.submitted = false;
    this.createRequest = new ModuleCreateRequest();
    this.createRequest.schedule = new ScheduleCreateRequest();
    this.getSubjectCategories();
  }

  getSubjectCategories() {
    this.subjectCategoryService.getSubjectCategory().subscribe(
      (response) => {
        if (response.code === 200) {
          this.subjectCategoriesOptions = response.result.map((value) => {
            return {
              id: value.id,
              name: value.name,
            };
          });
        }
      },
      (error) => {
        this.toastService.emitHttpErrorMessage(error);
      }
    );
  }

  async create() {
    this.submitted = true;
    this.createRequest.courseId = this.courseId;
    this.createRequest.createdBy = this.authService.getUserId();
    this.createRequest.subjectId = this.selectedSubjectCategory;
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(
      this.date.toLocaleDateString(),
      'yyyy-MM-dd'
    );
    console.log(this.startTime.toTimeString());
    const formattedStartTime = datePipe.transform(this.startTime, 'hh:mm:ss a');
    const formattedEndTime = datePipe.transform(this.endTime, 'hh:mm:ss a');
    this.createRequest.schedule.date = formattedDate;
    this.createRequest.schedule.startTime = formattedStartTime;
    this.createRequest.schedule.endTime = formattedEndTime;
    this.createRequest.schedule.createdBy = this.authService.getUserId();

    try {
      const response = await this.detailModuleService.insertModule([
        this.createRequest,
      ]);
      if (response.code === 201) {
        this.toastService.emitSuccessMessage('Submitted', 'Module has been created successfully.')
        this.initDetailCourse();
        this.hideModal();
      } 
    } catch (error) {
      this.toastService.emitHttpErrorMessage(error);
    }
  }

  edit(module: ModuleModel) {}

  delete(module: ModuleModel) {}

  hideModal() {
    this.isCreateModalVisible = false;
    this.isEditModalVisible = false;
    this.submitted = false;
  }
}
