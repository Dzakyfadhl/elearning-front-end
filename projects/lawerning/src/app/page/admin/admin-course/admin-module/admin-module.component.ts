import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleCreateRequest } from 'projects/lawerning/src/app/model/course-dto/module-create-request';
import { ScheduleCreateRequest } from 'projects/lawerning/src/app/model/course-dto/schedule-create-request';
import { DetailCourseResponse } from 'projects/lawerning/src/app/model/detail-course-response';
import { ModuleModel } from 'projects/lawerning/src/app/model/module-model';
import { ModuleUpdateRequest } from 'projects/lawerning/src/app/model/module/module-update-request';
import { AuthService } from 'projects/lawerning/src/app/service/auth.service';
import { CourseService } from 'projects/lawerning/src/app/service/course.service';
import { DetailModuleService } from 'projects/lawerning/src/app/service/detail-module.service';
import { ModuleService } from 'projects/lawerning/src/app/service/module.service';
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
    private detailModuleService: DetailModuleService,
    private moduleService: ModuleService
  ) {}

  courseId: string;
  submitted: boolean;
  isCreateModalVisible: boolean;
  isEditModalVisible: boolean;

  createRequest: ModuleCreateRequest;
  updateRequest: ModuleUpdateRequest;

  subjectCategoriesOptions: { id: string; name: string }[];
  selectedSubjectCategory: string;

  date: Date;
  startTime: Date;
  endTime: Date;
  datePipe = new DatePipe('en-US');

  detailCourse: DetailCourseResponse;

  ngOnInit(): void {
    this.initDetailCourse();
  }

  initDetailCourse() {
    this.route.params.subscribe((param) => {
      this.courseId = param.courseId;
      if (this.courseId) {
        this.getDetailCourse();
        this.getSubjectCategories();
      }
    });
  }

  async getDetailCourse() {
    const response = await this.courseService.getDetailCourse(this.courseId);
    if (response.code === 200) {
      this.detailCourse = response.result;
    }
  }

  openCreateModal() {
    this.isCreateModalVisible = true;
    this.submitted = false;
    this.createRequest = new ModuleCreateRequest();
    this.createRequest.schedule = new ScheduleCreateRequest();
  }

  getSubjectCategories() {
    this.subjectCategoryService.getSubjectCategory().subscribe((response) => {
      if (response.code === 200) {
        this.subjectCategoriesOptions = response.result.map((value) => {
          return {
            id: value.id,
            name: value.name,
          };
        });
      }
    });
  }

  async create() {
    this.setupRequest(this.createRequest);
    const response = await this.detailModuleService.insertModule([
      this.createRequest,
    ]);
    if (response.code === 201) {
      this.toastService.emitSuccessMessage('Submitted', response.result);
      this.afterSubmitted();
    }
  }

  edit(module: ModuleModel) {
    const moduleSubject = this.subjectCategoriesOptions.find(
      (subject) => module.subjectName === subject.name
    );
    this.updateRequest = {
      id: module.id,
      code: module.code,
      title: module.title,
      description: module.description,
      courseId: this.courseId,
      subjectId: moduleSubject.id,
      updatedBy: this.authService.getUserId(),
      schedule: {
        id: module.schedule.id,
        date: module.schedule.date,
        startTime: module.schedule.startTime,
        endTime: module.schedule.endTime,
      },
    };
    this.selectedSubjectCategory = moduleSubject.id;
    this.date = new Date(module.schedule.date);

    const startTimeArr = module.schedule.startTime.split(':');
    this.startTime = new Date(
      this.date.setHours(parseInt(startTimeArr[0]), parseInt(startTimeArr[1]))
    );

    const endTimeArr = module.schedule.endTime.split(':');
    this.endTime = new Date(
      this.date.setHours(parseInt(endTimeArr[0]), parseInt(endTimeArr[1]))
    );
    this.isEditModalVisible = true;
  }

  async update() {
    this.setupRequest(this.updateRequest);
    const response = await this.moduleService.updateModule(this.updateRequest);
    if (response.code === 200) {
      this.toastService.emitSuccessMessage('Updated', response.result);
      this.afterSubmitted();
    }
  }

  delete(module: ModuleModel) {}

  hideModal() {
    this.isCreateModalVisible = false;
    this.isEditModalVisible = false;
    this.submitted = false;
  }

  private setupRequest(request: any) {
    this.submitted = true;
    request.courseId = this.courseId;
    request.createdBy = this.authService.getUserId();
    request.subjectId = this.selectedSubjectCategory;
    const formattedDate = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    const formattedStartTime = this.datePipe.transform(
      this.startTime,
      'hh:mm a'
    );
    const formattedEndTime = this.datePipe.transform(this.endTime, 'hh:mm a');
    request.schedule.date = formattedDate;
    request.schedule.startTime = formattedStartTime;
    request.schedule.endTime = formattedEndTime;
    request.schedule.createdBy = this.authService.getUserId();
  }

  private afterSubmitted() {
    this.submitted = false;
    this.date = null;
    this.startTime = null;
    this.endTime = null;
    this.initDetailCourse();
    this.hideModal();
  }
}
