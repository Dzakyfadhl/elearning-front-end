import { Component, OnInit } from '@angular/core';
import { CourseTypeCreateRequest } from '../../../model/course-type-dto/course-type-create-request';
import { CourseTypeResponse } from '../../../model/course-type-dto/course-type-response';
import { AuthService } from '../../../service/auth.service';
import { CourseTypeService } from '../../../service/course-type.service';

@Component({
  selector: 'app-admin-course-type',
  templateUrl: './admin-course-type.component.html',
  styleUrls: ['./admin-course-type.component.css'],
})
export class AdminCourseTypeComponent implements OnInit {
  listCourseTypes: CourseTypeResponse[];

  codeVal: string;
  nameVal: string;

  displayModal: boolean;
  displayConfirmation: boolean;

  constructor(
    private auth: AuthService,
    private courseTypeService: CourseTypeService
  ) {}

  ngOnInit(): void {
    this.defineCourseType();
  }

  defineCourseType() {
    this.courseTypeService.getListCourseType().subscribe(
      (val) => {
        this.listCourseTypes = val.result;
      },
      (err) => {}
    );
  }

  createCrouseType() {
    let data = new CourseTypeCreateRequest();
    data.code = this.codeVal;
    data.name = this.nameVal;
    data.createdBy = this.auth.getLoginResponse().userId;

    this.courseTypeService.insertCourseType(data).subscribe(
      (val) => {
        console.log(val);
      },
      (err) => {}
    );
  }

  showModalEdit(i: number) {
    this.codeVal = this.listCourseTypes[i].code;
    this.nameVal = this.listCourseTypes[i].name;

    this.displayModal = true;
  }

  showModalCreate() {
    this.displayModal = true;
  }

  confirmDelete() {
    this.displayConfirmation = true;
  }
}
